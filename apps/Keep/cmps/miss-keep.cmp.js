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
    <search-note @doFilter="setFilter" ></search-note>
    <transition name="slide-fade">

     <section v-if="notes" class="notes-container">
        <component v-for="note in notesToShow" :is="note.type"  :key="note.id" :info="note.info, note"></component>
     </section>
     </transition>
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
            var pinedNotes = this.notes.filter(note => note.isPinned === true);
            var unPinedNotes = this.notes.filter(note => note.isPinned === false);
            var orderedNotes = pinedNotes.concat(unPinedNotes);
            if (!this.filterBy) return orderedNotes;

            const txt = this.filterBy.byTitle;
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