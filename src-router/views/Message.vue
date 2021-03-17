<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 14:33:05
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\views\message.vue
-->
<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">
          {{ message.title }}</router-link
        >
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    // 模拟请求
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message001'
        },
        {
          id: 2,
          title: 'message002'
        },
        {
          id: 3,
          title: 'message003'
        }
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style>
</style>