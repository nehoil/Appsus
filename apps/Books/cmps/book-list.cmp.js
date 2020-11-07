import bookPreview from './book-preview.cmp.js';


export default {
    props:['books'],
    template: `
            <section class="book-list">
            <h2>Our Books</h2>
            <div class="book-list-content">
            <ul>
                <li v-for="currBook in books" :key="currBook.id">
                    <router-link :to="'/book/' +currBook.id " exact>
                    <book-preview :book="currBook"/>
                    </router-link>
                </li>
            </ul>
            </div>
            </section>
    `,
    data() {
        return {
            showBook: true,
        }
    },
    methods: {
        emitRemove(bookId) {
            this.$emit('remove', bookId)
        },
        bookClk(book) {
            this.$emit('bookClicked', book)
            return book;
        }
    },
    components: {
        bookPreview
    }
}