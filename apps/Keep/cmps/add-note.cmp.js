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
            <button @click="setType('noteText')"  :class="{ active : true}"><i class="far fa-sticky-note"></i></button>
            <button @click="setType('noteImg')" :class="{ active : isImgActive}"><i class="far fa-image"></i></button>
            <button @click="setType('noteTodos')" :class="{ active : isTodoActive}"><i class="fas fa-list-ul"></i></button>
            <button @click="setType('noteVideo')" :class="{ active : isVidActive}"><i class="fab fa-youtube"></i></button>
            </div>
            <!-- <search-note @filtered="setFilter"></search-note> -->
    </section>
    `,
    data() {
        return {
            val: '',
            type: 'noteText',
            callForAction: 'Write a note...',
            isTxtActive: false,
            isImgActive: false,
            isTodoActive: false,
            isVidActive: false


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