<template>
    <div>
      <p>{{ message }}</p>
      <button @click="changeMessage">Thay đổi Chữ</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      message() {
        return this.$store.getters.getMessage;
      }
    },
    methods: {
      changeMessage() {
        this.$store.dispatch('changeMessage', 'Nghia');
      }
    }
  };
  </script>
  