export default {
    name: 'note-text',
    props: ['info'],
    template: `
      <section class="note-txt">
          <h1>This is Text Note!</h1>
        <p>{{info.txt}}</p>

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