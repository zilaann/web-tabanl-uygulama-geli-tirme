class elektrik extends Varlik{
    garanti;
    constructor(gelenKod,gelenAd,gelenFiyat,gelengaranti){
        super(gelenKod,gelenAd,gelenFiyat);
        this.garanti=gelengaranti;
    }

    garantiSoyle(){
        alert("Garanti Süresi: " + this.garanti);
    }
}