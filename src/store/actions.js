import axios from 'axios';

export default {
	async loadLocalConfig( context ) {
		try {
			const { data } = await axios.get( '/config.json' );
			context.commit( 'commitLocalConfig', data );
		} catch( e ) {
			console.error( e );
		}
	},
	async loadApiConfig( context ) {
		try {
			const data = await this.$api.getConfig();
			context.commit( 'commitConfig', data );
		} catch( e ) {
			console.error( e );
		}
	}
};
