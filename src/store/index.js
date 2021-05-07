import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tablePrice: {
      title: "Table Price",
      offers: [
        {
          id: 1,
          type: "Basic",
          price: "$29.00",
          contents: [
            { id: 1, text: "100 MB Disk Space" },
            { id: 2, text: "2 Subdomains" },
            { id: 3, text: "5 Email Accounts" },
            { id: 4, text: "Customer Support 24/7" },
          ],
        },
        {
          id: 2,
          type: "Standard",
          price: "$39.00",
          contents: [
            { id: 1, text: "100 MB Disk Space" },
            { id: 2, text: "2 Subdomains" },
            { id: 3, text: "5 Email Accounts" },
            { id: 4, text: "Customer Support 24/7" },
          ],
        },
        {
          id: 3,
          type: "Profesional",
          price: "$45.00",
          contents: [
            { id: 1, text: "100 MB Disk Space" },
            { id: 2, text: "2 Subdomains" },
            { id: 3, text: "5 Email Accounts" },
            { id: 4, text: "Customer Support 24/7" },
          ],
        },
      ],
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
