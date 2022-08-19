const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");
const button = document.getElementById("resetBUtton");
function typeNumA(){
    if(!a.checkValidity()){ /*check xem phần tử a đã valid chứa*/
        const findElement = document.getElementById("string-1");
        if(findElement == null){
            const string = document.createElement("span");
            string.id = "string-1";
            string.innerText = "Wrong Input";
            string.style.color = "red";
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
        localStorage.setItem("num1Valid","true");
        if(localStorage.getItem("num2Valid") != null){
            result.value = Number(a.value) + Number(b.value);
        }
    }
    
}
function typeNumB(){
    if(!b.checkValidity()){ /*check xem phần tử b đã valid chưa*/
        const findElement = document.getElementById("string-2");
        if(findElement == null){
            const string = document.createElement("span");
            string.id = "string-2";
            string.innerText = "Wrong Input";
            string.style.color = "red";
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
        localStorage.setItem("num2Valid","true");
        if(localStorage.getItem("num1Valid") != null){
            result.value = Number(a.value) + Number(b.value);
        }
    }
}
function clickButton(){
    a.value = "";
    b.value = "";
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
    


