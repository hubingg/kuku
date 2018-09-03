<template>
  <div class="c-Index">
    <mt-cell title="收藏" icon="more" is-link></mt-cell>
    <mt-cell title="关注" icon="more" is-link></mt-cell>
    <mt-cell title="优惠券" icon="more" is-link class="page-part"></mt-cell>
    <mt-cell title="个人信息" icon="more" is-link to="/index/mine/info"></mt-cell>
    <mt-cell title="常用联系人" icon="more" is-link></mt-cell>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      selected: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
.mint-cell-title
  text-align left
</style>
