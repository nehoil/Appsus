export default {
    name: 'note-img',
    props: ['info'],
    template: `
      <section class="note-img">
        <img :src=info.url alt="">
        <div></div>
        <p>{{info.title}}</p>
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