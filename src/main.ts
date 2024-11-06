import { createApp } from 'vue'
import App from './App.vue'
import example from '../plugins/example'


const app = createApp(App)

app.use(example, { message: 'Hello from example plugin' })
app.mount('#app')
