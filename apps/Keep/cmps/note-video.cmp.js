import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-video',
    props: ['info'],
    template: `
      <section class="note-video" @mouseover="showOpts" @mouseleave="hideOpts">
      <iframe width="320" height="215" :src="info.url"></iframe>
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