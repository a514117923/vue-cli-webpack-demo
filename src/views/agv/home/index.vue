<template>
  <div class="agv-content" slot="content">
    <cube-tab-bar
      ref="tabNav"
      v-model="selectedLabel"
      :use-transition="false"
      class="agv-tab">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label"></cube-tab>
    </cube-tab-bar>

    <div class="scroll-wrapper">
      <keep-alive>
        <currentList v-if="selectedLabel == '当前服务单'" />
        <historyList v-if="selectedLabel == '历史服务单'" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import currentList from './components/currentList'
  import historyList from './components/historyList'
  export default {
    name: 'layou',
    components: {
      currentList,
      historyList
    },
    data() {
      return {
        selectedLabel: '当前服务单',
        tabs: [{
          label: '当前服务单'
        }, {
          label: '历史服务单'
        }],
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .agv-content {
    position: relative;
    height: 100%;
    .scroll-wrapper {
      position: absolute;
      left: 0;
      right: 0;
      top: 48px;
      bottom: 0;
    }
    .before-trigger {
      color: #999;
    }
    .cube-pulldown-loaded {
      color: #999;
      font-size: 14px;
    }
  }
  .agv-tab {
    .cube-tab {
      padding: 12px 0;
      font-size: 16px;
      line-height: 1.5555;
      color: #C1C1C1;
      font-weight: bold;
      &.cube-tab_active {
        color: #333;
      }
    }
  }
  .usher-list {
    padding: 0 15px;
    .item {
      border-bottom: 1px solid #cfcfcf;
      padding: 15px;
      padding-right: 0;
      display: flex;
      .img-box {
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .image {
          height: 60px;
          overflow: hidden;
          border-radius: 10px;
          position: relative;
          img {
            width: 100%;
          }
          .service-act {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 18px;
            background: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height: 16px;
          }
        }
      }

      .content {
        margin-left: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .order {
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }
        .name {
          font-size: 16px;
        }
      }
      .btn {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
</style>
