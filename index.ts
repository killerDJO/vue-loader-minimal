import Vue from "vue";
import App from "./App.vue";

new Vue({
    components: { App },
    render(createElement) {
        return createElement("app");
    },
}).$mount(".app");