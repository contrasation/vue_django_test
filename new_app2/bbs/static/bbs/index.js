Vue.use(VueMaterial)

var App = new Vue({
  el: '#app',
  methods: {
    showAlert: function() {
        alert('Hello')
    }
  },
  data: {
      user : {
          address : 'This sentences would be\nsynchronize with below'
        },
      tableList: [
        [1, 2, 3, 4],
        [10, 20, 30, 40],
        [15, 25, 35, 45],
        [20, 25, 30, 35],
      ]
    }
});
