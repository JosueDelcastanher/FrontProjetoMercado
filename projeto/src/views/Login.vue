<template> 
<div id="app">
  <div id="Login" v-if="this.$store.state.anonimo <= 0">
    <LoginComponentes/>
  </div>
  <div id="cliente" v-if="this.$store.state.anonimo > 0" >
     <TelaCliente/>
  </div>
</div>
</template>

<script>
import LoginComponentes from "../components/LoginComponentes.vue"
import TelaCliente from "../components/TelaCliente"
export default {
components: {
   LoginComponentes,
   TelaCliente
 }
};
</script>