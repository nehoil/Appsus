export default {
    template: `
        <header>
                <nav>
                    <div class="nav-logo container"> 
                    <router-link to="/" exact>
                    <img src="./assets/img/logo.png" alt="">
                    </router-link>
                    </div>
                    <button class="grid-btn" @click="toggleMenu"><svg height="40" viewBox="-19 -19 600 600" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M251.25 12.5c0-6.906-5.594-12.5-12.5-12.5H12.5C5.594 0 0 5.594 0 12.5v226.25c0 6.906 5.594 12.5 12.5 12.5h226.25c6.906 0 12.5-5.594 12.5-12.5zm-25 213.75H25V25h201.25zm0 0M562.5 12.5C562.5 5.594 556.906 0 550 0H323.75c-6.906 0-12.5 5.594-12.5 12.5v226.25c0 6.906 5.594 12.5 12.5 12.5H550c6.906 0 12.5-5.594 12.5-12.5zm-25 213.75H336.25V25H537.5zm0 0M251.25 323.75c0-6.906-5.594-12.5-12.5-12.5H12.5c-6.906 0-12.5 5.594-12.5 12.5V550c0 6.906 5.594 12.5 12.5 12.5h226.25c6.906 0 12.5-5.594 12.5-12.5zm-25 212.5H25v-200h201.25zm0 0M562.5 323.75c0-6.906-5.594-12.5-12.5-12.5H323.75c-6.906 0-12.5 5.594-12.5 12.5V550c0 6.906 5.594 12.5 12.5 12.5H550c6.906 0 12.5-5.594 12.5-12.5zm-25 212.5H336.25v-200H537.5zm0 0"/></svg></button>  
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