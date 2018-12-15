<template>
  <div id="content">
    <!-- <img src="./assets/logo.png"> -->
    <div>欢迎来到首页vuejs</div>
    <div>用户的姓名为:{{$store.state.userInfo}}</div>
    <div style="margin-top:25px"></div>

    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px"
                style="background-color: rgb(238, 241, 246);height:100%">
        <div class="text-head">
          <div class='ems'>ems-管理系统</div>
        </div>
        <el-menu :default-openeds="['1', '2']"
                 default-active="userlist"
                 router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>系统管理</template>
            <el-menu-item index="userlist">用户数据</el-menu-item>
            <el-menu-item index="usermain">个人中心</el-menu-item>
            <el-menu-item index="userpassword">修改密码</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>后勤管理</template>
            <el-menu-item index="2-1">后勤日志</el-menu-item>
            <el-menu-item index="2-2">后勤人员</el-menu-item>
            <el-menu-item index="2-3">活动中心</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 引入头部 -->
      <el-container>
        <el-header>
          <Header>
            <span slot="one">111</span>
            <span slot="two">111</span>
          </Header>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Header: () => import("./common/header.vue")
  }
};
</script>

<style>
.el-menu {
  background-color: rgb(238, 241, 246) !important ;
}
.text-head {
  height: 28px;
  padding: 20px 0;
  text-align: center;
}
.text-head .ems {
  font-weight: bold;
  font-size: 18px;
}
</style>
