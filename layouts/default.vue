<template>
  <div id="app">
    <!--    <nav-bar />-->
    <aside-menu :menu="menu" />
    <nuxt />
  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/default/bar/NavBar'
import AsideMenu from '@/components/default/menu/AsideMenu'

export default {
  name: 'Home',
  components: {
    AsideMenu,
    // NavBar,
  },
  computed: {
    menu() {
      return [
        this.$t('menu.generals'),
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: this.$t('menu.dashboard'),
          },
          {
            to: '/file/list',
            icon: 'file',
            label: this.$t('menu.files'),
          },
          {
            to: '/image/list',
            icon: 'image',
            label: this.$t('menu.images'),
          },
          {
            to: '/simple/list',
            icon: 'file-hidden',
            label: this.$t('menu.simpleFile'),
          },
        ],
        this.$t('menu.groups'),
        [
          {
            to: '/group/file/list',
            icon: 'hexagon-multiple',
            label: this.$t('menu.fileGroups'),
          },
          {
            to: '/group/version/list',
            icon: 'hexagon-multiple',
            label: this.$t('menu.versionGroups'),
          },
        ],
      ]
    },
  },
  created() {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
    })
  },
  mounted() {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
    document.documentElement.classList.add('has-aside-expanded')
  },
}
</script>
