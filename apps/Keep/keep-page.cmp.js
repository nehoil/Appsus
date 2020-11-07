import missKeep from '../Keep/cmps/miss-keep.cmp.js'


export default {
    name: 'MailApp',
    template: `
    <section class="keep-app">
        <miss-keep></miss-keep>
    </section>
    `,
    methods: {

    },
    components: {
        missKeep,
    }
}