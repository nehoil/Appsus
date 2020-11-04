

export default {
    props: ['mails'],
    template: `
        <section class="mail-side-content">
                <ul>
                    <li>Inbox</li>
                    <li>Starred</li>
                    <li>Sent</li>
                    <li>Drafts</li>
                    <li>Notes</li>
                </ul>
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
        
    }
}