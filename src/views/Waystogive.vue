<template>
    <div class="internal container">
        <h1 class="page-title">Ways To Give</h1>
        <hr>
        <p>Whether you want to support next-generation cancer research, international learning opportunities, UC Athletics or everything in between, we want to make it easy for you to make a difference at UC and UC Health. There are a variety of ways you give back, and we are excited to work with you in building toward the future. Through Matching Gifts, Planned Giving, and other giving options you can make sure that your gift has the greatest possible impact on the UC and UC Health.</p>

        <p>Explore all of our giving options to learn more about how to make your gift have the greatest impact on campus and throughout our community.</p>

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
