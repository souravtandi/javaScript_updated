console.log(window);

function getPageUrl(){
    let url = window.location.href;
    //debugger;
    console.log(url);
    //window.history.back();
}
getPageUrl();

function add(){
    let result = 4 + 5;
    let emp = JSON.stringify({"id": 111, "age": 22});

    //data store in local storage is available until explicitlaly deleted
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("name", "John");//data stored inside localstorage is in string format
    localStorage.setItem("empOne", emp);

    console.log(result);
}

function getStorageDataSession(){
    let name = sessionStorage.getItem("name");
    let result = sessionStorage.getItem("result");
    let e = sessionStorage.getItem("empOne");//here e is a string

    console.log(typeof(name)+ " name is "+name);
    console.log(typeof(result) + " result is " +result);
    console.log(typeof(e) + " emp1 is " +e);

    console.log(name);
    console.log(parseInt(result));//converts the string form of emp object to object form
    let empObj = JSON.parse(e);
    console.log(typeof(empObj));
    console.log(empObj);

    const {id, age} = empObj;//Object destructuring another feature of ES6
    console.log(id);
    console.log(age);
}

function clearDataSession(){
    sessionStorage.clear();
}


function addToSession(){
    let result = 4 + 5;
    let emp = JSON.stringify({"id": 111, "age": 22});

    //data store in local storage is available until user closes all browser window
    window.sessionStorage.setItem("result", result);
    window.sessionStorage.setItem("name", "John");//data stored inside localstorage is in string format
    sessionStorage.setItem("empOne", emp);

    console.log(result);
}

function getStorageData(){
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");//here e is a string

    console.log(typeof(name)+ " name is "+name);
    console.log(typeof(result) + " result is " +result);
    console.log(typeof(e) + " emp1 is " +e);

    console.log(name);
    console.log(parseInt(result));//converts the string form of emp object to object form
    let empObj = JSON.parse(e);
    console.log(typeof(empObj));
    console.log(empObj);

    const {id, age} = empObj;//Object destructuring another feature of ES6
    console.log(id);
    console.log(age);
}

function clearData(){
    localStorage.clear();
}

