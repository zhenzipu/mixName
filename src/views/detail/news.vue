<style lang="less" scoped>
.home-con {
  padding-top: 30px;
  .icon-arrow {
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("../../images/arrow.png") 2px 2px no-repeat;
  }
  .input-label {
    line-height: 40px;
  }
  .large-btn {
    width: 220px;
    height: 40px;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, blue, purple);
  }
  .btn-more {
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #bea8f0;
    float: right;
    text-align: center;
    font-size: 12px;
    color: #4e14d6;
    margin-top: 10px;
  }
  .btn-info {
    color: #999;
    line-height: 30px;
    text-align: center;
  }
  .carousel-item {
    img {
      border-radius: 5px;
    }
  }
  .card {
    padding: 20px 25px;
    background: #fff;
    border-radius: 5px;
    &-title {
      font-size: 20px;
      line-height: 50px;
    }
  }
  //   已售
  .finish-tip {
    border: 4px solid #f35aa5;
    width: 56px;
    height: 26px;
    line-height: 18px;
    text-align: center;
    font-weight: bold;
    position: absolute;
    right: -5px;
    bottom: 20px;
    color: #f35aa5;
    font-size: 16px;
  }
  .shop-list {
    li {
      list-style: none;
      float: left;
      width: 250px;
    }
    &-card {
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 250px;
      height: 160px;
      border-radius: 5px;
      position: relative;
      p:nth-child(1) {
        font-size: 50px;
        line-height: 160px;
        color: #fff;
        //   font-weight: bold;
        text-align: center;
      }
      p:nth-child(2) {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        line-height: 40px;
        padding-left: 25px;
        font-size: 16px;
      }
    }
    &-text {
      .item-name {
        color: #333;
        font-size: 20px;
        line-height: 40px;
      }
      .item-price {
        font-size: 16px;
        b {
          color: #4e14d6;
          font-size: 18px;
          padding-left: 5px;
          line-height: 30px;
        }
      }
    }
  }

  .home-three {
    margin-top: 15px;
    > div {
      display: inline-block;
      vertical-align:top;
      // float: left;
    }
    .three-l {
      min-height: 100px;
      width: 890px;
      margin-right: 15px;
      padding: 20px;
    }
    .three-r {
      height: 340px;
      width: 290px;
    }
  }
  .article{
    h2{
      font-size: 30px;
      line-height: 60px;
    text-align: center
    }
    p{
      line-height: 30px;
      font-size: 16px;
      margin-bottom: 20px;
    }
    img{
      width: 800px;
      margin: 10px auto;
    }
  }
}
</style>

<template>
  <div class="home-con">
    <Carousel :value="0" :autoplay="true" :autoplay-speed="2000" :radius-dot="true" arrow="never">
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel-item">
          <img src="@/images/banner.png" alt>
        </div>
      </CarouselItem>
    </Carousel>

    <div class="home-three">
      <div class="three-l card">
        <div class="card-con article">
          <h2>圣诞节福利时间的福利四季度房价</h2>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <p>圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿圣诞节福利就是代理费了圣诞节福利数据的分类进酸辣粉死定了房间里撒大家发路撒地方阿里斯顿</p>
          <img src="@/images/banner.png" alt="">
        </div>
      </div>

      <div class="three-r card">
        <p class="card-title">
          每日特价
          <span class="btn-more">more</span>
        </p>
        <div class="card-con">
          <ul class="shop-list">
            <li v-for="(item,idx) in aBargain" :key="idx">
              <div class="shop-list-card">
                <p>{{item.name}}</p>
                <p>{{item.status?'倒计时：'+item.endTime:'已结束'}}</p>
                <span class="finish-tip" v-if="!item.status">已售</span>
              </div>
              <div class="shop-list-text">
                <p class="item-name">{{item.name}}</p>
                <p class="item-price">
                  价格：
                  <b>{{item.num}}元</b>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      // 提交信息
      objForm: {
        domain: "",
        name: "",
        phone: "",
        budget: "",
        budget_type: "0",
        type: "0"
      },
      //   特价list
      aBargain: [
        {
          id: 1,
          name: "glb1.com",
          status: 0,
          num: "1250"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      console.log("a", this.objForm);
    }
  },
  mounted() {}
};
</script>

