<template>
  <div id="app">
    <img src="@/assets/logo.png" />
    <h1>mv-count-down 倒计时组件</h1>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
