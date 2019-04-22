<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>Search</h2>
                    </div>
                    <div class="modal-body Wrap text-center">
                        <Typeahead
                            placeholder="What Fund you are looking for..."
                            filter-key="titledesc"
                            :start-at="2"
                        ></Typeahead>
                    </div>

                    <button class="modal-default-button" @click="$emit('close')">X</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Typeahead from "@/components/Typeahead.vue";

export default {
    name: "search-modal",
    // props: ["item"],
    components: {
        Typeahead
    },
    // props: {
    //     item: {
    //         type: Object,
    //         requred: true
    //     }
    // },
    methods: {
        close() {
            this.$emit("close");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

.modal-mask {
    position: fixed;
    z-index: 99999998;
    top: 97px;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid $white;
    background-color: rgba(0, 0, 0, 0.75);
    display: table;
    transition: opacity 0.3s ease;
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        .modal-container {
            width: 100%;
            height: 100vh;
            margin: 0px auto;
            padding: 0px 0px 20px !important;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            font-family: Helvetica, Arial, sans-serif;
            position: relative;
            .modal-header {
                background: $black;
                border-radius: 0;
                border-bottom: 3px solid $red;
                h3 {
                    margin-top: 0;
                    color: #42b983;
                }
            }

            .modal-body {
                margin: 20px 0;
                padding: 10px 20px;
                h3 {
                    margin: 0 !important;
                    font-weight: bold;
                    color: $black;
                }
            }
            .modal-default-button {
                position: absolute;
                top: 0;
                right: 0;
                width: 35px;
                height: 35px;
                margin: auto;
                border-color: $black;
                color: $white;
                background: $red;
            }
        }
    }
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
