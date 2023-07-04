class GUI{
    constructor(){
        this.cellar = new Cellar();

    }

    start(){
        while (true){
            const menuChoice = prompt(
                "Hai 4 opzioni:\n" +
                "1)Guarda la lista delle bevande\n" +
                "2)Aggiungi Bevanda\n"+
                "3)Rimuovi Bevanda\n"+
                "4)Esci\n"+
                "Digita la tua scelta"
            );
            if (menuChoice === "1") {
                this.showBev()
            } else if (menuChoice === "2"){
                this.insertBev()
            } else if (menuChoice === "3"){
                this.deleteBev();
            } else if (menuChoice === "4"){
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }


    insertBev(){
        
        const type = prompt('inserisci il tipo di bevanda');
        if (type === 'vino'){
            const name = prompt('inserisci il nome');
        const maker = prompt('inserisci il produttore');
        const dop = prompt('inserisci la data di produzione');
        const vol = prompt('inserisci la gradazione');
            const region = prompt('inserisci la regione');
            const vine = prompt('inserisci la vigna');
            const bev = new Wine(name, type, maker, dop, vol, region, vine)
            this.cellar.addBeverage(bev);

        } else if (type === 'birra') {
            const name = prompt('inserisci il nome');
        const maker = prompt('inserisci il produttore');
        const dop = prompt('inserisci la data di produzione');
        const vol = prompt('inserisci la gradazione');
            const malt = prompt('inserisci il malto');
            const bev = new Beer(name, type, maker, dop, vol, malt)
            this.cellar.addBeverage(bev);
    
        } else {
            alert('bevanda non valida')
        }
    }

    deleteBev(){
        const humanIndex = prompt('Inserisci la bevanda  da eliminare')
        const index = humanIndex -1;
        this.library.deleteBeverage(index);
    }

    
    showBev(){
        const allBevs = this.cellar.getAllBeverageCards();

        alert(allBevs);
       }




}