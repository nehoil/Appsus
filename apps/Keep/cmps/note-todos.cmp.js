export default {
    name: 'note-todos',
    props: ['info'],
    template: `
      <section class="note-todo">
        <p>{{info.label}}</p>
        <ul>
            <li v-for="todo in info.todos" :key="todo.txt">
                <p>{{todo.txt}}</p>
                <button>X</button>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            val: '',
        }
    },
    methods: {
        reportVal() {

        }
    },
}