<template>
  <div>
    <card-component>
      <h1 class="ms-3">{{ file.title }}</h1>
    </card-component>

    <div v-if="$route.params.type === 'image'">
      <card-component :title="$t('fields.image')" icon="image">
        <div class="d-flex justify-content-center">
          <img :src="$config.backendUrl + file.path" alt="" />
        </div>
      </card-component>
    </div>

    <card-component :title="$t('fields.description')" icon="ballot">
      <b-field horizontal>
        {{ file.description }}
      </b-field>
    </card-component>

    <card-component :title="$t('fields.data')" icon="image">
      <b-field :label="$t('fields.title')" horizontal>
        <b-input v-model="file.title" custom-class="is-static" readonly />
      </b-field>
      <b-field :label="$t('fields.keywords')" horizontal>
        <b-input v-model="file.keywords" custom-class="is-static" readonly />
      </b-field>
      <b-field :label="$t('fields.originalName')" horizontal>
        <b-input
          v-model="file.originalName"
          custom-class="is-static"
          readonly
        />
      </b-field>
      <b-field :label="$t('fields.mimeType')" horizontal>
        <b-input v-model="file.mimeType" custom-class="is-static" readonly />
      </b-field>
      <b-field :label="$t('fields.insertedAtTime')" horizontal>
        {{ $moment.unix(file.insertedAtTime).format('LL') }}
      </b-field>
      <b-field :label="$t('fields.updatedAtTime')" horizontal>
        {{ $moment.unix(file.updatedAtTime).format('LL') }}
      </b-field>
      <b-field :label="$t('fields.path')" horizontal>
        <b-input v-model="file.path" custom-class="is-static" readonly />
      </b-field>
      <b-field :label="$t('fields.downloadUrl')" horizontal>
        <a
          :href="`${$config.backendUrl}/${$route.params.type}/download/${file.id}`"
        >
          {{
            `${$config.backendUrl}/${$route.params.type}/download/${file.id}`
          }}
        </a>
      </b-field>
      <b-field :label="$t('fields.link')" horizontal>
        <a :href="$config.backendUrl + file.path">
          {{ $config.backendUrl + file.path }}
        </a>
      </b-field>
    </card-component>

    {{ file }}
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardComponent'

export default {
  name: 'FileView',
  components: { CardComponent },
  props: {
    file: {
      type: Object,
      default: () => {
        return null
      },
    },
  },
  methods: {
    checkImage() {
      console.log('image')
    },
  },
}
</script>

<style scoped></style>
