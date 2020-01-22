<template>
	<v-app-bar
		app
		:clipped-left="appbar.clipped"
		:dense="appbar.dense"
	>
		<v-app-bar-nav-icon
			aria-label="nav"
			@click.stop="sidebar.model = !sidebar.model"
		/>

		<v-toolbar-title class="headline">
			<span>template</span>
			<span class="font-weight-light">vue-dashboard</span>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn to="/" tile aria-label="home">
				Home
			</v-btn>
			<v-btn to="/info" tile aria-label="info">
				Info
			</v-btn>
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
