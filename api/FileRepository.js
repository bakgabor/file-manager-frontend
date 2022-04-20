export default (axios) => ({
  saveFile(data) {
    return axios.$post('/api/file/save', data)
  },

  getFileList(page, type) {
    return axios.$get('/api/' + type + '/list/' + page)
  },

  search(text, page) {
    return axios.$get('/api/file/search/' + page + '/' + text)
  },

  getFile(id, type) {
    return axios.$get(`/api/${type}/data/${id}`)
  },
})
