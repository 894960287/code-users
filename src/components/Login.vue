<template>
  <div class="login-container">
    <h1>登录页面</h1>
    <div class="font-login">
      <label for="username">登录名称：</label>
      <input type="text" id="username" class="form-control" placeholder="请输入登录名称" v-model.trim="username">
      <br>

      <label for="passworde">登录密码：</label>
      <input type="password" id="password" class="form-control" placeholder="请输入登录密码" v-model.trim="password">
      <br>

      <button type="button" class="btn" @click="reset">重置</button>
      <button type="button" class="btn">登录</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      reset() {
        this.username = ''
        this.password = ''
      }
    }
  }

</script>

<style lang="less" scoped>
  .login-container {
    font-size: 18px;
    /* text-align: center; */
    width: 100%;
    height: 100vh;
    background: #bad2ec
  }

  .btn {
    width: 50px;
    height: 30px;
    background-color: #40c1e9;
  }

</style>
