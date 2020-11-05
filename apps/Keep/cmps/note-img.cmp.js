import { keepService } from '../services/keep-service.js'

import noteOptions from '../cmps/note-option.cmp.js'


export default {
    name: 'note-img',
    props: ['info'],
    template: `
      <section class="note-img" @mouseover="showOpts" @mouseleave="hideOpts">
        <p v-show="!isEditable"  class="note-img-title">{{info.title}}</p>
        <form @submit.prevent="updateTitle(info.id)">
        <input type="text" v-model="val" v-show="isEditable"  ref="imgTitleInput" class="note-img-input">
        </form>
        <img :src=info.url alt="">
        <note-options v-show="isShowOpts" :id="info.id" @editNote="edit($event)"></note-options>
             </section>
    `,
    data() {
        return {
            val: null,
            isShowOpts: false,
            isEditable: false

        }
    },
    methods: {
        showOpts() {
            this.isShowOpts = true;

        },
        hideOpts() {
            this.isShowOpts = false;
        },
        edit(val) {
            this.isEditable = true;
            this.val = val;
            this.$nextTick(() => this.$refs.imgTitleInput.focus());
        },
        updateTitle(noteID) {
            keepService.updateTitle(noteID, this.val);
            this.isEditable = false
        }
    },
    components: {
        noteOptions,
    }
}