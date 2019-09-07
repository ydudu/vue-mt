<template>
  <div class="child">
      {{msg}}
      {{age}}
      <button @click="toParent">发送到父组件</button>
  </div>
</template>

<script>
export default {
    name: 'child',
    data: function() {
        return {
            msg: '我是子组件',
        }
    },
    props: {
        age:{
            type: Number,
            default: ''
        }
    },
    methods: {
        toParent() {
            this.in = "我是子组件的数据我要改变父组件"
            this.$emit('ainfo')
        }
    }


}
</script>

<style>

</style>