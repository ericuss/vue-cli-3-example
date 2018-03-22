<template>
  <div class="login">
    <img src="../assets/logo.png">
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  computed: {
    isLogued() {
        return this.$store.getters.isLogued;
    },
  },
};
</script>
