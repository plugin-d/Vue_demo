<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 14:29:57
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\views\MessageDetail.vue
-->
<template>
  <div>
    <ul>
      <li>id:{{ messageDet.id }}</li>
      <li>title:{{ messageDet.title }}</li>
      <li>content:{{ messageDet.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageDet: {},
      messagesDetail: []
    }
  },
  mounted() {
    this.messagesDetail = [
      {
        id: 1,
        title: 'message001',
        content: 'message001 content .....'
      },
      {
        id: 2,
        title: 'message002',
        content: 'message002 content .....'
      },
      {
        id: 3,
        title: 'message003',
        content: 'message003 content .....'
      }
    ]
    const id = this.$route.params.id * 1
    this.messageDet = this.messagesDetail.find(item => item.id === id)
  },
  watch: {
    // 监听路由路径发生变化
    $route(value) {
      const id = value.params.id * 1
      this.messageDet = this.messagesDetail.find(item => item.id === id)
    }
  }
}
</script>

<style>
</style>