<template>
    <div class="internal">
        <h1>Ways To Give</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at felis eget sapien vestibulum pellentesque nec nec libero. Cras sed sapien eu ipsum egestas sodales sed in lacus. Etiam commodo tellus a arcu tristique, ut tempus turpis ornare. Quisque ac enim libero. Nullam imperdiet posuere consequat. Vivamus interdum tincidunt aliquam. Maecenas a arcu sed est ullamcorper posuere a et erat. Curabitur ut lectus arcu. Vestibulum elementum sodales finibus. Cras convallis justo purus, sit amet pellentesque odio pulvinar in. Maecenas eleifend nunc nec gravida posuere. Ut auctor turpis turpis. Nulla lacus ex, blandit quis feugiat in, ullamcorper sit amet nibh. Donec maximus elit sagittis enim eleifend laoreet.</p>
        <p>Morbi vehicula blandit risus et suscipit. Integer a orci vel sem luctus molestie. Cras eu varius leo. Nullam risus nibh, interdum ac ornare lacinia, consequat a lacus. Mauris est justo, vehicula id dui vel, eleifend facilisis urna. Fusce blandit, dolor in pellentesque consectetur, urna mi dictum arcu, eu dapibus tellus magna eget velit. Vestibulum et tincidunt dolor.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie convallis magna porttitor aliquam. Proin aliquet justo malesuada mi efficitur, ut tempor ipsum suscipit. Quisque quis consequat nibh, ut maximus purus. Nulla metus elit, sagittis suscipit enim in, fringilla viverra lacus. Vivamus mollis felis mauris, id fringilla purus dapibus quis. Nam eget lobortis lectus. Nulla urna sapien, gravida quis massa at, viverra accumsan velit. Nunc bibendum sapien a felis rutrum consectetur id nec tellus.</p>
        <div class="accordion" id="accordionExample">
            <div class="card" v-for="(way, index) in options" :key="index">
                <div class="card-header" :id="'heading' + index">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            :data-target="'#collapse' + index"
                            aria-expanded="false"
                            :aria-controls="'collapse' + index"
                        >
                            <font-awesome-icon icon="plus"/>
                            {{ way.name }}
                        </button>
                    </h2>
                </div>
                <div
                    :id="'collapse' + index"
                    class="collapse"
                    :aria-labelledby="'heading' + index"
                    data-parent="#accordionExample"
                >
                    <div class="card-body" v-html="way.description"></div>
                </div>
            </div>
        </div>

        <h3>Make a gift now</h3>

        <h4>By phone</h4>
        <p>Pledge your support, or make a gift with a credit card, by calling:</p>
        <p>123-456-7890</p>
    </div>
</template>

<script>
import { ways } from "../data";
export default {
    name: "waystogive",
    props: {
        value: {
            default: ""
        },
        options: {
            type: Array,
            default: () => [...Object.values(ways)]
        },
        name: {
            type: String,
            default: "tech-filter"
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.accordion {
    margin: 2em 0;
    border: 3px solid $white;
    .card {
        background: $black;
        border-radius: 0;
        .card-header {
            padding: 0;
            h2 {
                border-bottom: 1px solid $white;
                button {
                    padding: 1rem 2rem;
                    color: $white;
                    text-align: left;
                    width: 100%;
                    @include transition(all 0.4s ease);
                    svg {
                        margin-right: 10px;
                        transform: rotate(0deg);
                        @include transition(all 0.4s ease);
                    }
                    &:hover,
                    &[aria-expanded="true"] {
                        background: $red;
                    }
                    &[aria-expanded="true"] {
                        svg {
                            transform: rotate(-135deg);
                        }
                    }
                }
            }
        }
        &:last-child {
            h2 {
                border-bottom: none;
            }
        }
        .collapse {
            .card-body {
                border-bottom: 1px solid $white;
                color: $white;
            }
        }
    }
}

/* Add Indicator fontawesome icon to the left */
/* .accordion {
    .card-header {
        .btn-link {
            &:before {
                font-family: "Font Awesome";
                content: "\f00d";
                float: left;
                color: white;
                font-weight: lighter;
                transform: rotate(0deg);
                transition: all 0.2s ease-in;
            }
            &.collapsed::before {
                color: #444;
                transform: rotate(-135deg);
                transition: all 0.2s ease-in;
            }
        }
    }
} */
/* .accordion .panel-heading .accordion-toggle.collapsed::before {
    color: #444;
    transform: rotate(-135deg);
    transition: all 0.2s ease-in;
} */
</style>
