module.exports = [
  {
    name: 'file:list',
    path: '/:type/list',
    component: 'pages/file-list/file-list',
  },
  {
    name: 'file:group:list',
    path: '/group/file/list',
    component: 'pages/group/file-group-list',
  },
  {
    name: 'version:group:list',
    path: '/group/version/list',
    component: 'pages/group/version-group-list',
  },
  {
    name: 'file:update',
    path: '/:type/update',
    component: 'pages/upload/file-upload',
  },
  {
    name: 'file:view',
    path: '/:type/view/:id',
    component: 'pages/view/file-view-page',
  },
]
