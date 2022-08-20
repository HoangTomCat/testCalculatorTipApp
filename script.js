const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");
const button = document.getElementById("resetBUtton");
function typeNumA(){
    if(!a.checkValidity() || a.value == "0"){ /*check xem phần tử a đã valid chứa*/
        const findElement = document.getElementById("string-1");
        if(findElement == null){
            /*Lưu thông báo khi sai điều kiện nhập*/
            const string = document.createElement("span");
            string.id = "string-1";
            string.innerText = "Wrong Input";
            string.style.color = "red";
            document.getElementById("form-1").appendChild(string);

            /*Hiển thị màu của border và font bên trong border khi sai điều kiện*/
            a.style.borderColor = "red";
            a.style.borderWidth = "1px";
            a.style.borderStyle = "solid";
            a.style.color = "red";
        }
        localStorage.removeItem("num1Valid"); /*Khi nhấn vượt quá mức cho phép or sai quy định sẽ xóa thuộc tính num1Valid*/
        result.value = "";
    }
    else{
        if(a.value[0] == "0"){ /*Mục đích: Loại bỏ số 0 trên đầu*/
            const myArray = a.value.split("");
            myArray.shift(); // Loại bỏ phần tử đầu của Array
            const myResult = myArray.join();
            a.value = myResult
            if(a.value == "0"){ /*Nếu nhập là 00 => 0 => invalid*/
                if(document.getElementById("string-1") == null){ // Nếu đã xuất hiện thông báo lỗi
                    /*Lưu thông báo khi sai điều kiện nhập*/
                    const string = document.createElement("span");
                    string.id = "string-1";
                    string.innerText = "Wrong Input";
                    string.style.color = "red";
                    document.getElementById("form-1").appendChild(string);
                }
                /*Hiển thị màu của border và font bên trong border khi sai điều kiện*/
                a.style.borderColor = "red";
                a.style.borderWidth = "1px";
                a.style.borderStyle = "solid";
                a.style.color = "red";
                // localStorage.removeItem("num1Valid"); Cần thiết phải xóa lần nữa không ?
            }
            else{ // Nếu xóa số 0 mà thỏa mãn điều kiện và hiển thị số khác số 0
                a.style.borderColor = "blue";
                a.style.borderWidth = "1px";
                a.style.borderStyle = "solid";
                a.style.color = "black";
                document.getElementById("string-1").remove();
                localStorage.setItem("num1Valid","true");
            }
        }
        else{ /*Nếu không nhập số 0 đầu tiên*/
            const deleteElement = document.getElementById("string-1"); /*Tìm xem thông báo có tồn tại trước đó hay không ?*/
            a.style.borderColor = "blue";
            a.style.borderWidth = "1px";
            a.style.borderStyle = "solid";
            a.style.color = "black";
            if(deleteElement !== null){ /*Xóa thông báo nếu tồn tại*/
                deleteElement.remove();
            }
            localStorage.setItem("num1Valid","true");
        }
    }
    if(localStorage.getItem("num1Valid") != null && localStorage.getItem("num2Valid") != null){
        result.value = Number(a.value) + Number(b.value);
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
        if(b.value[0] == "0"){
            const myArray = b.value.split("");
            myArray.shift(); // Xóa phần tử đầu;
            const myResult = myArray.join();
            b.value = myResult;
            if(b.value == "0"){ // Nếu nhập 00 => 0 => invalid
                if(document.getElementById("string-2") == null){ // Nếu đã xuất hiện thông báo lỗi
                    /*Lưu thông báo khi sai điều kiện nhập*/
                    const string = document.createElement("span");
                    string.id = "string-2";
                    string.innerText = "Wrong Input";
                    string.style.color = "red";
                    document.getElementById("form-2").appendChild(string);
                }
                /*Hiển thị màu của border và font bên trong border khi sai điều kiện*/
                b.style.borderColor = "red";
                b.style.borderWidth = "1px";
                b.style.borderStyle = "solid";
                b.style.color = "red";
                // localStorage.removeItem("num1Valid"); Cần thiết phải xóa lần nữa không ?
            }
            else{ // Nếu xóa số 0 và phần còn lại thỏa mãn điều kiện và khác số 0
                b.style.borderColor = "blue";
                b.style.borderWidth = "1px";
                b.style.borderStyle = "solid";
                b.style.color = "black";
                document.getElementById("string-2").remove();
                localStorage.setItem("num2Valid","true");
            }
        }
        else{ // Nếu không nhập số 0 ở đầu
            const deleteElement = document.getElementById("string-2"); /*Tìm xem thông báo có tồn tại trước đó hay không ?*/
            b.style.borderColor = "blue";
            b.style.borderWidth = "1px";
            b.style.borderStyle = "solid";
            b.style.color = "black";
            if(deleteElement !== null){ /*Xóa thông báo nếu tồn tại*/
                deleteElement.remove();
            }
            localStorage.setItem("num2Valid","true");
        }
        if(localStorage.getItem("num1Valid") != null && localStorage.getItem("num2Valid") != null){
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
    


