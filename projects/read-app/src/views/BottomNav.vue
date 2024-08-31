<script setup></script>

<template>
  <div class="bottom-nav">
    <router-link to="/" exact>
      <span>书城</span>
    </router-link>
    <router-link to="/community">
      <span>社区</span>
    </router-link>
    <router-link to="/welfare">
      <span>福利</span>
    </router-link>
    <router-link to="/mine">
      <span>我的</span>
    </router-link>
  </div>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.1);
}
.bottom-nav router-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #999;
  text-decoration: none;
}
.bottom-nav router-link.active {
  color: #333;
}
</style>
