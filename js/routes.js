
import bookDetails from '../apps/Books/cmps/book-details.cmp.js';
import bookApp from '../apps/Books/cmps/book-app.cmp.js';
import keepApp from '../apps/Keep/keep-page.cmp.js';
import mailApp from '../apps/Mail/cmps/mail-app.cmp.js';
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
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
]

export const myRouter = new VueRouter({ routes: myRoutes })

