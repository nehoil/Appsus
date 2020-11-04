import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNotes,

}

var notes = [{
        type: "noteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
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
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function getNotes() {
    return Promise.resolve(notes);
}