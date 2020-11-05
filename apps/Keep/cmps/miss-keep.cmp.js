import { keepService } from '../services/keep-service.js'
import noteText from '../cmps/note-txt-cmp.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import searchNote from '../cmps/search-note.cmp.js'


export default {
    name: 'missKeep',
    template: `
    <div>
    <add-note></add-note>
    <search-note @doFilter="setFilter"></search-note>

     <section v-if="notes" class="notes-container">
        <component v-for="note in notesToShow" :is="note.type"  :key="note.id" :info="note.info"></component>
     </section>
     </div>
    `,
    data() {
        return {
            notes: null,
            filterBy: '',
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => this.notes = notes)
    },
    methods: {
        setFilter(filter) {
            this.filterBy = filter;
        }
    },
    computed: {
        notesToShow() {
            const txt = this.filterBy.byTitle;
            if (!this.filterBy) return this.notes
            return this.notes.filter(note => note.info.title.toLowerCase().includes(txt.toLowerCase()))
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
        addNote,
        searchNote
    }
}