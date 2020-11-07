import { mailService } from '../services/mail-service.js';
import mailList from './mail-list.cmp.js';
import mailSideMenu from './mail-side-menu.cmp.js';
import mailCompose from './mail-compose.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';



export default {
    name: 'mailApp',
    template: `
        <section class="mail-app">
                    <mail-side-menu :mails="mails" @doFilter="setFilter" @doCompose="showCompose"/>
                    <mail-list v-if="mails" @doSearch="setSearchTerm" @doReadFilter="setReadFilter":mails="mailsToShow" />
                    <mail-compose />
        </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: {
                type: 'all',
                term: null,
                read: null
            },
            newMail: mailService.getEmptyMail()
        }
    },
    computed: {
        mailsToShow() {
            var filteredMails = [];
            if (this.filterBy.type === 'all' && !this.filterBy.term && this.filterBy.read === null) return this.mails.filter(mail => !mail.isSent);
            if (this.filterBy.term) {
                var txt = this.filterBy.term.toUpperCase()
                filteredMails = this.mails.filter(mail => mail.subject.toUpperCase().includes(txt))
            } else {
                filteredMails = this.mails
            }
            if (this.filterBy.type !== 'all') filteredMails = filteredMails.filter(mail => mail[this.filterBy.type])
            if (this.filterBy.read !== null) filteredMails = filteredMails.filter(mail => mail.isRead === this.filterBy.read)
            return filteredMails;
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy.type = filter;
        },
        setSearchTerm(searchTerm) {
            this.filterBy.term = searchTerm;
        },
        setReadFilter(isRead) {
            this.filterBy.read = isRead;
        },
        showCompose() {
            eventBus.$emit('showCompose')
        },
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
    },
    components: {
        mailList,
        mailSideMenu,
        mailCompose
    },
}