import { keepService } from '../services/keep-service.js'
import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-video',
    props: ['info'],
    template: `
      <section class="note-video note-card" @mouseover="showOpts" @mouseleave="hideOpts" :style="{ backgroundColor : bgColor}">
      <p class="note-vid-title" contentEditable="true" @keydown.enter="saveTitle(info.id,$event)"  @blur="saveTitle(info.id,$event)" ref="vidTitleInput" placeholder="text">{{info.title}}</p>
     <div class="iframe-container">
      <iframe :src="info.url" class="responsive-iframe"></iframe>
      </div>
      <note-options v-if="isShowOpts" :id="info.id" @editNote="edit($event)" @changeBgColor="changeBgColor"></note-options >
    </section>
    `,
    data() {
        return {
            val: null,
            isShowOpts: false,
            isEditable: false,
            bgColor: null,

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
        },
        changeBgColor(color) {
            this.bgColor = color;
            keepService.saveBgColor(this.info.id, color)
        }
    },
    created() {
        this.bgColor = this.info.bgColor;
        console.log(this.info);


    },
    components: {
        noteOptions,
    }
}