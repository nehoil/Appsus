

export default {
    props: ['mails'],
    template: `
        <section class="mail-side-content">
                <ul>
                    <li><i class="filter-icon fas fa-inbox" aria-hidden="true"></i> Inbox</li>
                    <li><i class="filter-icon fas fa-star" aria-hidden="true"></i> Starred</li>
                    <li><i class="filter-icon fas fa-share-square" aria-hidden="true"></i> Sent</li>
                    <li><i class="far fa-envelope"></i> Drafts</li>
                    <li><i class="filter-icon far fa-pen" aria-hidden="true"></i> Notes</li>
                </ul>
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