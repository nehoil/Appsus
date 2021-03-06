import { mailService } from '../services/mail-service.js';
import mailSideMenu from '../cmps/mail-side-menu.cmp.js';
import mailActionMenu from '../cmps/mail-action-menu.cmp.js';
import mailAvatar from '../cmps/mail-avatar.cmp.js';
import mailCompose from '../cmps/mail-compose.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';



export default {
    name: 'mailDetails',
    template: `
        <section class="mail-details">
            <div class="mail-app-main-content-container">
                <div class="mail-side-menu">
                    <mail-side-menu :mails="mail" @doFilter="setFilter"/>
                </div>
                <div class="mail-details-content">
                <div class="mail-details-header">
                    <div class="mail-expd-subject"><span>{{ mail.subject }}</span></div>
                        <div class="open-actions-mail-exp" @click="isShowMenu = !isShowMenu"><i class="fas fa-ellipsis-v"></i></div>
                        <mail-action-menu v-show="isShowMenu" :mail="mail" @menuClicked="isShowMenu = !isShowMenu" />
                    </div>
                    <div class="exp-mail-sub-header">
                        <mail-avatar :mail="mail" v-if="mail" />
                        <div class="side-ava">
                         <div class="sender-name-email">
                             <div class="mail-expd-sender-name">{{ mail.senderName }}</div>
                             <div class="mail-expd-sender-email"><{{ mail.senderEmail }}></div>
                            </div>
                            <div class="mail-sub-to">
                                to me
                            </div>
                        </div>
                    </div>
                    <div class="mail-expd-body">                        
                        <pre>
                        {{ mail.body }}
                        </pre>
                    </div>
                    <div class="back-btn">
                <router-link to="/mail">
                <i class="fas fa-arrow-left"></i>
                </router-link>
            </div>
                </div>
                
            </div>
            <mail-compose />

        </section>
    `,
    data() {
        return {
            mail: '',
            isShowMenu: false
        }
    },
    computed: {
    },
    methods: {
        setFilter(filter){
            this.$router.push('/mail')
        }
    },
    created() {
        const id = this.$route.params.mailId;
        mailService.getById(id)
            .then(mail => this.mail = mail)
    },
    components: {
        mailSideMenu,
        mailActionMenu,
        mailAvatar,
        mailCompose
    }
}