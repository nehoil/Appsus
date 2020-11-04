
export default {
    props: ['review'],
    template: `
        <section class="book-review">
            <button @click="emiteRemove()">x</button>
           <div class="book-img-prv"></div>
           <div class="book-title-prv"><h4>Score: {{ review.rating }} </h4></div>
           <div class="book-title-prv"><h4>Name: {{ review.fullName }} </h4></div>
           <div class="book-title-prv"><h4>Date Read: {{ review.date }} </h4></div>
           <div class="book-title-prv"><h4>Review: {{ review.txt }} </h4></div>
        </section>
    `,
    computed: {
    },
    methods: {
        emiteRemove() {
            this.$emit('remove', this.review.id)
        },
    }
}