<template>
  <div>
    <b-field horizontal :label="$t('fields.uploadFile')" message="">
      <file-upload v-model="uploadData.file" />
    </b-field>
    <b-field horizontal message="">
      <button type="button" class="button is-primary" @click="save">
        <span> {{ $t('buttons.save') }} </span>
      </button>
    </b-field>
  </div>
</template>

<script>
import FileUpload from '@/components/inputs/FileUpload'

export default {
  name: 'SimpleFileUploadForm',
  components: { FileUpload },
  data() {
    return {
      uploadData: {
        type: this.$route.params.type,
        file: {
          fileList: null,
          fileName: null,
        },
      },
      formData: null,
      types: ['public', 'private'],
    }
  },
  methods: {
    save() {
      if (!this.uploadData.file.fileName) {
        this.showSelectMessage()
        return
      }
      // eslint-disable-next-line no-unreachable
      this.createFormData()
      this.saveFile()
    },

    saveFile() {
      this.$fileRepository
        .saveFile(this.formData)
        .then((response) => {
          this.showSaveMessage()
        })
        .catch(() => {
          this.showErrorMessage()
        })
    },

    createFormData() {
      const file = this.uploadData.file
      this.formData = new FormData()
      this.formData.append('file', file.fileList[0], file.fileList[0].name)
      this.formData.append('type', this.uploadData.type)
    },

    showSelectMessage() {
      this.$buefy.snackbar.open({
        message: 'Select file!',
        type: 'is-info',
        position: 'is-top',
        queue: false,
      })
    },

    showSaveMessage() {
      this.$buefy.snackbar.open({
        message: 'Saved!',
        type: 'is-success',
        position: 'is-top',
        queue: false,
      })
    },

    showErrorMessage() {
      this.$buefy.snackbar.open({
        message: 'Save error!',
        type: 'is-danger',
        position: 'is-top',
        queue: false,
      })
    },
  },
}
</script>

<style scoped></style>
