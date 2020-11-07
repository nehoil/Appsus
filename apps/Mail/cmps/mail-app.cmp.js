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
                read: null            },
            newMail: mailService.getEmptyMail()
        }
    },
    computed: {
        mailsToShow() {
            var filteredMails = [];
            if (this.filterBy.type === 'all' && !this.filterBy.term) return this.mails.filter(mail => !mail.isSent);
            if (this.filterBy.type === 'all' && this.filterBy.term) filteredMails = this.mails.filter(mail => !mail.isSent);
            if (this.filterBy.type !== 'all') filteredMails = this.mails.filter(mail => mail[this.filterBy.type])
            if (!this.filterBy.term) return filteredMails;
            var txt = this.filterBy.term.toUpperCase()
            return filteredMails.filter(mail => mail.subject.toUpperCase().includes(txt))
        }
        // carsToShow() {
        //     if (!this.filterBy) return this.cars;
        //     const txt = this.filterBy.byVendor.toLowerCase();
        //     return this.cars.filter(car => car.vendor.toLowerCase().includes(txt) &&
        //         (
        //             car.isActive && this.filterBy.isActive ||
        //             !car.isActive && !this.filterBy.isActive
        //         )
        //     )
        // }
        // carsToShow() {
        //     if (!this.filterBy) return this.cars;
        //     const txt = this.filterBy.byVendor.toLowerCase();
        //     return this.cars.filter(car => car.vendor.toLowerCase().includes(txt) &&
        //         (
        //             car.isActive && this.filterBy.isActive ||
        //             !car.isActive && !this.filterBy.isActive
        //         )
        //     )
        // }
    },
    methods: {
        setFilter(filter) {
            this.filterBy.type = filter;
        },
        setSearchTerm(searchTerm) {
            this.filterBy.term = searchTerm;
        },
        setReadFilter(isRead) {
            // this.filterBy.term = isRead;
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