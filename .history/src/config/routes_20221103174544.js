const routes = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    product: '/:group',
    detail: '/:group/:name:?id',

    search: '/search',
    live: '/live',
    watching: '/@:nickname/watching',
};

export default routes;
