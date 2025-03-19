function count(futhDate) {
    const futh = new Date(futhDate).getTime(); 
    const c = setInterval(() => {
        const now = new Date().getTime();
        const tl = futh - now;
        if (tl <= 0) {
            clearInterval(c);
            console.log("The event occurred!");
            return;
        }
        const days = Math.floor(tl / (1000 * 60 * 60 * 24));
        const hours = Math.floor((tl % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((tl % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((tl % (1000 * 60)) / 1000);
        console.log(`ctdwn: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
}
