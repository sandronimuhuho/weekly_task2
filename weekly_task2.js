function getDataFromServer (status, callback) {
    setTimeout(function () {
        if (status) {
            callback(['product 1', 'product 2', 'product 3' ], null);
        } else {
            const err = new Error('Falid to fetch data');
            err.name = 'Error';
            callback(null, err);
        }
    }, 3000);
}
function processData(prsdata) {
    try {
        console.log('Data product: ', prsdata);
    } catch (err) {
        console.log(err);
    }
}

getDataFromServer(true, processData);
//getDataFromServer(false, processData);