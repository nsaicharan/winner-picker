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
      this.list.push(this.inputName);
      this.inputName = "";
    },
    pickWinner() {
      const randNumber = Math.floor(Math.random() * this.list.length);

      // Set Winner
      this.winner = this.list[randNumber];
    }
  }
});
