<script>
export default {
    name: "vue-tabs",
    data() {
        return {
            Tabs: {
                labels: [],
                items: [],
                active: 0
            }
        };
    },
    computed: {
        active() {
            return this.Tabs.active;
        }
    },
    methods: {
        setHeight() {
            const el = this.Tabs.items[this.active];
            // const height = el.scrollHeight;
            this.$refs.container.style.height = "100vh"; // height + 'px';
        },
        scrollWrapper() {
            const { wrapper } = this.$refs;
            const offset = 100 * this.active;
            wrapper.style.transform = "translate3d(-" + offset + "%, 0, 0)";
        },
        changeTab(i) {
            this.Tabs.active = i;
            this.setHeight();
            this.scrollWrapper();
        }
    },
    provide() {
        return {
            Tabs: this.Tabs
        };
    },
    mounted() {
        this.setHeight();
        this.scrollWrapper();
        this.debounce = _.debounce(this.setHeight, 50);
        window.addEventListener("resize", this.debounce);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.debounce);
    }
};
</script>

<template>
    <div class="tabs">
        <div class="tabs__list">
            <div
                class="tabs__tab"
                :class="{'tabs__tab_active': i === active}"
                @click="changeTab(i)"
                v-for="(label, i) in Tabs.labels"
                :key="i"
            >{{label}}</div>
        </div>
        <div class="tabs__container" ref="container">
            <div class="tabs__wrapper" ref="wrapper">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.tabs {
    margin: 0px auto;
    max-width: 100%;
    background: #fff;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1);
    .tabs__list {
        display: flex;
        height: 40px;
        border-bottom: solid 1px #e9e9e9;
    }
    .tabs__tab {
        padding: 0 14px;
        width: 50%;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.7);
        font-size: 1em; // 13px;
        font-weight: bold;
        text-transform: uppercase;
        justify-content: center;
        cursor: pointer;
        padding: 10px !important;
        @include transition(all, 0.4s, ease-out);
        &:hover {
            background: rgba($black, 0.5);
            color: $white;
        }
    }
    .tabs__tab_active {
        color: $white;
        background-color: $black;
    }
    .tabs__container {
        position: relative;
        overflow: scroll;
        padding-bottom: 100px;
        will-change: height;
        transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        .tabs__wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            will-change: transform;
            transition: -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1),
                -webkit-transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            .tabs__content {
                flex: 1 0 100%;
                width: 100%;
                padding: 16px;
            }
        }
    }
}
</style>
