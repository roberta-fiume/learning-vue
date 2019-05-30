// var data = {
//     name: "Yoshi"
// }

// If I put in data "return data", it will change the name at both app 1 and 2.

Vue.component('greeting', {
    template: '<p> Hey there, I am {{name}}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
       return {
           name: "Yoshi"  
       }
    },
    methods: {
        changeName: function() {
            this.name = "Mario";
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});