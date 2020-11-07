import { bookService } from '../services/book-service.js'
import {eventBus} from '../services/event-bus-service.js'

export default {
    props: ['bookId'],
    template: `
        <section class="book-add-review">
           <h4>Add Review</h4>
           <form @submit.prevent="emitReview">
                   Full Name: <input type="text" v-model="review.fullName" placeholder="Your Name"/>
                   Rate: <select class="form-control" v-model.number="review.rating">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label>Read at:
                    <input type="date" v-model="review.date" />
                    </label>
                    <textarea rows="4" cols="30" v-model="review.txt"></textarea>
                    <br>
                    <button> Submit </button>
                    </form>
        </section>
    `,
    data() {
        return {
            review: { fullName: '', rating: null, date: null, txt: '' },
        }
    },
    methods: {
        emitReview() {
            eventBus.$emit('show-msg', 'Review submitted successfully')
            const review = JSON.parse(JSON.stringify(this.review));
            bookService.addReview(this.bookId,review)
            this.$emit('onAddReview')
        }
    }
}