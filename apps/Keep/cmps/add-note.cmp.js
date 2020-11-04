import { keepService } from '../services/keep-service.js'



export default {
    name: 'add-note',
    props: [''],
    template: `
      <section class="add-note-container">
          <h1>Add note: &nbsp;</h1>
          <form @submit.prevent="addNote(val)">
               <input type="text" v-model="val">
            </form>
            <button @click="setTypeTxt">Text</button>
            <button @click="setTypeImg">Image</button>
            <button @click="setTypeTodos">Todo-list</button>
            <button @click="setTypeVid">Todo-video</button>

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
        setTypeTxt() {
            this.type = 'noteText';
        },
        setTypeImg() {
            this.type = 'noteImg'
            console.log(this.type);

        },
        setTypeTodos() {
            this.type = 'noteTodos'
        },
        setTypeVid() {
            this.type = 'noteVideo'
        }
    },

}