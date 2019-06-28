import Vue from 'vue';

import axios from 'axios';

Vue.use( {
	install() {
		Vue.prototype.$http = axios;

		Vue.prototype.$installAxios = function() {
			this.$store.$http = Vue.prototype.$http;
		};
	}
} );
