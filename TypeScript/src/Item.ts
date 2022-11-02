
export default class Item {
    
nom!: String ;
sellIn!: number;
quality!: number;
conjured!: boolean;
  


updateQuality(){
    if (this.nom != "Backstage passes" || this.nom != "Aged Brie" ){
        this.updateQualityCasParticulier();
    }else if(this.nom != "Sulfuras"){
        this.updateQualityCasClassic();
    } 
}

updateQualityCasParticulier(){
    if(this.sellIn > 11){
        this.quality = this.quality + 1;
    }else if(this.sellIn <= 10 && this.sellIn > 5 ){
        this.quality = this.quality + 2;
    }else if (this.sellIn <= 5 && this.sellIn >= 0){
        this.quality = this.quality + 3;
    }else if (this.sellIn == 0) {
        this.quality = 0;
    }
    this.updateSellIn();
}

updateQualityCasClassic(){
    if( this.sellIn <= 1 || this.quality <= 0 ){
        this.quality = 0;
    } else {
        this.quality--;
    }
    this.updateSellIn();
}

updateSellIn(){
    if(this.conjured){
        if( this.sellIn >= 2){
            this.sellIn = this.sellIn - 2; 
        }else{
            this.sellIn = 0; 
        }
    }else{
        if( this.sellIn >= 1){
            this.sellIn = this.sellIn - 1; 
        }
    }
}
}