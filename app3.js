// const body=document.body; //const sabit bir dizi tanımlamayı temsil eder.

// const obje1={
//     isim:"zilan kıran",
//     numara:2024707059,
//          dersler:[
//             ders1={
//                 dersAdi:"Ekonometri Modeller", 
//                 dersKredi:4,
//                 bilgi(){
//                     alert(this.dersAdi)//this ders adını temsil eder burada. bu yapı olmasa ders1 gibi belirtmem gerekirdi.

//                 }//bu yapı veritabanı kullanmama gerek kalmamasını sağlar. (json)
//             },
//             ders2={
//                 dersAdi:"Yapay Sinir Ağları",
//                 dersKredi:4
//             }

//     ],
//     bilgi(){
//         alert("Ben: " +this.isim);
//     },
//     bilgi2(){
//         alert("Numara: "+this.numara);
//     }

// }
//obje1.bilgi(); //bilgi isimli fonksiyon metodu çağrılır.
// alert(obje1.dersler); //hepsini gösterir.
// alert(obje1.dersler[0]); //indis değerine göre göstermeye başlar sırayla.
// alert(obje1.dersler[obje1.dersler.length-1]); //length eleman sayısını verir kaç - değer verirsek ona göre istediğimiz eleman ekrana yazılabilir.
// alert(obje1.dersler[0].dersAdi); //iç içe objelerdde kullanmaya uygun bir yapıdır obje birin içinde dersler dizisindeki dersleri indis 
//değerine göre ders adını ve kredi notu gibi bilgileri görebiliriz.


// var divSonuc = document.getElementById("SonucDiv") //div elementini js ile bağlar.

// divSonuc.innerHTML += "<h2>Dersler</h2><hr>"; //içine dersler başlığını ekler.

// obje1.dersler.forEach(Element => {  //forEach yapısı bir kere çalışacak bir döngü oluşturur.
//     divSonuc.innerHTML += Element.dersAdi + " " + Element.dersKredi + "<br>";  //dersler dizisinden aldığı her ders adı ve kredisini alt alta yazar.
// });

//Object.assign..  //assign terimi obje2 deki değeri obje1 deki bileşenlerin üstüne yapıştırır. mesela obje2 de marka bileşenini obje1 in üstüne yapıştırır.
// const obje1 = {
//     marka:"PORSCHE",
//     model:"911GT3RS",
//     yil:2023
// }

// const obje2={
//     marka:"BMW"
// }
// Object.assign(obje1,obje2); 

// alert(obje1.marka); //yani artık ekranda porsche değilde bmw gözükür.

//Object.create.. //oluşturulan nesneden başka bir nesne oluşturmak için kullanılır.

// const obje1 = {
//     marka:"APPLE",
//     model:"14PRO",
//     ram:8
// }

// const obje2 = Object.create(obje1);

// obje2.marka="Samsung";

// alert(obje2.marka + " " + obje2.marka);

// const body=document.body;

// const obje1={
//     isim:"Zilan Kıran",
//     numara:2024707059,
//          dersler:[
//             ders1={
//                 dersAdi:"Ekonometri",
//                 dersKredi:9,
//                 bilgi(){
//                     alert(this.dersAdi)//this obje1 temsil eder
//                 }//bu yapı vt kullanmama gerek kalmamasını sağlar (json)
//             },
//             ders2={
//                 dersAdi:"Yönelim Araştırmaları",
//                 dersKredi:4
//             }

//     ],
//     bilgi(){
//         alert("Ben: " +this.isim);
//     },
//     bilgi2(){
//         alert("Numara: "+this.numara);
//     }

// }
// alert(Object.keys(obje1)); //obje1 in içindeki tüm anahtar kelimeleri biz  dizi halinde döndürür.
// alert(Object.values(obje1)); //obje1 in içindeki tüm değerlerin çıktısını verir.

 //Object.entries //iki elemanlı bir dizi döndürür.

// var liste = Object.entries(obje1);
//alert(liste[0]); //bu ekrana isim.Zilan Kıran yazar.
 //alert(liste[0][1]); //liste dizisinin 1. elemanından ikinci değerini ekrana yazdırır. Bu ise dümdüz Zilan Kıran yazar.
 //alert(liste[2][1][1].dersAdi); //ders2 nin içindeki dersadı yerine ulaşıp ekrana yönelim araştırmaları çıktısı verir.
// alert(liste[2][1][0].dersKredi); //ders1 nin içindeki derskredisini verir bize yani ekrana 9 yazar.

// var divSonuc = document.getElementById("SonucDiv")

// const ogrenciler=[
//     ogrenci1={
//         numara:2024707059,
//         isim:"Zilan Kıran",
//         dilPuani:85
//     },
//     ogrenci2={
//         numara:2024707058,
//         isim:"Yusuf Kaya",
//         dilPuani:65
//     },ogrenci3={
//         numara:2024707057,
//         isim:"Ceren Dereli",
//         dilPuani:75
//     }
// ]

// function Degerlendir({dilPuani}){
//     return dilPuani>=80?"Başarılıdır":"Başarısızdır"; if else koşulu yerine kısayol olarak kullanılır. return ile sorgulama yapılır.80 ve üstü ise başarılıdır yazar.
// 80 den aşşağı ise başarısızdır çıktısını veririr.
// }

// var sonuc=Object.groupBy(ogrenciler,Degerlendir); //öğrencileri bu sorgulama ile gruplara ayrımaya yarar.

// divSonuc.innerHTML += "<h6>Başarılı Öğenciler</h6><hr>";
// for(var [indis,value] of sonuc.Başırılı.entries()){
//     divSonuc.innerHTML += value.numara + " " + value.isim+" " + value.dilPuani + "<br>"; //numara isim ve dilpuanını yan yana yazmaya yarar başarılılar adı altında.
// }
// divSonuc.innerHTML += "<h6>Başarısız Öğenciler</h6><hr>";
// for(var [indis,value] of sonuc.Başırısız.entries()){
//     divSonuc.innerHTML += value.numara + " " + value.isim+" " + value.dilPuani + " " + indis + "<br>"; //diğeri gibi yazıp en sonunada indis değeri ekler.
// }
var divSonuc = document.getElementById("SonucDiv")

const kullanicilar={
    isim:"Zilan",
    numara:2024707059,
    kitaplar:[
        "Çok kriterli kara verme teknikleri",
        "Yön eylem araştırma"
    ]
}

divSonuc.innerHTML +="Kitaplar<hr>"; //kitapları ekler dive.

kullanicilar.kitaplar.forEach((element,indis)=>{  //element altında toplamndığı zaman normal indis gibi değerlendirilmez.
    //kullanicilar'ın kitaplar dizisindeki her bir kitaba teker teker ulaşır.

});