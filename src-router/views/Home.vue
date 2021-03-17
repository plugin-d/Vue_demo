<!--
 * @Author: Cris
 * @CreateTime: 
 * @LastEditTime: 2021-03-17 14:34:00
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\views\Home.vue
-->

<template>
  <div>
    <h1>home</h1>
    <p>{{ msg }}</p>
    <div>
      <ul>
        <li>
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Messages</router-link>
        </li>
      </ul>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>
</style>