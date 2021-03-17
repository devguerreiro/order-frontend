import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

// lazy loading components
// https://medium.com/js-dojo/how-to-load-element-ui-dynamically-with-nuxt-js-8e30e0168ee3
export default () => {
  Vue.component('ElDropdown', () =>
    import(
      /* webpackChunkName: 'element-ui-dropdown' */ 'element-ui/lib/dropdown'
    )
  )
  Vue.component('ElDropdownMenu', () =>
    import(
      /* webpackChunkName: 'element-ui-dropdown-menu' */ 'element-ui/lib/dropdown-menu'
    )
  )
  Vue.component('ElDropdownItem', () =>
    import(
      /* webpackChunkName: 'element-ui-dropdown-item' */ 'element-ui/lib/dropdown-item'
    )
  )
  Vue.component('ElTable', () =>
    import(/* webpackChunkName: 'element-ui-table' */ 'element-ui/lib/table')
  )
  Vue.component('ElTableColumn', () =>
    import(
      /* webpackChunkName: 'element-ui-table-column' */ 'element-ui/lib/table-column'
    )
  )
  Vue.component('ElInput', () =>
    import(/* webpackChunkName: 'element-ui-input' */ 'element-ui/lib/input')
  )
}
