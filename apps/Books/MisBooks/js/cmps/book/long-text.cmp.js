
export default {
    props: ['txt'],
    template: `
        <section class="long-text">
                   {{ textToShow }}
                <a v-if="txt.length > 100" @click="toggleRead()" class="btn-toggle-txt">
                    {{ buttonToggleTxt }}
                </a>
        </section>
    `,
    data () {
        return {
            desc: null,
            showLong: false,
        }
    },
    methods : {
        toggleRead(){
            this.showLong = !this.showLong
        }
    },
    computed: {
        buttonToggleTxt(){
            if (this.showLong) return 'Read Less'
            return 'Read More'
        },
        textToShow(){
            if (this.showLong || this.desc.length < 100) return this.desc
            return this.desc.substring(0, 100)+ '...';
        }
    },
    created(){
        this.desc = this.txt;
    }
}