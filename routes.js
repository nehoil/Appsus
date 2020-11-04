
// import bookApp from './apps/Books/';
// import bookDetails from './pages/book-details.cmp.js';
// import bookApp from './pages/books-page.cmp.js';
// import { aboutPage, aboutServicesPage, aboutTeamPage } from './pages/about-us.cmp.js';
import keepApp from './pages/keep-page.cmp.js';
import mailApp from './pages/mail-page.cmp.js';
import homePage from './pages/home-page.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }
]

export const myRouter = new VueRouter({ routes: myRoutes })

