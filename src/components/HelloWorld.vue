<template>
    <div class="hello">
        <h2>Whose world will you change?</h2>
        <h1>{{ msg }}</h1>
        <button class="btn btn-primary">GIVE NOW</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    padding: 4em;
    background-color: rgba(255, 255, 255, 0.4);
    h1 {
        color: #000;
    }
    h2 {
        color: #e00122;
    }
    button {
        font-size: 2em;
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
