<template>
  <div class="row mb-5">
    <div v-for="(image, index) in localFiles" :key="index" class="col-3">
      <card-component
        :title="image.title"
        icon="file-image"
        class="tile is-child"
        :image="image"
      >
        <div class="img-container pointer-event">
          <NuxtLink :to="'/image/view/' + image.id">
            <img :src="$config.backendUrl + image.path" alt="" />
          </NuxtLink>
        </div>
      </card-component>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/default/card/CardImage'

export default {
  name: 'ImageView',
  components: { CardComponent },
  model: {
    prop: 'files',
    event: 'change',
  },
  props: {
    files: {
      type: Array,
      default: () => {
        return []
      },
    },
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
}
</script>

<style scoped>
.img-container {
  height: 200px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
