//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // name property with every key stroke.
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted");
      //   event.preventDefault();
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    increment(input) {
      this.counter = this.counter + input;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
