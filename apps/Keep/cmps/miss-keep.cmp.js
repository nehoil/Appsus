import { keepService } from '../services/keep-service.js'

import noteTxt from '../cmps/note-txt-cmp.js'



export default {
    name: 'missKeep',
    template: `
     <section>
          <h1>missKeep cmp</h1>
     </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => console.log(notes))

    },
    components: {
        noteTxt,

    }
}