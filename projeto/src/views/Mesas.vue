<template>
  <div id="mesas">
    <div id="caixaMesas">
      <h1>Apenas Deliviry, Devido a Pandemia</h1>
      <button @click="Pedido">Faça seu Pedido</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    Pedido: function() {
      this.$router.replace("Pedido");
    }
  }
};
</script>

<style>
#mesas {
  display: flex;
  margin-top: 55px;
}
#caixaMesas {
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  width: 99%;
  height: 320px;
  text-align: center;
}
#caixaMesas h1 {
  color: red;
}
#caixaMesas button {
  border-radius: 5px;
  border: 2px solid black;
  background-color: red;
  color: white;
}
</style>
