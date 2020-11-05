import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    deleteNote

}

var notes = [{
        type: "noteText",
        isPinned: true,
        info: {
            id: 101,
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "noteImg",
        info: {
            id: 102,
            url: "./apps/Keep/assets/img/car.png",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteTodos",
        info: {
            id: 103,
            label: "How was it:",
            todos: [
                { id: 201, txt: "Do that", doneAt: null },
                { id: 202, txt: "Do this", doneAt: 187111111 }
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
    console.log(id);
    console.log(notes.findIndex(note => note.info.id === id));

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
            txt: val
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
            label: val,
            todos: [
                // { id: utilService.makeId(10), txt: "Do that", doneAt: null },
                // { id: utilService.makeId(10), txt: "Do this", doneAt: 187111111 }
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