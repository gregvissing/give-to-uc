<template>
    <div class="home">
        <div class="hero">
            <h2 class="text-center">Make Your Impact</h2>
            <h1 class="text-center">Your support of UC and UC Health changes lives.</h1>
            <button class="btn btn-primary">GIVE NOW</button>
        </div>

        <div class="Wrap text-center">
            <p
                class="text-center search-text"
            >Use the search box to find the fund you want to Impact!</p>
            <Typeahead
                placeholder="What Fund you are looking for..."
                filter-key="titledesc"
                :start-at="2"
            ></Typeahead>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Typeahead from "@/components/Typeahead.vue";

export default {
    name: "home",
    components: {
        Typeahead
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

body {
    margin: 0;
}
#app {
    background-image: url(https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

/* .home {
    background-image: url(https://www.alumni.uc.edu/image/home-full-width/MM-Geen-3.jpg);
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
} */

.hero {
    padding: 4em 2em;
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    h1 {
        color: $black !important;
        font-style: italic;
        font-weight: bold;
        margin: 0.5em 0;
    }
    h2 {
        font-weight: bold;
        font-size: 2.5rem;
        color: $red !important;
    }
    button {
        font-size: 1.5em;
    }
}
.Wrap {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0;
    margin-top: 1em;
    p.search-text {
        color: $white;
        font-weight: bold;
        font-size: 1.25em;
        padding: 10px 0;
        margin: 0;
        background: $red;
    }
    > div {
        padding: 25px 0;
    }
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
