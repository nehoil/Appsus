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
                    <div class="compose-btn" @click="showCompose" v-if="showCmpsBtn">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48Zz48cG9seWdvbiBwb2ludHM9IjM2OCwyMDcuOSAzNjgsNDAwIDk2LDQwMCA5NiwxNDQgMzA0LjEsMTQ0IDMyMC4xLDEyOCA4MCwxMjggODAsNDE2IDM4NCw0MTYgMzg0LDE5MS45ICAgIi8+PC9nPjxnPjxnPjxwb2x5bGluZSBwb2ludHM9IjIyNy45LDI3NC40IDM5OS4yLDEwMy4xIDM4Ny45LDkxLjcgMjA4LDI3MS43IDIwOCwzMDQgMjQwLjIsMzA0IDQyMC4zLDEyNCA0MDguOSwxMTIuNyAyMzcuNiwyODQuMSAgICAiLz48L2c+PHBhdGggZD0iTTQ0NC4yLDgwLjNsLTEyLjUtMTIuNWMtMi43LTIuNC02LjItMy44LTEwLTMuOGMtMy44LDAtNy4zLDEuNS05LjksMy44TDM5OS43LDgwbDAuMSwwLjFMNDExLDkxLjRsMjEsMjFsMTIuMi0xMi4yICAgIGMyLjQtMi42LDMuOC02LjEsMy44LTkuOUM0NDguMSw4Ni41LDQ0Ni42LDgzLDQ0NC4yLDgwLjN6Ii8+PC9nPjwvZz48L3N2Zz4=" alt="">
                    </div>
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
            showCmpsBtn: true,
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
        composeBtnClick(){
            this.showCompose();
        }
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