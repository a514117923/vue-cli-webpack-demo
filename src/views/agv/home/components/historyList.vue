<template>
  <cube-scroll
    ref="scroll"
    :data="list"
    :options="scrollOptions"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp">
    <ul v-if="list.length" class="usher-list">
      <li v-for="(item, index) in list" :key="index" class="item">
        <div class="img-box">
          <div class="image">
            <img :src="item.record_img" :alt="item.obj_name">
            <div class="service-act">{{ status[item.task_status] }}</div>
          </div>
        </div>
        <div class="content">
          <div class="order">服务单号： {{ item.task_no }}</div>
          <div class="name">{{ item.obj_name }}</div>
        </div>
<!--        <div class="btn">-->
<!--          <cube-button :light="true" :outline="true" :inline="true" class="btn-radio" @click="cancelTask(item)">取消执行</cube-button>-->
<!--        </div>-->
      </li>
    </ul>
    <div v-else class="no-message">暂无数据</div>
  </cube-scroll>
</template>

<script>
  import { getTaskList, cancelTask } from '@/api/agv'
  import listMixin from '../mixin/index'
  export default {
    name: "historyList",
    mixins: [listMixin],
    data() {
      return {
        data_type: 1,
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
