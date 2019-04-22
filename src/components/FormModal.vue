<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">Header</div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-8 is-offset-2">
                                    <div class="container-fluid">
                                        <table class="table table-bordered">
                                            <colgroup>
                                                <col width="50%">
                                                <col width="50%">
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>Form</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Text</label>
                                                            <input
                                                                v-model="message"
                                                                type="text"
                                                                class="form-control"
                                                            >
                                                        </div>
                                                    </td>
                                                    <td>{{ message }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Select</label>
                                                            <select
                                                                v-model="framework"
                                                                class="form-control"
                                                            >
                                                                <option value="vue">Vue.js</option>
                                                                <option value="react">React</option>
                                                                <option value="angular">Angular</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>{{ framework }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Checkbox</label>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="tools.webpack"
                                                                    type="checkbox"
                                                                    id="check1"
                                                                >
                                                                <label for="check1">Webpack</label>
                                                            </p>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="tools.babel"
                                                                    type="checkbox"
                                                                    id="check2"
                                                                >
                                                                <label for="check2">Babel</label>
                                                            </p>
                                                            <p class="mb-0">
                                                                <input
                                                                    v-model="tools.yarn"
                                                                    type="checkbox"
                                                                    id="check3"
                                                                >
                                                                <label for="check3">Yarn</label>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <pre>{{ tools }}</pre>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Checkbox 2</label>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="foods"
                                                                    type="checkbox"
                                                                    id="check4"
                                                                    value="🍕"
                                                                >
                                                                <label for="check4">Pizza</label>
                                                            </p>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="foods"
                                                                    type="checkbox"
                                                                    id="check5"
                                                                    value="🍩"
                                                                >
                                                                <label for="check5">Donut</label>
                                                            </p>
                                                            <p class="mb-0">
                                                                <input
                                                                    v-model="foods"
                                                                    type="checkbox"
                                                                    id="check6"
                                                                    value="🍣"
                                                                >
                                                                <label for="check6">Sushi</label>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span
                                                            v-for="(food, index) in foods"
                                                            :key="index"
                                                            class="mr-2"
                                                        >{{ food }}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Radio</label>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="lang"
                                                                    type="radio"
                                                                    id="r1"
                                                                    value="js"
                                                                >
                                                                <label for="r1">Good</label>
                                                            </p>
                                                            <p class="mb-1">
                                                                <input
                                                                    v-model="lang"
                                                                    type="radio"
                                                                    id="r2"
                                                                    value="php"
                                                                >
                                                                <label for="r2">PHP</label>
                                                            </p>
                                                            <p class="mb-0">
                                                                <input
                                                                    v-model="lang"
                                                                    type="radio"
                                                                    id="r3"
                                                                    value="html"
                                                                >
                                                                <label for="r3">HTML</label>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>{{ lang }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Textarea</label>
                                                            <textarea
                                                                v-model="description"
                                                                class="form-control"
                                                            ></textarea>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <pre class="mb-0">{{ description }}</pre>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Date</label>
                                                            <input
                                                                v-model="birthday"
                                                                type="date"
                                                                class="form-control"
                                                            >
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <pre class="mb-0">{{ birthday }}</pre>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>Range</label>
                                                            <input
                                                                v-model="range"
                                                                type="range"
                                                                class="form-control"
                                                                min="0"
                                                                max="10"
                                                            >
                                                        </div>
                                                    </td>
                                                    <td>{{ '🍔'.repeat(range) }} ({{ range }})</td>
                                                </tr>
                                                <!-- <tr>
                                                    <td>
                                                        <div class="form-group mb-0">
                                                            <label>File</label>
                                                            <input
                                                                v-model="file"
                                                                type="file"
                                                                class="form-control"
                                                                accept="image/*"
                                                            >
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <pre class="mb-0">{{ file }}</pre>
                                                    </td>
                                                </tr>-->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="modal-default-button" @click="$emit('close')">X</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
    name: "form-modal",
    components: {
        Form
    },
    data() {
        return {
            message: "",
            framework: "vue",
            tools: { webpack: true, babel: false, yarn: false },
            foods: ["🍩"],
            lang: "php",
            description: "This is textarea.",
            birthday: "1988-02-20",
            range: 3,
            file: null
        };
    },
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

.container-fluid {
    padding: 1rem 2%;
}

.table {
    table-layout: fixed;
}

.table tr td {
    vertical-align: middle;
}

.table tr td {
    word-wrap: break-word;
}

input[type="file"] {
    overflow: hidden;
}
</style>
