// https://62b0787e196a9e987024484f.mockapi.io/

import { monAnController } from "../controller/monAnControler.js";
import { monAnService } from "../service/monAnService.js";
import { spinnerService } from "../service/spinnerService.js";

let foodList = [];
let idFoodEdited = null;

let renderTable = (list) => {
  let contentHTML = "";
  for(let i=0;i<list.length;i++){
    let monAn = list[i];
    let contentTR = `<tr>
                  <td>${monAn.id}</td>
                  <td>${monAn.name}</td>
                  <td>${monAn.price}</td>
                  <td>${monAn.description}</td>
                  <td>
                    <button type="button" onclick="layChiTietMonAn(${monAn.id})" class="btn btn-success">Sửa</button>
                    <button type="button" onclick="xoaMonAn(${monAn.id})" class="btn btn-warning">Xóa</button>
                  </td>
                </tr>`
    contentHTML += contentTR;
  };
  document.getElementById('tbody_food').innerHTML = contentHTML;
}

let renderDanhSachService = () => {
  spinnerService.tatLoading();
  monAnService.layDanhSachMonAn()
  .then((res) => {
    spinnerService.tatLoading();
          foodList = res.data;
          renderTable(foodList);
        })
        .catch((err) => {
          spinnerService.tatLoading();
          console.log(err);
        });
}
// chạy lần đầu render data ra giao diện
renderDanhSachService();

// xoá món ăn
let xoaMonAn = (maMonAn) => {
  spinnerService.batLoading();
  monAnService.xoaMonAn(maMonAn)
  .then((res) => {
        spinnerService.tatLoading();
        // render lại giao diện sau khi xóa
        renderDanhSachService();
        })
        .catch((err) => {
        spinnerService.tatLoading();
          console.log(err);
        });
}
window.xoaMonAn = xoaMonAn;

// thêm mới món ăn
let themMonAn = () => {
  spinnerService.batLoading();
  let monAn = monAnController.layThongTinTuForm();
  monAnService.themMonAn(monAn)
  .then((res) => {
          spinnerService.tatLoading();
          renderDanhSachService();
          monAnController.resetForm();
        })
        .catch((err) => {
          spinnerService.tatLoading();
          console.log(err);
        });
}
window.themMonAn = themMonAn;

// lấy chi tiết món ăn (button Sửa)
let layChiTietMonAn = (idMonAn) => {
  spinnerService.batLoading();
  idFoodEdited = idMonAn;
  monAnService.layThongTinChitietMonAn(idMonAn)
  .then((res) => {
    spinnerService.tatLoading();
          // lấy dữ liệu show lên giao diện (binding dữ liệu)
          // dữ liệu cần lấy là res.data trong (res)
          monAnController.hienThiThongTinLenForm(res.data);
        })
        .catch((err) => {
    spinnerService.tatLoading();

          console.log(err);
        });
}
window.layChiTietMonAn = layChiTietMonAn;

// cập nhật món ăn
let capNhatMonAn = () => {
  spinnerService.batLoading();
  let monAn = monAnController.layThongTinTuForm();
  let newMonAn = {...monAn, id: idFoodEdited};
  
  monAnService.capNhatMonAn(newMonAn)
  .then((res) => {
        spinnerService.tatLoading();
        renderDanhSachService();
        monAnController.resetForm();
        })
        .catch((err) => {
          spinnerService.tatLoading();
          console.log(err);
        });
}
window.capNhatMonAn = capNhatMonAn;

