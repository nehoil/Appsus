import { keepService } from '../services/keep-service.js';
// import searchNote from '../cmps/search-note.cmp.js'

export default {
    name: 'add-note',
    props: [''],
    template: `
      <section class="add-note-container">
          <form @submit.prevent="addNote(val)">
               <input type="text" v-model="val" :placeholder="callForAction">
            </form>
            <div class="btns-container">
            <button @click="setType('noteText')"><i class="far fa-sticky-note"></i></button>
            <button @click="setType('noteImg')"><i class="far fa-image"></i></button>
            <button @click="setType('noteTodos')"><i class="fas fa-list-ul"></i></button>
            <button @click="setType('noteVideo')"><i class="fab fa-youtube"></i></button>
            </div>
            <!-- <search-note @filtered="setFilter"></search-note> -->
    </section>
    `,
    data() {
        return {
            val: '',
            type: 'noteText',
            callForAction: 'Write a note...'

        }
    },
    methods: {
        addNote(val) {
            keepService.addNote(val, this.type);
            this.val = '';
        },
        setType(type) {
            this.type = type;
            switch (type) {
                case 'noteText':
                    this.callForAction = 'Write a note...'
                    break;
                case 'noteImg':
                    this.callForAction = 'Enter a link to the image'
                    break;
                case 'noteTodos':
                    this.callForAction = 'Write a title for the list'
                    break;
                case 'noteVideo':
                    this.callForAction = 'Enter a link to a YouTube video'
                    break;
                default:
                    break;
            }
        }

    },
    computed: {

    },
    components: {
        // searchNote,

    }

}