var app = new Vue({
    el: '#app',
    data: {
      message: "Hello Vue!",
      textTitle: "Roberta",
      show: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: "Learn Javascript", number: 1},
            {text: "Learn Vue", number: 2},
            {text: "Build something awesome", number: 3}
        ],
        userInput: "Hello Vue",
        reverseMessageClass: "blue-class"
    },
    methods: {
        reverseMessage: function() {
            this.toggleReverseMessageClass();
            this.userInput = this.userInput.split('').reverse().join('')
        },
        toggleReverseMessageClass: function () {
            this.reverseMessageClass === "red-class" ? 
                this.reverseMessageClass = "blue-class" : this.reverseMessageClass = "red-class"; 
        }
    }

  })
