let isReady = false;
function label() {
    setTimeout(() => {
        isReady = true;
        toko()
            .then((result) => {
                console.log(result)
            })
            .catch((result) => {
                console.log(result)
            })
    }, 2000);
}

function toko() {
    return new Promise(function(resolve, reject) {
        if(isReady) {
            resolve('ada')   
        } else {
            reject('belum ada')
            label();
        }
    })
}

function kita() {
toko()
    .then((result) => {
        console.log(result)
    })
    .catch((result) => {
        console.log(result)
    })
}

kita()