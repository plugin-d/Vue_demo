/*
 * @Author: Cris
 * @CreateTime:
 * @LastEditTime: 2021-03-15 13:29:18
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\utils\storage.js
 */
export default {
  setStorage(key, value) {
    return window.localStorage.setItem(key, value);
  },
  getStorage(key, value) {
    return window.localStorage.getItem(key);
  }
};
