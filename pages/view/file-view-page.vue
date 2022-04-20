<template>
  <div v-if="file">
    <hero-bar> {{ $t('fields.file') }}: {{ file.originalName }}</hero-bar>
    <section class="section is-main-section">
      <file-view :file="file" />
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/default/bar/HeroBar'
import FileView from '@/components/views/FileView'

export default {
  name: 'file-view-page',
  components: { HeroBar, FileView },
  mounted() {
    this.getFile()
  },
  data() {
    return {
      file: null,
    }
  },
  methods: {
    getFile() {
      this.$fileRepository
        .getFile(this.$route.params.id, this.$route.params.type)
        .then((response) => {
          this.file = response
        })
        .catch(() => {
          this.showErrorMessage()
        })
    },
  },
}
</script>

<style scoped></style>
