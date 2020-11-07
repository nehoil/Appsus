import longText from '../cmps/long-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
import bookReviews from '../cmps/book-reviews.cmp.js';
import { bookService } from '../services/book-service.js'

export default {
    name: 'book-details',
    template: `
        <section class="book-details" v-if="book">
           <h4>Book Details</h4>
           <div class="book-img">
               <img :src="book.thumbnail">
        </div>
           <h4>
               {{ book.title }}
           </h4>
           <h4>
           <i v-if="book.pageCount > 200" class="fal fa-hourglass"></i> 
           <span v-if="readingSpeed">
           {{ readingSpeed }} 
            </span>
           </h4>
           <h4>
               <div :class="priceClass" class="price">
               {{ amountToLocale }}
            </div>
        </h4>
        {{ publishDate }}
        <div class="onSale" v-if="isOnSale"><i class="fas fa-tag"></i> On Sale!</div>
        <div class="long-text">
            <long-text :txt="book.description"/>
        </div>  
        <div v-if="book.reviews" class="review-container">
         <span class="review-num">
             Reviews: {{ book.reviews.length }}
             Total Score: {{ totalScore }}
            </span>
            <div class="reviews-details">
             <ul>
                <li v-for="currReview in book.reviews" :key="currReview.id">
                    <book-reviews :review="currReview" @remove="removeReview" /> 
                </li>
            </ul>
        </div>
    </div>
    <review-add :bookId="book.id" />
    <div class="book-details-btns">
    <button @click="showPrevBook()"><< Previous book</button>
    <button @click="goBack()">Go Back</button>
    <button @click="showNextBook()">Next Book >></button>
    </div>
</section>
    `,
    data() {
        return {
            book: null,
            bookIdx: null,
            firstClick: true
        }
    },
    methods: {
        goBack() {
            this.$router.push('/book')
        },
        removeReview(reviewId) {
            bookService.removeReview(reviewId, this.book.id)
        },
        showNextBook() {
            var nextId = this.bookIdx++
            if (this.firstClick) nextId++
            bookService.getByIdx(nextId)
            .then(book => {
                if (!book) return
                this.$router.push(book.id)
            })            
            this.firstClick = false
        },
        loadBook(id) {
            bookService.getById(id)
                .then(book => {
                    this.book = book
                })
        },
        showPrevBook() {
            var nextId = this.bookIdx--
            if (this.firstClick) nextId--
            bookService.getByIdx(nextId)
                .then(book => {
                    if (!book) return
                    this.$router.push(book.id)
                })
            this.firstClick = false
        },
        loadBook(id) {
            bookService.getById(id)
                .then(book => {
                    this.book = book
                })
        }
    },
    computed: {
        amountToLocale() {
            return (this.book.listPrice.amount).toLocaleString('he-IL', { style: 'currency', currency: 'ILS' });
        },
        readingSpeed() {
            const pageCount = this.book.pageCount;
            if (pageCount > 500) return `${pageCount} pages (Long Reading)`;
            if (pageCount > 200) return `${pageCount} pages (Decent Reading)`;
            if (pageCount < 100) return `${pageCount} pages (Light Reading)`;
        },
        publishDate() {
            var currYear = new Date().getFullYear();
            const bookYear = this.book.publishedDate;
            if (currYear - bookYear > 10) return `Published: ${bookYear} (Veteran Book)`;
            if (currYear - bookYear < 1) return `Published: ${bookYear} (New)`;
            return `Published: ${bookYear}`;
        },
        priceClass() {
            if (this.book.listPrice.amount > 150) return { red: true };
            if (this.book.listPrice.amount < 20) return { green: true };
        },
        isOnSale() {
            return (this.book.listPrice.isOnSale)
        },
        totalScore() {
            var sum = 0;
            for (var currReview of this.book.reviews) {
                sum += currReview.rating
            }
            return sum / this.book.reviews.length;
        }
    },
    watch: {
        '$route.params.bookId'(to, from) {
            // console.log('changed!', to);
            this.loadBook(to)
        }
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getById(id)
            .then(book => this.book = book)
        bookService.getIdxById(id)
            .then(idx => this.bookIdx = idx)
    },
    components: {
        longText,
        reviewAdd,
        bookReviews
    }
}