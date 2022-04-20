<template>
  <div class="card">
    <header v-if="title" class="card-header">
      <p class="card-header-title">
        <b-icon v-if="icon" :icon="icon" custom-size="default" />
        {{ image.title }}
      </p>
      <a
        v-if="headerIcon"
        href="#"
        class="card-header-icon"
        aria-label="more options"
        @click.prevent="headerIconClick"
      >
        <b-icon :icon="headerIcon" custom-size="default" />
      </a>
      <a
        :href="`${$config.backendUrl}/${$route.params.type}/download/${image.id}`"
        :download="image.originalName"
      >
        <b-icon icon="download" custom-size="default pointer-event" />
      </a>
      <div class="copy-btn" @click="copyToClipboard">
        <b-icon icon="content-copy" custom-size="default pointer-event" />
      </div>
    </header>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    title: {
      type: String,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    headerIcon: {
      type: String,
      default: null,
    },
  },
  methods: {
    copyToClipboard() {
      const url = this.$config.backendUrl + this.image.path
      this.$simpleFunctions.copyToClipboardText(url).then(
        () => {
          this.$buefy.snackbar.open({
            message: this.$t('messages.copyToClipboard'),
            queue: false,
          })
        },
        () => {}
      )
    },

    headerIconClick() {
      this.$emit('header-icon-click')
    },
  },
}
</script>
<style scoped>
.copy-btn {
  height: 25px;
}
</style>
