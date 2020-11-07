import mailPreview from './mail-preview.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';



export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <div class="search-bar">
            <div class="hamburger-side" @click="hamburgerToggle"><i class="fas fa-bars" aria-hidden="true"></i></div>

                <div class="search-input-contianer">
                    <input type="text" v-model="filterBy" @input="emitFilter">
                </div>
                <div class="read-toggle" @click="readToggle">
                <span class="read-icon" v-html="readIcon"></span>
                </div>
            </div>
            <section class="no-mails-msg" v-if="mails.length < 1">No Emails, yet...</section>
            <section v-for="mail in mails">
                <ul>
                <mail-preview :mail="mail" :key="mail.id" />
                </ul>
            </section>
        </section>
    `,
    data() {
        return {
            filterBy: null,
            isRead: null,
            states: [false,true,null]
        }
    },
    computed: {
        readIcon(){
            if (this.isRead === null) return `<i class="far fa-envelope"></i>`;
            if (!this.isRead) return `<i class="far fa-envelope-open"></i>`;
            if (this.isRead) return `<p>All</p>`;
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doSearch', JSON.parse(JSON.stringify(this.filterBy)));
        },
        readToggle(){
            this.isRead = this.states.shift();
            this.states.push(this.isRead);
            this.$emit('doReadFilter', this.isRead);
        },
        hamburgerToggle(){
            eventBus.$emit('hamburger-clicked')
        }
    },
    created() {
     
    },
    components: {
        mailPreview
    }
}