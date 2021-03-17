<template>
  <div
    class="h-16 px-4 flex justify-between items-center bg-mercos-purple text-white md:px-8"
  >
    <div id="navLogo" class="w-32 flex items-center">
      <nuxt-link :to="{ name: 'index' }">
        <MercosLogo />
      </nuxt-link>
    </div>
    <div id="mobileNavItems" class="md:hidden">
      <el-dropdown trigger="click">
        <img
          src="~/assets/icons/icon-menu-sandwich-white.svg"
          alt="Icone Menu"
          title="Icone Sanduiche Menu"
          height="30"
          width="30"
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
    </div>
    <div id="navItems" class="hidden md:flex flex-1 justify-end items-center">
      <nav class="w-2/3 xl:w-1/2">
        <ul class="flex justify-evenly">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link
              class="border-b-2 rounded-md px-4 hover:bg-mercos-green border-mercos-green flex items-center"
              :to="link.url"
              >{{ link.label }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
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
