import presetMini from '@unocss/preset-mini'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import { defineConfig } from 'unocss'

export default defineConfig({
    presets:[
        presetMini(),
        presetAttributify(),
        presetIcons()
    ],
    shortcuts: {
        // shortcuts to multiple utilities
        'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    }
})
