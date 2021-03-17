<template>
  <el-dropdown trigger="click">
    <img
      src="~/assets/icons/icon-menu-sandwich-white.svg"
      alt="Icone Menu"
      title="Icone Sanduiche Menu"
      height="24"
      width="24"
    />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(link, index) in links"
        :key="index"
        :icon="link.icon"
      >
        <nuxt-link :to="link.url">{{ link.label }}</nuxt-link>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: ['links'],
}
</script>
