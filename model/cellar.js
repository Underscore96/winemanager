class Cellar{
    constructor(beverages = []){
        this.beverages = beverages;
    }


    addBeverage(bev){
       this.beverages.push(bev)
    }

    deleteBeverage(index){
        this.beverages.splice(index, 1);
    }


    getAllBeverageCards(){
        let allCards = '';

        for (let i = 0; i < this.beverages.length; i++) {
            const bev= this.beverages[i]
            const humanIndex = i + 1;
            allCards += humanIndex + ')' + bev.toString()
            allCards += '---------------------------\n'
            
        }
        return allCards;
    }



}