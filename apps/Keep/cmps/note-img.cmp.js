import { keepService } from '../services/keep-service.js'
import { eventBus } from '../../../services/event-bus-service.js';
import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-img',
    props: ['info', 'note'],
    template: `
      <section class="note-img note-card" @mouseover="showOpts" @mouseleave="hideOpts" :style="{ backgroundColor : bgColor }">
      <div class="pinIcon" v-show="note.isPinned" >
              <i class="fas fa-thumbtack" ></i>
          </div>
        <p contentEditable="true" class="note-img-title" @keydown.enter="saveTitle(info.id,$event)" @blur="saveTitle(info.id,$event)" ref="imgTitleInput">{{info.title}}</p>
        <img :src=info.url alt="">
        <transition name="slide-fade">
        <note-options v-if="isShowOpts" :id="info.id" @editNote="edit" @changeBgColor="changeBgColor"></note-options>
        </transition>
             </section>
    `,
    data() {
        return {
            val: null,
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
            var val = ev.target.innerText;
            keepService.saveTitle(noteId, val);
            eventBus.$emit('show-msg', `Title changed successfully!`);
        },
        changeBgColor(color) {
            this.bgColor = color;
            keepService.saveBgColor(this.info.id, color);
        }
    },
    created() {
        this.bgColor = this.info.bgColor;
    },
    components: {
        noteOptions,
    }
}