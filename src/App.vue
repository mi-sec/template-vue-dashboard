<template>
	<v-app :dark="getDarkMode">
		<Sidebar/>
		<Toolbar/>

		<v-content :dark="getDarkMode">
			<v-container fluid ma-0 pa-0>
				<router-view></router-view>
			</v-container>
		</v-content>

		<Footer/>
	</v-app>
</template>

<script>
	import { mapGetters } from 'vuex';

	import '@/assets/roboto.css';
	import '@/assets/material-icons.css';

	import Sidebar from '@/components/Sidebar';
	import Toolbar from '@/components/Toolbar';
	import Footer  from '@/components/Footer';

	export default {
		name: 'App',
		components: {
			Sidebar,
			Toolbar,
			Footer
		},
		data() {
			return {};
		},
		computed: {
			...mapGetters( [ 'getDarkMode' ] )
		},
		beforeCreate() {
			this.$installAxios();
		}
	};
</script>

<style>
	html, body {
		overflow: hidden;
	}
</style>
