<template>
  <nuxt-link :to="to">
    <MercosLogo />
  </nuxt-link>
</template>

<script>
export default {
  props: ['to'],
}
</script>
