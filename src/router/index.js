import Vue    from 'vue';
import Router from 'vue-router';

import paths from './paths';

Vue.use( Router );

function route( { path, name, view } ) {
    return {
        name: name || view,
        path,
        component: () => import( `@/views/${ view }.vue` )
    };
}

const router = new Router( {
    base: process.env.BASE_URL || window.location.pathname,
    mode: 'history',
    routes: paths
        .map( path => route( path ) )
        .concat( [ { path: '*', redirect: '/' } ] ),
    scrollBehavior( to, from, savedPosition ) {
        if ( savedPosition ) {
            return savedPosition;
        }
        else if ( to.hash ) {
            return { selector: to.hash };
        }
        else {
            return { x: 0, y: 0 };
        }
    }
} );

export default router;
