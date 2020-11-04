import appHeader from './cmps/book/app-header.cmp.js'
import userMsg from './cmps/book/user-msg.cmp.js'
import { myRouter } from './routes.js'



const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header/>
            <main>
                <router-view />
            </main>
        <user-msg/>
        </section>
    `,
    components: {
        appHeader,
        userMsg
    }
}



const app = new Vue(options);
