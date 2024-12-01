function fetcData(status) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if (status === true) {
                resolve("data berhasil di dapatkan");
              
            } else {
                reject("gagal mengambil data");
               
            }
        }, 2000);
    });
}

fetcData(true)
.then ((result) => {
    console.log(result);
})
.catch ((error) => {
    console.log(error);
});


async function prosesdata()  { 
    try {
        const dptdata = await fetcData(true);
        console.log(dptdata);
    } catch (error) {
        console.log(error);
    }  
}
prosesdata();