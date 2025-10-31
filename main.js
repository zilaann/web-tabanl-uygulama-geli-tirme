var body=document.body;
var DugmeVarlik = document.getElementById("varlikDugme");

DugmeVarlik.addEventListener("click",()=>{

    InputUret(1);
    //var varlik1=new Varlik(111,"Iphone11",20000);
    //var varlik2=new Varlik(222,"Ipad11.Nesil",35000)

    //varlik1.UrunTanit();
    //varlik2.UrunTanit();

});

var DugmeElektrik = document.getElementById("elektrikDugme");

DugmeElektrik.addEventListener("click",() =>{

    InputUret(2);
    //var elektrik1=new elektrik(111,"Iphone11",20000,2);

    //elektrik1.UrunTanit();
    //elektrik1.garantiSoyle();
});

var DugmeMobil = document.getElementById("mobilDugme");

DugmeMobil.addEventListener("click",()=>{

    InputUret(3);
    //var malzeme1 = new Mobilya(111,"Iphone11",20000,"elektronik");

    //malzeme1.UrunTanit();
    //malzeme1.malzemeBilgisi();

});

var inputDiv = document.getElementById("inputDiv");

function InputUret(x){
    inputDiv.innerHTML="";
    if(x==1){//Varlık ÜRET.
        inputDiv.innerHTML += "<h5 style='color:tomato'>Varlik Oluşturma Alani</h5>";
        inputDiv.innerHTML +="<input type='number' id='kodID' placeholder='Kod'><br>"; 
        inputDiv.innerHTML +="<input type='text' id='adID' placeholder='Ad'><br>";
        inputDiv.innerHTML +="<input type='number' id='fiyatID' placeholder='Fiyat'><br>";
        inputDiv.innerHTML +="<input type='button' id='varlikClassDugme' value='Oluştur' class='btn btn-danger'><br>";

        document.getElementById("varlikClassDugme").addEventListener("click",()=>{
            var varlik1=new Varlik(
                document.getElementById("kodID").value,
                document.getElementById("adID").value,
                document.getElementById("fiyatID").value
                );

            Listele();
        });
    }

    else if(x==2){
        inputDiv.innerHTML += "<h5 style='color:tomato'>Varlik Oluşturma Alani</h5>";
        inputDiv.innerHTML +="<input type='number' id='kodID' placeholder='Kod'><br>"; 
        inputDiv.innerHTML +="<input type='text' id='adID' placeholder='Ad'><br>";
        inputDiv.innerHTML +="<input type='number' id='fiyatID' placeholder='Fiyat'><br>";
        inputDiv.innerHTML +="<input type='number' id='garantiID' placeholder='Garanti Süresi'><br>";
        inputDiv.innerHTML +="<input type='button' id='elektrikClassDugme' value='Oluştur' class='btn btn-danger'><br>";

        document.getElementById("elektrikClassDugme").addEventListener("click",()=>{
            var elektrik1 = new elektrik(
                document.getElementById("kodID").value,
                document.getElementById("adID").value,
                document.getElementById("fiyatID").value,
                document.getElementById("garantiID").value
            );

            Listele();
        });

    }

    else{
        inputDiv.innerHTML += "<h5 style='color:tomato'>Varlik Oluşturma Alani</h5>";
        inputDiv.innerHTML +="<input type='number' id='kodID' placeholder='Kod'><br>"; 
        inputDiv.innerHTML +="<input type='text' id='adID' placeholder='Ad'><br>";
        inputDiv.innerHTML +="<input type='number' id='fiyatID' placeholder='Fiyat'><br>";
        inputDiv.innerHTML +="<input type='text' id='malzemeID' placeholder='Malzeme Türü'><br>";
        inputDiv.innerHTML +="<input type='button' id='malzemeClassDugme' value='Oluştur' class='btn btn-danger'><br>";

        document.getElementById("malzemeClassDugme").addEventListener("click",()=>{
            var malzeme1 = new Mobilya(
                document.getElementById("kodID").value,
                document.getElementById("adID").value,
                document.getElementById("fiyatID").value,
                document.getElementById("malzemeID").value
            );

            Listele();

    });

}


var DugmeListe = document.getElementById("listeleDugme");

var listeDiv = document.getElementById("listeDiv");

DugmeListe.addEventListener("click",() =>{
    Listele();
});

function Listele(){
    listeDiv.innerHTML="";
    listeDiv.innerHTML += "Mevcut Ürünler" + "<hr>";
    yonetici.envanter.forEach(element => {
        listeDiv.innerHTML += element.kod + " " +element.ad + " " + element.fiyat + "<br>";
        
    });

}};


