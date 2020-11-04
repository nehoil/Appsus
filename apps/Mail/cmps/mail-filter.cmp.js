import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book/book-list.cmp.js';
import bookActions from '../cmps/book/book-actions.cmp.js';


export default {
    template: `
        <section class="book-app">
            <book-actions @doFilter="setFilter"></book-actions>
            <book-list :books="booksToShow"></book-list>
        </section>
    `,
    data() {
        return {
            books: '',
            filterBy: null,
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byTitle.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) && 
            (
                (book.listPrice.isOnSale && this.filterBy.onSale) || (!book.listPrice.isOnSale && !this.filterBy.onSale) &&
                (book.listPrice.amount > this.filterBy.fromPrice && book.listPrice.amount < this.filterBy.toPrice)
            )
            )
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
    },
    created() {
        bookService.getBooks()
        .then(books => this.books = books)
    },
    components: {
        bookList,
        bookActions
    }
}