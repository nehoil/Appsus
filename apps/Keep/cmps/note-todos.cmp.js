export default {
    name: 'note-todos',
    props: ['info'],
    template: `
      <section>
        <p>{{info.label}}</p>
        <ul>
            <li v-for="todo in info.todos" :key="todo.txt">
                <Strong>{{todo.txt}}</Strong>
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