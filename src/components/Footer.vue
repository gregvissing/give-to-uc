<template>
    <footer id="custom-footer">
        <span class="mr-4">Copyright Information | &copy; 2019 University of Cincinnati Foundation</span>
        <span class="ml-4">
            Questions or need help?
            <font-awesome-icon icon="phone"/>
            <a data-v-236132e6 href="tel:513-558-6903" aria-hidden="true">513-558-6903</a>
            <font-awesome-icon icon="envelope"/>
            <a data-v-236132e6 href="mailto:ucgnistaff@uc.edu" aria-hidden="true">uc@uc.edu</a>
        </span>
    </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

footer {
    &#custom-footer {
        height: 3rem;
        background-color: $black;
        font-size: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            margin: 0 5px;
            path {
                fill: $red;
            }
        }
    }
}
</style>
