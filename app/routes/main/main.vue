<template>
    <div>
        <p><a href="/">Home</a></p>
        <p><a href="/stampa">Stampa</a></p>
        <p><a href="/radio">Radio</a></p>
        <p><a href="/televisione">Televisione</a></p>
        <p><a href="/digitale">Digitale</a></p>
        <p><a href="/outofhome">Out of Home</a></p>
        <p><a href="/contatti">Contatti</a></p>
        <p><a href="javascript:void(0)" @click="test()">Test</a></p>
    </div>
</template>
<script>
export default {
    data: function () {
        return {}
    },
    methods: {
        test() {
            alert('Test Javascript');
        }
    }
}
</script>
