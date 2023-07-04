class Wine extends Beverage{
    constructor(name, maker, dop, vol, type, region, vine){
        super (name, maker, dop, vol, type);

        this.region = region;
        this.vine = vine;
    }


    toString() {                                                     
        const card = super.toString() +
                     'Regione: ' + this.region + '\n'+
                     'Vigna: ' + this.vine + '\n';
        return card;
    }
}