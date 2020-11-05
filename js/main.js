import { myRouter } from './routes.js'
import appHeader from '../cmps/app-header.cmp.js'
import userMsg from '../cmps/user-msg.cmp.js'



const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header/>
            <main>
                <router-view />
            </main>
            <user-msg />
        </section>
    `,
    components: {
        appHeader,
        userMsg
    }
}



const app = new Vue(options);
