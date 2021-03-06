import { mailService } from '../services/mail-service.js';
import mailActionMenu from '../cmps/mail-action-menu.cmp.js';
import mailAvatar from '../cmps/mail-avatar.cmp.js';


export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
        <li @click="mailClicked" :class="isRead" class="prv-padding">
            <div class="mail-prv-star prv-padding" @click.stop="starMail"><i :class="starClass" class="prv-padding"></i></div>
            <div class="mail-prv-sender prv-padding">{{ mail.senderName }}</div>
            <div class="mail-prv-main-content prv-padding">
                <span class="mail-prv-subject">{{ mail.subject }}</span> - 
                <span class="mail-prv-body">{{ mail.body }}</span>
            </div>
            <div class="mail-prv-date prv-padding">{{ getDate }}</div>
        </li>
        <transition name="fade">
            
            <div v-if="isShowExpndMail">
                <div class="exp-mail-prv">
                    <div class="exp-mail-header">
                        <div class="mail-expd-subject prv-padding">{{ mail.subject }}</div>
                        <div class="open-actions-mail-exp" @click="isShowMenu = !isShowMenu"><i class="fas fa-ellipsis-h"></i>
                        <mail-action-menu v-if="isShowMenu" :mail="mail" @menuClicked="this.isShowMenu = !this.isShowMenu" @unMarked="isShowExpndMail = false" />
                        <router-link :to="'/mail/' + mail.id" exact>
                        <i class="fas fa-expand-alt"></i>
                    </router-link>
                </div>
            </div>
            <div class="exp-mail-sub-header prv-padding">
                <mail-avatar :mail="mail" />
                <div class="mail-expd-sender-name">{{ mail.senderName }}</div>
                <div class="mail-expd-sender-email"><{{ mail.senderEmail }}></div>
            </div>
            <div class="mail-expd-body prv-padding">
                <pre>
                    {{ mail.body }}
                </pre>
            </div>
        </div>
    </div>
</transition>
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
        avatarTxt(){
            return this.mail.senderName.charAt(0).toUpperCase()
        },
        avatarStyle(){
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return 'background-color: ' + randomColor;
        },
        starClass(){
            if (this.mail.isStar) return 'filter-icon fas fa-star starred'
            return 'far fa-star'
        },
        isRead(){
            if (!this.mail.isRead) return 'unread';
            return 'read'
        },
        getDate() {
            var nowTime = new Date().getTime()
            var options;
            if  (Math.floor((nowTime - this.mail.sentAt)/60000) < 60*12 ){
                return new Date(this.mail.sentAt).toLocaleTimeString('en-IL', { hour: '2-digit', minute: '2-digit' })
            } else if(Math.floor((nowTime - this.mail.sentAt)/60000) < 60*24*30*12  ){
                options = { month: 'short', day: 'numeric' };
            } else {
                options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            }
            var date = new Date(this.mail.sentAt).toLocaleDateString('en-IL', options)
            return date
        }
    },
    methods: {
        toggleMenu(){
            this.isShowMenu = !this.isShowMenu
        },
        mailClicked(){
            this.isShowExpndMail=!this.isShowExpndMail
            mailService.unMarkMail(this.mail)
        },
        starMail(){
            mailService.starMail(this.mail)
        }
    },
    created() {
    },
    components: {
        mailActionMenu,
        mailAvatar
    }
}