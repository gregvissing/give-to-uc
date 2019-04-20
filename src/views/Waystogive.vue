<template>
    <div class="internal">
        <h1>Ways To Give</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at felis eget sapien vestibulum pellentesque nec nec libero. Cras sed sapien eu ipsum egestas sodales sed in lacus. Etiam commodo tellus a arcu tristique, ut tempus turpis ornare. Quisque ac enim libero. Nullam imperdiet posuere consequat. Vivamus interdum tincidunt aliquam. Maecenas a arcu sed est ullamcorper posuere a et erat. Curabitur ut lectus arcu. Vestibulum elementum sodales finibus. Cras convallis justo purus, sit amet pellentesque odio pulvinar in. Maecenas eleifend nunc nec gravida posuere. Ut auctor turpis turpis. Nulla lacus ex, blandit quis feugiat in, ullamcorper sit amet nibh. Donec maximus elit sagittis enim eleifend laoreet.</p>
        <p>Morbi vehicula blandit risus et suscipit. Integer a orci vel sem luctus molestie. Cras eu varius leo. Nullam risus nibh, interdum ac ornare lacinia, consequat a lacus. Mauris est justo, vehicula id dui vel, eleifend facilisis urna. Fusce blandit, dolor in pellentesque consectetur, urna mi dictum arcu, eu dapibus tellus magna eget velit. Vestibulum et tincidunt dolor.</p>
        <div class="accordion" id="accordionExample">
            <div class="card" v-for="(way, index) in ways" :key="index">
                <div class="card-header" :id="'heading' + index">
                    <h2 class="mb-0">
                        <button
                            class="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            :data-target="'#collapse' + index"
                            aria-expanded="false"
                            :aria-controls="'collapse' + index"
                        >{{ way.name }}</button>
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
export default {
    name: "waystogive",
    data() {
        return {
            ways: [
                {
                    name: "Matching Gifts",
                    description:
                        "<p>Matching gift programs are a tremendous opportunity to double, or even triple, the impact of your gift!</p><p>Many employers sponsor matching gift programs and will match any charitable contributions made by their employees to the University of Cincinnati. Some companies match gifts made by retirees and/or spouses, so don’t forget to check your spouse’s employer as well!</p><p><strong>Find out if your company has a matching gift program.</strong></p>"
                },
                {
                    name: "Gift Planning",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Faculty & Staff Campaign",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Annual Giving",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    name: "Corporate & Foundation Relations",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
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
                    &:hover,
                    &[aria-expanded="true"] {
                        background: $red;
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
            }
        }
    }
}
</style>
