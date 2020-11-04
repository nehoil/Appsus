import { mailService } from '../services/mail-service.js';


export default {
    name: 'mailActionMenu',
    props: ['mail'],
    template: `
        <section class="mail-action-menu box-shadow" v-if="isShowMenu">
                <ul>
                    <li @click="reply"><i class="menu-icon fas fa-reply"></i> Reply</li>
                    <li @click="unMarkMail"><i class="menu-icon fas fa-envelope"></i> Mark as unread</li>
                    <li @click="sendToNotes"><i class="menu-icon far fa-pen"></i> Send to notes</li>
                    <li @click="removeMail"><i class="menu-icon fas fa-trash"></i> Removed</li>
                    <li @click="starMail"><i class="menu-icon fas fa-star"></i> Starred</li>
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
            this.$router.push('/mail')
        },
        unMarkMail(){
            this.$emit('menuClicked')
            mailService.markMail(this.mail)
        },
        starMail(){
            mailService.starMail(this.mail)
            this.$emit('menuClicked')
        },
        reply(){
            this.$emit('menuClicked')
        },
        sendToNotes(){
            this.$emit('menuClicked')
        },
    },
}