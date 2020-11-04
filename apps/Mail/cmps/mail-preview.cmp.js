
export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" @click="isShowExpndMail=!isShowExpndMail">
        <li>
            <div class="mail-prv-star"><i class="far fa-star"></i></div>
            <div class="mail-prv-sender">{{ mail.senderName }}</div>
            <div class="mail-prv-subject">{{ mail.subject }}</div>
            <div class="mail-prv-body">{{ mail.body }}</div>
            <div class="mail-prv-status">{{ mail.isRead }}</div>
            <div class="mail-prv-date">{{ getDate }}</div>
        </li>
        <div v-if="isShowExpndMail">
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
        </div>
        </section>
    `,
    data() {
        return {
            currMails: null,
            isShowExpndMail: false,
        }
    },
    computed: {
        getDate() {
            var nowTime = new Date().getTime()
            var options;
            if  (Math.floor((nowTime - this.mail.sentAt)/60000) < 59*24 ){
                return new Date(this.mail.sentAt).toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit' })
            } else if(Math.floor((nowTime - this.mail.sentAt)/60000) < 60*24 ){
                options = { month: 'long', day: 'numeric' };
            } else {
                options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            }
            var date = new Date(this.mail.sentAt).toLocaleDateString('en-IL', options)
            return date
        }
    },
    methods: {
    },
    created() {
        var nowTime = Math.floor(Date.now() / 1000);
    },
    components: {

    }
}