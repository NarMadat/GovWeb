import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    type: '',
    title: '',
    demo: ''
  }),
  actions: {
    async updateEmail(email) {
      const { data, error } = await useFetch('http://localhost:3005/api/user/email').post({ email }).json();
    },

    async updateType(type) {
      const { data, error } = await useFetch('http://localhost:3005/api/user/type').post({ type }).json();
    },

    async updateTitle(title) {
      const { data, error } = await useFetch('http://localhost:3005/api/user/title').post({ title }).json();
    },

    async updateDemo(demo) {
      const { data, error } = await useFetch('http://localhost:3005/api/user/demo').post({ demo }).json();
    }
  }
});