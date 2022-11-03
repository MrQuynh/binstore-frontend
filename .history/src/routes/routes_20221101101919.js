import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Watching from '~/pages/Watching';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: HeaderOnly },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live, size: true },
    { path: config.routes.watching, component: Watching, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
