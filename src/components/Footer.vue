<template>
	<v-footer
		:dark="getDarkMode"
		class="pt-0 pb-0"
		height="26"
		inset
		tile
		app
	>
		<span class="px-3">&copy; {{ new Date().getFullYear() }}</span>

		<v-spacer></v-spacer>

		<v-btn
			height="26"
			width="26"
			tile
			icon
			x-small
			@click="setDarkMode()"
		>
			<v-icon>mdi-invert-colors</v-icon>
		</v-btn>
	</v-footer>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';

	export default {
		name: 'Footer',
		data() {
			return {};
		},
		computed: {
			...mapGetters( [ 'getDarkMode' ] )
		},
		methods: {
			...mapMutations( [ 'setDarkMode' ] )
		}
	};
</script>
