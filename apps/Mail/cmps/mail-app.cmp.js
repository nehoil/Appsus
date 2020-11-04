import { mailService } from '../services/mail-service.js';
import mailList from './mail-list.cmp.js';


export default {
    template: `
        <section class="mail-app">
            <mail-list :mails="mails" />
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
        mailList
    }
}