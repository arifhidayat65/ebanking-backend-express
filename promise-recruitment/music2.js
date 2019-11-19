// let isReady = false;
let songs = ['lagu1', 'lagu2', 'lagu3', 'lagu4', 'lagu5']
let key = 'lagu6'
function label() {
    setTimeout(() => {
        // isReady = true;
        songs.push(key)
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
        let song = songs.find((song) => {return song==key})
        if(song) {
            resolve('ready')
            console.log(songs)
        } else {
            reject('not yet ready')
            console.log(songs)
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