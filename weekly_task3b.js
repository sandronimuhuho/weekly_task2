function mainBola(status) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if (status === true) {
                resolve("menang");
              
            } else {
                reject("kalah");
               
            }
        }, 3000);
    });
}

mainBola(true)
.then ((result) => {
    console.log(result);
})
.catch ((error) => {
    console.log(error);
});


async function prosesmain()  { 
    try {
        const dptdata = await mainBola(true);
        console.log(dptdata);
    } catch (error) {
        console.log(error);
    }  
}
prosesmain();