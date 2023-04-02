<template>
  <div class="homepage-container">
    <Billboard />
    <Quicklink />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Homepage',
  components: {
    Billboard: () => import('~/components/Billboard.vue'),
    Quicklink: () => import('~/components/Quicklink.vue')
  }
}
</script>