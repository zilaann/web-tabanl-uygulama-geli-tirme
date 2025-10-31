var body=document.body;  //bodye ulaştık.
var DugmeInsan=document.getElementById("insanDugme");  //insandugme buttonuna ulaştık.

DugmeInsan.addEventListener("click",()=>{  //addEventListener ile click eylemini kazandırdık.
    InputUret(1);  //inputüret çalışsın istiyorum
    // var insan1=new Insan("Zilan","Kıran",20); //insan js tanımladığımız insan sınıfına yeni insan ekledik. 
    // var insan2=new Insan("Yusuf","Kaya",24);

    // insan1.KendiniTanit(); //kendinitanıt methodu ile de ekrana çıktı verdik. 
    // insan2.KendiniTanit();
});

var DugmeOgrenci=document.getElementById("ogrenciDugme"); //ogrencidugme buttonuna ulaştık.

DugmeOgrenci.addEventListener("click",()=>{  //addEventListener ile click eylemini belirttik.
    InputUret(2); //inputüret çalışsın istiyorum
    //  var ogrenci1=new Ogrenci("Zilan","Kıran",20,2024707059); //öğrenci js de tanımladığımız öğrenci sınıfına yeni bir öğrenci ekledik.
    // ogrenci1.KendiniTanit(); //önce kendini tanıttı.
    // ogrenci1.OgrenciNumaraSoyle(); //sonra ise numarayı ekrana yazdı.
     
});

var inputDiv=document.getElementById("inputDiv");  //inputdive bağlandık. bu inputların oluşacağı alan olacak.

function InputUret(x){ //bir parametre tanımladık ve bir fonkdiyon oluşturduk.
    inputDiv.innerHTML="";  //alanı önce temizledik.
    if(x==1){ //x eğer 1 e eşit ise insan oşuşturucak
        //İnsan İnput
        inputDiv.innerHTML +="<h5 style='color:tomato'>İnsan Oluşturma Alanı</h5>"; //İnsan oluşturma alanı diye bir başlık atar.
        inputDiv.innerHTML +="<input type='text' id='isimID' placeholder='İsim Alanı'><br>"; //text alanları oluşturacak.
        inputDiv.innerHTML +="<input type='text' id='soyadID' placeholder='Soyad Alanı'><br>";
        inputDiv.innerHTML +="<input type='number' id='yasID' placeholder='Yaş Alanı'><br>";
        inputDiv.innerHTML +="<input type='button' id='insanClassDugme' value='Oluştur' class='btn btn-danger'><br>";

        document.getElementById("insanClassDugme").addEventListener("click",()=>  //insanclassdugmeye tıklama eylemi kazandırdık.
        {
            var insan1=new Insan(
               document.getElementById("isimID").value,  //düğmeye tıklanınca bu değerleri insan1 dizisine kaydeder.
               document.getElementById("soyadID").value,
               document.getElementById("yasID").value

            );
            //insan1.KendiniTanit();
            Listele();  //oluşturduktan hemen sonra aynı anda listelerde.
    });
    }

    else{ //x eğer 1 e eşit değil ise öğrenci oluşturucak.
        // Öğrenci İnput
        inputDiv.innerHTML +="<h5 style='color:green'>İnsan Oluşturma Alanı</h5>";  //İnsan oluşturma alanı diye bir başlık atar.
        inputDiv.innerHTML +="<input type='text' id='isimID' placeholder='İsim Alanı'><br>"; //text alanları oluşturacak.
        inputDiv.innerHTML +="<input type='text' id='soyadID' placeholder='Soyad Alanı'><br>";
        inputDiv.innerHTML +="<input type='number' id='yasID' placeholder='Yaş Alanı'><br>";
        inputDiv.innerHTML +="<input type='number' id='numaraID' placeholder='Öğrenci Numara Alanı'><br>";

        inputDiv.innerHTML +="<input type='button' id='ogrenciClassDugme' value='Oluştur' class='btn btn-success'><br>";

        document.getElementById("ogrenciClassDugme").addEventListener("click",()=> 
            {
                var ogrenci1=new Ogrenci(
                   document.getElementById("isimID").value,  //düğmeye tıklanınca bu değerleri ogenci1 dizisine kaydeder.
                   document.getElementById("soyadID").value,
                   document.getElementById("yasID").value,
                   document.getElementById("numaraID").value

    
                );
                //ogrenci1.KendiniTanit();
                Listele(); //oluşturduktan hemen sonra aynı anda listelerde.
    });
}
    

var listeDugme=document.getElementById("listeleDugme");  //listedugme buttonuna ulaştık.

var listeDiv=document.getElementById("listeDiv");  //listediv e bağlandık.

listeDugme.addEventListener("click",()=>{  //addEventListener ile click eylemini belirttik.
    Listele();
});

function Listele(){
    listeDiv.innerHTML="";  //içinde bir eleman varsa içeriyi boşa atadık.
    listeDiv.innerHTML +="Mevcut Kullanıcılar" + "<hr>";  //mevcut kullanıcılar diye bir başlık atadık.
    Yonetici.kullanicilar.forEach(element => {  //yönetici sınıfındaki kullanıcılar dizisindeki her eleman için döngü olur.hepsi elemente atılır.
        listeDiv.innerHTML += element.isim +" " + element.soyad + " " + element.yas + " " + element.OgrenciNumara + "<br>";  //innerhtml ile listedive ulaşır ve içindeki isim soyad ve yas gibi değerleri alt alta yazar.
        
    });
}};