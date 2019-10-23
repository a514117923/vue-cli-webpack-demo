<template>

</template>

<script>
  import { getTaskList, cancelTask } from '@/api/agv'
  export default {
    name: 'mixinIndex',
    data() {
      const pullUpLoadObject = {
        txt: { more: '', noMore: '暂无更多数据' },
        visible: true
      }
      const pullDownRefreshObject = {
        txt: '更新成功'
      }
      return {
        list: [],
        queryData: {
          limit: 10,
          offset: 0,
        },
        total: 0,
        status: ['未执行', '已下发', '执行中', '已完成', '已取消', '任务异常'],
        scrollOptions: {
          pullDownRefresh: pullDownRefreshObject,
          pullUpLoad: pullUpLoadObject,
          scrollbar: true
        },
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList(query) {
        var data = query || Object.assign({}, this.queryData)
        data.data_type = this.data_type
        this.showLoadingToast()
        getTaskList(data).then(res => {
          data = res.data
          this.list.push(...data.data.rows)
          this.total = data.data.total
          this.toast.hide()
          console.log(this.list)
        }).catch(res => {
          this.toast.hide()
        })
      },
      onPullingDown() {
        // 下拉刷新
        var data = {
          limit: this.list.length,
          offset: 0,
        }
        this.list = []
        this.getList(data)
      },
      onPullingUp() {
        // 模拟更新数据
        if (this.list.length < this.total) {
          this.queryData.offset++
          this.getList()
        } else {
          this.$refs.scroll.forceUpdate()
        }
      },
      showLoadingToast() {
        this.toast = this.$createToast({
          time: 0
        })
        this.toast.show()
      }
    }
  }
</script>

<style scoped>

</style>
