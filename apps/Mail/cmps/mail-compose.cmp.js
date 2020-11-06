import mailPreview from './mail-preview.cmp.js';



export default {
    props: ['mail'],
    template: `
        <section class="mail-avatar">
        <div class="mail-expd-sender-icon" :style="avatarStyle">{{ avatarTxt }}</div>
        </section>
    `,
    data() {
        return {
            currMails: ''        }
    },
    computed: {
        avatarTxt(){
            return this.mail.senderName.charAt(0).toUpperCase()
        },
        avatarStyle(){
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return 'background-color: ' + randomColor;
        }
    },
}