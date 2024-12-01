function bernyanyi(status) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if (status === true) {
                resolve("penonton suka");
              
            } else {
                reject("penonton tidak suka");
               
            }
        }, 3000);
    });
}

bernyanyi(true)
.then ((result) => {
    console.log(result);
})
.catch ((error) => {
    console.log(error);
});


async function nyanyi()  { 
    try {
        const dptdata = await bernyanyi(true);
        console.log(dptdata);
    } catch (error) {
        console.log(error);
    }  
}
nyanyi();