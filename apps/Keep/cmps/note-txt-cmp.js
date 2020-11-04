export default {
    name: 'note-text',
    props: ['info'],
    template: `
      <section class="note-txt">
          <h1>This is Text Note!</h1>
        <p>{{info.txt}}</p>

        <!-- <input type="text" v-model="val" @change="reportVal"> -->
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