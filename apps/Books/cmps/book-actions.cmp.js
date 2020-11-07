import bookAdd from '../cmps/book-add.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';


export default {
    template: `
            <section class="book-actions">
                <div class="main-actions-container">
                <book-add />
                <book-filter @doFilter="emiteSetFilter"/>
                 </div>
            </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        emiteSetFilter(filterBy) {
            this.$emit('doFilter', filterBy)
        }
    },
    components: {
        bookFilter,
        bookAdd
    }
}
