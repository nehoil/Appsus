import mailPreview from './mail-preview.cmp.js';



export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <section class="no-mails-msg" v-if="mails.length < 1">No Emails, yet...</section>
            <section v-for="mail in mails">
                <ul>
                <mail-preview :mail="mail" :key="mail.id" />
                </ul>
            </section>
        </section>
    `,
    data() {
        return {
            currMails: ''        }
    },
    computed: {
    },
    methods: {
    },
    created() {
     
    },
    components: {
        mailPreview
    }
}