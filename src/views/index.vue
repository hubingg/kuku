<template>
  <div class="c-index">
    <mt-tabbar v-model="selected" @input="changeTab">
      <mt-tab-item id="index">
        <img slot="icon" v-if="selected=='index'" src="./../assets/images/tabbar-icon-home-press.png">
        <img slot="icon" v-else src="./../assets/images/tabbar-icon-home-normal.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" v-if="selected=='find'" src="./../assets/images/tabbar-icon-find-press.png">
        <img slot="icon" v-else src="./../assets/images/tabbar-icon-find-normal.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="course">
        <img slot="icon" v-if="selected=='course'" src="./../assets/images/tabbar-icon-curriculum-press.png">
        <img slot="icon" v-else src="./../assets/images/tabbar-icon-curriculum-normal.png">
        课程
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" v-if="selected=='mine'" src="./../assets/images/tabbar-icon-mine-press.png">
        <img slot="icon" v-else src="./../assets/images/tabbar-icon-mine-normal.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="mine">
        <router-view></router-view>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Mine from './mine/index'
export default {
  name: 'Index',
  components: {
    Mine
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeTab (val) {
      console.log(val)
      this.$router.push({name: val})
    }
  }
}
</script>

<style lang="stylus">
$mainColor = #4F4A60 
.c-index
  .mint-tabbar
    height 49px
    .mint-tab-item-icon
      height 22px
      width 22px
    .mint-tab-item
      color #999
    .is-selected
      color $mainColor
</style>
