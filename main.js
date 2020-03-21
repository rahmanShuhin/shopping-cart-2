const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
    const phone_num=parseFloat(document.getElementById("phone_num").value)+1;
    document.getElementById("phone_num").value=phone_num;
    document.getElementById("phone_price").innerText=phone_num*1219;
    total_subtotal();
})
const minus=document.getElementById("minus");
minus.addEventListener("click",function(){
    const phone_num=parseFloat(document.getElementById("phone_num").value)-1;
    if(phone_num>=0){
        document.getElementById("phone_num").value=phone_num;
    document.getElementById("phone_price").innerText=phone_num*1219;
    total_subtotal();
    }
})

const cover_plus=document.getElementById("cover_plus");
cover_plus.addEventListener("click",function(){
    const cover_num=parseFloat(document.getElementById("cover_num").value)+1;
    document.getElementById("cover_num").value=cover_num;
    document.getElementById("cover_price").innerText=cover_num*59;
    total_subtotal();
})
const cover_minus=document.getElementById("cover_minus");
cover_minus.addEventListener("click",function(){
    const cover_num=parseFloat(document.getElementById("cover_num").value)-1;
    if(cover_num>=0){
        document.getElementById("cover_num").value=cover_num;
    document.getElementById("cover_price").innerText=cover_num*59;
    total_subtotal();
    }

})
function total_subtotal(){
    var num1=parseFloat(document.getElementById("phone_num").value);
    var num2=parseFloat(document.getElementById("cover_num").value);
    document.getElementById("total").innerText=num1*1219+num2*59;
    document.getElementById("subtotal").innerText=num1*1219+num2*59;
}