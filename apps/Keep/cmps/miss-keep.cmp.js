import { keepService } from '../services/keep-service.js'

import noteText from '../cmps/note-txt-cmp.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import addNote from '../cmps/add-note.cmp.js'



export default {
    name: 'missKeep',
    template: `
    <div>
    <add-note></add-note>
     <section v-if="notes" class="notes-container">
        <component v-for="note in notes" :is="note.type"  :key="note.id" :info="note.info"></component>
     </section>
     </div>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => this.notes = notes)

    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
        addNote

    }
}