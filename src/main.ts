import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


function remSize() {
    let deviceWidth = document.body.clientWidth
    console.log(document.body.clientHeight)
    // TODO:电脑端配置
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    //750px设计稿 1rem == 100px
}

remSize()

window.onresize = () => {
    remSize()
}
createApp(App).use(store).use(router).mount('#app')
