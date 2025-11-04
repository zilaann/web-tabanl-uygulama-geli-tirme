//var h1 =document.querySelector("h1");
//h1.innerText="Değişim QuerySelector"; //daha toplayıcı bişey

//var h1=document.querySelector("h1:nth-child(1)"); //index 0 dan başlasada burda sıralamayı 1 den alıyor
//h1.innerHTML="ElemenX";

//var h1=document.querySelectorAll("h1");
//h1[h1.length-1].innerHTML="EtiketX"; //dizi haline getirdiğimiz için artık indeksi 0 alabiliriz  //en sonuncuyu bulmak için -1 methodu kullanılabilir

//for(var i=0; i<=h1.length-1;i++){
  //  h1[i].innerText="Etiket"+1;
//}
//innerHTML ve İnnerText arasındaki farktext sadece metin içeriğini alır ve ayarlar html hepsini

//var h1=document.getElementsByTagName("h1");
//h1[0].innerHTML="Merhaba İlk H1";

//var h1=document.getElementsByClassName("h1ClassName"); //getElements ve Element arasındaki farkı sorar!!
//h1[0].innerText="Class Değişimi";

//var h11=document.getElementById("h1IDName");
//h11.innerHTML="ID Değişimi";
//h11.setAttribute("style","color:red;background:green");

var body=document.body;

var div1=document.createElement("div");
div1.setAttribute("style","heigth:200px;background:tomato;,color:white");
div1.innerText="Burası yeni oluşturulan div";

//Düğme Oluşturma...
var dugmeSil=document.createElement("button");
dugmeSil.setAttribute("style","color:white;background:black;");
dugmeSil.innerText="Sil";
dugmeSil.onclick=function(){
    div1.remove();
}
div1.append(dugmeSil);
body.append(div1);