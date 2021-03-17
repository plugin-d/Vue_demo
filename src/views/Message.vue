<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 15:38:31
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
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退上级页面</button>
    <hr />
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
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>

<style>
</style>