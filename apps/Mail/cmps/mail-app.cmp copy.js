import { mailService } from '../services/mail-service.js';
import mailList from './mail-list.cmp.js';
import mailSideMenu from './mail-side-menu.cmp.js';


export default {
    name: 'mailApp',
    template: `
        <section class="mail-app">
            <div class="compose-container compose-container-w" v-if="isShowCompose">
                <form @submit.prevent="addMail">
                <div class="compose-title">
                <div class="title-txt">
                        New Message
                    </div>
                <div class="compose-remove-header">
                <i @click="closeCompose" class="fas fa-times"></i>
                    </div>
                </div>
                <div class="compose-recipients">
                    <input v-model="newMail.sentEmail" type="text" placeholder="To"  ref="toInput" required>
                </div>
                <div class="compose-subject">
                    <input v-model="newMail.subject" type="text" placeholder="Subject" required>
                </div>
                <div class="compose-cc">
                    <input type="text" placeholder="Cc">
                </div>
                <div class="compose-bcc">
                    <input type="text" placeholder="Bcc">
                </div>
                <div class="compose-body">
                    <textarea v-model="newMail.body" cols="30" rows="10" placeholder="Your Message" required></textarea>
                </div>
                <div class="compose-footer">
                    <div class="compose-send">
                        <button>Send</button>
                    </div>
                    <div class="compose-remove-footer">
                        <i @click="closeCompose" class="fas fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
                </form>
            </div>
                    <mail-side-menu :mails="mails" @doFilter="setFilter" @doCompose="showCompose"/>
                    <mail-list v-if="mails" @doSearch="setSearchTerm" :mails="mailsToShow" />
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            isShowCompose: false,
            filterBy: {
                type: 'all',
                term: null
            },
            newMail: mailService.getEmptyMail()
        }
    },
    computed: {
        mailsToShow() {
            var filteredMails = [];
            if (this.filterBy.type === 'all' && !this.filterBy.term)  return this.mails.filter(mail => !mail.isSent);
            if (this.filterBy.type === 'all' && this.filterBy.term)  filteredMails = this.mails.filter(mail => !mail.isSent);
            if (this.filterBy.type !== 'all') filteredMails = this.mails.filter(mail => mail[this.filterBy.type])
            if (!this.filterBy.term) return filteredMails;
            var txt = this.filterBy.term.toUpperCase()
           return filteredMails.filter(mail => mail.subject.toUpperCase().includes(txt))
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy.type = filter;
        },
        setSearchTerm(searchTerm) {
            this.filterBy.term = searchTerm;
        },
        addMail() {
            this.isShowCompose = false;
            this.newMail.sentAt = new Date().getTime();
            const mailDeepCopy = JSON.parse(JSON.stringify(this.newMail));
            mailService.addMail(mailDeepCopy);
            this.newMail = mailService.getEmptyMail()
        },
        showCompose() {
            this.isShowCompose = true;
            setTimeout(() => this.$refs.toInput.focus(), 100)
        },
        closeCompose(){
            this.isShowCompose = false;
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
    },
    components: {
        mailList,
        mailSideMenu
    }
}