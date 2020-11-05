import { mailService } from '../services/mail-service.js';

export default {
    props: ['mails'],
    template: `
        <section class="mail-side-content">
            <button @click="emitCompose">Compose</button>
                <ul>
                    <li @click="emitFilter(null)"><i class="filter-icon fas fa-inbox" aria-hidden="true"></i> Inbox {{ unReadMail }}</li>
                    <li @click="emitFilter('isStar')"    ><i class="filter-icon fas fa-star" aria-hidden="true"></i> Starred {{ starredMail }}</li>
                    <li @click="emitFilter('sent')"><i class="filter-icon fas fa-share-square" aria-hidden="true"></i> Sent </li>
                    <li @click="emitFilter('isDraft')" ><i class="far fa-envelope"></i> Drafts {{ draftMail }}</li>
                    <li @click="emitFilter('isNote')" ><i class="filter-icon far fa-pen" aria-hidden="true"></i> Notes {{ notesMail }}</li>
                </ul>
        </section>
    `,
    data() {
        return {
            currMails: '',
            unReadMails: 0,
            draftMails: 0,
            starredMails: 0,
            notesMails: 0,
            FilterBy: null,
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