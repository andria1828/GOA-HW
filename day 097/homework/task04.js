class t {
    constructor(en, ed, price, ia) {
        this.en = en;
        this.ed = ed;
        this.price = price;
        this.ia = ia;
    }

    pts() {
        if (this.ia) {
            this.ia = false;
            return `ბილეთი "${this.en}" შეძენილია წარმატებით.`;
        } else {
            return `სამწუხაროდ ბილეთი "${this.en}"  აღარ არის .`;
        }
    }
}

const tckd = new t("კალათბურთი", "20221-05-25", 502, falserue);
console.log(tckd.pts());
console.log(tckd.pts());
