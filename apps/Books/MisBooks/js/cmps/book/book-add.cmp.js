import { bookService } from '../../services/book-service.js';
import {eventBus} from '../../services/event-bus-service.js';

export default {
    template: `
            <section class="book-filter">
            <div class="filter-title">
                    <h2>Add Book</h2>
                </div>
                <span class="filter-search-input">
                    Title <input type="text" v-model="searchTerm" placeholder="Search here" @input="search"/>
                    </span>
                    <div class="book-search-res" v-if="books">
                    <ul>
                        <template v-for="book in books">
                            <li @click="addBook(book.id)">{{ book.volumeInfo.title }} 
                            <i class="add-icon fas fa-plus"></i>
                            </li>
                        </template>
                    </ul>
            </div>
            </section>
    `,
    data() {
        return {
            books: null,
            searchTerm: ''
        }
    },
    components: {
        bookService
    },
    methods: {
        search() {
            bookService.getSearchBooks(this.searchTerm)
            .then(books =>{
                this.books = books
            })
        },
        addBook(bookId){
            bookService.addBook(bookId)
            .then(this.emitAdded)
            this.books = null;
        },
        emitAdded(book) {
            eventBus.$emit('show-msg', `The Book ${book.title} added successfully`)
            // const review = JSON.parse(JSON.stringify(this.review));
            // bookService.addReview(this.bookId,review)
            // this.$emit('onAddReview')
        }
    }
}
