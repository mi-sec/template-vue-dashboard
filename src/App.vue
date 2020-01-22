<template>
	<v-app>
		<Sidebar/>
		<Toolbar/>

		<v-content>
			<v-container fluid ma-0 pa-0>
				<router-view></router-view>
			</v-container>
		</v-content>

		<Footer/>
	</v-app>
</template>

<script>
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
