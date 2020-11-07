export default {
    template: `
       <transition name="slide-fade">
        <section class="main-app" v-if="isShowHomePage">
             
                    <div class="main-section-container" >
                    <div class="app-info-container">
                        <h1>Easy and secure access to all of your content</h1>
                        <p>Store, share, and collaborate on files and folders from any mobile device, tablet, or computer</p>
                        <div class="action-btns-container">
                            <button class="mail-btn" @click="$router.push('/mail')">Go to Mails</button>
                            <button class="keep-btn"  @click="$router.push('/keep')">Try Notes </button>
                            <button class="books-btn" @click="$router.push('/book')">Open Books </button>
                        </div>
                    </div>
                        <img src="./assets/img/main-img.jpg" alt="">
                    </div>
                    
                </section>
            </transition>
    `,
    data() {
        return {
            isShowHomePage: false
        }
    },
    mounted() {
        this.isShowHomePage = true
    }
}