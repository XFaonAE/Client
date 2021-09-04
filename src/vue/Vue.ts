import FluxUi from "@axeridev/flux-ui"
import { createApp } from "vue"
import Main from "./Main.vue"
import router from "./plugins/Router"

const app = createApp(Main)

app.use(router)
app.use(FluxUi.create())
app.mount("#app")
