const input = document.querySelector("input"),
h2 = document.querySelector("h2");
h2.innerHTML = localStorage.getItem("value");
// đưa lên đầu ngay đây nè
input.addEventListener("keyup", display);
//Câu hỏi đặt ra:
// làm thế nào để sử dụng localStorage?
function display(){
    h2.innerHTML = input.value
    localStorage.setItem('value',input.value);

}
localStorage.setItem('value',input.value);

localStorage.setItem('keyName',input.value);

console.log(localStorage.getItem('value',input.value));

//Làm thế nào để lưu giá trị vừa nhập
// Lưu ý chúng ta phải đưa h2.innerHTML lên đầu
//-> nếu không máy sẽ không hiểu vị trí cần lưu

//myObj -> JSON
// chức năng file JSON
// khi nhập tên đăng nhập - mật khẩu -> Lưu bởi file JSON

let myObj ={
    name : "Tan",
    age : 22,
    gioitinh : "nam"
};
//localStorage.setItem("Doi tuong", myObj);
//console.log(localStorage);
let myObj_serialized = JSON.stringify(myObj)
console.log(myObj_serialized);


