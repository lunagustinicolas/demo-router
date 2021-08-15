<template>
<div>
HOLA
<input  v-if="true" type="text" v-model="nu">
<dos v-if="nu" :nom ="nu"/>
<button @click="cli()">asdsa</button>
</div>
</template>

<script>
import dos from './Dos.vue';

export default {
    data() {
        return {
            nu:"",
            si: false
        }
    },
components: {
    dos
},
methods: {
    cli() {
        console.log("asdasdasdas")
        this.si = true;
    }
}
}
</script>

<style>

</style>