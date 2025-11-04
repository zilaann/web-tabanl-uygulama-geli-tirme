var body = document.body;  //bodye bağlandık.
var dugme1 = document.getElementById("dugme1");  //düğme bire bağlandık.
dugme1.onclick = async function(){  //düğme 1 e tıklandığında oluşacak olayları tanımladık.
    await Islem1();  //await işlem1 tamamlanana kadar bir sonraki satıra geçilmesini bekletir.
    await Islem2();

    alert("Tüm işlemler Bitti!"); //sırası ile işlem1 ve işlem2 yi çalıştırı.en son ekrana işlem bitti yazar.

}
async function Islem1(){ //asekriyon yani sıralı işlemler tanımlıyıcaz.
    return new Promise((resolve,reject)=>{  //resolve ve reject promisin başarılı yada başarısız olduğunu bildirir.
        setTimeout(() => {
            const h2baslik = document.createElement("h2");  //yeni bir h2 elementi oluşturuldu.
            h2baslik.innerText = "Bu ilk işlem Başlığı";  //oluşturulan h2 nin içeriğini belirttik.
            h2baslik.setAttribute("id","h2baslik"); //h2 ye bir id atadık.
            body.appendChild(h2baslik); //oluşturulan h2 yi daha önce oluşturulan body e ekler.
            alert("Birinci işlem tamamlandı!" + new Date().toLocaleString()); //ekrana işlem tamamlandı yazar ve tarih saat yazar.
            resolve();
        }, 3000);  //işlem tıklandıktan 3 saniye sonra gerçekleşmeye başlar.
    });
}

async function Islem2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            var dugmeX = document.createElement("button");

            dugmeX.innerText = "Başlığı Sil!";
            dugmeX.setAttribute("class","btn btn-warning");
            dugmeX.onclick = function(){
                const h2gelen = document.getElementById("h2baslik");
                h2gelen.remove(); //h2 yi siliyor.
                this.remove(); //başlığı sil düğmesini siliyor.
                alert("İkinci işlem tamamlandı!" + new Date().toLocaleString()); //ekrana ikinci işlem tamamlandı diyip localdeki şuanki s
                resolve();
            }
            body.appendChild(dugmeX);

        }, 3000);
    })
}

//filter,map,reduce ve fetch......

//filter......

var sayilar = [1,2,3,4,5,6,7,8];

var sayilar2 = sayilar.filter((x)=>{  //filter bir filtreleme için kullanılır.
    if((x>=3) && (x<=7)){ //x değeri 3e eşit ve büyük ,7 den küçük ve eşitse true değerini döndürücektir.Ve yeni bir dizi döndürücektir.
        return true;
    }else{
        return false;
    }
});

// alert(sayilar2);  //ifin kuralına uyan filtreleme sonucundaki yeni diziyi ekrana yazar.

var isimler = ["Emre","Özge","Cem","Aylin","Serkan"];

var isimler2 = isimler.filter((r)=>{
    if(r.includes("E") || r.includes("ge")){ //string bir değer tanımladığımız için includes parametresini kullanırız.Ve e veya ge içerenleri yeni bir dizi haline getirecektir. 
        return true;
    }else{
        return false;
    }
});

// alert(isimler2);


const objeler = [  //obje tanımlıyoruz. ve obje dizileri oluşturduk.
    obje1 = {
        id:1,
        isim:"Emre",
        soyad:"KARAGÖZ",
        numara:2012800723,
        puan:90
    },
    obje2 = {
        id:2,
        isim:"Özge",
        soyad:"SAYGIN KARAGÖZ",
        numara:2010231451,
        puan:94
    },
      obje3 = {
        id:3,
        isim:"Cem",
        soyad:"YILDIZ",
        numara:2012211134,
        puan:95
    }
]

const objeler2 = objeler.filter((t)=>{ //puanı 90 ve büyük olanları yeni bir dizi haline getiricek.
    if(t.puan >= 90){
        return true;
    }else{
        return false;
    }
});

// console.log(objeler2);  //ekrana değil konsolo yazdırdık.

//Map konusu......

var objelerMap = objeler.map((m)=>{  //yeni bir veri yapısına ihtiyacımız var ise ve başka bir objeden birşeyler kullanıcaksak map kullanmak uygundur.
    return {
        id:m.id, //id yi id ye atadık.
        kullaniciAdi:m.isim + " " + m.soyad  //kullanıcı adınada isim ve soy isim parametrelerini atadık.
    }
});

// console.log(objeler);
// console.log(objelerMap);


//Fiter ve Map ortak kullanımı.....
var yeniYapi = objeler.filter((a)=>{
    if(a.puan >90){  //puanı 90 dan büyük olanları alıcak yeni bir dize aktarıcak.
        return true;
    }else{
        return false;
    }
}).map((m)=>{  //o yeni diziyide id ve kullanıcı adı olarak listeleyecek.
    return {
        id:m.id,
        kullaniciAdi:m.isim + " " + m.soyad
    }
});

//console.log(yeniYapi);

//Reduce yapısı ve kullanımı....
var listeR = [10,20,30,40];

var sonucR = listeR.reduce((x,y)=>x+y);  //reduce ile iki parametre tanımlayıp bunlara bir işlem atayabildik.Kısa yoldan dizideki tüm sayıları topladık.
// console.log("İşlem Sonucu: " + sonucR);

var kelimeler = ["Merhaba","Bugün","Nasılsın"];

var cumle = kelimeler.reduce((a,b)=>a + " " + b); //reduce ile iki parametre tanımaldık ve bu sfer yazdığımız kelimeleri yan yana yazıp bir cümle oluşturdu.

// alert(cumle);

//Fetch Yapısı....

function VeriCek(){
    fetch("index.html")
    .then((a)=>a.text())
    .then((k)=>{
        console.log(k);
    });  //fetchte tanımladığımız dosyayı satır satır ekrana yazdırır.
}

// VeriCek();

var divSon = document.createElement("div");

divSon.innerHTML += "<h4>Çekilen Veriler</h4><hr>";
body.appendChild(divSon);

var dugme2 = document.getElementById("dugme2");
function JsonCek(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((a)=>a.json())
    .then((f)=>{
        var sonIslem = f.map((t)=>{  //fetchin içindeki linkten çektiği verileri id ve title başlıklı yeni oluşan objeye atar.
            return {
                id:t.id,
                title:t.title
            }
        });
        sonIslem.forEach(element => {
            divSon.innerHTML += element.id + " | " + element.title + "<br>";  //bir div oluşturup içine yukarıdaki objenin verilerini aktardık.id ve titllarını yazdırdık.
        });
    })
}

dugme2.onclick = JsonCek; //dugme2 ye tıklandığında JsonCek fonksiyonu çalışır.
