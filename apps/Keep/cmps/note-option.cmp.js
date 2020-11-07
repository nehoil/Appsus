import { keepService } from '../services/keep-service.js'
import { mailService } from '../../Mail/services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';



export default {
    name: 'note-options',
    props: ['id'],
    template: `
      <div class="note-options-container">
          <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
          <!-- <button @click="editNote"><i class="far fa-edit"></i></button> -->
          <button  @click="toggleColorPalette" ><i class="fas fa-palette"></i></button>
          <button  @click="pinNote" ><i class="fas fa-thumbtack"></i></i></button>
          <div class="color-palette-container" v-if="isShowColorPalette">
              <div class="colors">
              <div class="white" @click="setBgColor('white')"></div>
              <div class="red" @click="setBgColor(' #ea2c62')"></div>
              <div class="yellow" @click="setBgColor('#ffdd93')"></div>
              <div class="orange" @click="setBgColor('#ff9a8c')"></div>
              <div class="green" @click="setBgColor('#9ad3bc')"></div>
              <div class="blue" @click="setBgColor('#cbf0f8')"></div>
              <div class="purple" @click="setBgColor('#d7aefb')"></div>
              <div class="pink" @click="setBgColor('#f4abc4')"></div>
              <div class="gray" @click="setBgColor('#8080804b')"></div>
              <div class="brown" @click="setBgColor('#e6c9a8')"></div>
              <div class="dark-blue" @click="setBgColor('#f4f4f2')"></div>
              <div class="turquaz" @click="setBgColor('#a7ffeb')"></div>
              </div>
          </div>
          <button @click="sendToMail"><i class="fas fa-envelope" aria-hidden="true"></i></button>
</div>
    `,
    data() {
        return {
            isShowOpts: false,
            isShowColorPalette: false,
        }
    },
    methods: {
        sendToMail() {
            var note = keepService.getNoteByIdToMail(this.id);
            mailService.addNoteToMails(note);
            eventBus.$emit('show-msg', `Note saved as email sucessfuly! Link is here`)
        },
        showOpts() {
            this.isShowOpts = true

        },
        hideOpts() {
            this.isShowOpts = false
        },
        deleteNote() {
            const noteIdx = keepService.getNoteById(this.id);
            keepService.deleteNote(noteIdx);
            eventBus.$emit('show-msg', `Note Deleted successfully!`)
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
            this.$emit('setPinState', 'ok')
        }
    },
    created() {
        this.isShowColorPalette = false
    },
}