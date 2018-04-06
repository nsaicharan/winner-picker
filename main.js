"use strict";

new Vue({
  el: "#app",
  data() {
    return {
      list: ["Ram", "Naresh", "Geeta", "Sita"],
      winner: ""
    };
  },
  methods: {
    pickWinner() {
      const randNumber = Math.floor(Math.random() * this.list.length);

      // Set Winner
      this.winner = this.list[randNumber];
    }
  }
});
