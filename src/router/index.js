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
	mode: 'history',
	routes: paths
		.map( path => route( path ) )
		.concat( [ { path: '*', redirect: '/' } ] ),
	scrollBehavior( to, from, savedPosition ) {
		if( savedPosition ) {
			return savedPosition;
		}
		else if( to.hash ) {
			return { selector: to.hash };
		}
		else {
			return { x: 0, y: 0 };
		}
	}
} );

router.beforeResolve( ( to, from, next ) => {
	next();
} );

router.beforeEach( ( to, from, next ) => {
	next();
} );

export default router;
