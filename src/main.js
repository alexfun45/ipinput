import Vue from 'vue'
import ipInput from './ipinput.vue'

if (document.querySelector('#app-ipInputVue'))
{
    Vue.component('Ipinput', ipInput);

    new Vue({
        el: '#app-ipInputVue'
    });
}

export default ipInput;
