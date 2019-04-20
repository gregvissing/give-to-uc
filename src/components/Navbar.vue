<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark custom-bg-dark">
                <router-link to="/" class="navbar-brand">
                    <img
                        alt="University of Cincinnati Foundation"
                        src="https://foundation.uc.edu/image/css/logo-ucFoundation.png"
                    >
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/ways-to-give" class="nav-link" exact>Ways to give</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/why-give" class="nav-link" exact>Why Give</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/areas-to-give" class="nav-link" exact>Areas to Support</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" @click.prevent="showSearch = !showSearch">
                                <font-awesome-icon icon="search"/>
                            </a>
                        </li>
                    </ul>
                    <form v-show="showSearch == true" class="form-inline mt-2 mt-md-0">
                        <transition name="fade">
                            <input
                                class="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            >
                            <!-- <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button> -->
                        </transition>
                    </form>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            showSearch: false
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

nav {
    height: 6rem;
    &.custom-bg-dark {
        background-color: $black !important;
    }
    .navbar-brand {
        img {
            height: 62px !important;
            width: auto !important;
            max-width: auto !important;
        }
    }
    .navbar-nav {
        .nav-item {
            margin: 0;
            .nav-link {
                color: $white;
                padding: 1rem 0.75rem;
                text-transform: uppercase;
                @include transition(all 0.4s ease);
                &:hover,
                &.active {
                    background-color: $white !important;
                    color: $black !important;
                    svg path {
                        fill: $black !important;
                    }
                }
            }
        }
    }
}
#app .fade-enter-active,
#app .fade-leave-active {
    transition: opacity 0.3s;
}
#app .fade-enter,
#app .fade-leave-to {
    opacity: 0;
}
</style>