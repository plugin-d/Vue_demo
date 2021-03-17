<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 09:03:05
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\App.vue
-->
<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="getstorage">获取缓存值</button>
    <p>{{ storageValue }}</p>
  </div>
</template>

<script>
import storage from './utils/storage'
export default {
  data() {
    return {
      todo: [],
      inputValue: storage.getStorage('inputKey'),
      storageValue: ''
    }
  },
  watch: {
    //  inputValue: {
    //   deep: true,
    //   handler: function(newValue, oldValue) {
    //     storage.setStorage('inputKey', newValue)
    //   }
    // }
    inputValue(value) {
      storage.setStorage('inputKey', value)
    }
  },
  methods: {
    getstorage() {
      this.storageValue = storage.getStorage('inputKey')
      console.log(this)
    }
  }
}
</script>

<style>
</style>