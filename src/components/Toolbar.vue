<template>
	<v-app-bar
		app
		:clipped-left="appbar.clipped"
		:dense="appbar.dense"
	>
		<!--clipped-left dense tile flat app-->

		<v-app-bar-nav-icon
			@click.stop="sidebar.model = !sidebar.model"
		/>

		<v-toolbar-title class="headline">
			<span>template</span>
			<span class="font-weight-light">vue-dashboard</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn to="/" tile>Home</v-btn>
			<v-btn to="/info" tile>Info</v-btn>
		</v-toolbar-items>

	</v-app-bar>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Toolbar',
		data() {
			return {};
		},
		computed: {
			...mapState( [ 'appbar', 'sidebar' ] )
		}
	};
</script>
