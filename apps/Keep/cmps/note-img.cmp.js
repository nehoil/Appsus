import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-img',
    props: ['info'],
    template: `
      <section class="note-img" @mouseover="showOpts" @mouseleave="hideOpts">
        <img :src=info.url alt="">
        <div></div>
        <note-options v-show="isShowOpts" :id="info.id"></note-options>
             </section>
    `,
    data() {
        return {
            val: '',
            isShowOpts: false

        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true;

        },
        hideOpts() {
            this.isShowOpts = false;

        }
    },
    components: {
        noteOptions,
    }
}