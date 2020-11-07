import mailPreview from './mail-preview.cmp.js';



export default {
    props: ['mails'],
    template: `
        <section class="mail-list">
            <div class="search-bar">
                <input type="text" v-model="filterBy" @input="emitFilter">
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
            filterBy: null
        }
    },
    computed: {
    },
    methods: {
        emitFilter() {
            this.$emit('doSearch', JSON.parse(JSON.stringify(this.filterBy)));
        },
    },
    created() {
     
    },
    components: {
        mailPreview
    }
}