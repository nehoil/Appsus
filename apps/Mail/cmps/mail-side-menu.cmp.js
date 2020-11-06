import { mailService } from '../services/mail-service.js';

export default {
    props: ['mails'],
    template: `
        <section class="mail-side-content-container">
            <div class="hamburger-side" @click="isShowMenu = true"><i class="fas fa-bars" aria-hidden="true"></i></div>
            <div class="mail-side-content" :class="menuClass">
                <div class="side-btn">
                    <button @click="emitCompose"> <i class="fas fa-plus"></i> Compose</button>
                </div>
                <ul>
                    <li @click="emitFilter('all')" class="flex jcsb">
                        <div class="side-txt"><i class="filter-icon fas fa-inbox" aria-hidden="true"></i> Inbox </div> 
                        <div class="side-num">{{ unReadMail }}</div>
                    </li>
                    <li @click="emitFilter('isStar')" class="flex jcsb">
                        <div class="side-txt"><i class="filter-icon fas fa-star" aria-hidden="true"></i> Starred </div> 
                        <div class="side-num">{{ starredMail }}</div>
                    </li>
                    <li @click="emitFilter('isSent')"><i class="filter-icon fas fa-share-square" aria-hidden="true"></i> Sent </li>
                    <li @click="emitFilter('isDraft')" class="flex jcsb">
                        <div class="side-txt"><i class="far fa-envelope"></i> Drafts </div> 
                        <div class="side-num">{{ draftMail }}</div>
                    </li>
                    <li @click="emitFilter('isNote')" class="flex jcsb">
                        <div class="side-txt"><i class="filter-icon far fa-pen" aria-hidden="true"></i> Notes </div> 
                        <div class="side-num">{{ notesMail }}</div>
                    </li>
                </ul>
                <div class="side-close" @click="isShowMenu = false">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            currMails: '',
            unReadMails: 0,
            draftMails: 0,
            starredMails: 0,
            notesMails: 0,
            isShowMenu: false,
            FilterBy: 'all'
        }
    },
    computed: {
        unReadMail() {
            mailService.getUnreadMails()
                .then(mails => {
                    this.unReadMails = mails.length
                })
            if (this.unReadMails > 0) return this.unReadMails
        },
        starredMail() {
            mailService.getStarredMails()
                .then(mails => {
                    this.starredMails = mails.length
                })
            if (this.starredMails > 0) return this.starredMails
        },
        notesMail() {
            mailService.getNotesMails()
                .then(mails => {
                    this.notesMails = mails.length
                })
            if (this.notesMails > 0) return this.notesMails
        },
        draftMail() {
            mailService.getDraftMails()
                .then(mails => {
                    this.draftMails = mails.length
                })
            if (this.draftMails > 0) return this.draftMails
        },
        menuClass(){
             if (this.isShowMenu) return 'show-side-bar'
        }
    },
    methods: {
        emitFilter(filter) {
            this.$emit('doFilter', filter)
        },
        emitCompose() {
            this.$emit('doCompose')
        }
    },
}