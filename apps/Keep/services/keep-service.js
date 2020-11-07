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
    saveBgColor,
    updateTodoCheckState
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
            bgColor: '#cbf0f8'
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 103,
            title: "My Todo list:",
            todos: [
                { id: 201, txt: "Buy bananas", doneAt: null, isChecked: true },
                { id: 202, txt: "Go for a walk", doneAt: 187111111, isChecked: true },
                { id: 220, txt: "Convert money for a trip", doneAt: 187111111, isChecked: false },
            ],
            bgColor: '#f4f4f2',
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
            title: "8/11/20 - Boxing training",
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
                { id: 203, txt: "Feed the fish once a day", doneAt: null, isChecked: false },
                { id: 204, txt: "Water the plants", doneAt: null, isChecked: true },
                { id: 205, txt: "Take out Lulu three times a day", doneAt: null, isChecked: true }
            ],
            bgColor: '#f4f4f2',
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
            bgColor: '#f4f4f2',
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 109,
            title: "Friends meeting on Saturday",
            todos: [
                { id: 206, txt: "Tahini and crackers", doneAt: null, isChecked: true },
                { id: 207, txt: "Chopped vegetables, olives", doneAt: null, isChecked: false },
                { id: 208, txt: "Pasta salad", doneAt: null, isChecked: false },
                { id: 209, txt: "snacks", doneAt: null, isChecked: false },
                { id: 210, txt: "Beers", doneAt: null, isChecked: false }
            ],
            bgColor: '#cbf0f8',
        },
    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 111,
            title: "A recipe for pizza dough 🍕",
            todos: [
                { id: 211, txt: "1 pound of flour", doneAt: null, isChecked: false },
                { id: 212, txt: "1/2 cup oil", doneAt: null, isChecked: false },
                { id: 213, txt: "Two eggs", doneAt: null, isChecked: false },
                { id: 214, txt: "2 teaspoons salt", doneAt: null, isChecked: false },
                { id: 215, txt: "2 tablespoons of sugar", doneAt: null, isChecked: false },
                { id: 216, txt: "2 glasses of water", doneAt: null, isChecked: false },
                { id: 217, txt: "2 tablespoons dry yeast", doneAt: null, isChecked: false },

            ],
            bgColor: '#f4f4f2',
        }
    },
    {
        type: "noteText",
        isPinned: false,
        info: {
            id: 112,
            title: "I wish myself that 2021 will be a year of dreams come true and significant personal and professional growth.",
            bgColor: '#fff',
        },

    },
    {
        type: "noteTodos",
        isPinned: false,
        info: {
            id: 113,
            title: "Equipment for the trip",
            todos: [
                { id: 211, txt: "head lamp", doneAt: null, isChecked: true },
                { id: 212, txt: "sandals", doneAt: null, isChecked: true },
                { id: 213, txt: "Gas for the stove", doneAt: null, isChecked: false },
                { id: 214, txt: "2 teaspoons salt", doneAt: null, isChecked: true },
                { id: 215, txt: "Toilet Paper", doneAt: null, isChecked: false },
                { id: 216, txt: "Sleeping Bag", doneAt: null, isChecked: false },
                { id: 217, txt: "picnic box", doneAt: null, isChecked: false },

            ],
            bgColor: '#f4f4f2',
        }
    },
    {
        type: "noteImg",
        isPinned: false,
        info: {
            id: 105,
            url: "https://norway.co.il/wp-content/uploads/2018/03/%D7%90%D7%92%D7%9D-Stynevatnet.jpg",
            title: "052-568478 Jonathan (sells a kayak)",
            bgColor: '#9ad3bc',
        },

    },
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
        doneAt: null,
        isChecked: false
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
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);
}

function updateTodoCheckState(todoId, noteId) {
    var noteIdx = getNoteById(noteId)
    var todoIdx = notes[noteIdx].info.todos.findIndex(todo => todo.id === todoId);
    notes[noteIdx].info.todos[todoIdx].isChecked = !notes[noteIdx].info.todos[todoIdx].isChecked;
    utilService.storeToStorage(NOTES_STORAGE_KEY, notes);

}