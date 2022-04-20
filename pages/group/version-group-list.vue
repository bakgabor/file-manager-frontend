<template>
  <div>
    <hero-bar>
      {{ $t('menu.files') }}
      <nuxt-link slot="right" to="/file/update" class="button is-primary">
        <b-icon icon="file-plus" custom-size="default" />
        <span>{{ $t('operations.update') }}</span>
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component :title="$t('buttons.search')" icon="ballot">
        <search-input @search="search" @reset="loadData(1)" />
      </card-component>
      <card-component :title="$t('menu.files')" icon="ballot">
        <file-list-view v-model="files" />
        <pagination
          :currentPage="currentPage"
          :params="pagination"
          @select="selectPage"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardComponent'
import FileListView from '@/components/views/FileListView'
import Pagination from '@/components/inputs/Pagination'
import SearchInput from '@/components/inputs/SearchInput'
import HeroBar from '@/components/default/bar/HeroBar'

export default {
  name: 'version-group-list',
  components: { CardComponent, FileListView, Pagination, SearchInput, HeroBar },
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
  mounted() {},
  methods: {
    search() {
      console.log('search')
    },

    loadData() {
      console.log('laod data')
    },
  },
}
</script>
<style scoped></style>
