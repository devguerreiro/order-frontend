<template>
  <div
    class="px-4 md:px-12 w-full flex justify-between items-center bg-mercos-purple text-white"
  >
    <div id="navLogo" class="w-1/3 flex justify-center items-center">
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
      { label: 'Enviar Pedido', url: '#', icon: 'send' },
      { label: 'Produtos', url: '#', icon: 'shopping-search' },
      { label: 'Clientes', url: '#', icon: 'account-group' },
    ],
  }),
}
</script>
