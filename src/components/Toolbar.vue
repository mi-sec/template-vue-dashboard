<template>
	<v-toolbar
		:dark="getDarkMode"
		clipped-left
		absolute
		dense
		app
	>

		<v-toolbar-side-icon
			@click="setSidebarModel"
		/>

		<v-toolbar-title class="headline">
			<span>template</span>
			<span class="font-weight-light">vue-dashboard</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn to="/" flat>Home</v-btn>
		</v-toolbar-items>

	</v-toolbar>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';

	export default {
		name: 'Toolbar',
		data() {
			return {};
		},
		methods: {
			...mapMutations( [ 'setSidebarModel' ] )
		},
		computed: {
			...mapGetters( [ 'getDarkMode' ] )
		}
	};
</script>
