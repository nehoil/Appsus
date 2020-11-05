import { keepService } from '../services/keep-service.js'
import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-video',
    props: ['info'],
    template: `
      <section class="note-video" @mouseover="showOpts" @mouseleave="hideOpts">
      <p class="note-vid-title" contentEditable="true" @keydown.enter="saveTitle(info.id,$event)"  @blur="saveTitle(info.id,$event)" ref="vidTitleInput" placeholder="text">{{info.title}}</p>
      <iframe width="320" height="215" :src="info.url"></iframe>
      <note-options v-show="isShowOpts" :id="info.id" @editNote="edit($event)"></note-options>
    </section>
    `,
    data() {
        return {
            val: null,
            isShowOpts: false,
            isEditable: false
        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true;

        },
        hideOpts() {
            this.isShowOpts = false;

        },
        saveTitle(noteId, ev) {
            this.$refs.vidTitleInput.blur();
            var val = ev.target.innerText
            console.log(noteId, val);
            keepService.saveTitle(noteId, val)
        },
        edit(val) {
            console.log(val);
            this.isEditable = true
            this.val = val;
            this.$nextTick(() => this.$refs.vidTitleInput.focus());
        },
        updateTitle(noteID) {
            keepService.updateTitle(noteID, this.val);
            this.isEditable = false
        }
    },
    components: {
        noteOptions,
    }
}