class Insan{ //insan diye bir sınıf oluşturduk ve kullanmak istediğiiz parametre gibi şeyleri tanımladık.
    isim;
    soyad;
    yas;
    constructor(gelenIsim,gelenSoyad,gelenYaş) //bu classta bir değer oluşturmak istediğimizde buna olanak sağlıyor.Başka js lerde de insan classını kullanmaya yarıyor.
    {
        this.isim=gelenIsim;  //this parametre içindeki verilen ad ile ilk baştakileri atama yapmak için kullanılır.İsim parametresi ile gelenİsimi eşitler aslında. 
        this.soyad=gelenSoyad;
        this.yas=gelenYaş;

        Yonetici.kullanicilar.push(this);  //diziye yeni eleman eklemek için push kullanılır.insana eklenen her kişi kullanıcılarada eklenecek.

    }
    KendiniTanit(){ //bu methodu diğer js lerde de kullanabiliriz.
        alert("Merhaba. Ben " + this.isim +" "+ this.soyad + " . Yaşım: " + this.yas );  //alert ekrana çıktı verir.
    }
}