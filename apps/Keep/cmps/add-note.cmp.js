import { keepService } from '../services/keep-service.js';
// import searchNote from '../cmps/search-note.cmp.js'

export default {
    name: 'add-note',
    props: [''],
    template: `
      <section class="add-note-container">
          <h1>Add note: &nbsp;</h1>
          <form @submit.prevent="addNote(val)">
               <input type="text" v-model="val">
            </form>
            <button @click="setType('noteText')">Text</button>
            <button @click="setType('noteImg')">Image</button>
            <button @click="setType('noteTodos')">Todo-list</button>
            <button @click="setType('noteVideo')">video</button>
            <!-- <search-note @filtered="setFilter"></search-note> -->
    </section>
    `,
    data() {
        return {
            val: '',
            type: 'noteText',
        }
    },
    methods: {
        addNote(val) {
            keepService.addNote(val, this.type);
            this.val = '';
        },
        setType(type) {
            this.type = type;
        }

    },
    components: {
        // searchNote,

    }

}