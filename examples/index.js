import Vue from 'vue'
import iView from 'iview'
import App from './app'
import './style.less'
Vue.use(iView)

const el = document.getElementById('epage')

/* eslint-disable no-new */
new Vue({ el, render: h => h(App) })
