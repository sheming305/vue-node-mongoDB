<template>
  <div>
    <span>用户数据</span>
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
      <el-table-column label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click.native="handleEdit(scope.row)"
                     type="text"
                     size="small">编辑</el-button>
          <el-button type="text"
                     @click.native="handledelete(scope.row)"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//引入辅助函数
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tableData: []
    };
  },
  computed: {
    ...mapState({
      userList: state => state.userList
    })
  },
  async mounted() {
    await this.getlist();
  },
  methods: {
    getlist() {
      this.GET_USERLIST().then(res => {
        console.log("userlist获取到的数据为", this.userList);
        this.tableData = this.userList;
      });
    },
    handleEdit(row) {
      console.log(row);
    },
    handledelete(row) {
      console.log(row);
    },
    ...mapActions(["GET_USERLIST"])
  }
};
</script>
<style>
</style>