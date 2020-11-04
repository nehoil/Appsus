import mailPreview from './mail-preview.cmp.js';


export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <section v-for="mail in mails">
                <mail-preview :mail="mail" />
            </section>
        </section>
    `,
    data() {
        return {
            currMails: '',
        }
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