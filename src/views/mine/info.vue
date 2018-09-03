<template>
  <div class="c-info">
    <mt-field label="姓名" placeholder="请输入姓名" type="text" v-model="info.number" :attr="{ maxlength: 6 }"></mt-field>
    <mt-field label="性别" placeholder="性别" type="text" v-model="info.number" :attr="{ maxlength: 6 }"></mt-field>
    <mt-field label="手机" placeholder="用于激活账号并接受验证信息" type="tel" v-model="info.phone" :attr="{ maxlength: 11 }"></mt-field>
    <mt-field label="身份证" placeholder="与身份证一致" type="number" v-model="info.number" :attr="{ maxlength: 18 }"></mt-field>
    <mt-button type="default" @click="save">保存</mt-button>
  </div>
</template>

<script>
export default {
  name: 'MineInfo',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    save () {

    }
  }
}
</script>

<style lang="stylus">
.mint-cell-title
  text-align left
</style>
