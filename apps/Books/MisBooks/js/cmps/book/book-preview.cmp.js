
export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <!-- <div class="book-remove-prv">
                <button @click="emitRemove(currBook.id)">
                <i class="fas fa-times"></i></button>
            </div> -->
            
           <div class="book-img-prv"><img :src="book.thumbnail"></div>
           <div class="book-title-prv"><h4>{{book.title}}</h4></div>
           <div class="book-price-prv"><h4>{{ localCurrency }}</h4></div>
        </section>
    `,
    computed: {
        localCurrency(){
           return (this.book.listPrice.amount).toLocaleString('he-IL',{style:'currency',currency:'ILS'}); 
        }
    }
}