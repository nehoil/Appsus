import { eventBus } from '../../services/event-bus-service.js'

export default {
    template: `
      <transition name="fade">
        <section v-show="msg" class="user-msg">
            <button @click="msg=null">x</button>
        <p>{{ msg }}</p>
        </section>
    </transition>
    `,
    data () {
        return {
            msg: null
        }
    },
    created () {
        eventBus.$on('show-msg', msg => this.msg = msg)
        setInterval(() => {
            this.msg = null
        }, 4000);
    }
}