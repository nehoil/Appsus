import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNotes,
    addNote

}

var notes = [{
        id: 101,
        type: "noteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 102,
        type: "noteImg",
        info: {
            url: "./apps/Keep/assets/img/car.png",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 103,
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        type: "noteVideo",
        info: {
            url: "https://www.youtube.com/embed/tgbNymZ7vqY",
            title: "Nice video"
        },
    },
];

function getNotes() {
    return Promise.resolve(notes);
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
            label: val,
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
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