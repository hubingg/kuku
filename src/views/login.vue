<template>
  <div class="c-login">
    <mt-field placeholder="请输入手机号码" type="tel" v-model="phone" :attr="{ maxlength: 11 }" @input="handleChange"></mt-field>
    <div class="c-login-number">
      <mt-field placeholder="请输入验证码" type="number" v-model="number" :attr="{ maxlength: 6 }"></mt-field>
      <span class="c-login-getcode" @click="getCode" :class="{'can-get': getDisabled}">{{codeText}}</span>
    </div>
    <mt-button type="default" @click="login">登录</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      phone: '',
      number: '',
      codeText: '获取验证码',
      getDisabled: false
    }
  },
  methods: {
    getCode () {
      if (!this.getDisabled) return
      let num = 60
      let timer
      timer = setInterval(() => {
        num--
        this.codeText = num + 's后重发'
        this.getDisabled = false
        if (num == 0) {
          clearInterval(timer)
          this.codeText = '获取验证码'
          this.getDisabled = true
        } 
      }, 1000)
    },
    handleChange (val) {
      if ((/^1[0-9]\d{9}$/).test(val) && val.length == 11) {
        this.getDisabled = true
      } else {
        this.getDisabled = false
      }
    },
    login () {
      
    }
  }
}
</script>

<style scoped lang="stylus">
@import "./../assets/stylus/variables"
.c-login
  &-number
    position relative
    .c-login-getcode
      width 100px
      height 30px
      font-size 14px
      line-height 30px
      border 1px solid #EBEBEB
      color #EBEBEB
      border-radius 15px
      position absolute
      top 10px
      right 10px
      box-sizing border-box
    .can-get
      border-color $secondColor
      color $secondColor
  .mint-cell
    border-bottom 1px solid #EBEBEB
</style>
