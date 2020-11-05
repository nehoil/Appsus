import { keepService } from '../services/keep-service.js'


export default {
    name: 'note-options',
    props: ['id'],
    template: `
      <div class="note-options-container">
          <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
          <button @click="editNote"><i class="far fa-edit"></i></button>
          <button  @click="toggleColorPalette" ><i class="fas fa-palette"></i></button>
          <button  @click="pinNote" ><i class="fas fa-thumbtack"></i></i></button>
          <div class="color-palette-container" v-if="isShowColorPalette">
              <div class="colors">
              <div class="white" @click="setBgColor('white')"></div>
              <div class="red" @click="setBgColor('red')"></div>
              <div class="yellow" @click="setBgColor('yellow')"></div>
              <div class="orange" @click="setBgColor('orange')"></div>
              <div class="green" @click="setBgColor('green')"></div>
              <div class="blue" @click="setBgColor('blue')"></div>
              <div class="purple" @click="setBgColor('purple')"></div>
              <div class="pink" @click="setBgColor('pink')"></div>
              <div class="gray" @click="setBgColor('gray')"></div>
              </div>
          </div>
          <button><i class="fas fa-envelope" aria-hidden="true"></i></button>
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
        },
        setBgColor(color) {
            this.$emit('changeBgColor', color)
        },
        pinNote() {
            const noteIdx = keepService.getNoteById(this.id);
            keepService.pinNote(noteIdx);
        }
    },
    created() {
        this.isShowColorPalette = false
    },
}