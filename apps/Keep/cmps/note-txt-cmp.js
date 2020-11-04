export default {
    name: 'note-txt.cmp',
    props: ['info'],
    template: `
    <section>
        <p>{{info.txt}}</p>
    </section>
    `,
    methods: {
        saveNote() {

        }
    },
}