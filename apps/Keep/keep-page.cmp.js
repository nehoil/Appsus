import missKeep from '../Keep/cmps/miss-keep.cmp.js'


export default {
    name: 'MailApp',
    template: `
    <section class="mail-app">
        <miss-keep></miss-keep>
    </section>
    `,
    methods: {

    },
    components: {
        missKeep,

    }
}