<template>
  <div id="criarConta">
    <div id="caixaCriarConta">
      <h3>Criar uma nova Conta</h3>
      <input type="text" placeholder="Nome" v-model="nome" />
      <br />
      <input type="password" placeholder="Senha" v-model="senha" />
      <br />
      <button @click="Cadastrar">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return{
        nome: this.nome,
        senha: this.senha
      }
    },
  methods: {
    Cadastrar: function() {
        this.$router.replace("Login");
    }
  }
};
</script>

<style>
#criarConta {
  height: 100%;
  width: 100%;
}
#caixaCriarConta {
  text-align: center;
  border: 1px solid black;
  width: 350px;
  height: 300px;
  margin: auto;
  border-radius: 10px;
}
#caixaCriarConta h3 {
  padding: 10px;
}
#caixaCriarConta input {
  padding: 7px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid red;
}
#caixaCriarConta button {
  height: 30px;
  width: 105px;
  margin-top: 25px;
  border-radius: 5px;
  color: red;
  border: 1px solid black;
}
</style>