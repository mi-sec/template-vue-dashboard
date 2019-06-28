<template>
	<v-navigation-drawer
		v-model="sidebarModel"
		:dark="getDarkMode"
		clipped
		absolute
		overflow
		app
	></v-navigation-drawer>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'Sidebar',
		data() {
			return {};
		},
		methods: {},
		computed: {
			...mapGetters( [ 'getDarkMode', 'getSidebarModel' ] ),
			sidebarModel: {
				get() {
					return this.getSidebarModel;
				},
				set() {}
			}
		}
	};
</script>
