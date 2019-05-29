<style lang="less">
@import "./main.less";
.content-main {
  background: #f8f8f8;
  min-width: 1200px;
  .content-con{
      width: 1200px;
      margin: 0 auto;
  }
}
</style>
<template>
  <div>
    <header-main/>
    <div class="content-main">
      <div class="content-con" :style="{width:$route.name=='consult'?'100%':'1200px'}">
        <router-view></router-view>
      </div>
    </div>
    <footer-main/>
  </div>
</template>
<script>
// import Cookies from "js-cookie";
// import util from "@/libs/util.js";

// import { mapMutations, mapActions, mapGetters } from "vuex";
import headerMain from "./main-components/header.vue";
// import breadCrumb from "./main-components/bread-crumb.vue";
import footerMain from "./main-components/footer.vue";
// import Waterfall from "./main-components/waterfall.vue";
export default {
  components: { headerMain, footerMain },
  data() {
    return {};
  },
  computed: {
    // // 需要处理缓存页面
    // cachePage() {
    //   return this.$store.state.app.cachePage;
    // },
    // // 面包屑数组
    // breadCrumbList () {
    //   return this.$store.state.app.breadCrumbList
    // }
  },
  methods: {},
  mounted() {
    console.log('ss',this.$route.name)
  },
  created() {}
};
</script>
