<template>
  <div>
    <section class="section is-main-section">
      <card-component title="Search" icon="ballot">
        <search-input @search="searchFile" @reset="loadFiles(1)" />
      </card-component>
      <image-list-view @select="selectImage" v-model="files" />
      <pagination
        :currentPage="currentPage"
        :params="pagination"
        @select="selectPage"
      />
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardComponent'
import Pagination from '@/components/inputs/Pagination'
import SearchInput from '@/components/inputs/SearchInput'
import ImageListView from '~/components/views/ImageListView'

export default {
  name: 'image-view-tutorialfile-list-tutorial',
  components: { CardComponent, Pagination, SearchInput, ImageListView },
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
    selectImage(image) {
      console.log(image)
    },

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
      this.$fileRepository
        .getFileList(page)
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
