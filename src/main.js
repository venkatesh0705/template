import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { router } from "./router";

//primevue -css
import "primeflex/primeflex.css"; //flex css
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons css

const app = createApp(App);

//primevue packages
import InputText from "primevue/inputtext";
import Buttons from "primevue/button";
import Dropdowns from "primevue/dropdown";
import Slider from "primevue/slider";
import SelectButton from "primevue/selectbutton";
import Steps from "primevue/steps";
import Card from "primevue/card";

app.use(PrimeVue);
app.use(router);

// prime components
app.component("InputText", InputText);
app.component("Buttons", Buttons);
app.component("Dropdowns", Dropdowns);
app.component("Slider", Slider);
app.component("SelectButton", SelectButton);
app.component("Steps", Steps);
app.component("Card", Card);

app.mount("#app");
