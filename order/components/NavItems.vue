<template>
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
</template>

<script>
export default {
  props: ['links'],
}
</script>
