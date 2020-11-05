import { keepService } from '../services/keep-service.js'


export default {
    name: 'note-options',
    props: ['id'],
    template: `
      <div class="note-options-container" >
          <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
          <button @click="editNote"><i class="far fa-edit"></i></button>
          <button  @click="toggleColorPalette" ><i class="fas fa-palette"></i></button>
          <div class="color-palette-container" v-show="isShowColorPalette">
              <div class="colors">
              <div class="white"></div>
              <div class="red"></div>
              <div class="yellow"></div>
              <div class="orange"></div>
              <div class="green"></div>
              <div class="light-blue"></div>
              <div class="purple"></div>
              <div class="pink"></div>
              <div class="light-gray"></div>
              </div>
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
        toggleColorPalette() {
            this.isShowColorPalette = !this.isShowColorPalette;
        },
        closeColorPalette() {
            this.isShowColorPalette = false;
        }
    },
}