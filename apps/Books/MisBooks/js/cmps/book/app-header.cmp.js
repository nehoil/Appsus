
export default {
    template: `
        <header>
                <nav>
                    <div class="nav-logo container"> 
                    <router-link to="/" exact>
                        <img src="./img/logo.png">
                        </router-link>
                    </div>
                    <div class="nav-links"> 
                    <ul>
                        <li> <router-link to="/" exact> Home </router-link> </li>|
                        <li> <router-link to="/book" exact> Books </router-link> </li>|
                        <li> <router-link to="/about" exact> About Us</router-link></li>
                    </ul>
                        </router-link>
                    </div>
                </nav>
            </header>
    `
}