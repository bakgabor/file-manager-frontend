<template>
  <div>
    <section class="section is-main-section">
      <card-component
        v-if="$route.params.type !== 'simple'"
        title="File upload"
        icon="ballot"
      >
        <file-upload-form />
      </card-component>
      <card-component
        v-if="$route.params.type === 'simple'"
        title="Simple file upload"
        icon="ballot"
      >
        <simple-file-upload-form />
      </card-component>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardComponent'
import FileUploadForm from '@/components/forms/FileUploadForm'
import SimpleFileUploadForm from '@/components/forms/SimpleFileUploadForm'

export default {
  name: 'file-upload-tutorial',
  components: { CardComponent, FileUploadForm, SimpleFileUploadForm },
}
</script>
<style scoped></style>
