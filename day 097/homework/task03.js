class Movies {
    constructor(t, d, ry, d) {
        this.t = t;
        this.d = d;
        this.ry = ry;
        this.d = d;
    }

    getMovieInfo() {
        return `ფილმი: ${this.t}, რეჟისორი: ${this.d},  წელი: ${this.ry}, ხანგრძლივობა: ${this.d} წ`;
    }
}


const movie = new Movies("ინტერსტელარი", "კრისტოფერ ნოლანი", 2014, 169);
console.log(movie.getMovieInfo());
