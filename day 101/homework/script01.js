//  01
const university = {
    name: "Georgian unisvesity",
    departments: 123,
    website: "www.just university.ge",
    ratings: {
      s1: 4.5,
      s2: 4.8,
      s3: 4.7
    }
  };

  console.log(university);
  
  console.log("scholarship" in university);
  
  const updtunisversiry = { ...university, studentsCount: 3000 };
  
  Object.freeze(updtunisversiry);
  updtunisversiry.name = "Changed Name";
  
  console.log(Object.isFrozen(updtunisversiry));
  
// 02
const sclub = {
    cname: "Tbilisi Thunder",
    sprttype: "Basketball",
    foundedYear: 2005,
    achievements: {
      t1: "Champion nodo",
      t2: "demuri awyobilo",
      t3: "nodara"
    }
  };
  
  console.log(Object.keys(sclub));
  
  console.log(Object.values(sclub));
  
  console.log("sponsors" in sclub);
  
  const nouptdclb = { ...sclub, sc: 15000 };
  Object.freeze(nouptdclb);
  nouptdclb.cname = "Changed Name"; 
  console.log(Object.isFrozen(nouptdclb));
  
// 03
const hotel = {
    hotelName: "hotel t 800",
    stars: 5,
    location: "Tbilisi",
    guestReviews: {
      guest1: "Excellent service",
      guest2: "Very clean rooms",
      guest3: "Delicious food"
    }
  };
  
  console.log(hotel);

  console.log("spa" in hotel);
  
  const updatedHotel = { ...hotel, roomsCount: 200 };
  
  Object.freeze(updatedHotel);
  
  updatedHotel.stars = 3; 
  
  console.log(Object.isFrozen(updatedHotel));
  
// 04
const cinema = {
    cinemaName: "2Cinema",
    mocount: 102,
    loc: "tbilis",
    movieReviews: {
      u1: "Great movies abt marvel!",
      u2: "Affordable tickets for 100 dollar",
      u3: "not good seat"
    }
  };
  
  console.log(cinema);
  console.log("vipSeats" in cinema);
  const cindemauptdt = { ...cinema, tprice: 10 };
  Object.freeze(cindemauptdt);
  cindemauptdt.mocount = 40; 
  console.log(Object.isFrozen(cindemauptdt));
  
// 05

// Object.is(): გამოიყენება ორი მნიშვნელობის შესამოწმებლად.

// Object.preventExtensions(): აჩერებს ობიექტში ახალი თვისებების დამატებას.

// Object.isExtensible(): ამოწმებს, შესაძლებელია თუ არა ობიექტზე ახალი თვისების დამატება.

// Object.assign(): საშუალებას აძლევს ობიექტებს გაერთიანებას ან თვისებების კოპირებას.