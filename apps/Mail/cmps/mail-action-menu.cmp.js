import { mailService } from '../services/mail-service.js';
import { keepService } from '../../Keep/services/keep-service.js'
import {eventBus} from '../../../services/event-bus-service.js';


export default {
    name: 'mailActionMenu',
    props: ['mail'],
    template: `
        <section class="mail-action-menu box-shadow" v-if="isShowMenu">
                <ul>
                    <li @click="reply"><div class="action-icon"><i class="menu-icon fas fa-reply"></i></div><div class="action-txt"> Reply</div></li>
                    <li @click="unMarkMail"><div class="action-icon"><i class="menu-icon fas fa-envelope"></i></div><div class="action-txt"> Mark as unread</div></li>
                    <li @click="sendToNotes"><div class="action-icon"><i class="menu-icon far fa-pen"></i></div><div class="action-txt"> Send to notes</div></li>
                    <li @click="removeMail"><div class="action-icon"><i class="menu-icon fas fa-trash"></i></div><div class="action-txt"> Removed</div></li>
                    <li @click="starMail"><div class="action-icon"><i class="menu-icon fas fa-star"></i></div><div class="action-txt"> Starred</div></li>
                </ul>
            </section>
        </section>
    `,
    data() {
        return {
            isShowMenu: true
        }
    },
    methods: {
        removeMail(){
            mailService.removeMail(this.mail)
            this.$router.push('/mail');
            eventBus.$emit('show-msg', `Mail removed successfully`)
        },
        unMarkMail(){
            this.$emit('menuClicked')
            this.$emit('unMarked')
            mailService.markMail(this.mail)
            eventBus.$emit('show-msg', `Mail unmarked successfully`)
        },
        starMail(){
            mailService.starMail(this.mail)
            this.$emit('menuClicked')
            eventBus.$emit('show-msg', `Mail starred successfully`)
        },
        reply(){
            eventBus.$emit('doReply', this.mail)
            this.$emit('menuClicked')
        },
        sendToNotes(){
            keepService.addMailToNotes(this.mail)
            this.$emit('menuClicked')
            eventBus.$emit('mail-saved-to-notes', 'true')
        },
    }
}