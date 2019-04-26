<template>
    <div id="app">
        <Navbar/>
        <div id="app-container">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "app",
    components: {
        Navbar,
        Footer
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

#app {
    text-align: center;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

input {
    border-radius: 0 !important;
}

.btn {
    border-radius: 0 !important;
    border-color: transparent !important;
    &.btn-primary {
        background-color: $red !important;
    }
}

.internal {
    background-color: rgba(0, 0, 0, 0.75);
    text-align: left;
    padding: 1em;
    margin-bottom: 50px;
    hr {
        border-top: 5px solid;
        border-color: $red;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
