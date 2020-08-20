<template>
  <v-app id="app">

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}

.ubtn {
 background: linear-gradient(to right, #00f260, #0575e6);
} 

</style>
