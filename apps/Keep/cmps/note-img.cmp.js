export default {
    name: 'note-img',
    props: ['info'],
    template: `
      <section>
        <p>{{info.type}}</p>
        <h1>This is Image Note!</h1>
        <img :src=info.url alt="">
        <input type="text" v-model="val" @change="reportVal">
         </section>
    `,
    data() {
        return {
            val: '',
        }
    },
    methods: {
        reportVal() {

        }
    },
}