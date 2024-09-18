let  a = document.getElementById("n")
let  b = document.getElementById("m")
let  c = document.getElementById("cr")
let  d = document.getElementById("cm")
let  e = document.getElementById("cn")

let asd 

if (localStorage.getItem("iphone")== null) {
    asd = []
}
else{
    asd = JSON.parse(localStorage.getItem("iphone"))
    view()
}

function home(){
    if( a.value == '' || b.value == ''|| c.value == ''|| d.value == ''|| e.value == ''){
        let al = `
        <div class="alert alert-danger" role="alert">
             هناك حقل فارغ
        </div>
        
        `
        document.getElementById("alert").innerHTML = al
    }
    else{
        al = ''
        document.getElementById("alert").innerHTML = al


    let phone = {
        n : a.value,
        m : b.value,
        cr : c.value,
        cm : d.value,
        cn : e.value
    }
    if(phone.cn >1){
        for (let i = 0; i < phone.cn; i++) {
            asd.push(phone)            
        }

    }
    else if(phone.cn <= 0){
        let ala = `
        <div class="alert alert-danger" role="alert">
            يجب ان تكون القيمه اكبر من 0
        </div>
        
        `
        document.getElementById("alert").innerHTML = ala
    }
    else{
        ala = ''

        document.getElementById("alert").innerHTML = ala

        asd.push(phone)

    }
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()
    clr()
}
 }
  


function view(){
    let v = ""
    for (let i = 0; i < asd.length; i++) {
        v += `
           <tr>
            <td>${i+1}</td>
            <td>${asd[i].n}</td>
            <td>${asd[i].m}</td>
            <td>${asd[i].cr}</td>
            <td>${asd[i].cm}</td>
            <td> <button class="btn btn-warning" onclick="">update</button> </td>
            <td> <button class="btn btn-danger" onclick="deleteRow(${i})">delete</button> </td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = v
}

function clr(){
    a.value = ''
    b.value = ''
    c.value = ''
    d.value = ''
    e.value = ''
}

function btnDelete(){
    asd.splice(0)
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()    
}

function deleteRow(i){
    asd.splice(i,1)
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()
}


