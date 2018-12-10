<template>
  <div class="hello">
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="userName">
    <el-input type="user" v-model="ruleForm2.userName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="psd">
    <el-input type="password" v-model="ruleForm2.psd" autocomplete="off"></el-input>
  </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
    <el-button @click="zhuce">注册</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        ruleForm2: {
          userName: '',
          psd: ''
        },
        rules2:{
          userName: [
            {required: true, message: '请填写姓名', trigger: 'change'}
          ],
          psd: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
              userName: this.ruleForm2.userName,
              psd: this.ruleForm2.psd
            }
            this.$axios.post('/api/checklogin',data).then(res => {
              this.$router.push('/index')
              // if(res.status === 0){

              // }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //用户注册
      zhuce(){
        console.log('正在注册')
        this.$router.push('/zhuce')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
