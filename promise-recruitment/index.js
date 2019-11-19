function pelamarSubmitData() {
    return new Promise ((resolve, reject) => {
        resolve('pelamar submit data ke HR \n')
    })
}

function notifPelamarPsikotest(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'HR notif pelamar untuk psikotest \n')
    })
}

function pelamarDatangPsikotest(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'pelamar datang psikotest \n')
    })
}

function menyerahkanHasilTest(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'Pelamar menyerahkan hasil test ke HR \n')
    })
}

function followupHasilPsikotest(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'HR followup hasil Psikotest ke user \n')
    })
}

function pelamarKonfirmasiOk(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'User konfirmasi ok ke HR soal Pelamar \n')
    })
}

function notifPelamarInterview(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'HR notif ke Pelamar untuk interview dengan User \n')
    })
}

function pelamarDatangInterview(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'Pelamar datang ke User untuk interview \n')
    })
}

function konfirmasiPelamarLulus(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'User konfirmasi ok ke HR soal Pelamar lulus interview \n')
    })
}

function notifMulaiKerja(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'HR Notif ke Pelamar untuk mulai bekerja \n')
    })
}

function mulaiMasukKerja(message) {
    return new Promise((resolve, reject) => {
        resolve(message +'Pelamar mulai masuk bekerja \n')
    })
}


pelamarSubmitData()
    .then(result => {
        return notifPelamarPsikotest(result);
    })
    .then(result => {
        return pelamarDatangPsikotest(result);
    })
    .then(result => {
        return menyerahkanHasilTest(result);
    })
    .then(result => {
        return followupHasilPsikotest(result);
    })
    .then(result => {
        return pelamarKonfirmasiOk(result);
    })
    .then(result => {
        return notifPelamarInterview(result);
    })
    .then(result => {
        return pelamarDatangInterview(result);
    })
    .then(result => {
        return konfirmasiPelamarLulus(result);
    })
    .then(result => {
        return notifMulaiKerja(result);
    })
    .then(result => {
        return mulaiMasukKerja(result);
    })
    .then(result => {
        console.log(result)
    })

// Promise.all([pelamarSubmitData(), notifPelamarPsikotest(), pelamarDatangPsikotest()])
//     .then((result) => {
//         console.log('finished\n' + result)
//     })


console.log('try it')