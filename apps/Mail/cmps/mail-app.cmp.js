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
                    New Message
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
                    <div class="compose-remove">
                        <i class="fas fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
                </form>
            </div>
            <div class="mail-app-main-content-container">
                <div class="mail-side-menu">
                    <mail-side-menu :mails="mails" @doFilter="setFilter" @doCompose="showCompose"/>
                </div>
                <div class="mail-list-container">
                    <mail-list :mails="mailsToShow" />
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            mails: '',
            isShowCompose: false,
            filterBy: null,
            newMail: { sentEmail: null, isNote: false, isDraft: false, isStar: false, senderEmail: 'myname@gmail.com', senderName: 'me', subject: '', body: '', isRead: false, sentAt: null }
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            return this.mails.filter(mail => mail[this.filterBy])
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = filter;
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