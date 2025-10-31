class Mobilya extends Varlik{
    malzeme;
    constructor(gelenKod,gelenAd,gelenFiyat,gelenMalzeme){
        super(gelenKod,gelenAd,gelenFiyat);
        this.malzeme=gelenMalzeme;

    }
    malzemeBilgisi(){  
        alert("Malzeme Adi :" + this.ad + " " + " Malzeme Türü :" + this.malzeme);
    }
}