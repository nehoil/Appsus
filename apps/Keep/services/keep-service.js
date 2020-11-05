import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    deleteNote,
    deleteTodo,
    addTodo,
    editNote,
    updateTitle,
    saveTodo,
    saveVidTitle,
}

var notes = [{
        type: "noteText",
        isPinned: true,
        info: {
            id: 101,
            title: "It's Valentine's Day, do not forget to buy flowers"
        }
    },
    {
        type: "noteImg",
        info: {
            id: 102,
            url: "./apps/Keep/assets/img/car.png",
            title: "11.11.20 - We are going to travel!"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteTodos",
        info: {
            id: 103,
            title: "My Todo list:",
            todos: [
                { id: 201, txt: "Buy bananas", doneAt: null },
                { id: 202, txt: "Go for a walk", doneAt: 187111111 }
            ]
        }
    },
    {
        type: "noteVideo",
        info: {
            id: 104,
            url: "https://www.youtube.com/embed/tgbNymZ7vqY",
            title: "Nice video"
        },
    },
];

function getNotes() {
    return Promise.resolve(notes);
}

function getNoteById(id) {
    return notes.findIndex(note => note.info.id === id);
}

function deleteNote(idx) {
    notes.splice(idx, 1);
}


function addNote(val, type) {
    switch (type) {
        case 'noteText':
            addTxtNote(val)
            break;
        case 'noteImg':
            addImgNote(val)
            break;
        case 'noteTodos':
            addTodosNote(val)
            break;
        case 'noteVideo':
            addVidNote(val)
            break;
        default:
            break;
    }
}

function addTxtNote(val) {
    var note = {
        type: "noteText",
        isPinned: true,
        info: {
            id: utilService.makeId(9),
            title: val
        }
    }
    notes.push(note);
}

function addImgNote(val) {
    console.log(val);

    var note = {
        type: "noteImg",
        info: {
            id: utilService.makeId(9),
            url: val,
            title: null
        },

    }
    notes.push(note);
}

function addTodosNote(val) {
    var note = {
        type: "noteTodos",
        info: {
            id: utilService.makeId(9),
            title: val,
            todos: [

            ]
        }
    }
    notes.push(note);

}

function addVidNote(val) {
    var embbedVal = val.replace('watch?v=', 'embed/');
    var idx = embbedVal.indexOf('&')
    var newVal = embbedVal.substring(0, idx)
    var note = {
        type: "noteVideo",
        info: {
            url: newVal,
        },
    }
    notes.push(note);
}


function deleteTodo(noteId, todoId) {
    var noteIdx = getNoteById(noteId)
    var todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
    notes[noteIdx].info.todos.splice(todoIdx, 1)
}

function addTodo(noteId, todoTxt) {
    var todo = {
        id: utilService.makeId(10),
        txt: todoTxt,
        doneAt: null
    }
    var noteIdx = getNoteById(noteId)
    notes[noteIdx].info.todos.push(todo)
}

function saveTodo(noteId, todoId, val) {
    var noteIdx = getNoteById(noteId);
    var todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId);
    notes[noteIdx].info.todos[todoIdx].txt = val;
}

function editNote(noteId) {
    var noteIdx = getNoteById(noteId);
    return notes[noteIdx].info.title
}

function updateTitle(noteId, val) {
    var noteIdx = getNoteById(noteId);
    notes[noteIdx].info.title = val;
}

function saveVidTitle(noteId, val) {
    var noteIdx = getNoteById(noteId);
    notes[noteIdx].info.title = val;
}