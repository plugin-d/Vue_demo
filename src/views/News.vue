<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 13:04:29
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\views\News.vue
-->
<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      newsArr: ['news001', 'news002', 'news003']
    }
  }
}
</script>

<style>
</style>