<template>
    <v-app>
        <Sidebar/>
        <Toolbar/>
        <v-main>
            <v-container fluid ma-0 pa-0>
                <router-view></router-view>
            </v-container>
        </v-main>
        <Footer/>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex';

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
    metaInfo() {
        return {
            title: process.env.VUE_APP_TITLE,
            description: process.env.VUE_APP_DESCRIPTION
        };
    },
    data() {
        return {
            drawer: null
        };
    },
    beforeCreate() {
        this.$installAxios();
        this.$installLogger();
    },
    async mounted() {
        await this.getConfig();
    },
    methods: {
        ...mapActions( [ 'getConfig' ] )
    }
};
</script>

<style>
html, body {
    overflow: hidden;
}
</style>
