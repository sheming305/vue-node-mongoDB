<template>

  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting"
         style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item @click.native="quick">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>您好:
      {{username}}
      <!-- {{$store.state.userInfo.userName}} -->
    </span>
    <slot name="one"></slot>
    <slot name="two"></slot>
  </el-header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = function(e) {
      var storage = window.localStorage;
      storage.clear();
    };
  },
  computed: {
    //用计算属性
    // username() {
    //   return this.$store.state.userInfo.userName;
    // },

    //1，直接利用计算属性得到用户信息user Info
    // userInfo() {
    //   return this.$store.state.userInfo;
    // },
    //2.可以利用辅助函数的形式获取用户的数据以及用户名
    ...mapState({
      userInfo: state => state.userInfo,
      username: state => state.userInfo.userName
    })
  },
  methods: {
    //异步操作函数
    // ...mapActions({

    // }),
    quick() {
      //有token带token
      // localStorage.removeItem('token')
      // sessionStorage.removeItem('token')

      //一下为测试demo没有接口的token
      // var storage = window.localStorage;
      // localStorage.removeItem();
      // sessionStorage.removeItem();
      // localStorage.clear();
      // sessionStorage.clear();
      this.$router.push({ name: "HelloWorld" });
    }
  },
  components: {}
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width: 100%;
}
.el-dropdown {
  float: right;
  margin-left: 10px;
}
</style>
