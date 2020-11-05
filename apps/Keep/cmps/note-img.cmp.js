import { keepService } from '../services/keep-service.js'

import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-img',
    props: ['info'],
    template: `
      <section class="note-img" @mouseover="showOpts" @mouseleave="hideOpts">
        <p contentEditable="true" class="note-img-title" @keydown.enter="saveTitle(info.id,$event)" @blur="saveTitle(info.id,$event)" ref="imgTitleInput">{{info.title}}</p>
        <img :src=info.url alt="">
        <note-options v-show="isShowOpts" :id="info.id" @editNote="edit"></note-options>
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
        edit(val) {
            this.val = val;
            this.val += ' ';
            this.$nextTick(() => this.$refs.imgTitleInput.focus());
        },
        updateTitle(noteID) {
            keepService.updateTitle(noteID, this.val);
            this.isEditable = false
        },
        saveTitle(noteId, ev) {
            this.$refs.imgTitleInput.blur();
            var val = ev.target.innerText
            keepService.saveTitle(noteId, val)

        },
    },
    components: {
        noteOptions,
    }
}