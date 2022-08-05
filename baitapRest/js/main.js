const tinhDiemTrungBinh = (...param) => {
    let ketqua = 0
    for (let i = 0; i < param.length; i++) {
        ketqua +=   param[i] / param.length ;// 1 2 3
    }
    return ketqua 
}
document.getElementById('btnKhoi1').onclick = function(){
    const diemToan = Number(document.getElementById('inpToan').value) 
    const diemLy =  Number(document.getElementById('inpLy').value )
    const diemHoa =  Number(document.getElementById('inpHoa').value )
    const diemKhoi1 = tinhDiemTrungBinh(diemToan,diemLy,diemHoa)
    document.getElementById('tbKhoi1').innerHTML = diemKhoi1.toFixed(2)
}

document.getElementById('btnKhoi2').onclick = function(){
    const diemVan = Number(document.getElementById('inpVan').value) 
    const diemSu = Number(document.getElementById('inpSu').value) 
    const diemDia = Number(document.getElementById('inpDia').value) 
    const diemEnglish = Number(document.getElementById('inpEnglish').value) 
    const diemKhoi2 = tinhDiemTrungBinh(diemVan,diemSu,diemDia,diemEnglish)
    document.getElementById('tbKhoi2').innerHTML = diemKhoi2.toFixed(2)

}