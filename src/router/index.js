import Vue    from 'vue';
import Meta   from 'vue-meta';
import Router from 'vue-router';

import paths from './paths';

function route( { path, name, view, meta } ) {
	return {
		name: name || view,
		path,
		meta,
		component: async () => await import( `@/views/${ view }.vue` )
	};
}

Vue.use( Router );
Vue.use( Meta );

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
