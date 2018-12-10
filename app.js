new Vue({
  el: "#vue-app",
  data: {
    title: "Vue",
    type: "FrameWork",
    age: 23,
    X: 0,
    Y: 0,
    website: "http://www.google.com",
    WebsiteTag: '<a href="http://www.google.com">Google</a>'
  },
  methods: {
    greet: function(day) {
      return `legday ${day} ${this.title}`;
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    //we get this automatically. We dont have to explicitly say it
    updateXY: function(event) {
      //console.log(event);
      this.X = event.offsetX;
      this.Y = event.offsetY;
    },
    click: function() {
      alert("You Clicked Me");
    }
  }
});
