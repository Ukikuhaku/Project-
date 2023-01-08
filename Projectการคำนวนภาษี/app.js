//function ลดหย่อนภาษี
let income = document.getElementsByName('income')
function findIncome(){
    return document.getElementsByName('income')
}
//หาค่าลดหย่อยภาษีทั้งหมด
function findTotal(){
    let arr = document.getElementsByName('inputV');
    let tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}

function netIncome(){
    let nincome = Number(document.getElementById('income1').value) - (100000+Number(document.getElementById('total').value))
    console.log(nincome)
    document.getElementById('totalNet').value =  nincome;
}
//if(300000>= va >150000) not working
function totalTax(va)
{let value;
    if(va <= 150000){
        //ไม่ต้องจ่ายภาษี
        value = 0
        return 0 + "Baht"
    }if(300000>= va && va >150000){
        //5%
        value = (va-150000)*0.05
        return value.toFixed(2) + "Baht"
    }if(500000>= va && va >300000){
        //10%
        value = ((va-300000)*0.1)+7500
        return value.toFixed(2) + "Baht"
    }if(750000>= va && va >500000){
        //15%
        value = ((va-500000)*0.15)+27500
        return value.toFixed(2) + "Baht"
    }if(1000000>= va && va >750000){
        //20%
        value = ((va-750000)*0.20)+65000
        return value.toFixed(2) + "Baht"
    }if(2000000>= va && va >1000000){
        //25%
        value = ((va-1000000)*0.25)+115000
        return value.toFixed(2) + "Baht"
    }if(5000000>= va && va >2000000){
        //30%
        value = ((va-2000000)*0.30)+365000
        return value.toFixed(2) + "Baht"
    }if(5000000 < va){
        //35%
        value = ((va-5000000)*0.35)+1265000
        return value.toFixed(2) + "Baht"
    }
}
function showTax(baht)
{
    alert(totalTax(baht))
}

