export default {
    data() {
        return {
            filterBy: {
                byTitle: '',
            }
        }
    },
    template: `<section class="search-note-container container">
        <form @submit.prevent="emitFilter" class="notes-search-bar">

        <div>
         <input type="text" @input="emitFilter" v-model="filterBy.byTitle" placeholder="Search note.."  />
         <!-- <button>Search</button> -->
         </div>
         
        </form>
    </section>`,
    methods: {
        emitFilter() {
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)));
        }
    },
}