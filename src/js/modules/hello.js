// function Hello(options) {
//   this.name = options.name;
//   this.container = document.getElementById(options.el);
//   this.sayHello = function() {
//     this.container.innerText = 'Hello ' + this.name;
//   }
// }

class Hello {
  constructor(options) {
    this.name = options.name;
    this.container = document.getElementById(options.el);
  }
  sayHello() {
    this.container.innerText = 'Hello ' + this.name;
  }
}
export default Hello;