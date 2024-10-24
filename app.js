import { dienvien_arr, nenTang_arr, phim_arr } from './data.js';

const hien1Phim = (phim) => {
    return `<div>
     <h4>Tên Phim: ${phim.tenPhim} </h4>
     <p>Ngày phát hành: ${phim.ngayPhatHanh}</p>
    </div>`;
};

export const showlistphim = () => {
    const html_arr = phim_arr.map(hien1Phim);
    return html_arr.join("");
};

const phaicuacs = (phai) => {
    if (typeof phai == 'boolean') {
        if (phai == true)
            return "Nữ";
        else
            return "Nam";
    }
    else
        return phai;
};

const hien1DienVien = (dv) => {
    return `<div>
     <h4>Họ tên: ${dv.ten} </h4>
     <p>Giới tính: ${phaicuacs(dv.gioiTinh)}</p>
     <p>Phim tham gia: ${dv.tenPhim}</p>
     <p>Ngày phát hành: ${dv.ngayPhatHanh}</p>
    </div>`;
};

export const showlistdienvien = () => {
    const html_arr = dienvien_arr.map(hien1DienVien);
    return html_arr.join("");
};

const hien1NenTang = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
    </div>`;
};

export const showlistnentang = () => {
    const html_arr = nenTang_arr.map(hien1NenTang);
    return html_arr.join("");
};

const show1TopTrending = (th) => {
    return `<div>
            <img src="${th.hinh}">
          </div>`;
};

export const showlistTopTrending = async () => {
    let toptrend_arr = await fetch("http://localhost:3000/Actor")
        .then(res => res.json())
        .then(data => { return data; });
    let str = ``;
    toptrend_arr.forEach(th => str += show1TopTrending(th));
    return str;
};
