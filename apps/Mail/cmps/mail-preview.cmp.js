import { mailService } from '../services/mail-service.js';
import mailActionMenu from '../cmps/mail-action-menu.cmp.js';


export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
        <li @click="mailClicked" :class="{ bold: !mail.isRead }">
            <div class="mail-prv-star"><i class="far fa-star"></i></div>
            <div class="mail-prv-sender">{{ mail.senderName }}</div>
            <div class="mail-prv-subject">{{ mail.subject }}</div>
            <div class="mail-prv-body">{{ mail.body }}</div>
            <div class="mail-prv-date">{{ getDate }}</div>
        </li>
        <div v-if="isShowExpndMail">
            <div class="exp-mail-prv">
                <div class="exp-mail-header">
                    <div class="mail-expd-subject">{{ mail.subject }}</div>
                    <div class="open-actions-mail-exp" @click="isShowMenu = !isShowMenu"><i class="fas fa-ellipsis-h"></i>
                        <mail-action-menu v-if="isShowMenu" :mail="mail" @menuClicked="toggleMenu" />
                    <router-link :to="'/mail/' + mail.id" exact>
                    <i class="fas fa-expand-alt"></i>
                    </router-link>
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
            isShowExpndMail: false,
            isShowMenu: false
        }
    },
    computed: {
        isRead(){
            if (!this.mail.isRead) return 'bold';
        },
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
        toggleMenu(){
            console.log('works');
            this.isShowMenu = !this.isShowMenu
        },
        mailClicked(){
            this.isShowExpndMail=!this.isShowExpndMail
            mailService.unMarkMail(this.mail)
        },
    },
    created() {
    },
    components: {
        mailActionMenu
    }
}