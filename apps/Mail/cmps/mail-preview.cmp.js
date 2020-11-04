
export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
        <li>The mail: {{ mail }}</li>
        </section>
    `,
    data() {
        return {
            currMails: '',
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
     
    },
    components: {
        
    }
}