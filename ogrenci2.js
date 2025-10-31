class Ogrenci extends Insan{  //extends daha önce tanımlanmış bir sınıftan miras almayı ordaki parametreleri kullanmayı sağlar.
    OgrenciNumara;  //yeni bir parametre tanımladık.
    constructor(gelenIsim,gelenSoyad,gelenYaş,gelenNumara){
        super(gelenIsim,gelenSoyad,gelenYaş);  //miras aldığımız parametreleri belirttik.
        this.OgrenciNumara=gelenNumara;  //ogrencinumara ile gelennumarayı eşitledik.
    }
    OgrenciNumaraSoyle(){  //numara için yeni bir method tanımladık.
        alert("Öğrenci Numaram:" + this.OgrenciNumara);
    }
}