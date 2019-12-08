<template>
    <v-app>
        <!-- ===== TopNavbar (menu) ===== -->
        <top-navbar></top-navbar>

        <!-- Content -->
        <v-content class="mb-5">
            <v-container>
                <!-- ===== Router view (content of components) =====  -->
                <router-view></router-view>
            </v-container>
        </v-content>

        <!-- ===== Footer ==== -->
        <footer-component></footer-component>
    </v-app>
</template>
<script>
import TopNavbar from "./Template/TopNavbar.vue";
import FooterComponent from "./Template/Footer.vue";

export default {
    components: { TopNavbar, FooterComponent }
};
</script>
