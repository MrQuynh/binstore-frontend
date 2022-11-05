import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Products from '~/pages/Products';

// import Watching from '~/pages/Watching';
import DetailProduct from '~/pages/DetailProduct';
import Admin from '~/pages/Admin';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    { path: config.routes.admin, component: Admin, layout: HeaderOnly },

    { path: config.routes.product, component: Products },
    { path: config.routes.detail, component: DetailProduct, layout: HeaderOnly },

    // { path: config.routes.watching, component: Watching, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
