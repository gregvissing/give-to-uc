<template>
    <div class="internal">
        <h1>Areas to Support</h1>
        <hr>
        <h3>Support the Causes Most Important to You</h3>

        <p>Your gift to the UC and UC Health makes an impact where you want. Give to your favorite college, program or department, or contribute to the university’s most pressing needs.</p>
        <p>UC and UC Health need your private support to continue growing and meeting the needs of students, faculty, researchers, doctors, patients and society. Explore our funding opportunities to determine the best match for your charitable gift.</p>

        <div class="container">
            <!-- <vue-tabs>
                <vue-tab
                    :label="area.name"
                    :active="true"
                    v-for="(area, index) in areas"
                    :key="index"
                >
                    <div class="letter-text-container" id="peterText"></div>
                </vue-tab>
            </vue-tabs>-->

            <!-- <div class="row">
                <b-tabs content-class="mt-0">
                    <b-tab :title="area.name" v-for="(area, index) in areas" :key="index">
                        <h3>{{ area.name }}</h3>
                        <p>Description: {{ area.description }}</p>
                        <div v-for="(subarea, index) in area.subareas" :key="index">
                            <label>{{ subarea.name }}</label>
                            <p>{{ subarea.description }}</p>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>-->
            <div class="row">AreaIndex: {{ areaIndex }}</div>
            <div class="row areas">
                <!-- <div class="form-group">
                    <RadioGroup :areas="areas" :selected.sync="area" v-model="area"/>
                </div>-->

                <b-button-group class="col-sm" v-for="(area, index) in areas" :key="index">
                    <b-button
                        class="btn btn-secondary text-center"
                        @click.prevent="areaIndex = index"
                    >{{ area.name }}</b-button>
                </b-button-group>
            </div>

            <div class="row subareas">
                <div v-for="(area, index) in areas" :key="index">
                    <div>
                        <p>Description: {{ area.description }}</p>
                        <div v-for="(subarea, index) in area.subareas" :key="index">
                            <label>{{ subarea.name }}</label>
                            <p>{{ subarea.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "areastosupport",
    data() {
        return {
            areaIndex: "",
            areas: [
                {
                    name: "Colleges and School",
                    description:
                        "Your support of individual colleges within the University of Cincinnati helps support scholarships, research and special programs throughout UC. Select a college below to learn more about that school's vision and read about funds that have been identified as priorities.",
                    subareas: [
                        {
                            name: "College of Allied Health Sciences",
                            description: ""
                        },
                        {
                            name: "McMicken College of Arts & Sciences",
                            description: ""
                        },
                        {
                            name: "Carl H. Lindner College of Business",
                            description: ""
                        },
                        { name: "UC Clermont College", description: "" },
                        {
                            name: "College-Conservatory of Music",
                            description: ""
                        },
                        {
                            name:
                                "College of Design, Architecture, Art, and Planning"
                        },
                        {
                            name:
                                "College of Education, Criminal Justice and Human Services"
                        },
                        {
                            name: "College of Engineering and Applied Science",
                            description: ""
                        },
                        { name: "College of Law", description: "" },
                        { name: "College of Medicine", description: "" },
                        { name: "College of Nursing", description: "" },
                        {
                            name: "James L. Winkle College of Pharmacy",
                            description: ""
                        },
                        { name: "UC Blue Ash College", description: "" },
                        { name: "The Graduate School", description: "" }
                    ]
                },
                {
                    name: "Scholarships",
                    description:
                        "Support scholarship programs to make an impact directly on the lives of students in need. Select a scholarship fund below to learn more about special scholarship initiatives and how you can support students today.",
                    subareas: [
                        { name: "UC Alumni Association", description: "" },
                        { name: "Annual Giving", description: "" },
                        { name: "UC Bearcats Pantry", description: "" },
                        { name: "Diversity Initiatives", description: "" },
                        { name: "Henry R. Winkler Center", description: "" },
                        { name: "Gen-1 House", description: "" },
                        {
                            name: "Institute for Policy Research",
                            description: ""
                        },
                        {
                            name: "Osher Lifelong Learning Institute",
                            description: ""
                        },
                        { name: "UC Parents Campaign", description: "" },
                        { name: "Research", description: "" },
                        {
                            name: "A Salute to Service Program",
                            description: ""
                        },
                        { name: "Science Programs", description: "" },
                        { name: "Student Life", description: "" },
                        {
                            name: "UCATS - UC Athletics Team Support",
                            description: ""
                        },
                        { name: "University Honors Program", description: "" },
                        { name: "UC International", description: "" },
                        { name: "UC Libraries", description: "" },
                        { name: "Provost Programs", description: "" }
                    ]
                },
                {
                    name: "UC Health",
                    description:
                        "Support programs within UC Health that promote patient care, treatment and cutting-edge research. Select an area below to learn more about funding priorities and how you can make a difference in the areas you value most.",
                    subareas: [
                        { name: "UC Cancer Institute", description: "" },
                        {
                            name: "UC Gardner Neuroscience Institute",
                            description: ""
                        },
                        {
                            name: "Heart, Lung & Vascular Institute",
                            description: ""
                        }
                    ]
                },
                {
                    name: "University-wide Initiatives",
                    description:
                        "Learn more about programs that make an impact across all areas of UC and UC Health. Select an area below to learn more about funding priorities and how you can make a difference in the areas you value most.",
                    subareas: [
                        {
                            name: "Cincinnatus Scholarship Program",
                            description: ""
                        },
                        {
                            name: "Darwin T. Turner Scholars Program",
                            description: ""
                        },
                        {
                            name: "Linda Bates Parker Scholarship",
                            description: ""
                        },
                        { name: "UCAA Scholarships", description: "" },
                        { name: "Athletic Scholarships", description: "" },
                        {
                            name: "Endowed Funds & Scholarships",
                            description: ""
                        },
                        {
                            name: "Lindner Honors-PLUS Scholarship Program",
                            description: ""
                        },
                        {
                            name: "Kolodzik Business Scholars Program",
                            description: ""
                        },
                        {
                            name: "Business Fellows Annual Scholarship Fund",
                            description: ""
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

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

.tabs {
    background: rgba($white, 0.75);
    a.nav-link {
        color: $red;
    }
    .tablist {
        .nav-item {
            .nav-link {
                color: $red !important;
                &.active {
                    color: $black !important;
                }
            }
        }
    }
    .tab-content {
        border: 1px solid $white;
        > .tab-pane {
            &.active {
                padding: 1em;
            }
            &:focus {
                outline: none;
            }
            h3 {
                color: $red;
            }
        }
    }
}
</style>


