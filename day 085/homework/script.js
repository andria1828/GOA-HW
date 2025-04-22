// 2 
let h = Number(prompt("enter hour "))
if (h >= 0 && h <= 11) {
    console.log("am");
} else {
    console.log("pm");
}
// 3
switch (week) {
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    case 7:
        console.log("კვირა");
        break;
    default:
        console.log("არასწორი კვირის დღეა");
}
// 4

let nn = Number(prompt('enter number'));

let aft = (nn % 2 === 0) ? 'ლუწი' : 'კენტი';

console.log(aft);

// 5
switch (weather) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("წვიმიანი");
        break;
    case 3:
        console.log("მოღრუბლული");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    default:
        console.log("არ არის დადგენილი")
}
// 6

let m = Number(prompt('enter number from 1-to-12'))

let mm
switch (mmm) {
    case 1:
    mm ='იანვარი'
        break;

    case 2:
    mm = 'თებერვალი'
        break;
    
    case 3:
    mm = 'მარტი'
        break;

    case 4:
    mm = 'აპრილი'
        break;

    case 5:
    mm = 'მაისი'
        break;

    case 6:
    mm = 'ივნისი'
        break;
    
    case 7:
    mm = 'ივლისი'
        break;

    case 8:
    mm = 'აგვისტო'
        break;
    
    case 9:
    mm = 'სექტემბერი'
        break;

    case 10:
    mm = 'ოქტომბერი'    
        break;
    
    case 11:
    mm = 'ნოემბერი';
        break;
    case 12:
    mm = 'დეკემბრი';
        break;

    default:
        mm = 'არ მოიძებნება';
}

let s = (mmm <= 6)? 'პირველი ნახევარი თვის' : 'მეორე ნახევარი თვის'

console.log('თვე', mmm, 'თვის მერამდენე დროა', s);
