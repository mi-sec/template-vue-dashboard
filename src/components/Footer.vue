<template>
	<v-footer
		:dark="getDarkMode"
		inset
		app
	>
		<span class="px-3">&copy; {{ new Date().getFullYear() }}</span>

		<v-spacer></v-spacer>

		<v-btn
			flat
			icon
			@click="setDarkMode"
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
