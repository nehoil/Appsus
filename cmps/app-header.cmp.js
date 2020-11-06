

export default {
    template: `
        <header>
                <nav>
                    <div class="nav-logo container"> 
                    <router-link to="/" exact>
                    <img src="../assets/img/logo.png" alt="">
                    </router-link>
                    </div>
                    <div class="nav-links"> 
                    <ul>
                        <li> <router-link to="/" exact> Home </router-link> </li>
                        <li> <router-link to="/keep" exact> Keep </router-link> </li>
                        <li> <router-link to="/mail" exact> Mail </router-link></li>
                        <li> <router-link to="/book" exact> Book </router-link></li>
                    </ul>
                        </router-link>
                    </div>
                </nav>
            </header>
    `
}