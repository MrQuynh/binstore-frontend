import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Products from '~/pages/Products';

// import Watching from '~/pages/Watching';
import DetailProduct from '~/pages/DetailProduct';
import Admin from '~/pages/Admin';
import UserLogin from '~/pages/UserLogin/UserLogin';
import AdminLogin from '~/pages/Admin/AdminLogin/AdminLogin';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    // JSON.parse(localStorage.getItem('IS_LOGIN')) === true &&
    // JSON.parse(localStorage.getItem('USER_LOG_IN')).role === 'R1'
    //     ? { path: config.routes.admin, component: Admin, layout: 'no-layout' }
    //     : { path: config.routes.adminLogin, component: AdminLogin, layout: 'no-layout' },
    // { path: config.routes.userLogin, component: UserLogin, layout: HeaderOnly },

    { path: config.routes.product, component: Products },
    { path: config.routes.detail, component: DetailProduct, layout: HeaderOnly },

    // { path: config.routes.watching, component: Watching, layout: null },
];

const privateRoutes = [
    { path: config.routes.admin, component: Admin, layout: 'no-layout' },
    { path: config.routes.adminLogin, component: AdminLogin, layout: 'no-layout' },
];

export { publicRoutes, privateRoutes };
