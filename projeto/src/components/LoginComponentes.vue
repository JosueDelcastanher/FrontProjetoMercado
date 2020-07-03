<template>
  <div class="login">
    <div id="caixaTelaLogin">
      <h3>Login</h3>
      <input type="text" placeholder="Nome" v-model="nome" />
      <br />
      <input type="password" placeholder="Senha" v-model="senha" />
      <br />
      <div class="btnLogin">
        <button @click="Login">Entrar</button>
      </div>
      <p>
        Não possui uma Conta?
        <span>
          <router-link to="/CriarConta">Criar uma Conta</router-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "TelaLogin",
  data: function() {
    return {
        nome: '',
        senha: ''
    };
  },
  methods: {
    Login: function() {
        axios.post("https://localhost:44314/api/cliente",{
          nome: this.nome,
          senha: this.senha
          }).then(resp => console.log(resp.data))
        this.$router.replace("/");
        }
        
    }
};
</script>
<style>
.login {
  height: 100%;
  width: 100%;
}
#caixaTelaLogin {
  text-align: center;
  border: 1px solid black;
  width: 350px;
  height: 300px;
  margin: auto;
  border-radius: 10px;
}
#caixaTelaLogin h3 {
  padding: 10px;
}
#caixaTelaLogin input {
  padding: 7px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid red;
}
#caixaTelaLogin button {
  height: 30px;
  width: 105px;
  margin-top: 25px;
  border-radius: 5px;
  color: red;
  border: 1px solid black;
}

#caixaTelaLogin p {
  padding: 10px;
}
</style>