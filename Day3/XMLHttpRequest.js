var uri = "https://jsonplaceholder.typicode.com/todos/";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var todos = JSON.parse(this.response);
    console.log(todos);
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};
