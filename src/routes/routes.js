import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import DetailProduct from '~/pages/DetailProduct';
import Admin from '~/pages/Admin';
import UserLogin from '~/pages/UserLogin/UserLogin';
import AdminLogin from '~/pages/Admin/AdminLogin/AdminLogin';
import News from '~/pages/News/News';
import PageService from '~/pages/PageService/PageService';
import PageHelp from '~/pages/PageHelp/PageHelp';
import Payment from '~/pages/Payment/Payment';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    { path: config.routes.admin, component: Admin, layout: 'no-layout' },
    { path: config.routes.adminLogin, component: AdminLogin, layout: 'no-layout' },
    { path: config.routes.userLogin, component: UserLogin, layout: HeaderOnly },

    { path: config.routes.news, component: News, layout: HeaderOnly },
    { path: config.routes.service, component: PageService, layout: HeaderOnly },
    { path: config.routes.help, component: PageHelp, layout: HeaderOnly },
    { path: config.routes.product, component: Products },
    { path: config.routes.detail, component: DetailProduct, layout: HeaderOnly },
    { path: config.routes.payment, component: Payment, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
