let e_ad,e_soyad="";
let ad =document.getElementById("name");
let soyad =document.getElementById("surname");
let sifre=document.getElementById("password");
let re_sifre=document.getElementById("repassword");
let kullaniciAdi=document.getElementById("username");
let kaydol=document.getElementById("signup");
let eposta=document.getElementById("e_mail")
let basarili=document.getElementById("is_success");
let basarisiz=document.getElementById("is_failed");


ad.addEventListener("keyup", function()
{    
e_ad=ad.value;
kullaniciAdi.value=("@"+e_ad+e_soyad);
});
soyad.addEventListener("keyup", function()
{
e_soyad=soyad.value;  
kullaniciAdi.value=("@"+e_ad+e_soyad);  
           
           
});
kaydol.addEventListener("click",function()
{
if(sifre.value===re_sifre.value && sifre.value.length>=8 )
{  
basarili.innerHTML= "Hoşgeldiniz "+ kullaniciAdi.value; 
}
else{
basarisiz.innerText="Parolanız 8 karakterden az yada eşleşmiyor";
}
              
}
);