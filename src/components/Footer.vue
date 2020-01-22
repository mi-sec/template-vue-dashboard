<template>
	<v-footer
		app
		class="pt-0 pb-0"
		:inset="footer.inset"
		:height="footer.height"
	>
		<span class="px-3">&copy; {{ new Date().getFullYear() }}</span>

		<v-spacer></v-spacer>

		<v-btn
			height="26"
			width="26"
			tile
			icon
			x-small
			@click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
		>
			<v-icon>mdi-invert-colors</v-icon>
		</v-btn>
	</v-footer>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Footer',
		data() {
			return {};
		},
		computed: {
			...mapState( [ 'dark', 'footer' ] )
		}
	};
</script>
