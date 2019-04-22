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
                            <a href="#" class="nav-link donate">DONATE NOW</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" @click.prevent="showSearch = !showSearch">
                                <font-awesome-icon icon="search"/>
                            </a>
                        </li>
                    </ul>
                    <form
                        v-show="showSearch == true"
                        class="form-inline mt-2 mt-md-0 search-container"
                    >
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
    },
    method: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
            if (window.scrollY > 100) {
                $("nav").addClass("reduced");
                $(".scrollToTop").fadeIn();
            } else {
                $("nav").removeClass("reduced");
                $(".scrollToTop").fadeOut();
            }
        }
    },
    created: function() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
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
    .dropdown-menu {
        padding: 0;
        border-radius: 0;
        .dropdown-item {
            padding: 0.5rem 1.5rem;
            @include transition(all 0.4s ease);
            &:hover {
                background-color: $black;
                color: $white;
            }
        }
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
            margin: 0 10px 0 0;
            &:last-child {
                margin: 0;
            }
            .nav-link {
                color: $white;
                padding: 1rem 0.75rem;
                text-transform: uppercase;
                position: relative;
                @include transition(all 0.4s ease);
                &:not(.donate):hover,
                &.active {
                    /* background-color: $white !important; */
                    color: $red !important;
                    background: rgba($white, 0.1);
                    box-sizing: border-box;
                    &:before {
                        content: "";
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: 3px;
                        width: 100%;
                        background: $red;
                    }
                    svg path {
                        fill: $red !important;
                    }
                }
                &:last-child {
                    &:hover {
                        &:before {
                            display: none;
                        }
                    }
                }
                &.donate {
                    background-color: $red;
                    &:hover {
                        background-color: $white;
                        border: none;
                        color: $red !important;
                        border: none;
                    }
                }
            }
        }
    }
    &.reduced {
        padding-top: 0;
        padding-bottom: 0;
    }
    /* .nav-container .brand img {
        height: 60px;
    }

    .navigation.reduced .nav-container .brand {
        line-height: 60px;
    }

    .navigation.reduced .nav-container {
        height: 60px;
    } */

    .search-container {
        position: absolute;
        right: 50px;
        input {
            border: 5px solid #666 !important;
            padding: 1.5rem;
            width: 750px;
        }
    }
}
#app .fade-enter-active,
#app .fade-leave-active {
    transition: opacity 0.5s;
}
#app .fade-enter,
#app .fade-leave-to {
    opacity: 0;
}
</style>