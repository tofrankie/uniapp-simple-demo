import { defineConfig } from '@tofrankie/eslint'

export default defineConfig(
  { ignores: ['**/*.md'], typescript: false, vue: true },
  {
    languageOptions: {
      globals: {
        uni: 'readonly',
      },
    },
  }
)
