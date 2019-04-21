<template>
    <div>
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
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>