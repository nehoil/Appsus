
// import bookApp from './apps/Books/';
// import bookDetails from './pages/book-details.cmp.js';
// import bookApp from './pages/books-page.cmp.js';
// import { aboutPage, aboutServicesPage, aboutTeamPage } from './pages/about-us.cmp.js';
import keepApp from '../apps/Keep/keep-page.cmp.js';
import mailApp from '../apps/Mail/mail-page.cmp.js';
import mailDetails from '../apps/Mail/pages/mail-details.cmp.js';
import homePage from '../pages/home-page.cmp.js';


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
        path: '/mail/:mailId',
        component: mailDetails
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

