const pack = require( './package.json' );

process.env.VUE_APP_TITLE       = pack.name;
process.env.VUE_APP_DESCRIPTION = pack.description;
process.env.VUE_APP_VERSION     = pack.version;

module.exports = {
	productionSourceMap: process.env.NODE_ENV !== 'production',
	transpileDependencies: [
		'vuetify'
	]
};
