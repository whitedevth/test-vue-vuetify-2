import { type App } from 'vue';
import TextField from './components/TextField.vue';

export default {
  install: (app: App) => {
    app.component('ch-text-field', TextField);
  }
};