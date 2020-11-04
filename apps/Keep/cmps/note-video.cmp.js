export default {
    name: 'note-video',
    props: ['info'],
    template: `
      <section class="note-video">
      <iframe width="320" height="215" :src="info.url"></iframe>
    </section>
    `,
    data() {
        return {
            val: '',
        }
    },
    methods: {

    },
}