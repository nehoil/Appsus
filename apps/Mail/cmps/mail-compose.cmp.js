import { mailService } from '../services/mail-service.js';
import { mailService } from '../services/mail-service.js';


export default {
    template: `
        <section class="book-app">
            <mail-list :mails="mails" />
            {{mails}}
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

    }
}