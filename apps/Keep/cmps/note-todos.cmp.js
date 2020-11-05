import { keepService } from '../services/keep-service.js'
import noteOptions from '../cmps/note-option.cmp.js'

export default {
    name: 'note-todos',
    props: ['info'],
    template: `
      <section class="note-todo" @mouseover="showOpts" @mouseleave="hideOpts">
        <p class="todos-list-title" v-show="!isEditable">{{info.title}}</p>
        <form @submit.prevent="updateTitle(info.id)">
        <input type="text" v-model="val" v-show="isEditable"  ref="todoTitleInput" class="note-todos-input">
        </form>
        <ul class="todos-list" v-if="info.todos.length">
            <li  v-for="todo in info.todos" :key="todo.txt">
                <p contentEditable="true"  @blur="saveTodo(info.id,todo.id,$event)">{{todo.txt}}</p>
                <button @click="deleteTodo(info.id, todo.id)">X</button>
            </li>
            <form @submit.prevent="addTodo(info.id,todoTxt)">
            <li @show="focus()">
                <input type="text" class="todos-input" ref="todoInput" v-model="todoTxt" placeholder="What to do?">
            </li>
            </form>
        </ul>

        <ul v-else>
        <form @submit.prevent="addTodo(info.id,todoTxt)">
            <li @show="focus()">
                <input type="text" class="todos-input" ref="todoInput" v-model="todoTxt" placeholder="What to do?">
            </li>
            </form>
        </ul>

        <div class="opts-container">
        <note-options v-show="isShowOpts" :id="info.id"  @editNote="editTitle($event)"></note-options>
        </div>
    </section>
    `,
    data() {
        return {
            val: '',
            isShowOpts: false,
            todoTxt: null,
            isEditable: false,
            currTodoTxt: '',
        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true;
        },
        hideOpts() {
            this.isShowOpts = false;
        },
        deleteTodo(noteID, todoId) {
            keepService.deleteTodo(noteID, todoId)

        },
        addTodo(noteId, todoTxt) {
            console.log(todoTxt);
            keepService.addTodo(noteId, todoTxt);
            this.todoTxt = null

        },
        // focus() {
        //     console.log('dddd');
        //     this.$refs.todoTitleInput.focus()
        // },
        editTitle(val) {
            this.isEditable = true;
            this.val = val;
            this.$nextTick(() => this.$refs.todoTitleInput.focus());
        },
        updateTitle(noteID) {
            keepService.updateTitle(noteID, this.val);
            this.isEditable = false
        },
        getTodo(noteId, todoId, ev) {
            console.log(ev.target.innerText);

            return { noteId, todoId, val: ev.target.innerText }
        },
        saveTodo(noteId, todoId, ev) {
            var val = ev.target.innerText
            keepService.saveTodo(noteId, todoId, val)

        }
    },

    components: {
        noteOptions,
    }
}

// @focus="getTodo(info.id,todo.id,$event)" @input="editTodo"