export default {
    template: `
        <header>
                <nav>
                    <div class="nav-logo container"> 
                    <router-link to="/" exact>
                    <img src="../assets/img/logo.png" alt="">
                    </router-link>
                    </div>
                    <button class="grid-btn" @click="toggleMenu"><i class="fas fa-th"></i></button>  
                    <div class="nav-links"> 
                    <ul v-show="isShowMenu"> 
                        <li  @click="toggleMenu"> <router-link to="/" exact><i class="fas fa-home"></i></router-link> </li>
                        <li  @click="toggleMenu"> <router-link to="/keep" exact><i class="far fa-sticky-note"></i> </router-link> </li>
                        <li  @click="toggleMenu"> <router-link to="/mail" exact> <i class="far fa-envelope"></i> </router-link></li>
                        <li  @click="toggleMenu"> <router-link to="/book" exact><i class="fas fa-book"></i> </router-link></li>
                    </ul>
                        </router-link>
                    </div>
                </nav>
            </header>
    `,
    data() {
        return {
            isShowMenu: false,

        }
    },
    methods: {

        toggleMenu() {
            this.isShowMenu = !this.isShowMenu
        }
    },
}