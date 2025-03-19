const lbr = {
    name: "dedamiwa",
    lct: "თბილისი",
    bks: {
        t: "მარტის 29",
        a: "anton denikini",
        yr: 1985
    },
    
    boks: function() {
        console.log(`bknm: ${this.bks.t}, avtr: ${this.bks.a}, come out yr: ${this.bks.yr},find lctn ${this.lct}`);
    }
};

lbr.boks();
