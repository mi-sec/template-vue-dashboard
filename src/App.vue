<template>
	<v-app>
		<Sidebar/>
		<Toolbar/>

		<v-content :class="getDarkMode ? 'dark-mode' : 'light-mode'">
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
	.dark-mode {
		background: #303030;
	}

	.light-mode {
		background: #fafafa;
	}
</style>
