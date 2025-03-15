import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // Обязательно для стилей

const app = createApp(App);
app.use(ElementPlus); // Подключаем Element Plus
app.mount('#app');
