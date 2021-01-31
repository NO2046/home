import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import vi from './vi'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh',
    messages:{
        zh,vi
    }
})

export default i18n