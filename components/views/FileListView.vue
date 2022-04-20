<template>
  <div>
    <b-table
      :checked-rows.sync="checkedRows"
      :checkable="false"
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="name"
      :data="localFiles"
    >
      <template slot-scope="props">
        <b-table-column
          v-if="$route.params.type !== 'simple'"
          :label="$t('fields.title')"
          field="title"
          sortable
        >
          {{ props.row.title }}
        </b-table-column>
        <b-table-column :label="$t('fields.name')" field="name" sortable>
          <NuxtLink :to="`/${$route.params.type}/view/${props.row.id}`">
            {{ props.row.originalName }}
          </NuxtLink>
        </b-table-column>
        <b-table-column :label="$t('fields.type')" field="type" sortable>
          {{ props.row.mimeType }}
        </b-table-column>
        <b-table-column :label="$t('fields.updated')" field="date" sortable>
          {{ $moment.unix(props.row.insertedAtTime).format('LL') }}
        </b-table-column>
        <b-table-column field="url" sortable>
          <button
            class="button is-small is-primary"
            type="button"
            @click.prevent="urlCopyToClipboard(props.row)"
          >
            {{ $t('buttons.urlCopy') }}
          </button>
          <button
            class="button is-small is-primary"
            type="button"
            @click.prevent="downloadUrlCopyToClipboard(props.row)"
          >
            {{ $t('buttons.downloadUrlCopy') }}
          </button>
          <a
            class="ms-3"
            :download="props.row.originalName"
            :href="`${$config.backendUrl}/${$route.params.type}/download/${props.row.id}`"
            >{{ $t('buttons.download') }}</a
          >
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'FileListView',
  model: {
    prop: 'files',
    event: 'change',
  },
  props: {
    files: {
      type: Array,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
    }
  },
  computed: {
    localFiles: {
      get() {
        return this.files
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
  methods: {
    urlCopyToClipboard(data) {
      this.$simpleFunctions
        .copyToClipboardText(this.$config.backendUrl + data.path)
        .then(
          () => {
            this.$buefy.snackbar.open({
              message: this.$t('messages.copyToClipboard'),
              queue: false,
            })
          },
          () => {}
        )
    },

    downloadUrlCopyToClipboard(data) {
      this.$simpleFunctions
        .copyToClipboardText(
          `${this.$config.backendUrl}/${this.$route.params.type}/download/${data.id}`
        )
        .then(
          () => {
            this.$buefy.snackbar.open({
              message: this.$t('messages.copyToClipboard'),
              queue: false,
            })
          },
          () => {}
        )
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
