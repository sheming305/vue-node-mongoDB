<template>
  <div>
    <span>使用getters 实现vip个人中心年龄过滤</span>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="userName"
                       label="用户姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="psd"
                       label="密码"
                       width="180">
      </el-table-column>
      <el-table-column prop="age"
                       label="年龄"
                       width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    ...mapActions({
      getuserList: "GET_USERLIST"
    }),
    getuserlist() {
      //方法1
      // this.getuserList().then(res => {
      //   this.tableData = this.userList;
      // });
      //方法2 使用全局getters过滤年龄
      this.getuserList().then(res => {
        //获取全局的getters 
        console.log(this.$store.getters.vipgetuser);
        // this.tableData = this.$store.getters.vipgetuser;

        //使用辅助函数获取全局的getters
        this.tableData = this.vipgetuser;
      });
    }
  },
  computed: {
    ...mapState({
      username: state => state.userInfo.userName,
      userList: state => state.userList
    }),
    ...mapGetters(["vipgetuser"])
  },
  mounted() {
    this.getuserlist();
  }
};
</script>
<style>
</style>