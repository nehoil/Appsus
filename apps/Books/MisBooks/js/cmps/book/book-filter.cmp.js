export default {
    template: `
            <section class="book-filter">
            <div class="filter-title">
                    <h2>Filter by</h2>
                </div> 
                
                <span class="filter-search-input">
                    <form @submit.prevent="emitFilter">
                   Title <input type="text" v-model="filterBy.byTitle" placeholder="Search here"/>
                    Min Price <input type="number" v-model="filterBy.fromPrice" placeholder="0"/>
                    Max Price <input type="number" v-model="filterBy.toPrice" placeholder="400"/>
                    <input type="checkbox" v-model="filterBy.onSale" class="onsale-input"/> 
                    On Sale
                    <button> Search </button>
                    </form>
                    </span>
            </section>
    `,
    data() {
        return {
            filterBy: {
                byTitle: '',
                fromPrice: 0,
                toPrice: 1000,
                onSale: null
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)))
        }
    }
}
