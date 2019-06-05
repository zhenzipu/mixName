<style lang="less" scoped>
.consult-con {
  .consult-1 {
    height: 500px;
    padding-top: 180px;
    background: url("../../images/consult/consult_banner.png");
    > div {
      width: 930px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      p:nth-child(1) {
        line-height: 80px;
        font-size: 60px;
        font-weight: bold;
      }
      p:nth-child(2) {
        line-height: 24px;
        font-size: 18px;
        width: 930px;
      }
    }
  }
  .console-2 {
    background: #f8f8f8;
    height: 470px;
    .list {
      list-style: none;
      display: block;
      margin: 100px auto;
      width: 1200px;
      li {
        width: 390px;
        height: 170px;
        border-radius: 5px;
        background: #fff;
        margin: 3px;
        text-align: center;
        float: left;
        p:nth-child(1) {
          line-height: 40px;
          font-size: 26px;
          margin-top: 50px;
        }
        p:nth-child(2) {
          font-size: 16px;
          line-height: 30px;
        }
      }
      li:hover {
        color: #fff;
        background: url("../../images/consult/icon1.png");
      }
    }
  }
  .console-3,.console-4,.console-5{
      text-align: center;
      height: 575px;
      background: #fff;
      padding-top: 50px;
      p{
          font-size: 40px;
          line-height: 80px;
          font-weight: bold;
      }
      img{
          display: inline-block;
      }
  }
  .console-4{
      background:url('../../images/consult/consult_a.png');
      p{
          margin-bottom: 20px;
          color: #fff;
      }
      div{
          width: 920px;
          height:380px;
          margin: 0 auto;
          background: -582px -1929px url('../../images/consult/consult3.png') no-repeat;
      }
  }
  .console-5{
      background: #f8f8f8;
  }
}
</style>

<template>
  <div class="consult-con">
    <div class="consult-1">
      <div>
        <p>一站式区块链咨询服务商</p>
        <p>MIX小投行深度垂直于区块链行业，面向区块链创业者，提供一站式的注册、法律、财务、社群、活动、媒体、咨询、投行投顾投资等一站式全球落地服务。</p>
      </div>
    </div>
    <div class="console-2">
      <ul class="list">
        <li>
          <p>资本对接</p>
          <p>推荐基石、私募投资、VC</p>
        </li>
        <li>
          <p>交易所对接</p>
          <p>交易所推荐、上币策略、融资</p>
        </li>
        <li>
          <p>品牌打造</p>
          <p>媒体报道、PR策略、直播、活动策划</p>
        </li>
        <li>
          <p>市值管理</p>
          <p>量化交易、基金托管、策略套利</p>
        </li>
        <li>
          <p>合规架构</p>
          <p>基金会注册、白皮书审查、财务规范</p>
        </li>
        <li>
          <p>社群运营</p>
          <p>社群建设、社群推广、社群日常维护</p>
        </li>
      </ul>
    </div>
    <div class="console-5">
        <p>交易所合作伙伴</p>
        <img src="@/images/consult/consult5.png" alt="">
    </div>
    <div class="console-3">
        <p>资本合作伙伴</p>
        <img src="@/images/consult/company.png" alt="">
        <!-- <img src="@/images/consult/name.png" alt=""> -->
    </div>
    <div class="console-4">
        <p>媒体合作伙伴</p>
        <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "consult",
  data() {
    return {
      //
    };
  }
};
</script>

