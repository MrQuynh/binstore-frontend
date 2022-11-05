const routes = {
    home: '/',
    following: '/following',
    profile: '/@:nickname',
    product: '/:group',
    detail: '/:group/?id=:id',

    search: '/search',
    live: '/live',
    watching: '/@:nickname/watching',
};

export default routes;
