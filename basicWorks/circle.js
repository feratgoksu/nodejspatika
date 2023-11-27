const radius=process.argv[2];
function circleArea(radius) {
    // noktadan sonra sadece 2 rakamı göstermek için tofixed kullanıldı
    // tofixed(2) yapınca rakamı yuvarlıyor o yüzden 3 rakamı alıp son rakamı sildim
    return  (Math.PI * radius * radius).toFixed(3).slice(0,-1) ;
}
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius)}`)