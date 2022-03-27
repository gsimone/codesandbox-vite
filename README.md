## @codesandbox/plugin-vite

Merge custom configuration needed for vite when running the process on Codesandbox Projects.

`yarn add -D @codesandbox/vite-plugin`

#### Usage

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import codesandbox from '@codesandbox/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codesandbox()]
})
```