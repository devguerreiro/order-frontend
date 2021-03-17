<template>
  <div
    class="px-4 md:px-8 flex justify-between items-center bg-mercos-purple text-white"
  >
    <div id="navLogo" class="w-32 flex items-center">
      <MercosLogoWithLink :to="{ name: 'index' }" />
    </div>
    <div id="mobileNavItems" class="md:hidden flex items-center">
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
