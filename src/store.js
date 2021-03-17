/*
 * @Author: Cris
 * @CreateTime:
 * @LastEditTime: 2021-03-17 16:23:09
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\store.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
  count:0
},
const mutations={},
const actions={},
const getters={
  
},

export default new Vuex.Store({
  state, //状态
  mutations, //包含多个更新state函数的对象
  actions, //包含多个对应事件回调函数的对象
  getters //包含多个getter计算属性函数的对象
});
