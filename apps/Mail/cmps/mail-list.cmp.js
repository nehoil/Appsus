import mailPreview from './mail-preview.cmp.js';



export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <div class="search-bar">
                <div class="search-input-contianer">
                    <input type="text" v-model="filterBy" @input="emitFilter">
                </div>
                <div class="read-toggle" @click="readToggle">
                <i :class="readToggleClass"></i>
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
            isRead: true
        }
    },
    computed: {
        readToggleClass(){
            if (this.isRead) return 'far fa-envelope';
            return 'far fa-envelope-open'
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doSearch', JSON.parse(JSON.stringify(this.filterBy)));
        },
        readToggle(){
            this.isRead = !this.isRead
            this.$emit('doReadFilter', JSON.parse(JSON.stringify(this.isRead)));
        }
    },
    created() {
     
    },
    components: {
        mailPreview
    }
}