function getGrade(s1, s2, s3) {
    const avgr = (s1 + s2 + s3) / 3;
    

    switch (avgr) {
        case 1:
            
            break;
    
        case 2:
            
            break;
        case 3:
            
            break;
    
        case 4:
            
            break;
        default:
            break;
    }
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}