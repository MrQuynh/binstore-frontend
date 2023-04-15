const routes = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    news: '/tin-tuc/:type',
    service: '/dich-vu',
    help: '/help',
    product: '/:group',
    detail: '/:group/:name',
    payment: '/:group/:name/:id/tra-gop',
    admin: '/admin',
    adminLogin: '/admin/login',
    userLogin: '/user/account/profile',

    search: '/search',
};

export default routes;
