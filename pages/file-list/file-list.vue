<template>
  <div>
    <hero-bar>
      {{ $t('menu.files') }}
      <nuxt-link
        slot="right"
        :to="`/${$route.params.type}/update`"
        class="button is-primary"
      >
        <b-icon icon="file-plus" custom-size="default" />
        <span>{{ $t('operations.update') }}</span>
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component :title="$t('buttons.search')" icon="ballot">
        <search-input @search="searchFile" @reset="loadFiles(1)" />
      </card-component>
      <div v-if="$route.params.type === 'image'">
        <image-list-view v-model="files" />
      </div>
      <div v-else>
        <card-component :title="$t('menu.files')" icon="ballot">
          <file-list-view v-model="files" />
          <pagination
            :currentPage="currentPage"
            :params="pagination"
            @select="selectPage"
          />
        </card-component>
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardComponent'
import FileListView from '@/components/views/FileListView'
import Pagination from '@/components/inputs/Pagination'
import SearchInput from '@/components/inputs/SearchInput'
import HeroBar from '@/components/default/bar/HeroBar'
import ImageListView from '~/components/views/ImageListView'

export default {
  name: 'file-list',
  components: {
    CardComponent,
    FileListView,
    Pagination,
    SearchInput,
    HeroBar,
    ImageListView,
  },
  data() {
    return {
      files: [],
      pagination: {
        maxPage: 1,
        visiblePage: 5,
        maxVisiblePage: 5,
      },
      currentPage: 1,
    }
  },
  mounted() {
    this.loadFiles(1)
  },
  methods: {
    selectPage(page) {
      this.currentPage = page
      this.loadFiles(page)
    },

    searchFile(text) {
      text = btoa(text)
      this.$fileRepository
        .search(text, 1)
        .then((response) => {
          this.files = response.files
          this.pagination.maxPage = response.maxPerPage
        })
        .catch(() => {
          this.showErrorMessage()
        })
    },

    loadFiles(page) {
      console.log(this.$route.params.type)
      this.$fileRepository
        .getFileList(page, this.$route.params.type)
        .then((response) => {
          this.files = response.files
          this.pagination.maxPage = response.maxPerPage
        })
        .catch(() => {
          this.showErrorMessage()
        })
    },
  },
}
</script>
<style scoped></style>
