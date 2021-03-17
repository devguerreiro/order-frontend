<template>
  <b-dropdown aria-role="menu" :expanded="true">
    <template #trigger="{ active }">
      <img
        src="~/assets/icons/icon-menu-sandwich-white.svg"
        alt="Icone Menu"
        title="Icone Sanduiche Menu"
        height="24"
        width="24"
      />
    </template>
    <b-dropdown-item
      class="px-4 flex items-center"
      has-link
      v-for="(link, index) in links"
      :key="index"
      aria-role="menuitem"
    >
      <b-icon :icon="link.icon" class="text-mercos-purple" />
      <nuxt-link :to="link.url"> {{ link.label }}</nuxt-link>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: ['links'],
}
</script>
