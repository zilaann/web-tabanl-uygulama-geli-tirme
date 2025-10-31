var body=document.body;  //body e bağlandık.

//Normal Fonksiyon..
var dugme1=document.getElementById("dugme1");  //dugme1 e bağlandık.

function Selam(isim){  //selam diye bir fonksiyon tanımladık isim diye de bir indisi var.
    alert("Merhaba+isim");
}

//dugme1.onclick=Selam("Zilan")  //anında çalışır basmadan.

// dugme1.onclick=function(){ //tıklama olduğunda çalışır.
//     Selam("Zilan");
// }
// dugme1.onmouseover=function(){  //fare imleci butonun üstüne geldiğinde gözükür.
//     Selam("Yusuf");
// }
// dugme1.onmouseleave=function(){  //fare imleci tamamen butonun dışına çıktığında gösterir.
//     Selam("Ceren");
// }

//addEventListener...
// dugme1.addEventListener("click",function(){  //tıklama eylemini addEventListener ile tanımlayabiliriz.
//     Selam("Zilan");
// });

//Arrow Functions...
var dugme2=document.getElementById(dugme2);  //dugme2 öğesine bağlandık.

var fonksiyon=(isim,soyad)=>{  //bir değişkene bir fonksiyon atamış olduk.Hızlı yazmak için elverişli.
    alert("Merhaba Zilan");
}

dugme2.onclick=fonksiyon;  //tekrar kullanılabilir bir yapı oldu.

//Callback Fonctions...
dugme3=document.getElementById(dugme3);  //dugme3 e bağlandık.

function callback(){  //bir işlem yapıldıktan sonra diğer işlemin yapılmasını sağlar.
    alert("Callback function");
}

function ilkfonksiyon(c){  //c parametresi içeren bir fonksiyon oluşturduk.
    alert("Burası İlk Fonksiyon");
    c();
}
dugme3.addEventListener("click",function(){  //tıklama eylemini atadık.
    ilkfonksiyon(callback);  //ekrana callback fonksiyonun alertini verir.
});

//Promise Yapısı...  //bir işlemi belirli süreçlere ayrılıp kesinlikle yapılması sağlanabilir.

// function Surec(){ 
//     setTimeout(()=>{ //verilen saniye kadar sonra tıklama sonucunu verir.
//         alert("Bu İlk İşlem" +new Date().toLocaleDateString());
//     },3000);  //3 saniye sonra çalışır.
//     setTimeout(()=>{ //arka arkaya olması bunun diğerinden sonra olması gerektiği anlamına gelmez!!
//         alert("Bu İkinci İşlem" +new Date().toLocaleDateString()); //new date adında yeni bir nesne oluşturur.Bu foksiyon çalıştığı andaki tarih ve saat bilgisini içerir.
//toLocaleDateString ise date nesnesini çağırır ve tüm tarih ve saat bilgisini alır ancak tarih kısmını ayırır.Locale göre düzenler.
//     },2000); //2 saniye sonra çalışır. Önce ikinci işlem yazar tamama basınca da birinci işlem yazısı gelir ekrana.
function Surec(){
    new Promise((resolve,reject)=>{  //iki parametre belirler.
        setTimeout(()=>{
            // alert("Bu İlk İşlem" +new Date().toLocaleDateString());
            // resolve(1000);  //resolve yapısı sayesinde then kısmınada geçer eğer onu kaparsak rejectteki yazıyı ekrana vericektir.
            // reject("Hata Hata");
            //bu işlem promise butonuna tıklandıktan ve  o çalıştıktan sonra aşşağı ekstra bir onayla butonu gelir ve then kısmına geçiş sağlar.
            var dugmeX = document.createElement("button"); //butonu dugmex ile bağladık.
            dugmeX.innerText = "Onayla"; //dugmex e onayla ismini verdik.
            dugmeX.setAttribute("class", "btn btn-danger");  //rengini verdik.

            dugmeX.onclick = function() {
                resolve(1000); //resolve yapısını bir butona aktarırsak biz tıklayınca yine çalışmaya devam eder ve then e geçer. Sınavda bu tarz bişey sorulabilir dedi.
                // reject("HATA HATA"); // denemek istersen bunu aktif et
            };
            body.appendChild(dugmeX);  // appendChild ebeveyn bir işleme çocuk öğe ekler.
        },3000);
//bu yapı ilkinden farklı olarak düğmeye tıklandıktan 3 saniye sonra ekrana ilk işlem yazısını verir.Tamama tıklandıktan 2 saniye sonrada bu ikinci işlem yazar.

    })
    .then((r)=>{  
        setTimeout(()=>{
            alert("Bu İkinci İşlem Değeri: " + r + new Date());
        },2000);
    })
    .catch((a)=>{ //ilkinde hata varsa ikinci yakalar.
        alert(a);
    });
}

var dugme4=document.getElementById(dugme4);  //dugme4 e bağlandık.
dugme4.onclick=Surec;  //tıklandığında surec adlı fonksiyon çalışır.

//Async-await işlemleri..

//async fonksiyonun diğer fonksiyondan farkı bu fonksiyon arka planda çalışır ve  sonucu ekrana verir sadece.İşlemleri bekletmeden syfa donmadan yapmaya olanak tanır.

var  dugme5=document.getElementById("dugme5");

async function Islem1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("İşlem1");
            resolve();
        },3000);
    })
}
async function Islem2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("İşlem2");
            resolve();
        },2000);
    })
}

async function surec() {
    await Islem1();
    await Islem2();
    alert("İşlem Tamamlandı");
    
}

dugme5.onclick=surec;
