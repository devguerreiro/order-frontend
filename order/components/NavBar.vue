<template>
  <div class="container mx-auto h-16 flex text-white">
    <div class="flex items-center">
      <MercosLogo height="64" width="192" />
    </div>
    <div class="flex flex-1 justify-end items-center">
      <nav class="w-1/2">
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
      { label: 'Enviar Pedido', url: '#' },
      { label: 'Produtos', url: '#' },
      { label: 'Clientes', url: '#' },
    ],
  }),
}
</script>
