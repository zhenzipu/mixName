<style lang="less">
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
  //   精品
  .boutique-list {
    li {
      list-style: none;
      float: left;
      width: 250px;
      margin: 0 15px 30px;
      cursor: pointer;
    }
    &-card {
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 250px;
      height: 170px;
      border-radius: 5px;
      position: relative;
      p:nth-child(1) {
        font-size: 50px;
        line-height: 170px;
        color: #fff;
        text-align: center;
      }
    }
    &-text {
      .item-name {
        color: #333;
        font-size: 20px;
        line-height: 40px;
      }
      .item-price {
        font-size: 14px;
        b {
          color: #4e14d6;
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }
  .flat-list {
    li {
      margin: 0 18px 40px;
    }
  }

  .entrust {
    &-title {
      font-size: 16px;
      line-height: 40px;
    }
  }
  .article {
    height: 280px;
    &-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
      margin-top: 20px;
    }
    &-con {
      text-indent: 2em;
      margin-top: 20px;
      font-size: 14px;
      line-height: 26px;
    }
  }
  .home-three {
    height: 680px;
    margin-top: 15px;
    > div {
      float: left;
    }
    .three-l {
      width: 895px;
      margin-right: 15px;
      height: 670px;
    }
    .three-r {
      height: 300px;
      width: 290px;
    }
  }
  .deatil {
    width: 1200px;
    height: 360px;
    .deatil-card {
      float: left;
      margin: 90px 60px 0;
      background: url("../../images/bg_card.png") no-repeat;
      background-size: 100% 100%;
      width: 180px;
      height: 125px;
      border-radius: 5px;
      position: relative;
      p:nth-child(1) {
        font-size: 26px;
        line-height: 125px;
        color: #fff;
        text-align: center;
      }
    }

    .detail-name {
      color: #333;
      font-size: 20px;
      line-height: 40px;
    }
    .detail-price {
      font-size: 14px;
      b {
        color: #4e14d6;
        font-size: 18px;
        line-height: 26px;
      }
    }
    .detail-text {
      width: 500px;
      height: 300px;
      float: left;
      padding-top: 30px;
      p {
        line-height: 28px;
      }
      .btn-buy {
        width: 140px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        background: #4e14d6;
        border-radius: 5px;
        font-size: 14px;
        margin-top: 15px;
        cursor: pointer;
      }
      .detail-last {
        color: #ccc;
        margin-top: 20px;
        span {
          display: inline-block;
        }
        span:nth-child(1) {
          margin-right: 20px;
        }
      }
    }
  }

  .btn-buy-modal {
    width: 300px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    background: #4e14d6;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 15px;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="home-con">
    <div class="card deatil">
      <div class="deatil-card">
        <p>{{detail.name}}</p>
      </div>
      <div class="detail-text">
        <p class="detail-name">{{detail.name}}</p>
        <p class="detail-price">
          价格:
          <b>￥{{detail.num}}</b>
        </p>
        <p>域名行业:{{detail.tags.join('、')}}</p>
        <p>域名后缀:{{detail.last}}</p>
        <p>域名长度:{{detail.len}}</p>
        <p>域名分类:{{detail.type}}</p>
        <p class="btn-buy" @click="handleOpenModal">立即购买</p>
        <p class="detail-last">
          <span>{{detail.date}}注册</span>
          <span>{{detail.count}}次浏览</span>
        </p>
      </div>
    </div>
    <div class="home-three">
      <div class="three-l card">
        <p class="card-title">
          精品
          <span class="btn-more">more</span>
        </p>
        <div class="card-con">
          <ul class="boutique-list">
            <li v-for="(item,idx) in aBoutique" :key="idx">
              <div class="boutique-list-card">
                <p>{{item.name}}</p>
              </div>
              <div class="boutique-list-text">
                <p class="item-name">{{item.name}}</p>
                <p class="item-price">
                  <b>￥{{item.num}}</b>
                </p>
                <p>域名行业：{{item.tags.join('、')}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="three-r card">
        <div class="card-con article">
          <p class="article-title">{{info.title}}</p>
          <p class="article-con">{{info.con}}</p>
        </div>
      </div>
    </div>

    <Modal v-model="bModal" :width="400">
      <div class="modal-con">
        <h2 style="textAlign:center;">填写购买信息</h2>
        <p class="detail-name">{{detail.name}}</p>
        <p class="detail-price">
          价格:
          <b>￥{{detail.num}}</b>
        </p>
        <Form
          ref="formValidate"
          :model="objForm"
          :rules="ruleValidate"
          :label-width="80"
          style="width:300px;"
        >
          <FormItem label="姓名" prop="name">
            <Input v-model="objForm.name" placeholder="请输入姓名"></Input>
          </FormItem>
          <FormItem label="手机号" prop="tel">
            <Input v-model="objForm.tel" placeholder="请输入手机号"></Input>
          </FormItem>
          <FormItem label="备注">
            <Input
              type="textarea"
              :autosize="{minRows: 2,maxRows: 5}"
              v-model="objForm.content"
              placeholder="请输入备注"
            ></Input>
          </FormItem>
        </Form>
        <p class="btn-buy-modal">提交购买信息</p>
      </div>
      <p slot="footer"></p>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      objForm: {
        name: "",
        tel: "",
        content: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        tel: [{ required: true, message: "不能为空", trigger: "blur" }]
      },
      bModal: false,
      detail: {
        name: "sdf.com",
        num: 234,
        tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"],
        last: ".com",
        len: 6,
        type: "字母-纯字母",
        date: "2012-08-12",
        count: 736
      },
      //   精品list
      aBoutique: [
        {
          id: 1,
          name: "glb1.com",
          num: "1250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 2,
          name: "glb2.com",
          num: "1350",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 3,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 1,
          name: "glb1.com",
          num: "1250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 2,
          name: "glb2.com",
          num: "1350",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        },
        {
          id: 3,
          name: "glb3.com",
          num: "2250",
          tags: ["金融投资", "区块链", "生活服务", "体育用品", "牌商标"]
        }
      ],
      //   快讯
      info: {
        title: "交易说明",
        con:
          "一口价域名卖家在发布的时候设置一个固定价格，即默认在出售周期内愿意以改价格转让域名。议价域名买家在发布的时候没有设置一个固定的价格，买家可以主动出价和卖家沟通，卖家同意后可以转让该域名。"
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("a", this.objForm);
    },
    handleOpenModal() {
      this.bModal = true;
    }
  },
  mounted() {}
};
</script>

