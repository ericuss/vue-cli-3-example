<template>
  <v-form class="login-form" v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      :rules="passwordRules"
      :counter="10"
      required
    ></v-text-field>
    <v-btn
      color="secondary"
      :loading="loading"
      @click.native="loader = 'loading'"
      :disabled="!valid || loading"
      v-on:click="loginClick"
    >
      Login
      <span slot="loader">Login ...</span>
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'loginForm',
  data: () => ({
    title: 'Login',
    loader: null,
    loading: false,
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters',
      v => v.length >= 4 || 'Password must be greatter than 4 characters',
    ],
  }),
  // computed: {
  //   isLogued() {
  //     return this.$store.getters['Islogin'];
  //   },
  // },
  methods: {
     ...mapActions(['login']),
     loginClick() {
       if (this.valid) {
         this.login({ username: this.name, password: this.password });
       }
    },
  },
  watch: {
    loader() {
      if (this.valid) {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => { this[l] = false; }, 3000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  width: 50vh;
}
</style>
