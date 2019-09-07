import Vue from 'vue'
//自定义指令
Vue.directive('n',{
    // inserted,
    bind:function(el,binding) {
        el.textContent = Math.pow(binding.value,3)
       
    },
    update: function(el,binding) {
        el.textContent = Math.pow(binding.value,3)
    },
})