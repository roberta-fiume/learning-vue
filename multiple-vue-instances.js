var one = new Vue({
    el: "#vue-app",
    data: {
        title: 'Vue App One'
    },
    methods: {
      
     
    },
    computed: {
        greet: function() {
            return "Hello from app ONE :)";
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'Vue app Two'  
    },
    methods: {
        changeTitle: function() {
            one.title = "Title changed";
        }
      
     
    },
    computed: {
        greet: function() {
            return "Yo dudes, this is app 2 speaking to ya :)";
        }
    }

   
});

two.title = "Changed from outside"; 
// it overwrite the title of app two from outiside