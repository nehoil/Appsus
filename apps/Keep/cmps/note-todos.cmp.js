import { keepService } from '../services/keep-service.js'
import noteOptions from '../cmps/note-option.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'note-todos',
    props: ['info', 'note'],
    template: `
      <section class="note-todo note-card" @mouseover="showOpts" @mouseleave="hideOpts" :style="{ backgroundColor : bgColor }">
      <div class="pinIcon" v-show="note.isPinned" >
              <i class="fas fa-thumbtack" ></i>
          </div>
         <p class="todos-list-title" contentEditable="true"  @blur="updateTitle(info.id, $event)">{{info.title}}</p>

         <ul class="todos-list" v-if="info.todos.length">
            <li  v-for="todo in info.todos" :key="todo.id">
                <div class="todo-checkbox-container">
                 <input type="checkbox" v-if = "todo.isChecked" @change="updateTodoCheckState(todo.id)" checked>
                 <input type="checkbox" v-else @change="updateTodoCheckState(todo.id)">
                <p contentEditable="true"  @blur="saveTodo(info.id,todo.id,$event)" :class="{ checked: todo.isChecked }">{{todo.txt}}</p>
                </div>
                <button @click="deleteTodo(info.id, todo.id)">X</button>
            </li>
            <form  @keydown.enter="addTodo(info.id,todoTxt)">
            <li @show="focus()">
                <input type="text" class="todos-input" ref="todoInput" v-model="todoTxt" placeholder="What more?" :style="{ backgroundColor : bgColor }" >
            </li>
            </form>

            </ul>

            <ul v-else>
        <form @keydown.enter="addTodo(info.id,todoTxt)">
            <li @show="focus()">
              <input type="text" class="todos-input" ref="todoInput" v-model="todoTxt" placeholder="What to do?" :style="{ backgroundColor : bgColor }">
            </li>
            </form>
        </ul>

        <div class="opts-container">
        <note-options  v-if="isShowOpts" :id="info.id"  @editNote="editTitle($event)" @changeBgColor="changeBgColor"></note-options>
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
            bgColor: 'white',
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
            keepService.deleteTodo(noteID, todoId);

        },
        addTodo(noteId, todoTxt) {
            keepService.addTodo(noteId, todoTxt);
            this.todoTxt = null
        },
        editTitle(val) {
            this.isEditable = true;
            this.val = val;
            this.$nextTick(() => this.$refs.todoTitleInput.focus());
        },
        updateTitle(noteID, ev) {
            var val = ev.target.innerText
            keepService.updateTitle(noteID, val);
            this.isEditable = false
            eventBus.$emit('show-msg', `Title changed successfully!`)

        },
        getTodo(noteId, todoId, ev) {
            console.log(ev.target.innerText);

            return { noteId, todoId, val: ev.target.innerText }
        },
        saveTodo(noteId, todoId, ev) {
            var val = ev.target.innerText
            keepService.saveTodo(noteId, todoId, val);


        },
        changeBgColor(color) {
            this.bgColor = color;
            keepService.saveBgColor(this.info.id, color)

        },
        updateTodoCheckState(todoId) {
            keepService.updateTodoCheckState(todoId, this.info.id)
        }
    },
    created() {
        this.bgColor = this.info.bgColor;
    },

    components: {
        noteOptions,
    }
}

// @focus="getTodo(info.id,todo.id,$event)" @input="editTodo"