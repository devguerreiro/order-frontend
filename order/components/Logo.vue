<template>
  <img
    class="object-contain"
    src="/images/logo-mercos-white.svg"
    alt="Logo Mercos Branca"
    title="Logo branca da empresa Mercos"
    :height="height"
    :width="width"
  />
</template>

<script>
export default {
  props: ['height', 'width'],
}
</script>
