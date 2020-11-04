import { mailService } from '../services/mail-service.js';
import mailList from './mail-list.cmp.js';
import mailSideMenu from './mail-side-menu.cmp.js';


export default {
    template: `
        <section class="mail-app">
            <div class="mail-app-main-content-container">
                <div class="mail-side-menu">
                    <mail-side-menu :mails="mails" />
                </div>
                <div class="mail-list-container">
                    <mail-list :mails="mails" />
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            mails: '',
        }
    },
    computed: {
    },
    methods: {
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