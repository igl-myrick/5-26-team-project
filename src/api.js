export default function() {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.addEventListener("loadend", function() {
      if (this.status === 200 && this.responseText[0] === "{") {
        resolve(JSON.parse(this.responseText));
      } else {
        reject();
      }
    });
    request.open("POST", "http://colormind.io/api/", true);
    request.send(JSON.stringify({model: "default"}));
  });
}