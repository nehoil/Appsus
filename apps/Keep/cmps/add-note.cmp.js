import { keepService } from '../services/keep-service.js';

export default {
    name: 'add-note',
    props: [''],
    template: `
      <section class="add-note-container">
          <form @submit.prevent="addNote(val)">
               <input type="text" v-model="val" :placeholder="callForAction">
            </form>
            <div class="btns-container">
            <button @click="setType('noteText')" :class="{ active : isTxtActive}"><i class="far fa-sticky-note "></i></button>
            <button @click="setType('noteImg')" :class="{ active : isImgActive}"><i class="far fa-image" ></i></button>
            <button @click="setType('noteTodos')" :class="{ active : isTodoActive}"><i class="fas fa-list-ul" ></i></button>
            <button @click="setType('noteVideo')" :class="{ active : isVidActive}"><i class="fab fa-youtube" ></i></button>
            </div>
    </section>
    `,
    data() {
        return {
            val: '',
            type: 'noteText',
            callForAction: 'Write a note...',
            isTxtActive: true,
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
            this.isTxtActive = false;
            this.isImgActive = false;
            this.isTodoActive = false;
            this.isVidActive = false;
            this.type = type;
            switch (type) {
                case 'noteText':
                    this.isTxtActive = true
                    this.callForAction = 'Write a note...'
                    break;
                case 'noteImg':
                    this.isImgActive = true
                    this.callForAction = 'Enter image link'
                    break;
                case 'noteTodos':
                    this.isTodoActive = true
                    this.callForAction = 'Write a title for the list'
                    break;
                case 'noteVideo':
                    this.isVidActive = true
                    this.callForAction = 'Enter a link to a YouTube video'
                    break;
                default:
                    break;
            }
        }

    },
}