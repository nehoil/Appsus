import { keepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service.js';

import noteOptions from '../cmps/note-option.cmp.js'

export default {
    name: 'note-text',
    props: ['info', 'note'],
    template: `
      <section  class="note-txt note-card" :style="{ backgroundColor : bgColor }" @mouseover="showOpts" @mouseleave="hideOpts" >
          <div class="pinIcon" v-show="note.isPinned" >
              <i class="fas fa-thumbtack" ></i>
          </div>
          <h1 v-if="!info.title">Empty Note!</h1>
        <form>
        <textarea rows="5" cols="30"   ref="noteTxtInput" class="note-txt-input" @keydown.enter="updateTitle(info.id,
            $event)" :style="{ backgroundColor : bgColor }" @blur="updateTitle(info.id,
            $event)">{{info.title}}</textarea>
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
            isPinned: null,

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
            eventBus.$emit('show-msg', `Note saved succssefully!`)

        },
        changeBgColor(color) {
            this.bgColor = color;
            keepService.saveBgColor(this.info.id, color);
        },

    },
    computed: {

    },
    created() {
        this.bgColor = this.info.bgColor;
    },
    components: {
        noteOptions,
    }
}