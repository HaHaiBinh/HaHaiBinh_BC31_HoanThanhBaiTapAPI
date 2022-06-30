export let monAnController = {
    layThongTinTuForm : () => {
        let tenMon = document.getElementById("tenMon").value ;
        let giaMon = document.getElementById("giaMon").value ;
        let moTa = document.getElementById("moTa").value ;
        let monAn= {
            name : tenMon,
            price : giaMon,
            description : moTa,
        };
        return monAn;
    },
    hienThiThongTinLenForm : (monAn) => {
        document.getElementById("tenMon").value = monAn.name ;
        document.getElementById("giaMon").value = monAn.price ;
        document.getElementById("moTa").value = monAn.description ;
    },
    resetForm : () => {
        document.getElementById("tenMon").value = "" ;
        document.getElementById("giaMon").value = "" ;
        document.getElementById("moTa").value = "" ;
    },
} 