import noteOptions from '../cmps/note-option.cmp.js'

export default {
    name: 'note-text',
    props: ['info'],
    template: `
      <section class="note-txt" @mouseover="showOpts" @mouseleave="hideOpts">
          <h1>This is Text Note!</h1>
        <p>{{info.txt}}</p>
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