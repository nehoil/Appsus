
export default {
    template: `
        <section class="mail-details">
            <div class="mail-app-main-content-container">
                <div class="mail-side-menu">
                    <mail-side-menu :mails="mails" />
                </div>
                <div class="mail-details-content">
            <div class="exp-mail-prv">
                <div class="exp-mail-header">
                    <div class="mail-expd-subject">{{ mail.subject }}</div>
                    <div class="open-actions-mail-exp">
                    <i class="fas fa-ellipsis-h"></i><i class="fas fa-expand-alt"></i>
                    </div>
                    </div>
                        <div class="exp-mail-sub-header">
                        <div class="mail-expd-sender-name">{{ mail.senderName }}</div>
                        <div class="mail-expd-sender-email"><{{ mail.senderEmail }}></div>
                    </div>
                    <div class="mail-expd-body">{{ mail.body }}</div>
                </div>
            </div>
        </section>
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
        const id = this.$route.params.mailId;
        bookService.getbyId(id)
            .then(book => this.book = book)
        bookService.getIdxById(id)
            .then(idx => this.bookIdx = idx)
    },
    components: {

    }
}