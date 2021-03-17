<template>
  <div
    class="h-16 px-4 flex justify-between items-center bg-mercos-purple text-white md:px-8"
  >
    <div id="navLogo" class="w-32 flex items-center">
      <nuxt-link :to="{ name: 'index' }">
        <MercosLogo />
      </nuxt-link>
    </div>
    <div id="mobileNavItems" class="md:hidden flex">
      <MercosMobileNavItems :links="links" />
    </div>
    <div id="navItems" class="hidden md:flex flex-1 justify-end items-center">
      <MercosNavItems :links="links" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { label: 'Enviar Pedido', url: '#', icon: 'el-icon-s-order' },
      { label: 'Produtos', url: { name: 'products' }, icon: 'el-icon-present' },
      { label: 'Clientes', url: '#', icon: 'el-icon-user-solid' },
    ],
  }),
}
</script>
