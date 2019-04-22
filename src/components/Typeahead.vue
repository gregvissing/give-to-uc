<template>
    <div>
        <input
            v-model="query"
            @blur="reset"
            type="text"
            class="SearchInput"
            :placeholder="placeholder"
        >
        <transition-group name="fade" tag="ul" class="Results">
            <li v-for="(item, index) in filtered" :key="index+1">
                <span>
                    <strong>{{ item.title }}</strong>
                    <br>
                    <small>{{ item.desc }}</small>
                </span>
            </li>
        </transition-group>
        <p v-show="isEmpty">Sorry, but we can't find any match for given term :(</p>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import _ from "lodash";

export default {
    name: "Typeahead",
    props: {
        // source: {
        //     type: [String, Array],
        //     required: true
        // },
        filterKey: {
            type: String,
            required: true
        },
        startAt: {
            type: Number,
            default: 2
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            items: [],
            query: ""
        };
    },
    mounted() {
        this.fetchItems();
    },
    computed: {
        filtered() {
            if (this.query.length >= this.startAt) {
                return this.items.filter(item => {
                    if (item.hasOwnProperty(this.filterKey)) {
                        return (
                            item[this.filterKey]
                                .toLowerCase()
                                .indexOf(this.query.toLowerCase()) > -1
                        );
                    } else {
                        console.error(
                            `Seems like property you passed down ${
                                this.filterKey
                            } doesn't exist on object ! `
                        );
                    }
                });
            }
        },
        isEmpty() {
            if (typeof this.filtered === "undefined") {
                return false;
            } else {
                return this.filtered.length < 1;
            }
        }
    },
    methods: {
        fetchItems() {
            var vm = this;
            axios
                .get(
                    // "https://foundation.uc.edu/WebApi/Query/40664e66-2729-4b1a-8cea-964b987c0833"
                    "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be"
                )
                .then(response => {
                    this.rows = [...Object.values(response.data.Rows)];
                    // console.log(this.rows);
                    var topLevelAll = [];
                    var fundMaster = [];
                    $.each(this.rows, function() {
                        // define values
                        var values = this.Values;
                        var target = values[1]; // Fund names
                        var splitter = target.split("\\");
                        if (splitter.length > 1) {
                            splitter.shift();
                        }
                        splitter.push(values[4]); // Descriptions
                        // topLevelAll.push(splitter[0]);
                        fundMaster.push(splitter);
                    });
                    // function onlyUnique(value, index, self) {
                    //     return self.indexOf(value) === index;
                    // }
                    // var topLevelUnique = topLevelAll.filter(onlyUnique);
                    function multiDimensionalUnique(arr) {
                        var uniques = [];
                        var itemsFound = {};
                        for (var i = 0, l = arr.length; i < l; i++) {
                            var stringified = JSON.stringify(arr[i]);
                            if (itemsFound[stringified]) {
                                continue;
                            }
                            if (arr[i][0].length != 0) {
                                uniques.push(arr[i]);
                            }
                            itemsFound[stringified] = true;
                        }
                        return uniques;
                    }
                    var uniqueFunds = multiDimensionalUnique(fundMaster);

                    var fundArr = [];
                    $.each(uniqueFunds, function(x, subFund) {
                        var fundRowData = {
                            title: subFund[0],
                            desc: subFund[1],
                            titledesc: subFund[0] + " " + subFund[1]
                        };
                        fundArr.push(fundRowData);
                    });
                    console.log(fundArr);
                    this.items = fundArr;
                });
        },
        reset() {
            this.query = "";
        }
    }
};
</script>

<style lang="scss" scoped>
#app .SearchInput {
    width: 90% !important;
    padding: 1.5em 1em !important;
    font-size: 1em !important;
    outline: 0 !important;
    border: 5px solid #000 !important;
    color: #000;
}
#app .Results {
    width: 90%;
    margin: 0 auto;
    padding: 0;
    text-align: left;
    position: relative;
}
#app .Results li {
    background: rgba(53, 73, 94, 0.5);
    margin: 0;
    padding: 1em;
    list-style: none;
    width: 90%;
    border-bottom: 1px solid #394e62;
    transition: ease-in-out 0.5s;
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
