"use strict";

new Vue({
  el: "#app",
  data() {
    return {
      names: "",
      winner: ""
    };
  },
  methods: {
    handleChange() {
      autosize(this.$refs.textarea);
    },
    pickWinner() {
      if (!this.names) {
        alert(`You haven't entered any name!`);
      } else {
        const namesArray = this.names
          .trim()
          .split("\n")
          .filter(name => name != "");

        const randNumber = Math.floor(Math.random() * namesArray.length);

        // Set Winner
        this.winner = namesArray[randNumber];
      }
    }
  },
  mounted() {
    this.$refs.textarea.setAttribute('placeholder', `E.g.\nBrian\nCharles\nLara`);
  }
});