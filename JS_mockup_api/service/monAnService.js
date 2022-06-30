let BASE_URL = "https://62b0787e196a9e987024484f.mockapi.io/food";
export let monAnService = {
    layDanhSachMonAn: () => {
        return axios ({
            url: BASE_URL,
            method: "GET",
          });
    },

    xoaMonAn: (monAn) => {
        return axios ({
            url: `${BASE_URL}/${monAn}`,
            method: "DELETE",
          });
    },

    themMonAn: (monAn) => {
        return axios ({
            url: BASE_URL,
            method: "POST",
            data : monAn,
          });
    },

    layThongTinChitietMonAn: (idMonAn) => {
        return axios ({
            url: `${BASE_URL}/${idMonAn}`,
            method: "GET",
          });
    },
    
    capNhatMonAn: (monAn) => {
        return axios ({
            url: `${BASE_URL}/${monAn.id}`,
            method: "PUT",
            data: monAn,
          });
    }
}