const cekpalindrom = teks => {
     

    if ( teks.toLowerCase() === teks.toLowerCase().split("").reverse().join("")) {
        console.log("palindrom");
        
    } else {
        console.log("bukan palindrom");
        
    }
    
 };

 cekpalindrom('Malam');
