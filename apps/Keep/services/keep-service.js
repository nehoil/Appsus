import { utilService } from '../../../services/util-service.js'
import { eventBus } from '../../../services/event-bus-service.js';


const NOTES_STORAGE_KEY = 'notes_db';


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
    saveTitle,
    pinNote,
    addMailToNotes,
    getNoteByIdToMail,
    saveBgColor
}


var gDefaultNotes = [{
        type: "noteText",
        isPinned: false,
        info: {
            id: 101,
            title: "It's Valentine's Day, do not forget to buy flowers",
            bgColor: '#fff',
        },

    },
    {
        type: "noteImg",
        isPinned: false,
        info: {
            id: 102,
            url: "./apps/Keep/assets/img/car.png",
            title: "11.11.20 - We are going to travel!",
            bgColor: '#fff',
            bgColor: '#fff'
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 103,
            title: "My Todo list:",
            todos: [
                { id: 201, txt: "Buy bananas", doneAt: null },
                { id: 202, txt: "Go for a walk", doneAt: 187111111 },
            ],
            bgColor: '#fff',
        },

    },
    {
        type: "noteVideo",
        isPinned: false,
        info: {
            id: 104,
            url: "https://www.youtube.com/embed/tgbNymZ7vqY",
            title: "Nice video",
            bgColor: '#fff',
        },

    },
    {
        type: "noteImg",
        isPinned: false,
        info: {
            id: 105,
            url: "https://images.news18.com/ibnlive/uploads/2016/04/boxing-gloves-generic.jpg",
            title: "Murderous training with Mark!!",
            bgColor: '#fff',
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 106,
            title: "Remind Nimrod:",
            todos: [
                { id: 203, txt: "Feed the fish once a day", doneAt: null },
                { id: 204, txt: "Water the plants", doneAt: null },
                { id: 205, txt: "Take out Lulu three times a day", doneAt: null }
            ],
            bgColor: '#fff',
        },

    },
    {
        type: "noteVideo",
        isPinned: false,
        info: {
            id: 107,
            url: "https://www.youtube.com/embed/-RkQDlUV4Fc",
            title: "music for running",
            bgColor: '#fff',
        },

    },
    {
        type: "noteText",
        isPinned: false,
        info: {
            id: 108,
            title: "The plates will still shift, and the clouds will still spew, the sun will slowly rise and the moon will follow too. - 'Amy O Connor'",
            bgColor: '#fff',
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 109,
            title: "Friends meeting on Saturday",
            todos: [
                { id: 206, txt: "Tahini and crackers", doneAt: null },
                { id: 207, txt: "Chopped vegetables, olives", doneAt: null },
                { id: 208, txt: "Pasta salad", doneAt: null },
                { id: 209, txt: "snacks", doneAt: null },
                { id: 210, txt: "Beers", doneAt: null }
            ],
            bgColor: '#fff',
        },
    }
];

var notes = utilService.loadFromStorage(NOTES_STORAGE_KEY) || gDefaultNotes;



function addMailToNotes(mail) {
    const newNote = {
        type: 'noteText',
        title: mail.subject + mail.body,
    }

    addNote(newNote.title, newNote.type);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function getNotes() {
    return Promise.resolve(notes);
}

function getNoteById(id) {
    return notes.findIndex(note => note.info.id === id);
}

function getNoteByIdToMail(id) {
    return notes.find(note => note.info.id === id);
}

function deleteNote(idx) {
    notes.splice(idx, 1);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
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
        isPinned: false,
        info: {
            id: utilService.makeId(9),
            title: val
        }
    }
    notes.unshift(note);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function addImgNote(val) {
    console.log(val);

    var note = {
        type: "noteImg",
        isPinned: false,
        info: {
            id: utilService.makeId(9),
            url: val,
            title: ' ',
        },

    }
    notes.unshift(note);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function addTodosNote(val) {
    var note = {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: utilService.makeId(9),
            title: val,
            todos: [

            ]
        }
    }
    notes.unshift(note);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function addVidNote(val) {
    var embbedVal = val.replace('watch?v=', 'embed/');
    var idx = embbedVal.indexOf('&')
    if (idx === -1) {
        var newVal = embbedVal.substring(0, embbedVal.length)
    } else {
        var newVal = embbedVal.substring(0, idx)
    }
    var note = {
        type: "noteVideo",
        isPinned: false,
        info: {
            url: newVal,
            title: ' ',
        },
    }
    notes.unshift(note);
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}


function deleteTodo(noteId, todoId) {
    var noteIdx = getNoteById(noteId)
    var todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
    notes[noteIdx].info.todos.splice(todoIdx, 1)
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function addTodo(noteId, todoTxt) {
    var todo = {
        id: utilService.makeId(10),
        txt: todoTxt,
        doneAt: null
    }
    var noteIdx = getNoteById(noteId)
    notes[noteIdx].info.todos.push(todo)
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function saveTodo(noteId, todoId, val) {
    var noteIdx = getNoteById(noteId);
    var todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId);
    notes[noteIdx].info.todos[todoIdx].txt = val;
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function editNote(noteId) {
    var noteIdx = getNoteById(noteId);
    if (!noteIdx.length) return 'sdf ';
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
    return notes[noteIdx].info.title
}

function updateTitle(noteId, val) {
    var noteIdx = getNoteById(noteId);
    notes[noteIdx].info.title = val;
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function saveTitle(noteId, val) {
    var noteIdx = getNoteById(noteId);
    notes[noteIdx].info.title = val;
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function pinNote(noteIdx) {
    if (notes[noteIdx].isPinned) {
        notes[noteIdx].isPinned = !notes[noteIdx].isPinned;
        eventBus.$emit('show-msg', `Note Unpinned successfully!`)

    } else {
        notes[noteIdx].isPinned = !notes[noteIdx].isPinned
        eventBus.$emit('show-msg', `Note pinned successfully!`)

    }
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function saveBgColor(noteId, color) {
    var noteIdx = getNoteById(noteId)
    notes[noteIdx].info.bgColor = `${color}`
    console.log(notes[noteIdx].info.bgColor);

    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}