class cstmr {
  constructor(frstnm, lstnm, gmail) {
    this.frstnm = frstnm;
    this.lstnm = lstnm;
    this.gmail = gmail;
  }

  fullName() {
    return `${this.frstnm} ${this.lstnm}`;
  }

  uptdgmail(eml) {
    this.gmail = eml;
  }
}