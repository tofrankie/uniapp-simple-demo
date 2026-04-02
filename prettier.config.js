import baseOptions from '@tofrankie/prettier'
import vueOptions from '@tofrankie/prettier/options/sort-vue'

export default {
  ...baseOptions,
  overrides: [
    {
      files: ['*.vue'],
      options: vueOptions,
    },
  ],
}
