<template>
  <div class="hello">
    <el-form :model="ruleForm2"
             status-icon
             :rules="rules2"
             ref="ruleForm2"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="用户名"
                    prop="userName">
        <el-input type="user"
                  v-model="ruleForm2.userName"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="psd">
        <el-input type="password"
                  v-model="ruleForm2.psd"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄"
                    prop="age">
        <el-input type="userage"
                  v-model="ruleForm2.age"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm2')">提交注册</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <el-button @click="login">去登陆</el-button>
      </el-form-item>
      <!-- //插入背景图测试 -->
      <span>插入背景图测试</span>
      <span class="pan"></span>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        userName: "",
        psd: "",
        age: ""
      },
      rules2: {
        userName: [
          { required: true, message: "请填写姓名", trigger: "change" }
        ],
        psd: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            userName: this.ruleForm2.userName,
            psd: this.ruleForm2.psd,
            age: this.ruleForm2.age
          };
          this.$axios.post("/api/checklogin", data).then(res => {
            if (res.status === 200) {
              // localStorage.setItem('userInfo',JSON.stringify(res.data))
              // let userInfo = JSON.parse(localStorage.getItem('userInfo'))
              //将用户数据存入vuex中
              this.$store.commit("SAVE_USERINFO", res.data);
              console.log(res.data);
              this.$message({
                type: "success",
                message: "注册成功"
              });
              this.$router.push("/index");
            } else {
              this.$message({
                type: "error",
                message: "登录失败,用户名或密码错误!"
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //用户注册
    login() {
      console.log("正在注册");
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pan {
  display: block;
  width: 100px;
  height: 50px;
  background: url("~@/assets/images/图层.png") -90px 12px no-repeat;
}
</style>
