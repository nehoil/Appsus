import { keepService } from '../services/keep-service.js'


export default {
    name: 'note-options',
    props: ['id'],
    template: `
      <div class="note-options-container" >
          <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
          <button @click="editNote"><i class="far fa-edit"></i></button>
          <button   ><i class="fas fa-palette"></i></button>
          <div class="color-palette-container" v-show="isShowColorPalette">
              <div class="colors"></div>
              <span>red</span>
              <span>blue</span>
              <span>yellow</span>
              <span>green</span>
          </div>
          <button>X</button>
</div>
    `,
    data() {
        return {
            isShowOpts: false,
            isShowColorPalette: false,
        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true

        },
        hideOpts() {
            this.isShowOpts = false
        },
        deleteNote() {
            const noteIdx = keepService.getNoteById(this.id);
            keepService.deleteNote(noteIdx);
        },
        editNote() {
            var val = keepService.editNote(this.id)
            this.$emit('editNote', val)
        },
        openColorPalette() {
            this.isShowColorPalette = true;
        },
        closeColorPalette() {
            this.isShowColorPalette = false;
        }
    },
}