
<template>
  <div id="topo">
    <div id="nav">
      <img alt="Vue logo" src="../public/imagens/chef.png" />
      <router-link to="/">Home</router-link>|
      <router-link to="/Mesas">Mesas</router-link>|
      <router-link to="/Contato">Contato</router-link>|
      <router-link to="/Login">Login</router-link>
      <span v-if="this.$store.state.anonimo <= 0">
        Voce está como Anônimo
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style>
#topo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 73px;
  width: 100%;
  background: red;
  color: #2c3e50;
  border-radius: 10px;
}
#nav {
  display: flex;
}

#nav a {
  display: flex;
  font-weight: bold;
  color:white;
  padding: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
}
#nav span{
  margin-left: auto;
  padding: 18px;
  color: white;
}

</style>
