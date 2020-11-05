import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section v-show="msg" class="user-msg">
                <div class="user-msg-txt">
                    {{ msg }}
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
        eventBus.$on('show-msg', msg => {
            this.msg = msg
        })
        setInterval(() => {
            this.msg = null
        }, 6000);
    }
}