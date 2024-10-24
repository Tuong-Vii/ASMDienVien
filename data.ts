type TDienVien = { id:number; ten:string; gioiTinh:TGioiTinh}
type TGioiTinh = string | boolean;
type TPhim = { id:number; tenPhim: string; ngayPhatHanh: string}
type TMusic = TDienVien & TPhim; 
type TNenTang = { id:number;  ten:string; hinh:string; }
const phim_arr:TPhim[] = [
    { id: 1, tenPhim: "Mùa hè năm ấy", ngayPhatHanh: "2021-07" },
    { id: 2, tenPhim: "Chuyện tình nơi xa", ngayPhatHanh: "2022-03" },
    { id: 3, tenPhim: "Kẻ đuổi theo ánh sáng", ngayPhatHanh: "2022-11" },
    { id: 4, tenPhim: "Vùng đất vô hình", ngayPhatHanh: "2023-02" },
    { id: 5, tenPhim: "Cuộc đời của cơn bão", ngayPhatHanh: "2023-09" },
    { id: 6, tenPhim: "Đêm trắng không hồi kết", ngayPhatHanh: "2024-05" },
 ];
let dienvien_arr:TMusic[] = [
    { id: 1, ten: "Ngô Thanh Vân", gioiTinh: "Nữ", tenPhim: "Mùa hè năm ấy", ngayPhatHanh: "2021-07" },
    { id: 2, ten: "Trấn Thành", gioiTinh: "Nam", tenPhim: "Chuyện tình nơi xa", ngayPhatHanh: "2022-03" },
    { id: 3, ten: "Thái Hòa", gioiTinh: "Nam", tenPhim: "Kẻ đuổi theo ánh sáng", ngayPhatHanh: "2022-11" },
    { id: 4, ten: "Ninh Dương Lan Ngọc", gioiTinh: "Nữ", tenPhim: "Vùng đất vô hình", ngayPhatHanh: "2023-02" },
    { id: 5, ten: "Hoàng Yến Chibi", gioiTinh: "Nữ", tenPhim: "Cuộc đời của cơn bão", ngayPhatHanh: "2023-09" },
    { id: 6, ten: "Kiều Minh Tuấn", gioiTinh: "Nam", tenPhim: "Đêm trắng không hồi kết", ngayPhatHanh: "2024-05" },
];
const nentang_arr:TNenTang[] = [
    { id:1, ten:"Youtube", "hinh": "images/Youtube.png"},
    { id:2, ten:"Spotify", "hinh": "images/Spotify.jpg"},
    { id:3, ten:"Youtube Music", "hinh": "images/YtbMusic.png"},
    { id:4, ten:"Zing Mp3", "hinh": "images/ZingMp3.jpg"},
    { id:5, ten:"NhacCuaTui", "hinh": "images/NhacCuaTui.jpg"},
    { id:6, ten:"Apple Music", "hinh": "images/AM.jpg"}
];
export { TNenTang, TMusic, TDienVien, TPhim, TGioiTinh}
export { dienvien_arr, nentang_arr, phim_arr}
  