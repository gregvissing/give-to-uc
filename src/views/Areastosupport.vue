<template>
    <div class="internal">
        <div class="areas-submenu btn-group btn-group-toggle">
            <label
                class="btn btn-secondary"
                :class="{ 'select': selected === area.name, '': selected !== area.name }"
                v-for="(area, index) in areas"
                :key="index"
                :item="area.name"
                @click="changeSelectVal(area.name)"
            >
                <input type="radio" :value="area.name" name="area-filter" v-model="selected">
                {{ area.name }}
            </label>
        </div>
        <h1>Areas to Support</h1>
        <hr>
        <h3>Support the Causes Most Important to You</h3>

        <p>Your gift to the UC and UC Health makes an impact where you want. Give to your favorite college, program or department, or contribute to the university’s most pressing needs.</p>
        <p>UC and UC Health need your private support to continue growing and meeting the needs of students, faculty, researchers, doctors, patients and society. Explore our funding opportunities to determine the best match for your charitable gift.</p>

        <div class="container">
            <div class="row subareas">
                <modal v-show="showModal" :item="selectedItem" @close="deselect"></modal>

                <div v-for="(area, index) in areas" :key="index">
                    <div v-if="areaIndex == area.name">
                        <h2>{{ area.name}}</h2>
                        <p>
                            <strong>Description:</strong>
                            <br>
                            {{ area.description }}
                        </p>

                        <button
                            id="show-modal"
                            @click.prevent="selectItem(subarea)"
                            v-for="(subarea, index) in area.subareas"
                            :key="index"
                        >{{ subarea.name }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/x-template" id="modal-template">
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
import { areas } from "../data";
import modal from "@/components/Modal.vue";

export default {
    name: "areastosupport",
    components: {
        modal
    },
    data() {
        return {
            areas: areas,
            selected: "",
            areaIndex: "",

            selectedItem: undefined,
            showModal: false
        };
    },
    methods: {
        changeSelectVal: function(val) {
            this.areaIndex = val;
        },
        selectItem(subarea) {
            this.selectedItem = subarea;
            console.log(this.selectedItem);
            this.showModal = true;
        },
        deselect() {
            this.selectedItem = undefined;
            this.showModal = false;
        }
    }
    // template: "#modal-template"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

/* #app-container {
    padding-top: 2rem !important;
} */

.areas-submenu {
    position: fixed;
    top: 96px;
    left: 0;
    right: 0;
    label {
        background-color: $red;
        padding: 0.5rem 0.75rem;
        @include transition(all 0.4s ease);
        &.select,
        &:hover {
            background-color: $white;
            color: $black;
        }
    }
}

.subareas {
    h2 {
        margin-top: 1rem;
        border-bottom: 3px solid $red;
    }
    label {
        color: $white;
    }
    .subarea,
    button {
        padding: 5px 15px;
        border: 1px solid $white;
        margin-right: 5px;
        margin-bottom: 5px;
        display: inline-block;
        @include transition(all 0.4s ease);
        label {
            margin: 0;
            display: block;
            @include transition(all 0.4s ease);
        }
        &:hover {
            background: $white;
            label {
                color: $black;
            }
        }
    }
}

.container {
    max-width: 100%;
}
.areas {
    &.row {
        padding: 2em;
        .col-sm {
            padding: 0;
            .btn {
                padding: 0.5rem 0.75rem;
                width: 100%;
            }
        }
    }
}
</style>


