"use strict";

new Vue({
  el: "#app",
  data() {
    return {
      inputName: "",
      list: [], //"Ram", "Naresh", "Geeta", "Sita"
      winner: ""
    };
  },
  methods: {
    addName() {
      if (this.inputName.trim() != "") {
        this.list.push(this.inputName);
        this.inputName = "";
      } else {
        alert("Input field shouldn't be empty!");
      }
    },
    pickWinner() {
      const randNumber = Math.floor(Math.random() * this.list.length);

      // Set Winner
      this.winner = this.list[randNumber];
    }
  }
});
