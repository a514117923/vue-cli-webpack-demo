import request from '@/utils/request'

export function getTaskList(params) {
  return request({
    url: '/agv/agvtasks',
    method: 'get',
    params
  })
}

export function cancelTask(id, data) {
  return request({
    url: '/agv/agvtask/' + id,
    method: 'put',
    data
  })
}
