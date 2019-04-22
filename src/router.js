import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Waystogive from "./views/Waystogive.vue";
import Whygive from "./views/Whygive.vue";
import Areastosupport from "./views/Areastosupport.vue";

Vue.use(Router);

export default new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/ways-to-give",
			name: "waystogive",
			component: Waystogive
		},
		{
			path: "/why-give",
			name: "whygive",
			component: Whygive
		},
		{
			path: "/areas-to-give",
			name: "areas",
			component: Areastosupport
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
});