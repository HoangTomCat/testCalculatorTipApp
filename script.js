const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");
const button = document.getElementById("resetBUtton");
function typeNumA(){
    if(!a.checkValidity() || a.value == "0"){ /*check xem phần tử a đã valid chứa*/
        const findElement = document.getElementById("string-1");
        if(findElement == null){
            const string = document.createElement("span");
            string.id = "string-1";
            string.innerText = "Wrong Input";
            string.style.color = "red";
            a.style.borderColor = "red";
            a.style.borderWidth = "1px";
            a.style.borderStyle = "solid";
            a.style.color = "red";
            document.getElementById("form-1").appendChild(string);
        }
        localStorage.removeItem("num1Valid"); /*Khi nhấn vượt quá mức cho phép or sai quy định sẽ xóa thuộc tính num1Valid*/
        result.value = "";
    }
    else{
        const deleteElement = document.getElementById("string-1");
        if(deleteElement !== null){
            deleteElement.remove();
        }
        a.style.borderColor = "blue";
        a.style.borderWidth = "1px";
        a.style.borderStyle = "solid";
        a.style.color = "black";
        localStorage.setItem("num1Valid","true");
        if(localStorage.getItem("num2Valid") != null){
            result.value = Number(a.value) + Number(b.value);
        }
    }
    
}
function typeNumB(){
    if(!b.checkValidity() || b.value == "0"){ /*check xem phần tử b đã valid chưa*/
        const findElement = document.getElementById("string-2");
        if(findElement == null){
            const string = document.createElement("span");
            string.id = "string-2";
            string.innerText = "Wrong Input";
            string.style.color = "red";
            b.style.borderColor = "red";
            b.style.borderWidth = "1px";
            b.style.borderStyle = "solid";
            b.style.color = "red";
            document.getElementById("form-2").appendChild(string); /*Khi nhấn quá mức cho phép or sai quy định sẽ xóa thuộc tính num2Valid*/
        }
        localStorage.removeItem("num2Valid");
        result.value = "";
    }
    else{
        const deleteElement = document.getElementById("string-2");
        if(deleteElement !== null){
            deleteElement.remove();
        }
        b.style.borderColor = "blue";
        b.style.borderWidth = "1px";
        b.style.borderStyle = "solid";
        b.style.color = "black";
        localStorage.setItem("num2Valid","true");
        if(localStorage.getItem("num1Valid") != null){
            result.value = Number(a.value) + Number(b.value);
        }
    }
}
function clickButton(){
    a.value = "";
    a.style.borderColor = "blue";
    a.style.borderWidth = "1px";
    a.style.borderStyle = "solid";
    a.style.color = "black";
    
    b.value = "";
    b.style.borderColor = "blue";
    b.style.borderWidth = "1px";
    b.style.borderStyle = "solid";
    b.style.color = "black";
    
    result.value = "";
    localStorage.clear();
    const deleteElement1 = document.getElementById("string-1");
    const deleteElement2 = document.getElementById("string-2");
    if(deleteElement1 != null){
        deleteElement1.remove();
    }
    if(deleteElement2 != null){
        deleteElement2.remove();
    }
}
    


