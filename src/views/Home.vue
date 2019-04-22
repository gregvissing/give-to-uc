<template>
    <div class="home">
        <!-- <img src="https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg"> -->
        <div class="hero">
            <h2 class="text-center">Make Your Impact</h2>
            <h1 class="text-center">Your support of UC and UC Health changes lives.</h1>
            <button
                id="show-modal"
                class="btn btn-primary"
                @click.prevent="showModal = true"
            >DONATE NOW</button>

            <FormModal v-show="showModal" @close="deselect"></FormModal>
            <!-- <button class="btn btn-primary">DONATE NOW</button> -->
        </div>

        <div class="Wrap text-center">
            <p
                class="text-center search-text"
            >Use the search box to find the fund you want to Impact!</p>
            <Typeahead
                placeholder="What Fund you are looking for..."
                filter-key="titledesc"
                :start-at="2"
            ></Typeahead>
        </div>

        <div class="Wrap featuredFund">
            <p class="text-center search-text">Featured Funds</p>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img
                                class="card-img-top"
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                alt="Thumbnail [100%x225]"
                                style="height: 225px; width: 100%; display: block;"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a45a727a7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a45a727a7%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8359375%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                data-holder-rendered="true"
                            >
                            <div class="card-body">
                                <strong>Fund Name</strong>
                                <p
                                    class="card-text"
                                >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img
                                class="card-img-top"
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                alt="Thumbnail [100%x225]"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a45a727a9%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a45a727a9%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8359375%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                data-holder-rendered="true"
                                style="height: 225px; width: 100%; display: block;"
                            >
                            <div class="card-body">
                                <strong>Fund Name</strong>
                                <p
                                    class="card-text"
                                >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img
                                class="card-img-top"
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                alt="Thumbnail [100%x225]"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a45a727aa%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a45a727aa%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8359375%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                data-holder-rendered="true"
                                style="height: 225px; width: 100%; display: block;"
                            >
                            <div class="card-body">
                                <strong>Fund Name</strong>
                                <p
                                    class="card-text"
                                >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/x-template" id="modal-form-template">
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                Test
                <slot name="closebutton">default close button</slot>
                <div class="modal-header">
                    <slot name="header">default header</slot>
                    <slot name="subHeader">default sub-header</slot>
                </div>
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>
            </div>
        </div>
    </div>
</transition>;
</script>

<script>
// @ is an alias to /src
import Typeahead from "@/components/Typeahead.vue";
import FormModal from "@/components/FormModal.vue";

export default {
    name: "home",
    components: {
        Typeahead,
        FormModal
    },
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        selectItem(subarea) {
            // this.selectedItem = subarea;
            // console.log(this.selectedItem);
            this.showModal = true;
        },
        deselect() {
            // this.selectedItem = undefined;
            this.showModal = false;
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

body {
    margin: 0;
}
#app {
    /* height: 100vh; */

    &:before {
        content: " ";
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
}

.home {
    padding-bottom: 2.75rem;
}

.hero {
    padding: 4em 2em;
    background-color: rgba(255, 255, 255, 0.6);
    position: relative;
    h1 {
        color: $black !important;
        font-style: italic;
        font-weight: bold;
        margin: 0.5em 0;
    }
    h2 {
        font-weight: bold;
        font-size: 2.5rem;
        color: $red !important;
    }
    button {
        font-size: 1.5em;
    }
}
.Wrap {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0;
    margin-top: 1em;
    p.search-text {
        color: $white;
        font-weight: bold;
        font-size: 1.25em;
        padding: 10px 0;
        margin: 0;
        background: $red;
    }
    > div {
        padding: 25px 0;
    }
    &.featuredFund {
        .card-body {
            p {
                color: #666;
                text-align: left;
            }
        }
    }
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
