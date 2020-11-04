import noteOptions from '../cmps/note-option.cmp.js'

export default {
    name: 'note-todos',
    props: ['info'],
    template: `
      <section class="note-todo" @mouseover="showOpts" @mouseleave="hideOpts">
        <p class="todos-list-title">{{info.label}}</p>
        <ul class="todos-list" v-if="info.todos.length">
            <li  v-for="todo in info.todos" :key="todo.txt">
                <p>{{todo.txt}}</p>
                <button @click="deleteTodo(todo.id)">X</button>
            </li>
        </ul>
        <ul v-else>
            <li @show="focus()">
                <input type="text" class="todos-input" ref="todoInput" >
            </li>
        </ul>
        <div class="opts-container">
        <note-options :id="info.id"></note-options>
        </div>
    </section>
    `,
    data() {
        return {
            val: '',
            isShowOpts: false,

        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true;
        },
        hideOpts() {
            this.isShowOpts = false;
        },
        deleteTodo(todoId) {
            console.log(todoId);

        },
        focus() {
            console.log('dddd');
            this.$refs.todoInput.focus()
        }
    },

    components: {
        noteOptions,
    }
}