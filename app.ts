import {  TNenTang, TMusic, TDienVien, TPhim, TGioiTinh} from './data.js'
import { dienvien_arr, nentang_arr, phim_arr} from './data.js'

const hien1BaiHat = ( bai:TPhim) => {
    return `<div>
     <h4>Tên Bài hát: ${bai.tenPhim} </h4>
     <p>Ngày ra mắt: ${bai.ngayPhatHanh}</p>
     
    </div>`;
}

export const showlistbaihat = () => {
     const html_arr = phim_arr.map(hien1BaiHat);
     return html_arr.join("");
}
const phaicuacs = (phai:TGioiTinh) => {
    if (typeof phai =='boolean') {
        if (phai==true) return "Nữ"; 
        else return "Nam";
    }
    else return phai as string;
}
const hien1CS = (cs:TMusic) =>{
    return `<div>
     <h4>Họ tên: ${cs.ten} </h4>
     <p>Giới tính: ${ phaicuacs(cs.gioiTinh) }</p>
     <p>Bài hát: ${cs.tenPhim}</p>
     <p>Ngày ra mắt: ${cs.ngayPhatHanh}</p>
    </div>`;
}  
export const showlistcasi = ()=>{
    const html_arr = dienvien_arr.map(hien1CS);
    return html_arr.join("");
}

const hien1NenTang = (coso:TNenTang) =>{
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
    </div>`;
}
export const showlistnentang = ()=>{
    const html_arr =nentang_arr.map(hien1NenTang);
    return html_arr.join("");
}
const show1TopTrending = (th) => {
  return `<div>
            <img src="${th.hinh}">
          </div>`;
}
export const showlistTopTrending = async () =>{
   let toptrend_arr = await  fetch("http://localhost:3000/Actor")
    .then ( res => res.json())
    .then ( data  => {return data});
   let str=``;
   toptrend_arr.forEach ( th => str+= show1TopTrending(th) )
   return str;
}