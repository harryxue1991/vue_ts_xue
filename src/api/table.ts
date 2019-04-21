import request from '@/utils/request'

export default {
  // 统一接口get
  get_common: (url: string, params: object) => {
    return request.get(url, {params})
  },

  project_get_list: (params: any) => {
    return request.get('/api/admin/project/searchlist', {params})
  },
  project_get_doctors: (params: any) => {
    return request.get('/api/admin/doctor/searchlist', {params})
  },

  // 上传图片
  uploadImg: (params: File) => {
    return request.post('/common/admin/attach/admin_upload', params)
  },
  // 上传excel
  excelUpload: (params: File) => {
    return request.post('/api/admin/systemmessage/upload_execl', params)
  }
}
