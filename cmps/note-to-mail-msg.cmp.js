import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section v-show="msg" class="user-msg">
                <div class="user-msg-txt">
                Mail saved to notes, <router-link to="/keep">Click To See</router-link>
                </div>
                <div class="user-msg-close" @click="msg = false">
                <i class="fas fa-times"></i>
                </div>
        </section>
    `,
    data () {
        return {
            msg: false
        }
    },
    created () {
        eventBus.$on('mail-saved-to-notes', msg => {
            this.msg = true;
        })
        setInterval(() => {
            this.msg = null
        }, 6000);
    }
}


