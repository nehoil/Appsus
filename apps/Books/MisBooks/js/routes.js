
import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import homePage from './pages/home-page.cmp.js';
import { aboutPage, aboutServicesPage, aboutTeamPage } from './pages/about-us.cmp.js';


const myRoutes = [
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'services',
                component: aboutServicesPage
            },
            {
                path: 'team',
                component: aboutTeamPage
            },
        ]
    },
    {
        path: '/',
        component: homePage
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

