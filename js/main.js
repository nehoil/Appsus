import { myRouter } from './routes.js'
import appHeader from '../cmps/app-header.cmp.js'
import userMsg from '../cmps/user-msg.cmp.js'
import noteToMail from '../cmps/note-to-mail-msg.cmp.js'
import mailToNotes from '../cmps/mail-to-note-msg.cmp.js'



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
            <note-to-mail />
            <mail-to-notes />
        </section>
    `,
    components: {
        appHeader,
        userMsg,
        noteToMail,
        mailToNotes
    }
}



const app = new Vue(options);
