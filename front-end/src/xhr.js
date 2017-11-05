
export function xhr(url, type, data = "") {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
         xhr.open(type, url);

    xhr.onload = function () {
       if (xhr.status === 200)
           resolve(JSON.parse(xhr.response));
       else
           reject({ "status": xhr.status, "response": JSON.parse(xhr.response) });
    };

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));
    }

    else
      xhr.send();
  });
};