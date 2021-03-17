<template>
  <div id="nav">
<!--    <router-link to="/contact"> Formulario </router-link> |-->
<!--    <router-link to="/"> Dinámico </router-link> |-->
<!--    <router-link to="/slider"> Slider </router-link>-->
  </div>
  <router-view/>
</template>

<style>
#nav {
  position: fixed;
  left: 39%;
  z-index: 1;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
