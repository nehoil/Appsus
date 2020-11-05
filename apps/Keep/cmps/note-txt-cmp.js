import { keepService } from '../services/keep-service.js'

import noteOptions from '../cmps/note-option.cmp.js'

export default {
    name: 'note-text',
    props: ['info'],
    template: `
      <section  class="note-txt" :style="{ backgroundColor : bgColor }" @mouseover="showOpts" @mouseleave="hideOpts" >
          <h1 v-if="!info.title">Empty Note!</h1>
        <form>
        <textarea rows="10" cols="30"   ref="noteTxtInput" class="note-txt-input" @keydown.enter="updateTitle(info.id,
            $event)" :style="{ backgroundColor : bgColor }">{{info.title}}</textarea>
        </form>
        <note-options  v-if="isShowOpts" :id="info.id" @editNote="edit" @changeBgColor="changeBgColor"></note-options>
    </section>
    `,
    data() {
        return {
            val: '',
            isShowOpts: false,
            isEditable: false,
            bgColor: 'white',
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
            this.isEditable = true;
            this.val = val;
            this.$nextTick(() => this.$refs.noteTxtInput.focus());
        },
        updateTitle(noteID, ev) {
            keepService.updateTitle(noteID, ev.target.value);
            this.$nextTick(() => this.$refs.noteTxtInput.blur());
        },
        changeBgColor(color) {
            this.bgColor = color
        }
    },
    components: {
        noteOptions,
    }
}