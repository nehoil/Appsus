import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section v-show="msg" class="user-msg">
                <div class="user-msg-txt">
                Note saved to mail, <router-link :to="msgLink">Click To See</router-link>
                
            </div>
                <div class="user-msg-close" @click="msg = false">
                <i class="fas fa-times"></i>
                </div>
        </section>
    `,
    data () {
        return {
            msg: false,
            msgLink: '/mail/'
        }
    },
    computed: {
        
    },
    created () {
        eventBus.$on('note-saved-to-mail', link => {
            this.msg = true;
            this.msgLink = link;
        })
        setInterval(() => {
            this.msg = null
        }, 6000);
    }
}


