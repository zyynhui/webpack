<template>
  <div class="public">
    <img src="../image/Bitmap.jpg" >
    <div class="formContainer">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input  v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input type="password" v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
          <el-button type="primary" @click="submitData">提 交</el-button>
      </el-form>
      <span v-show="isShow">{{ msg }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          pwd: ''
        },
        isShow: false,
        msg: ''
      }
    },
    methods: {
      async submitData () {
        if(!this.formLabelAlign.name) {
          this.isShow = true
          this.msg = '用户名不能为空'
          return
        }
        if(!this.formLabelAlign.pwd) {
          this.isShow = true
          this.msg = '密码不能为空'
        }
        if(this.formLabelAlign.pwd.length < 6) {
          this.isShow = true
          this.msg = '密码长度不够6位'
          return
        }
        const reg=new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/)
        if(!reg.test(this.formLabelAlign.pwd)) {
          this.isShow = true
          this.msg = '密码必须包含英文和数字'
          return
        }
        //验证通过，发送 ajax请求
        //const res = await this.$http.get('/admin')
        //console.log(res)
        //if(成功)就跳转 this.$router.push('/index').....
      }
    }
  }
</script>
<style lang="scss" scoped>
  .public {
    width: 100%;
    height: 100%;
    img {
      position:absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .formContainer {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      width: 600px;
      height: 320px;
      background-color: white;
      border: 1px solid #FFC;
      border-radius: 5px;
    }
  }
</style>
