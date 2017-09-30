Vue.use(VueMaterial)

var App = new Vue({
  el: '#app'
});

var App2 = new Vue({
  el: '#app-2'
});

var App3 = new Vue({
  el: '#app-3',
  methods: {
    showAlert: function(){
        alert('Hello')
    }
  }
});

var App4 = new Vue({
  el: '#app-4',
  data: {
//    message: 'Hello Vue.js!!'
    user : {
      address : 'This sentences would be\nsynchronize with below'
    }
  }
});

