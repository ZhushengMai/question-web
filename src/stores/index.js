import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      // 用户信息
      loginUserInfo: JSON.parse(localStorage.getItem("userInfo")) || "",
      // 用户登录
      showLogin: false,
      // 板块信息
      boardList: [],
      // 当前板块
      boardId: null,
      // token信息
      userToken: JSON.parse(localStorage.getItem("userToken")) || "",
    };
  },
  // 计算
  getters: {},
  // 方法
  actions: {},
});
