class Varlik{
    kod;
    ad;
    fiyat;
    constructor(gelenKod,gelenAd,gelenFiyat){
        this.kod=gelenKod;
        this.ad=gelenAd;
        this.fiyat=gelenFiyat;

        yonetici.envanter.push(this);

    }

    UrunTanit(){
        alert(+this.kod+ " " + this.ad + " " + this.fiyat);
    }
}