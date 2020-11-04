import { keepService } from '../services/keep-service.js'


export default {
    name: 'note-options',
    props: ['id'],
    template: `
      <div class="note-options-container">
          <button @click="deleteNote"><i class="far fa-trash-alt"></i></button>
          <button><i class="far fa-edit"></i></button>
          <button><i class="fas fa-palette"></i></button>
          <button>X</button>
</div>
    `,
    data() {
        return {
            isShowOpts: false
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
        }
    },
}