<template>
  <div class="box">
    <nav>
      <img src="../assets/资源/图片/common/head.jpg" alt="" />
      <div class="title">
        <p>早安，管理员，祝你开心每一天</p>
        <p style="color: #8f93a8">管理员 | 传智博客 - 总裁办</p>
      </div>
    </nav>
    <section>
      <div class="left">
        <div class="calendar-box">
          <workCalendar></workCalendar>
        </div>
        <div class="announcement-box">
          <div class="title">公告</div>
          <ul>
            <li>
              <img src="../assets/资源/图片/common/img.jpeg" alt="" />
              <div class="content">
                <p><span>朱继柳</span> 发布了 滴1期”传智大讲堂“互动获奖名单公布</p>
                <p class="time" style="margin-top: 20px">2018-07-21 15:21:38</p>
              </div>
            </li>
            <li>
              <img src="../assets/资源/图片/common/img.jpeg" alt="" />
              <div class="content">
                <p><span>朱继柳</span> 发布了 滴2期”传智大讲堂“互动获奖名单公布</p>
                <p class="time" style="margin-top: 20px">2018-07-21 15:21:38</p>
              </div>
            </li>
            <li>
              <img src="../assets/资源/图片/common/img.jpeg" alt="" />
              <div class="content">
                <p><span>朱继柳</span> 发布了 滴3期”传智大讲堂“互动获奖名单公布</p>
                <p class="time" style="margin-top: 20px">2018-07-21 15:21:38</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="flow-box">
          <div>流程申请</div>
          <button>加班离职</button>
          <button>请假调休</button>
          <button>审批列表</button>
          <button>我的信息</button>
        </div>
        <div class="performance-box">
          <performance></performance>
        </div>
        <div class="link-box">
          <div>
            <p>入门指南</p>
            <p>在线帮助</p>
            <p>联系技术支持</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import performance from "../components/performance"
import workCalendar from "../components/workCalendar"
// import {} from
export default {
  data() {
    return {}
  },
	methods:{
		
	},
  components: {
    performance,
    workCalendar
  }
}
</script>
<style lang="scss" scoped>
div {
  padding: 10px;
}
nav {
  height: 140px;
  box-shadow: 0 0 10px #ccc;
	font-size: 25px;
	p:nth-child(2){
		font-size: 20px;
		margin-top: 10px;
	}
  > img {
    width: 80px;
    height: 80px;
		margin: 0 20px;
  }
  display: flex;
  align-items: center;
}
section {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .left {
    width: 49%;
    .calendar-box,
    .announcement-box {
      width: 100%;
      height: 500px;
      box-shadow: 0 0 10px #ccc;
    }
    .announcement-box {
      margin-top: 10px;
      > .title {
        padding: 20px;
        border-bottom: 1px solid #ccc;
      }
      ul {
        padding: 0 40px;
      }
      li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 25px 0;
        > img {
          width: 80px;
        }
        span {
          color: #a897f9;
        }
      }
    }
  }
  .right {
    width: 49%;
    .flow-box,
    .link-box {
      width: 100%;
      height: 150px;
      box-shadow: 0 0 10px #ccc;
    }
    .flow-box {
      > div {
        height: 35px;
        font-size: 20px;
        border-bottom: 3px solid #8a97f8;
        width: 80px;
        padding: 0;
      }
      > button {
        padding: 10px 20px;
        background-color: #fff;
        outline: 0;
        border: 1px solid #cccc;
        margin: 20px 0 0 10px;
        border-radius: 2px;
      }
      button:hover {
        background-color: #ecf5ff;
        border: 1px solid #5cc2ff;
        color: #5cc2ff;
      }
    }
    .performance-box {
      width: 100%;
      height: 500px;
      box-shadow: 0 0 10px #ccc;
      margin-top: 10px;
    }
    .link-box {
      margin-top: 10px;
      background: url(../assets/资源/图片/common/icon.png) no-repeat center 10px;
      > div {
        padding: 0;
        display: flex;
        margin-top: 90px;
        justify-content: space-between;
        padding: 0 100px;
      }
    }
  }
}
</style>