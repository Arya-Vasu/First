var url = "https://618fa735f6bf4500174849a3.mockapi.io/Users";

//Read the data

function getData() {
    fetch(url)
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
}

//getData();

function createData() {
    let data = {
        Name: "Vasu Arya",
        Email: "vasuarya@gmail.com"
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json; charset=UTF-8", }
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

//createData();

//Updating the Data -

function updateData() {
    let data = {
        Name: "Vishoka Arya",
        Email: "vishokaarya@gmail.com",
    };
    fetch(url +"/12", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "content-Type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((Data) => console.log(data))
      .catch((error) => console.log(error));
}

//updateData();

//Deleting the data -

function deleteData() {
    fetch(url +"/13", {
        method: "DELETE",
    })
      .then(result => result.json())
      .then((Data) => console.log(data))
      .catch((error) => console.log(error));
}

//deleteData();

//Fetching a particular data from API -

function getData1() {
    fetch(url+"/12", {
        method: "GET",
    })
      .then((result) => result.json())
      .then((data) => console.log(data.Name))
      .catch((error) => console.log(error));
}

getData1();

document.createElement