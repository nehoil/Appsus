
export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
        <li>
            <div class="mail-prv-star"><i class="far fa-star"></i></div>
            <div class="mail-prv-sender">{{ mail.sender }}</div>
            <div class="mail-prv-subject">{{ mail.subject }}</div>
            <div class="mail-prv-body">{{ mail.body }}</div>
            <div class="mail-prv-status">{{ mail.isRead }}</div>
            <div class="mail-prv-date">{{ getDate }}</div>
        </li>
        </section>
    `,
    data() {
        return {
            currMails: null
        }
    },
    computed: {
        getDate() {
            var nowTime = new Date().getTime()
            var options;
            if  (Math.floor((nowTime - this.mail.sentAt)/60000) < 60*24 ){
                options = { month: 'long', day: 'numeric' };
            } else {
                options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            }
            var date = new Date(this.mail.sentAt).toLocaleDateString('en-US', options)
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