<template>
  <div class="h-16 px-4 flex justify-between text-white md:px-8">
    <div id="navLogo" class="w-32 flex items-center">
      <nuxt-link :to="{ name: 'index' }">
        <MercosLogo />
      </nuxt-link>
    </div>
    <div id="mobileNavItems" v-if="isMobile" class="self-center">
      <el-dropdown trigger="click">
        <img
          src="~/assets/icons/icon-menu-sandwich-white.svg"
          alt="Icone Menu"
          title="Icone Sanduiche Menu"
        />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(link, index) in links"
            :key="index"
            :icon="link.icon"
            >{{ link.label }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div id="navItems" v-else class="flex flex-1 justify-end items-center">
      <nav class="w-2/3 xl:w-1/2">
        <ul class="flex justify-evenly">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link
              class="border-b-2 rounded-md px-4 hover:bg-mercos-green border-mercos-green flex items-center"
              :to="link.url"
            >
              {{ link.label }}
            </nuxt-link>
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
    screenSize: 0,
    isMobile: null,
  }),
  beforeMount() {
    this.updateScreenSize(window.innerWidth)
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize: function (e) {
      this.updateScreenSize(e.target.innerWidth)
    },
    updateScreenSize: function (newWidth) {
      this.isMobile = this.verifyIsMobile(newWidth)
      this.screenSize = newWidth
    },
    verifyIsMobile: (width) => width <= 768,
  },
}
</script>
