const fazzfood = (harga, voucer, jarak, pajak = false) => {

        let potongvoucer = 0;
        let biayapengiriman = 0;
        let biayapajak = pajak ? (harga * 5) / 100 : 0;

        // hitung potongan berdasarkan voucer 
        if (voucer === "FAZZFOOD50") {
            if (harga >= 50000 ) {
                potongvoucer = (harga * 50 ) / 100;

                if (potongvoucer > 50000) {
                    potongvoucer = 50000;
                }
            }
        } else if (voucer === "DTRAKTIR60") {
            if (harga >= 25000) { 
                potongvoucer = ( harga * 60) / 100; 
            if (potongvoucer > 30000) {
                potongvoucer = 30000;
            }
            }
        }
        // hitung potongan berdasarkan biaya pengiriman 
        if (jarak > 2 ) {
            biayapengiriman = (jarak - 2) * 3000 + 5000;
        } else {
            biayapengiriman = 5000;
        }
        
        console.log(`Harga: ${harga}`);
        console.log(`Potongan : ${potongvoucer}`);
        console.log(`Biaya Antar : ${biayapengiriman}`);
        console.log(`pajak : ${biayapajak}`);
        console.log(`SubTotal : ${harga - potongvoucer + biayapengiriman + biayapajak}`);
    } ;


//fazzfood(75000, "FAZZFOOD50", 5, false);
fazzfood(100000, "DTRAKTIR60", 1, true);