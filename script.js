// --- Dữ liệu Mẫu (Mock Data) ---
let mockClientAccounts = [
    { id: 'K001', name: 'Nguyễn Văn Khách', email: 'khach@mail.com', password: '123', address: '101 Đường ABC, TP.HCM', phone: '0901234567', status: 'Hoạt động' },
    { id: 'K002', name: 'Phạm Thị D', email: 'd@mail.com', password: '123', address: '202 Đường XYZ, Hà Nội', phone: '0912345678', status: 'Hoạt động' },
    { id: 'K003', name: 'Trần Đình E', email: 'e@mail.com', password: '123', address: '303 Đường QWR, Đà Nẵng', phone: '0987654321', status: 'Khóa' },
];

let mockCategories = [
    { id: 'CAT001', name: 'Món mặn', status: 'Hiện' },
    { id: 'CAT002', name: 'Món chay', status: 'Hiện' },
    { id: 'CAT003', name: 'Món lẩu', status: 'Hiện' },
    { id: 'CAT004', name: 'Món ăn vặt', status: 'Hiện' },
    { id: 'CAT005', name: 'Món tráng miệng', status: 'Hiện' },
    { id: 'CAT006', name: 'Nước uống', status: 'Hiện' },
    { id: 'CAT007', name: 'Món đặc biệt (Ẩn)', status: 'Ẩn' }, // Ví dụ loại ẩn
];
let nextCategoryId = 8;

let mockProducts = [
    { id: 'SP001', name: 'Phở Gà Lá Chanh', type: 'Món chính', cost: 35000, stock: 50, lowStockThreshold: 10, 
        description: 'Phở gà ta thịt dai, nước dùng thanh ngọt, thơm mùi lá chanh.', categoryType: 'Món mặn', image_url: 'images/pho_ga_la_chanh.jpg', status: 'Hiện', customMargin: 45 },
    { id: 'SP002', name: 'Bánh Mì Xíu Mại', type: 'Món nhẹ', cost: 15000, stock: 80, lowStockThreshold: 15,
        description: 'Bánh mì giòn rụm với xíu mại sốt cà chua đậm đà.', categoryType: 'Món mặn', image_url: 'images/banh_mi_xiu_mai.jpg', status: 'Hiện', customMargin: 35 },
    { id: 'SP003', name: 'Cơm Tấm Sườn Bì Chả', type: 'Món chính', cost: 28000, stock: 45, lowStockThreshold: 8,
        description: 'Cơm tấm Sài Gòn truyền thống, sườn nướng, bì và chả trứng.', categoryType: 'Món mặn', image_url: 'images/com_tam_suon_bi_cha.jpg', status: 'Hiện', customMargin: 28 },
    { id: 'SP004', name: 'Bún Chả Hà Nội', type: 'Món chính', cost: 32000, stock: 40, lowStockThreshold: 8,
        description: 'Bún chả nướng than hoa, chấm nước mắm chua ngọt đặc trưng.', categoryType: 'Món mặn', image_url: 'images/bun_cha_ha_noi.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP005', name: 'Hủ Tiếu Nam Vang', type: 'Món chính', cost: 40000, stock: 35, lowStockThreshold: 5,
        description: 'Hủ tiếu nước dùng đậm đà, tôm, thịt băm, trứng cút.', categoryType: 'Món mặn', image_url: 'images/hu_tieu_nam_vang.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP006', name: 'Lẩu Cá Kèo Lá Giang', type: 'Món chính', cost: 170000, stock: 10, lowStockThreshold: 3,
        description: 'Lẩu cá kèo tươi ngon, vị chua thanh của lá giang.', categoryType: 'Món lẩu', image_url: 'images/lau_ca_keo_la_giang.jpg', status: 'Hiện', customMargin: 40 },
    { id: 'SP007', name: 'Miến Gà Trộn', type: 'Món nhẹ', cost: 25000, stock: 60, lowStockThreshold: 12,
        description: 'Miến trộn dai ngon, thịt gà xé, hành phi thơm lừng.', categoryType: 'Món mặn', image_url: 'images/mien_ga_tron.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP008', name: 'Gỏi Cuốn Chay Rong Biển', type: 'Món khai vị', cost: 18000, stock: 40, lowStockThreshold: 8,
        description: 'Gỏi cuốn thanh mát, rau củ và rong biển, chấm tương đậu phộng.', categoryType: 'Món chay', image_url: 'images/goi_cuon_chay_rong_bien.jpg',status: 'Hiện', customMargin: 22 },
    { id: 'SP009', name: 'Cơm Chiên Chay Lá É', type: 'Món chính', cost: 25000, stock: 55, lowStockThreshold: 10,
        description: 'Cơm chiên với rau củ và nấm, thơm mùi lá é đặc trưng.', categoryType: 'Món chay', image_url: 'images/com_chien_chay_la_e.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP010', name: 'Bánh Bột Lọc Huế', type: 'Món khai vị', cost: 16000, stock: 70, lowStockThreshold: 15,
        description: 'Bánh bột lọc nhân tôm thịt, gói lá chuối, chấm nước mắm ớt.', categoryType: 'Món ăn vặt', image_url: 'images/banh_bot_loc_hue.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP011', name: 'Sữa Chua Trái Cây', type: 'Món tráng miệng', cost: 12000, stock: 120, lowStockThreshold: 20,
        description: 'Sữa chua tự làm với các loại trái cây tươi theo mùa.', categoryType: 'Món tráng miệng', image_url: 'images/sua_chua_trai_cay.jpg', status: 'Hiện', customMargin: 45 },
    { id: 'SP012', name: 'Nước Ép Cam Tươi', type: 'Đồ uống', cost: 15000, stock: 100, lowStockThreshold: 20,
        description: 'Cam tươi ép 100%, không đường, giải khát.', categoryType: 'Nước uống', image_url: 'images/nuoc_ep_cam_tuoi.jpg', status: 'Hiện', customMargin: 50 },
    { id: 'SP013', name: 'Bún Bò Huế Đặc Biệt', type: 'Món chính', cost: 38000, stock: 50, lowStockThreshold: 10, categoryType: 'Món mặn', image_url: 'images/bun_bo_hue_dac_biet.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP014', name: 'Bánh Mì Pate Trứng', type: 'Món nhẹ', cost: 16000, stock: 80, lowStockThreshold: 15, categoryType: 'Món mặn', image_url: 'images/banh_mi_pate_trung.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP015', name: 'Cơm Gà Xối Mỡ', type: 'Món chính', cost: 35000, stock: 45, lowStockThreshold: 8, categoryType: 'Món mặn', image_url: 'images/com_ga_xoi_mo.jpg', status: 'Hiện', customMargin: 20 },
    { id: 'SP016', name: 'Bún Thịt Nướng Chả Giò', type: 'Món chính', cost: 34000, stock: 40, lowStockThreshold: 8, categoryType: 'Món mặn', image_url: 'images/bun_thit_nuong_cha_gio.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP017', name: 'Phở Cuốn Chay', type: 'Món khai vị', cost: 20000, stock: 55, lowStockThreshold: 10, categoryType: 'Món chay', image_url: 'images/pho_cuon_chay.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP018', name: 'Lẩu Riêu Cua Bắp Bò', type: 'Món chính', cost: 200000, stock: 10, lowStockThreshold: 3, categoryType: 'Món lẩu', image_url: 'images/lau_rieu_cua_bap_bo.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP019', name: 'Nước Mía Lau Sả', type: 'Đồ uống', cost: 8000, stock: 150, lowStockThreshold: 25, categoryType: 'Nước uống', image_url: 'images/nuoc_mia_lau_sa.jpg', status: 'Hiện', customMargin: 33 },
    { id: 'SP020', name: 'Chè Thập Cẩm', type: 'Món tráng miệng', cost: 12000, stock: 130, lowStockThreshold: 20, categoryType: 'Món tráng miệng', image_url: 'images/che_thap_cam.jpg', status: 'Hiện', customMargin: 42 },
    { id: 'SP021', name: 'Bánh Khoai Mì Nướng', type: 'Món ăn vặt', cost: 15000, stock: 70, lowStockThreshold: 15, categoryType: 'Món ăn vặt', image_url: 'images/banh_khoai_mi_nuong.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP022', name: 'Bánh Xèo Tôm Thịt', type: 'Món chính', cost: 45000, stock: 30, lowStockThreshold: 5, categoryType: 'Món mặn', image_url: 'images/banh_xeo_tom_thit.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP023', name: 'Trà Đào Cam Sả', type: 'Đồ uống', cost: 18000, stock: 110, lowStockThreshold: 20, categoryType: 'Nước uống', image_url: 'images/tra_dao_cam_sa.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP024', name: 'Súp Cua Bách Thảo', type: 'Món khai vị', cost: 28000, stock: 65, lowStockThreshold: 12, categoryType: 'Món ăn vặt', image_url: 'images/sup_cua_bach_thao.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP025', name: 'Mì Quảng Tôm Thịt', type: 'Món chính', cost: 32000, stock: 48, lowStockThreshold: 10, categoryType: 'Món mặn', image_url: 'images/mi_quang_tom_thit.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP026', name: 'Gỏi Ngó Sen Tôm Thịt', type: 'Món khai vị', cost: 40000, stock: 38, lowStockThreshold: 8, categoryType: 'Món mặn', image_url: 'images/goi_ngo_sen_tom_thit.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP027', name: 'Canh Chua Cá Lóc', type: 'Món chính', cost: 45000, stock: 25, lowStockThreshold: 5, categoryType: 'Món mặn', image_url: 'images/canh_chua_ca_loc.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP028', name: 'Thịt Kho Tiêu (Phần Lẻ)', type: 'Món chính', cost: 22000, stock: 50, lowStockThreshold: 10, categoryType: 'Món mặn', image_url: 'images/thit_kho_tieu.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP029', name: 'Lẩu Hải Sản Chua Cay', type: 'Món chính', cost: 220000, stock: 8, lowStockThreshold: 3, categoryType: 'Món lẩu', image_url: 'images/lau_hai_san_chua_cay.jpg', status: 'Hiện', customMargin: 38 },
    { id: 'SP030', name: 'Bánh Canh Cua', type: 'Món chính', cost: 38000, stock: 40, lowStockThreshold: 8, categoryType: 'Món mặn', image_url: 'images/banh_canh_cua.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP031', name: 'Nước Dừa Tươi', type: 'Đồ uống', cost: 10000, stock: 180, lowStockThreshold: 30, categoryType: 'Nước uống', image_url: 'images/nuoc_dua_tuoi.jpg', status: 'Hiện', customMargin: 60 },
    { id: 'SP032', name: 'Rau Muống Xào Tỏi', type: 'Món kèm', cost: 15000, stock: 75, lowStockThreshold: 15, categoryType: 'Món mặn', image_url: 'images/rau_muong_xao_toi.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP033', name: 'Bánh Flan Trà Xanh', type: 'Món tráng miệng', cost: 10000, stock: 140, lowStockThreshold: 25, categoryType: 'Món tráng miệng', image_url: 'images/banh_flan_tra_xanh.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP034', name: 'Chè Khoai Môn', type: 'Món tráng miệng', cost: 14000, stock: 110, lowStockThreshold: 20, categoryType: 'Món tráng miệng', image_url: 'images/che_khoai_mon.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP035', name: 'Bánh Mì Bơ Tỏi', type: 'Món ăn vặt', cost: 10000, stock: 90, lowStockThreshold: 18, categoryType: 'Món ăn vặt', image_url: 'images/banh_mi_bo_toi.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP036', name: 'Nem Nướng Nha Trang', type: 'Món ăn vặt', cost: 35000, stock: 50, lowStockThreshold: 10, categoryType: 'Món ăn vặt', image_url: 'images/nem_nuong_nha_trang.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP037', name: 'Nước Chanh Muối', type: 'Đồ uống', cost: 8000, stock: 200, lowStockThreshold: 30, categoryType: 'Nước uống', image_url: 'images/nuoc_chanh_muoi.jpg', status: 'Hiện', customMargin: 30 },
    { id: 'SP038', name: 'Bánh Giò Chả Lụa', type: 'Món nhẹ', cost: 18000, stock: 60, lowStockThreshold: 12, categoryType: 'Món mặn', image_url: 'images/banh_gio_cha_lua.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP039', name: 'Chả Cá Lã Vọng', type: 'Món chính', cost: 60000, stock: 20, lowStockThreshold: 5, categoryType: 'Món mặn', image_url: 'images/cha_ca_la_vong.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP040', name: 'Bánh Bèo Chén', type: 'Món ăn vặt', cost: 18000, stock: 80, lowStockThreshold: 15, categoryType: 'Món ăn vặt', image_url: 'images/banh_beo_chen.jpg', status: 'Hiện', customMargin: 25 },
    { id: 'SP041', name: 'Nước Rau Má Đậu Xanh', type: 'Đồ uống', cost: 13000, stock: 150, lowStockThreshold: 25, categoryType: 'Nước uống', image_url: 'images/nuoc_rau_ma_dau_xanh.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP042', name: 'Trà Sữa Khoai Môn', type: 'Đồ uống', cost: 25000, stock: 130, lowStockThreshold: 20, categoryType: 'Nước uống', image_url: 'images/tra_sua_khoai_mon.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP043', name: 'Bánh Chuối Chiên', type: 'Món ăn vặt', cost: 8000, stock: 100, lowStockThreshold: 18, categoryType: 'Món ăn vặt', image_url: 'images/banh_chuoi_chien.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP044', name: 'Bánh Gật Gù Tiên Yên', type: 'Món chính', cost: 18000, stock: 55, lowStockThreshold: 10, categoryType: 'Món mặn', image_url: 'images/banh_gat_gu_tien_yen.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP045', name: 'Cháo Lòng', type: 'Món chính', cost: 22000, stock: 50, lowStockThreshold: 8, categoryType: 'Món mặn', image_url: 'images/chao_long.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP046', name: 'Lẩu Nấm Chay Dược Liệu', type: 'Món chính', cost: 180000, stock: 12, lowStockThreshold: 4, categoryType: 'Món chay', image_url: 'images/lau_nam_chay_duoc_lieu.jpg', status: 'Hiện', customMargin: 35 },
    { id: 'SP047', name: 'Cơm Chay Thập Cẩm', type: 'Món chính', cost: 20000, stock: 60, lowStockThreshold: 10, categoryType: 'Món chay', image_url: 'images/com_chay_thap_cam.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP048', name: 'Bánh Bao Chay Đặc Biệt', type: 'Món nhẹ', cost: 10000, stock: 70, lowStockThreshold: 15, categoryType: 'Món chay', image_url: 'images/banh_bao_chay_dac_biet.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP049', name: 'Súp Bắp Cải Cuộn Chay', type: 'Món khai vị', cost: 18000, stock: 50, lowStockThreshold: 10, categoryType: 'Món chay', image_url: 'images/sup_bap_cai_cuon_chay.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP050', name: 'Bánh Da Lợn', type: 'Món tráng miệng', cost: 8000, stock: 150, lowStockThreshold: 25, categoryType: 'Món tráng miệng', image_url: 'images/banh_da_lon.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP051', name: 'Tàu Hũ Đường Gừng', type: 'Món tráng miệng', cost: 10000, stock: 130, lowStockThreshold: 20, categoryType: 'Món tráng miệng', image_url: 'images/tau_hu_duong_gung.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP052', name: 'Bingsu Xoài', type: 'Món tráng miệng', cost: 35000, stock: 80, lowStockThreshold: 15, categoryType: 'Món tráng miệng', image_url: 'images/bingsu_xoai.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP053', name: 'Trà Vải', type: 'Đồ uống', cost: 20000, stock: 120, lowStockThreshold: 20, categoryType: 'Nước uống', image_url: 'images/tra_vai.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP054', name: 'Sinh Tố Bơ', type: 'Đồ uống', cost: 25000, stock: 90, lowStockThreshold: 18, categoryType: 'Nước uống', image_url: 'images/sinh_to_bo.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP055', name: 'Sữa Đậu Nành', type: 'Đồ uống', cost: 5000, stock: 250, lowStockThreshold: 30, categoryType: 'Nước uống', image_url: 'images/sua_dau_nanh.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP056', name: 'Bánh Tiêu', type: 'Món ăn vặt', cost: 4000, stock: 150, lowStockThreshold: 25, categoryType: 'Món ăn vặt', image_url: 'images/banh_tieu.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP057', name: 'Khoai Tây Lắc Phô Mai', type: 'Món ăn vặt', cost: 18000, stock: 85, lowStockThreshold: 15, categoryType: 'Món ăn vặt', image_url: 'images/khoai_tay_lac_pho_mai.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP058', name: 'Bánh Mì Thổ Nhĩ Kỳ', type: 'Món nhẹ', cost: 22000, stock: 60, lowStockThreshold: 10, categoryType: 'Món mặn', image_url: 'images/banh_mi_tho_nhi_ky.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP059', name: 'Cà Ri Gà', type: 'Món chính', cost: 40000, stock: 30, lowStockThreshold: 5, categoryType: 'Món mặn', image_url: 'images/ca_ri_ga.jpg', status: 'Hiện', customMargin: undefined },
    { id: 'SP060', name: 'Lẩu Gà Lá É', type: 'Món chính', cost: 190000, stock: 15, lowStockThreshold: 4, categoryType: 'Món lẩu', image_url: 'images/lau_ga_la_e.jpg', status: 'Hiện', customMargin: undefined },
];

let mockImports = [
    { 
        id: 'PN2025001', date: '2025-10-20', total: 1500000, status: 'Đã nhập', 
        details: [
            { productId: 'SP001', name: 'Phở Gà Lá Chanh', qty: 20, cost: 30000, total: 600000 },
            { productId: 'SP011', name: 'Sữa Chua Trái Cây', qty: 50, cost: 10000, total: 500000 },
            { productId: 'SP031', name: 'Nước Dừa Tươi', qty: 40, cost: 10000, total: 400000 }
        ]
    },
    { 
        id: 'PN2025002', date: '2025-10-25', total: 850000, status: 'Đang giao', 
        details: [
            { productId: 'SP009', name: 'Cơm Chiên Chay Lá É', qty: 30, cost: 25000, total: 750000 },
            { productId: 'SP008', name: 'Gỏi Cuốn Chay', qty: 20, cost: 5000, total: 100000 }
        ]
    },
    { 
        id: 'PN2025003', date: '2025-10-28', total: 500000, status: 'Đã hủy', 
        details: [
            { productId: 'SP021', name: 'Bánh Khoai Mì Nướng', qty: 50, cost: 10000, total: 500000 }
        ]
    },
];


let nextImportId = 4;

let currentImportItems = [];


let mockOrders = [
    { id: 'DH2025001', customerId: 'K001', customerName: 'Nguyễn Văn Khách', date: '2025-10-25', total: 105000, status: 'new',
        products: [{ name: 'Phở Bò Đặc Biệt', qty: 1, price: 65000 }, { name: 'Trà Sữa Trân Châu', qty: 1, price: 40000 }] },
    { id: 'DH2025002', customerId: 'K001', customerName: 'Nguyễn Văn Khách', date: '2025-10-26', total: 60000, status: 'processing',
        products: [{ name: 'Bánh Mì Thập Cẩm', qty: 2, price: 30000 }] },
];

let profitMargins = {
    'Món chính': 25,
    'Món nhẹ': 30,
    'Đồ uống': 40,
    'Món khai vị': 35,
    'Món kèm': 20,
    'Món tráng miệng': 30
};

const STORAGE_KEY = '7CHO_FOOD_PRODUCTS';

function saveProductsToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockProducts));
}

function loadProductsFromStorage() {
    const storedProducts = localStorage.getItem(STORAGE_KEY);
    if (storedProducts) {
        mockProducts = JSON.parse(storedProducts);
    } else {
        if (typeof saveProductsToStorage !== 'undefined') {
            saveProductsToStorage();
       }
    }
}

const CLIENT_STORAGE_KEY = '7CHO_FOOD_CLIENT_ACCOUNTS';

function saveClientAccountsToStorage() {
    localStorage.setItem(CLIENT_STORAGE_KEY, JSON.stringify(mockClientAccounts));
}

function loadClientAccountsFromStorage() {
    const storedAccounts = localStorage.getItem(CLIENT_STORAGE_KEY);
    if (storedAccounts) {
        mockClientAccounts = JSON.parse(storedAccounts);
    } else {
        if (typeof saveClientAccountsToStorage !== 'undefined') {
            saveClientAccountsToStorage();
        }
    }
}

const CATEGORY_STORAGE_KEY = '7CHO_FOOD_CATEGORIES'; 

function saveCategoriesToStorage() {
    localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(mockCategories));
}

function loadCategoriesFromStorage() {
    const storedCategories = localStorage.getItem(CATEGORY_STORAGE_KEY);
    if (storedCategories) {
        mockCategories = JSON.parse(storedCategories);
        const maxId = mockCategories.reduce((max, cat) => {
            const num = parseInt(cat.id.replace('CAT', '')) || 0;
            return num > max ? num : max;
        }, 0);
        nextCategoryId = maxId + 1;

    } else {
        if (typeof saveCategoriesToStorage !== 'undefined') {
            saveCategoriesToStorage();
        }
    }
}

const IMPORT_STORAGE_KEY = '7CHO_FOOD_IMPORTS';

function saveImportsToStorage() {
    localStorage.setItem(IMPORT_STORAGE_KEY, JSON.stringify(mockImports));
}

function loadImportsFromStorage() {
    const storedImports = localStorage.getItem(IMPORT_STORAGE_KEY);
    if (storedImports) {
        mockImports = JSON.parse(storedImports);
    } else {
        if (typeof saveImportsToStorage !== 'undefined') {
            saveImportsToStorage();
        }
    }
}

const ORDER_STORAGE_KEY = '7CHO_FOOD_ORDERS';

function saveOrdersToStorage() {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(mockOrders));
}

function loadOrdersFromStorage() {
    const storedOrders = localStorage.getItem(ORDER_STORAGE_KEY);
    if (storedOrders) {
        mockOrders = JSON.parse(storedOrders);
    } else {
        if (typeof saveOrdersToStorage !== 'undefined') {
            saveOrdersToStorage();
        }
    }
}

const CURRENT_CLIENT_KEY = '7CHO_FOOD_CURRENT_CLIENT';

function saveClientSession(clientData) {
    localStorage.setItem(CURRENT_CLIENT_KEY, JSON.stringify(clientData));
}

function clearClientSession() {
    localStorage.removeItem(CURRENT_CLIENT_KEY);
}

let cart = [];
let currentClient = { 
    id: null, 
    name: 'Khách', 
    email: null, 
    address: 'Chưa cập nhật',
    phone: 'Chưa cập nhật',
    isLoggedIn: false 
};

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// --- Chức năng Khởi tạo và Điều hướng ---
document.addEventListener('DOMContentLoaded', () => {
    loadProductsFromStorage();
    loadClientAccountsFromStorage();
    loadCategoriesFromStorage();
    loadImportsFromStorage();
    loadOrdersFromStorage();
    loadClientSession();
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    const adminPanel = document.getElementById('admin-panel');
    const clientPanel = document.getElementById('client-panel');

    if (role === 'admin') {
        clientPanel.style.display = 'none';
        adminPanel.style.display = 'flex';
        filteredAdminProductsList = [...mockProducts];
        renderInventoryStatus();
        renderProducts();
        renderDashboardStats();
        renderAdminOrders();
        setActiveTab('dashboard');
        
        const adminPrevButton = document.getElementById('admin-prev-page');
        const adminNextButton = document.getElementById('admin-next-page');

        if (adminPrevButton && adminNextButton) {
            adminPrevButton.onclick = () => changeAdminPage('prev');
            adminNextButton.onclick = () => changeAdminPage('next');
        }
    } else {
        adminPanel.style.display = 'none';
        clientPanel.style.display = 'block';
        initializeClientView();
        showSlides(slideIndex);
        autoShowSlides();
            
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAuthModal();
                closeProductDetailModal(); 
            }
        });

        const clientPrevButton = document.getElementById('client-prev-page');
        const clientNextButton = document.getElementById('client-next-page');

        if (clientPrevButton && clientNextButton) {
            clientPrevButton.onclick = () => changePage('prev');
            clientNextButton.onclick = () => changePage('next');
        }
    }
});

// Chuyển tab Admin
document.querySelectorAll(".admin-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        const target = tab.getAttribute("data-tab");
        setActiveTab(target);

        if (target === "user-management") loadUsers();
        if (target === "product-management") renderProducts();
        if (target === "inventory-management") renderInventoryStatus();
        if (target === "price-management") renderPriceManagement();
        if (target === "order-management") renderAdminOrders();
        if (target === "dashboard") renderDashboardStats();
    });
});

function setActiveTab(targetId) {
    document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    
    document.querySelector(`.admin-tab[data-tab="${targetId}"]`).classList.add("active");
    document.getElementById(targetId).classList.add("active");
    if (targetId === "dashboard") renderDashboardStats();
    if (targetId === "user-management") loadUsers();
    if (targetId === "category-management") loadCategories();
    if (targetId === "product-management") {
        populateAdminCategoryFilter(); 
        renderProducts();
    }
    if (targetId === "import-management") renderImportManagement();
}

function logout() {
    alert('Đăng xuất Admin thành công!');
    window.location.href = 'admin.html'; 
}

// Chuyển View Client
function initializeClientView() {
    updateCartDisplay();
    updateAuthDropdown(); 
    renderClientProducts();
    setActiveView('home');
    document.querySelector('.category-link[data-category="all"]').classList.add('active');
}

function setActiveView(targetId) {
    document.querySelectorAll(".client-view").forEach(v => v.classList.remove("active"));

    document.body.classList.remove('checkout-mode'); 
    document.body.classList.remove('profile-mode');

    if (targetId === 'checkout') {
        document.body.classList.add('checkout-mode');
    } else if (targetId === 'profile') {
        document.body.classList.add('profile-mode');
        updateProfileView();
    }
    
    document.getElementById(targetId).classList.add("active");

    if (targetId === 'home') {
        filterByCategory('all', false);
    }
}

// --- LOGIC DROPDOWN & MODAL MỚI ---
function updateAuthDropdown() {
    const userInfoNav = document.getElementById('user-info');
    const optLogin = document.getElementById('opt-login');
    const optRegister = document.getElementById('opt-register');
    const optProfile = document.getElementById('opt-profile');
    const optLogout = document.getElementById('opt-logout');

    if (currentClient.isLoggedIn) {
        userInfoNav.textContent = `👤 ${currentClient.name}`;
        optLogin.style.display = 'none';
        optRegister.style.display = 'none';
        optProfile.style.display = 'block';
        optLogout.style.display = 'block';
    } else {
        userInfoNav.textContent = '👤 Tài khoản';
        optLogin.style.display = 'block';
        optRegister.style.display = 'block';
        optProfile.style.display = 'none';
        optLogout.style.display = 'none';
    }
}

function showAuthModal(formType, event) {
    if (event) event.preventDefault();
    
    if (!currentClient.isLoggedIn) {
        document.getElementById('auth-modal').classList.add('active');
        switchAuthModal(formType); 
    } else {
        if (formType === 'profile') {
            setActiveView('profile');
        }
    }
}

function switchAuthModal(target) {
    document.getElementById('login-form-container').classList.remove('active');
    document.getElementById('register-form-container').classList.remove('active');
    
    const targetElement = document.getElementById(`${target}-form-container`);
    targetElement.classList.add('active');
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('active');
}

function showCartModal() {
    updateCartDisplay();
    document.getElementById('cart-modal').classList.add('active');
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.remove('active');
}

function closeModalOutside(event) {
    if (event.target.id === 'auth-modal') {
        closeAuthModal();
    }
    if (event.target.id === 'product-detail-modal') {
        closeProductDetailModal();
    }
    if (event.target.id === 'cart-modal') {
        closeCartModal(); 
    }
}

function closeProductDetailModal() {
    document.getElementById('product-detail-modal').classList.remove('active');
}

// --- I. Dashboard Stats (Mô phỏng) ---
function renderDashboardStats() {
    document.getElementById('total-users').textContent = mockClientAccounts.length;
    document.getElementById('total-products').textContent = mockProducts.length;
    document.getElementById('total-orders').textContent = mockOrders.length;

    const totalRevenue = mockOrders
        .reduce((sum, o) => sum + o.total, 0);
    
    document.getElementById('total-revenue').textContent = `${totalRevenue.toLocaleString('vi-VN')} VND`;
}

// --- I.2. Quản lý Người dùng ---
function loadUsers(usersList = mockClientAccounts) {
    if (usersList === mockClientAccounts) {
        const searchInput = document.getElementById('user-search-query');
        if (searchInput) {
            searchInput.value = ''; 
        }
    }
    const tbody = document.getElementById('user-list');
    tbody.innerHTML = '';

    if (usersList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #e74c3c;">Không tìm thấy khách hàng nào.</td></tr>';
       return;
   }

    usersList.forEach(user => {
        const row = document.createElement('tr');
        const statusClass = user.status === 'Khóa' ? 'status-danger' : 'status-success';
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone || 'N/A'}</td>
            <td><span class="status-badge ${statusClass}">${user.status}</span></td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="resetClientPassword('${user.id}')" style="margin-right: 5px;">Reset MK</button>
                <button class="btn ${user.status === 'Khóa' ? 'btn-success' : 'btn-danger'} btn-sm" 
                    onclick="toggleClientAccountStatus('${user.id}')">
                    ${user.status === 'Khóa' ? 'Mở khóa' : 'Khóa'}
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function toggleClientAccountStatus(userId) {
    const userIndex = mockClientAccounts.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        const currentStatus = mockClientAccounts[userIndex].status;
        const newStatus = currentStatus === 'Khóa' ? 'Hoạt động' : 'Khóa';

        mockClientAccounts[userIndex].status = newStatus;

        if (newStatus === 'Khóa' && currentClient.id === userId) {
            clientLogout();
        }
        saveClientAccountsToStorage();
        alert(`Tài khoản KH ${userId} đã được ${newStatus === 'Khóa' ? 'khóa' : 'mở khóa'}!`);
        loadUsers();
    }
}

function resetClientPassword(userId) {
    const userIndex = mockClientAccounts.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        if (confirm(`Bạn có chắc chắn muốn reset mật khẩu cho khách hàng "${mockClientAccounts[userIndex].name}" (${userId})?\nMật khẩu sẽ được đặt lại là: "123456"`)) {
            mockClientAccounts[userIndex].password = "123456"; 
            saveClientAccountsToStorage();
            alert(`Đã reset mật khẩu thành công cho KH ${mockClientAccounts[userIndex].name} (${userId}).\nMật khẩu mới là: 123456`);
        }
    } else {
        alert(`Lỗi: Không tìm thấy khách hàng với ID: ${userId}`);
    }
}

function searchUsers() {
    const query = document.getElementById('user-search-query').value.trim().toLowerCase();

    if (query === '') {
        loadUsers(mockClientAccounts);
        return;
    }

    const filteredUsers = mockClientAccounts.filter(user => {
        const matchesName = user.name.toLowerCase().includes(query);
        const matchesEmail = user.email.toLowerCase().includes(query);
        
        return matchesName || matchesEmail;
    });

    loadUsers(filteredUsers);
}

// --- I.3. Quản lý loại san phẩm (Thêm/Sửa/Xóa) ---
function loadCategories() {
    const tbody = document.getElementById('category-list');
    tbody.innerHTML = '';

    mockCategories.forEach(category => {
        const row = document.createElement('tr');
        const statusClass = category.status === 'Ẩn' ? 'status-danger' : 'status-success';
        const actionButton = category.status === 'Ẩn' 
                             ? `<button class="btn btn-success btn-sm" onclick="toggleCategoryStatus('${category.id}')">Hiện</button>`
                             : `<button class="btn btn-warning btn-sm" onclick="toggleCategoryStatus('${category.id}')">Ẩn</button>`;

        row.innerHTML = `
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td><span class="status-badge ${statusClass}">${category.status}</span></td>
            <td>
                <button class="btn btn-info btn-sm" onclick="openEditCategoryModal('${category.id}')" style="margin-right: 5px;">Sửa</button>
                ${actionButton}
                <button class="btn btn-danger btn-sm" onclick="deleteCategory('${category.id}')" style="margin-left: 5px;">Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function addCategory() {
    const nameInput = document.getElementById('new-category-name');
    const newName = nameInput.value.trim();

    if (newName === '') {
        alert('Tên loại sản phẩm không được để trống.');
        return;
    }
    
    const newId = 'CAT' + String(nextCategoryId++).padStart(3, '0');

    mockCategories.push({
        id: newId,
        name: newName,
        status: 'Hiện'
    });

    nameInput.value = '';
    saveCategoriesToStorage();
    loadCategories();
    alert(`Đã thêm loại sản phẩm: ${newName}`);
}

function openEditCategoryModal(categoryId) {
    const category = mockCategories.find(c => c.id === categoryId);
    if (category) {
        document.getElementById('edit-category-id').value = category.id;
        document.getElementById('edit-category-name').value = category.name;
        document.getElementById('edit-category-modal').style.display = 'flex';
    }
}

function saveCategory() {
    const categoryId = document.getElementById('edit-category-id').value;
    const newName = document.getElementById('edit-category-name').value.trim();

    if (newName === '') {
        alert('Tên loại sản phẩm không được để trống.');
        return;
    }

    const categoryIndex = mockCategories.findIndex(c => c.id === categoryId);
    if (categoryIndex !== -1) {
        const oldName = mockCategories[categoryIndex].name;
        mockCategories[categoryIndex].name = newName;
        mockProducts.forEach(p => {
            if (p.categoryType === oldName) {
                p.categoryType = newName;
            }
        });
        saveProductsToStorage();
        saveCategoriesToStorage();
        closeModal('edit-category-modal');
        loadCategories();
        alert(`Đã cập nhật loại sản phẩm ${categoryId} thành: ${newName}`);
    }
}

function toggleCategoryStatus(categoryId) {
    const categoryIndex = mockCategories.findIndex(c => c.id === categoryId);
    if (categoryIndex !== -1) {
        const currentStatus = mockCategories[categoryIndex].status;
        const newStatus = currentStatus === 'Ẩn' ? 'Hiện' : 'Ẩn';
        mockCategories[categoryIndex].status = newStatus;
        saveCategoriesToStorage();
        loadCategories();
        alert(`Đã chuyển trạng thái loại sản phẩm ${categoryId} thành: ${newStatus}`);
    }
}

function deleteCategory(categoryId) {
    const category = mockCategories.find(c => c.id === categoryId);
    if (!category) return;
    const productsUsing = mockProducts.filter(p => p.categoryType === category.name);
    if (productsUsing.length > 0) {
        alert(`Không thể xóa loại sản phẩm "${category.name}" vì có ${productsUsing.length} sản phẩm đang sử dụng.`);
        return;
    }
    if (confirm(`Bạn có chắc chắn muốn xóa loại sản phẩm "${category.name}" không?`)) {
        mockCategories = mockCategories.filter(c => c.id !== categoryId);
        saveCategoriesToStorage();
        loadCategories();
        alert(`Đã xóa loại sản phẩm: ${category.name}`);
    }
}

// --- I.4. Quản lý Sản phẩm (Thêm/Sửa/Xóa/Ẩn) ---
let filteredAdminProductsList = [...mockProducts];
let adminProductsPerPage = 10;
let adminCurrentPage = 1;
function renderProducts(productsList = filteredAdminProductsList) {
    if (productsList === undefined) {
        productsList = filteredAdminProductsList;
    }
    filteredAdminProductsList = productsList;
    const gridContainer = document.getElementById('admin-product-list');
    gridContainer.innerHTML = '';
    
    const totalProducts = filteredAdminProductsList.length;
    const totalPages = Math.ceil(totalProducts / adminProductsPerPage);
    if (adminCurrentPage > totalPages) {
        adminCurrentPage = totalPages > 0 ? totalPages : 1;
    }
    if (totalProducts === 0) {
        gridContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Không có sản phẩm nào trong hệ thống.</p>';
        updateAdminPaginationDisplay(1, 1, 0); 
        return;
    }
    const startIndex = (adminCurrentPage - 1) * adminProductsPerPage;
    const endIndex = startIndex + adminProductsPerPage;
    const productsToRender = filteredAdminProductsList.slice(startIndex, endIndex);
    updateAdminPaginationDisplay(adminCurrentPage, totalPages, totalProducts);
    
    if (productsToRender.length === 0) {
        gridContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Không có sản phẩm nào trong hệ thống.</p>';
        updateAdminPaginationDisplay(1, 1, 0);
        return;
    }
    
    productsToRender.forEach(p => {
        const margin = p.customMargin !== undefined ? p.customMargin : (profitMargins[p.type] || 0);
        const calculatedPrice = calculateSellingPrice(p.cost, margin);
        const card = document.createElement('div');
        card.className = 'admin-product-card';

        const statusClass = p.status === 'Ẩn' ? 'status-danger' : 'status-success';
        const actionButtonText = p.status === 'Ẩn' ? 'Hiện' : 'Ẩn';
        const actionButtonClass = p.status === 'Ẩn' ? 'btn-success' : 'btn-warning';
        
        card.innerHTML = `
            <div class="admin-product-image-container">
                <img src="${p.image_url || 'https://placehold.co/100x100/ecf0f1/7f8c8d?text=7CHO'}" 
                     alt="${p.name}" 
                     onerror="this.onerror=null;this.src='https://placehold.co/100x100/ecf0f1/7f8c8d?text=7CHO'">
            </div>
            <div class="admin-product-details">
                <div style="flex-grow: 1">
                    <h4>${p.name}</h4>
                    <div class="admin-product-meta">
                        <strong>Mã:</strong> ${p.id} | 
                        <strong>Loại:</strong> ${p.categoryType} | 
                        <strong>Giá:</strong> ${calculatedPrice.toLocaleString('vi-VN')}đ | 
                        <strong>Tồn:</strong> ${p.stock}
                        <strong>TT:</strong> <span class="status-badge ${statusClass}">${p.status}</span>
                    </div>
                    <div class="admin-product-description">
                        ${p.description}
                    </div>
                </div>
                <div class="admin-product-actions" style="display: flex; flex-direction: column; justify-content: space-between; gap: 5px;">
                    <button class="btn btn-info btn-sm" onclick="openProductModal('edit', '${p.id}')">Sửa</button>
                    <button class="btn ${actionButtonClass} btn-sm" onclick="toggleProductStatus('${p.id}')">
                        ${actionButtonText}
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}', event)"">Xóa</button>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
    updateAdminPaginationDisplay(adminCurrentPage, totalPages, totalProducts);
}

function toggleProductStatus(productId) {
    const productIndex = mockProducts.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const currentStatus = mockProducts[productIndex].status;
        const newStatus = currentStatus === 'Ẩn' ? 'Hiện' : 'Ẩn';

        mockProducts[productIndex].status = newStatus;

        console.log('Product ID:', productId, 'New Status:', newStatus);
        console.log('All products:', mockProducts.map(p => ({id: p.id, name: p.name, status: p.status})));

        saveProductsToStorage();
        alert(`Đã chuyển trạng thái sản phẩm ${productId} thành: ${newStatus}`);
        searchAdminProducts(); 
        searchProducts();
    }
}

function searchAdminProducts() {
    const nameQuery = document.getElementById('admin-product-search').value.trim().toLowerCase();
    const categoryQuery = document.getElementById('admin-category-filter').value;
    
    const results = mockProducts.filter(p => {
        const matchesNameOrId = p.name.toLowerCase().includes(nameQuery) || 
                                p.id.toLowerCase().includes(nameQuery);
        
        const matchesCategory = categoryQuery === 'all' || p.categoryType === categoryQuery;
        
        return matchesNameOrId && matchesCategory;
    });
    adminCurrentPage = 1;
    renderProducts(results);
}

function populateAdminCategoryFilter() {
    const selectElement = document.getElementById('admin-category-filter');
    if (!selectElement) return;
    selectElement.innerHTML = '<option value="all">Tất cả Loại</option>'; 
    mockCategories.filter(c => c.status === 'Hiện').forEach(category => {
        const option = document.createElement('option');
        option.value = category.name; 
        option.textContent = category.name;
        selectElement.appendChild(option);
    });
}

function updateAdminPaginationDisplay(current, total, totalItems) {
    const paginationDiv = document.querySelector('.admin-pagination');
    const prevButton = document.getElementById('admin-prev-page');
    const nextButton = document.getElementById('admin-next-page');
    const pageSpan = document.getElementById('admin-page-info');

    if (totalItems === 0 || total <= 1) {
        paginationDiv.style.display = 'none';
        return;
    }
    if (paginationDiv) paginationDiv.style.display = 'flex';
    if (pageSpan) pageSpan.textContent = `Trang ${current} / ${total}`;
    if (prevButton && !prevButton.hasEventListener) {
        prevButton.onclick = () => changeAdminPage('prev');
        prevButton.hasEventListener = true;
    }
    if (nextButton && !nextButton.hasEventListener) {
        nextButton.onclick = () => changeAdminPage('next');
        nextButton.hasEventListener = true;
    }
    if (prevButton) prevButton.disabled = current === 1;
    if (nextButton) nextButton.disabled = current === total;
}

function changeAdminPage(direction) {
    const totalPages = Math.ceil(filteredAdminProductsList.length / adminProductsPerPage);
    if (direction === 'prev' && adminCurrentPage > 1) {
        adminCurrentPage--;
    } else if (direction === 'next' && adminCurrentPage < totalPages) {
        adminCurrentPage++;
    }
    renderProducts();
    document.getElementById('product-management').scrollIntoView({behavior: 'smooth'});
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openProductModal(mode, productId = null) {
    const modal = document.getElementById('product-modal');
    document.getElementById('product-modal-title').textContent = (mode === 'add') ? 'Thêm Sản phẩm Mới' : 'Sửa Sản phẩm';
    document.getElementById('save-product-btn').textContent = (mode === 'add') ? 'Thêm' : 'Lưu';
    const title = document.getElementById('product-modal-title');
    const saveBtn = document.getElementById('save-product-btn');
    populateCategorySelect(document.getElementById('product-category'));
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-code').value = '';
    document.getElementById('product-stock').value = '';
    document.getElementById('product-cost').value = '';
    document.getElementById('product-customMargin').value = '';
    document.getElementById('product-lowStockThreshold').value = '';
    document.getElementById('product-type').value = 'Món chính';
    document.getElementById('product-image-file').value = ''; // Reset input file
    document.getElementById('product-image-url-current').value = ''; // Reset trường ẩn URL
    previewProductImage('');
    document.getElementById('product-description').value = '';
    document.getElementById('product-code').disabled = false;
    if (mode === 'add') {
        title.textContent = 'Thêm Sản phẩm Mới';
        saveBtn.textContent = 'Thêm';
        document.getElementById('product-code').placeholder = `Ví dụ: SP${String(parseInt(mockProducts[mockProducts.length - 1].id.slice(2, 5)) + 1).padStart(3, '0')}`;
    }else if(mode === 'edit') {
        title.textContent = 'Chỉnh sửa Sản phẩm';
        saveBtn.textContent = 'Cập nhật';
        const product = mockProducts.find(p => p.id === productId);
        if (product) {
            const currentMargin = product.customMargin !== undefined 
                                ? product.customMargin 
                                : (profitMargins[product.type] || 0);
            
            document.getElementById('product-id').value = product.id;
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-code').value = product.id;
            document.getElementById('product-code').disabled = true;
            document.getElementById('product-cost').value = product.cost;
            document.getElementById('product-stock').value = product.stock;
            document.getElementById('product-lowStockThreshold').value = product.lowStockThreshold;
            document.getElementById('product-customMargin').value = currentMargin
            document.getElementById('product-type').value = product.type; 
            document.getElementById('product-category').value = product.categoryType; 
            document.getElementById('product-image-url-current').value = product.image_url;
            previewProductImage(product.image_url);
            
            document.getElementById('product-description').value = product.description;
        } else {
            alert(`Lỗi: Không tìm thấy sản phẩm ${productId} để sửa.`);
            return;
        }
    }
    modal.style.display = 'flex';
}

function deleteProduct(productId) {
    const productIndex = mockProducts.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        alert('Lỗi: Không tìm thấy sản phẩm này!');
        return;
    }
    const productName = mockProducts[productIndex].name;

    if (confirm(`Bạn có chắc chắn muốn XÓA VĨNH VIỄN sản phẩm "${productName}" (${productId}) không? Hành động này không thể hoàn tác.`)) {
        mockProducts.splice(productIndex, 1);
        saveProductsToStorage();
        searchAdminProducts();
        searchProducts();
        alert(`Đã xóa thành công sản phẩm: ${productName}.`);  
    }
}

function previewProductImage(input) {
    const preview = document.getElementById('image-preview');
    const defaultUrl = 'https://placehold.co/200x200/cccccc/ffffff?text=No+Image';
    
    // Nếu đầu vào là một đối tượng File
    if (input instanceof File) {
        if (input.size > 2 * 1024 * 1024) { // Kiểm tra kích thước tệp (2MB)
            alert('Kích thước tệp quá lớn. Vui lòng chọn tệp nhỏ hơn 2MB.');
            document.getElementById('product-image-file').value = '';
            preview.src = defaultUrl;
            return;
        }
        // Tạo URL tạm thời cho ảnh được chọn
        preview.src = URL.createObjectURL(input);
    } 
    // Nếu đầu vào là một chuỗi (URL hoặc Base64 đã lưu)
    else if (typeof input === 'string' && input.trim() !== '') {
        preview.src = input;
    } 
    // Mặc định
    else {
        preview.src = defaultUrl;
    }
}

function populateCategorySelect(selectElement) {
    selectElement.innerHTML = '';
    mockCategories.filter(c => c.status === 'Hiện').forEach(category => {
        const option = document.createElement('option');
        option.value = category.name; 
        option.textContent = category.name;
        selectElement.appendChild(option);
    });
}

async function saveProduct() {
    const isAdding = document.getElementById('save-product-btn').textContent === 'Thêm';
    const productId = document.getElementById('product-id').value;
    const id = document.getElementById('product-code').value.trim();
    const name = document.getElementById('product-name').value.trim();
    const categoryName = document.getElementById('product-category').value;
    const rawCustomMargin = document.getElementById('product-customMargin').value;
    const customMargin = rawCustomMargin.trim() === '' ? undefined : parseInt(rawCustomMargin);
    const stock = parseInt(document.getElementById('product-stock').value);
    const cost = parseInt(document.getElementById('product-cost').value);
    const type = document.getElementById('product-type').value; 
    const rawLowStock = document.getElementById('product-lowStockThreshold').value;
    const lowStockThreshold = parseInt(rawLowStock) || 10;
    const imageFile = document.getElementById('product-image-file').files[0];
    const currentImageUrl = document.getElementById('product-image-url-current').value;
    const description = document.getElementById('product-description').value.trim();

    let newImageUrl = currentImageUrl || 'images/default_placeholder.jpg';

    if (!name || !categoryName || description.length < 5 ||
        isNaN(stock) || isNaN(cost) || isNaN(lowStockThreshold) ||
        (customMargin !== undefined && (isNaN(customMargin) || customMargin < 0))) {
        alert('Vui lòng điền đầy đủ và chính xác các trường (Giá vốn, Tồn kho, Ngưỡng cảnh báo phải là số. % Lợi nhuận phải là số hợp lệ hoặc để trống).');
        return;
    }
    if (imageFile) {
        try {
            // Chờ hàm chuyển đổi Base64 hoàn tất
            newImageUrl = await fileToBase64(imageFile); 
        } catch (error) {
            alert('Lỗi khi đọc tệp ảnh: ' + error.message);
            return;
        }
    }

    let finalMargin = customMargin !== undefined ? customMargin : (profitMargins[type] || 0);
    const newPrice = calculateSellingPrice(cost, finalMargin);
    
    if (isAdding) {
        const totalProducts = mockProducts.length;
        const totalPages = Math.ceil(totalProducts / adminProductsPerPage);
        adminCurrentPage = totalPages;
        if (!id) {
            alert('Vui lòng nhập mã sản phẩm!');
            return;
        }

        if (mockProducts.some(p => p.id === id)) {
            alert(`Mã sản phẩm "${id}" đã tồn tại. Vui lòng chọn mã khác.`);
            return;
        }
        
        const newProduct = {
            id: id,
            name: name,
            type: type,
            price: newPrice,
            cost: cost,
            stock: stock,
            lowStockThreshold: lowStockThreshold,
            description: description,
            categoryType: categoryName,
            image_url: newImageUrl,
            status: 'Hiện',
            customMargin: customMargin
        };
        
        mockProducts.push(newProduct);
        alert(`Đã thêm sản phẩm: ${name} (${id})`);
        
    } else {
        if (!productId) {
            alert('Lỗi: Không xác định được sản phẩm cần cập nhật!');
            return;
        }
        
        const productIndex = mockProducts.findIndex(p => p.id === productId);

        if (productIndex !== -1) {
            mockProducts[productIndex].name = name;
            mockProducts[productIndex].categoryType = categoryName;
            mockProducts[productIndex].type = type;
            mockProducts[productIndex].price = newPrice; 
            mockProducts[productIndex].customMargin = customMargin;
            mockProducts[productIndex].cost = cost;
            mockProducts[productIndex].stock = stock;
            mockProducts[productIndex].lowStockThreshold = lowStockThreshold;
            mockProducts[productIndex].image_url = newImageUrl;
            mockProducts[productIndex].description = description;

            alert(`Đã cập nhật thông tin sản phẩm "${name}" thành công!`);
        } else {
            alert('Lỗi: Không tìm thấy sản phẩm cần cập nhật.');
            return;
        }
    }
    saveProductsToStorage();
    closeModal('product-modal');
    searchAdminProducts();
    searchProducts();
}

// I.5. Quản lý Phiếu nhập hàng
function renderImportManagement() {
    const tbody = document.getElementById('import-list');
    tbody.innerHTML = '';
    
    mockImports.sort((a, b) => new Date(b.date) - new Date(a.date));

    mockImports.forEach(imp => {
        const statusText = imp.status;
        let statusClass = 'status-new';
        if (statusText === 'Đã nhập') statusClass = 'status-success';
        else if (statusText === 'Đang giao') statusClass = 'status-warning';
        else if (statusText === 'Đã hủy') statusClass = 'status-danger';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${imp.id}</td>
            <td>${imp.date}</td>
            <td>${imp.total.toLocaleString('vi-VN')} đ</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-info btn-sm" onclick="viewImportDetails('${imp.id}')">Chi tiết</button>
                <button class="btn btn-primary btn-sm" onclick="openUpdateImportStatusModal('${imp.id}')">Cập nhật TT</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewImportDetails(importId) {
    const imp = mockImports.find(i => i.id === importId);
    if (!imp) return;

    let detailsHtml = `
        <p><strong>Mã Phiếu:</strong> ${imp.id}</p>
        <p><strong>Ngày Nhập:</strong> ${imp.date}</p>
        <hr style="margin: 10px 0;">
        <p><strong>Tổng tiền:</strong> <span style="color: #E74C3C; font-weight: bold;">${imp.total.toLocaleString('vi-VN')} đ</span></p>
        <table style="width: 100%; margin-top: 15px;">
            <thead>
                <tr><th>Sản phẩm</th><th>SL</th><th>Giá vốn</th><th>Thành tiền</th></tr>
            </thead>
            <tbody>
    `;

    imp.details.forEach(item => {
        detailsHtml += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.cost.toLocaleString('vi-VN')} đ</td>
                <td>${item.total.toLocaleString('vi-VN')} đ</td>
            </tr>
        `;
    });

    detailsHtml += `</tbody></table>`;
    
    document.getElementById('import-modal-title').textContent = `Chi tiết Phiếu nhập ${imp.id}`;
    document.getElementById('import-modal-body').innerHTML = detailsHtml;
    document.getElementById('import-detail-modal').style.display = 'flex';
}

function openUpdateImportStatusModal(importId) {
    const imp = mockImports.find(i => i.id === importId);
    if (!imp) return;

    const statusClass = imp.status === 'Đã nhập' ? 'status-success' 
                        : imp.status === 'Đang giao' ? 'status-warning' 
                        : 'status-danger';

    document.getElementById('update-import-id-display').textContent = imp.id;
    const statusDisplay = document.getElementById('current-import-status-display');
    statusDisplay.textContent = imp.status;
    statusDisplay.className = `status-badge ${statusClass}`;
    
    document.getElementById('new-import-status').value = imp.status;

    const modal = document.getElementById('update-import-status-modal');
    modal.dataset.currentImportId = importId;

    modal.style.display = 'flex';
}

function updateImportStatusFromModal() {
    const modal = document.getElementById('update-import-status-modal');
    const importId = modal.dataset.currentImportId;
    const newStatus = document.getElementById('new-import-status').value;
    
    if (!importId || !newStatus) {
        alert('Lỗi: Không tìm thấy ID phiếu nhập hoặc trạng thái.');
        return;
    }
    
    const imp = mockImports.find(i => i.id === importId);
    if (!imp) return;
    
    const oldStatus = imp.status;
    imp.status = newStatus;

    if (oldStatus === 'Đã nhập' && newStatus !== 'Đã nhập') {
        imp.details.forEach(item => {
            const product = mockProducts.find(p => p.id === item.productId);
            if (product) {
                product.stock -= item.qty;
                if (product.stock < 0) product.stock = 0;
            }
        });
        alert(`Đã hoàn lại tồn kho cho PN ${importId} do phiếu bị chuyển sang trạng thái "${newStatus}".`);
    }

    if (newStatus === 'Đã nhập' && oldStatus !== 'Đã nhập') {
        imp.details.forEach(item => {
            const product = mockProducts.find(p => p.id === item.productId);
            if (product) {
                product.stock += item.qty;
                product.cost = item.cost;
            }
        });
        saveProductsToStorage();
        alert(`Đã nhập kho thành công cho PN ${importId} và cập nhật tồn kho!`);
    }

    saveImportsToStorage();
    closeModal('update-import-status-modal');
    renderImportManagement();
    renderInventoryStatus();
}

function openAddImportModal() {
    const newId = 'PN' + new Date().getFullYear() + String(mockImports.length + 1).padStart(3, '0');
    document.getElementById('import-id').value = newId;
    document.getElementById('import-date').value = new Date().toISOString().slice(0, 10);
    populateImportProductSelect();
    currentImportItems = [];
    renderImportItems();
    document.getElementById('add-import-modal').style.display = 'flex';
}

function populateImportProductSelect() {
    const select = document.getElementById('import-product-select');
    select.innerHTML = '<option value="">-- Chọn Sản phẩm --</option>';

    mockProducts.filter(p => p.status !== 'Ẩn').forEach(p => {
        const option = document.createElement('option');
        option.value = p.id; 
        option.textContent = `${p.id} - ${p.name} (Giá vốn hiện tại: ${p.cost.toLocaleString('vi-VN')} đ)`;
        option.setAttribute('data-cost', p.cost);
        select.appendChild(option);
    });

    select.onchange = function() {
        const selectedOption = select.options[select.selectedIndex];
        const cost = selectedOption.getAttribute('data-cost');
        document.getElementById('import-cost').value = cost || 0;
    };

    if (select.options.length > 1) {
        select.dispatchEvent(new Event('change'));
    }
}

function renderImportItems() {
    const tbody = document.getElementById('import-items-list');
    tbody.innerHTML = '';
    let totalImport = 0;
    
    currentImportItems.forEach(item => {
        const subtotal = item.qty * item.cost;
        totalImport += subtotal;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.productId}</td>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.cost.toLocaleString('vi-VN')} đ</td>
            <td>${subtotal.toLocaleString('vi-VN')} đ</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeImportItem('${item.productId}')">Xóa</button></td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('import-total-display').textContent = totalImport.toLocaleString('vi-VN') + ' đ';
}

function addImportItem() {
    const productId = document.getElementById('import-product-select').value;
    const qty = parseInt(document.getElementById('import-qty').value);
    const cost = parseInt(document.getElementById('import-cost').value);
    
    if (!productId || isNaN(qty) || qty <= 0 || isNaN(cost) || cost < 0) {
        alert('Vui lòng chọn sản phẩm, nhập số lượng và giá vốn hợp lệ.');
        return;
    }
    
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    // Kiểm tra xem sản phẩm đã có trong phiếu chưa
    const existingItemIndex = currentImportItems.findIndex(item => item.productId === productId);
    
    if (existingItemIndex !== -1) {
        // Cập nhật số lượng và giá vốn
        currentImportItems[existingItemIndex].qty += qty;
        // Có thể chọn giữ giá vốn cũ hoặc dùng giá vốn mới (ở đây tôi dùng giá vốn mới cho đơn giản)
        currentImportItems[existingItemIndex].cost = cost; 
    } else {
        currentImportItems.push({
            productId: productId,
            name: product.name,
            qty: qty,
            cost: cost,
            total: qty * cost
        });
    }
    
    // Reset inputs
    document.getElementById('import-qty').value = 1;
    // Để nguyên select và cost để tiện nhập tiếp
    
    renderImportItems();
}

function removeImportItem(productId) {
    currentImportItems = currentImportItems.filter(item => item.productId !== productId);
    renderImportItems();
}

function saveNewImport() {
    const id = document.getElementById('import-id').value;
    const date = document.getElementById('import-date').value;
    
    if (!date) {
        alert('Vui lòng điền đầy đủ Ngày nhập.');
        return;
    }
    
    if (currentImportItems.length === 0) {
        alert('Phiếu nhập phải có ít nhất một sản phẩm.');
        return;
    }

    const total = currentImportItems.reduce((sum, item) => sum + (item.qty * item.cost), 0);
    
    const newImport = {
        id: id,
        date: date,
        total: total,
        status: 'Đã nhập', // Mặc định là đã nhập ngay khi tạo
        details: currentImportItems.map(item => ({
            productId: item.productId,
            name: item.name,
            qty: item.qty,
            cost: item.cost,
            total: item.qty * item.cost
        }))
    };
    
    // 1. Cập nhật tồn kho và giá vốn (giả định đã nhập)
    newImport.details.forEach(item => {
        const product = mockProducts.find(p => p.id === item.productId);
        if (product) {
            product.stock += item.qty;
            product.cost = item.cost; // Cập nhật giá vốn mới nhất
        }
    });

    saveProductsToStorage();
    
    // 2. Lưu vào mockImports và LocalStorage
    mockImports.push(newImport);
    nextImportId++; 
    saveImportsToStorage();
    
    alert(`Đã thêm Phiếu nhập ${id} thành công! Tồn kho đã được cập nhật.`);
    
    // 3. Đóng Modal và tải lại danh sách
    closeModal('add-import-modal');
    renderImportManagement();
    renderInventoryStatus(); // Cập nhật bảng tồn kho
}

function toggleImportStatus(importId) {
    const impIndex = mockImports.findIndex(imp => imp.id === importId);
    if (impIndex !== -1) {
        // ... (Logic xác định newStatus và statusText)

        if (confirm(`Bạn có muốn thay đổi trạng thái phiếu ${importId} từ "${currentStatus}" thành "${statusText}" không?`)) {
            mockImports[impIndex].status = newStatus;
            
            saveImportsToStorage(); // ✅ LƯU TRỮ THAY ĐỔI VÀO LOCALSTORAGE
            
            loadImports(); // Tải lại bảng quản trị
            alert(`Đã cập nhật trạng thái phiếu ${importId} thành: ${statusText}.`);
        }
    }
}

// --- I.6 Quản lý giá bán ---
function calculateSellingPrice(cost, marginPercent) {
    if (cost < 0 || marginPercent < 0) return 0;
    // Tính giá bán làm tròn đến hàng nghìn gần nhất
    const rawPrice = cost * (1 + marginPercent / 100);
    
    // Bước sửa lỗi: Sử dụng toFixed(0) để loại bỏ hoàn toàn các lỗi dấu phẩy động
    // và đảm bảo nó là số nguyên trước khi làm tròn lên hàng nghìn.
    const price = parseFloat(rawPrice.toFixed(0));
    return Math.ceil(price / 1000) * 1000;
}
function renderPriceManagement() {
    const tbody = document.getElementById('price-list');
    tbody.innerHTML = '';
    
    // Đổ dữ liệu vào Select Box Thiết lập Tỉ lệ lợi nhuận
    try {
        populatePriceManagementTypeSelect(); 
    } catch(e) {
        console.error("Lỗi khi tải Select Box Tỉ lệ Lợi nhuận:", e);
    }

    // 1. Tải danh sách sản phẩm vào bảng tra cứu
    mockProducts.forEach(p => {
        const margin = (p.customMargin !== undefined && !isNaN(p.customMargin))
            ? p.customMargin // Ưu tiên giá trị Tùy chỉnh (45)
            : (profitMargins[p.type] || 0);

        const calculatedPrice = calculateSellingPrice(p.cost, margin);
        const currentPrice = calculatedPrice;
        // Màu sắc cảnh báo nếu giá bán hiện tại khác giá bán đề xuất
        const priceStyle = 'color: #27ae60;';                 // Giá đã đồng bộ (màu xanh)

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.cost.toLocaleString('vi-VN')} đ</td>
            <td>
                ${margin} % 
                ${p.customMargin !== undefined ? ' <i class="fas fa-pencil-alt" style="color: #f39c12; font-size: 0.8em;" title="Đã đặt Tỉ lệ tùy chỉnh"></i>' : ''}
            </td>
            <td>
                <span style="${priceStyle}">${currentPrice.toLocaleString('vi-VN')} đ</span>
            </td>
            <td>
                <button class="btn btn-info btn-sm" onclick="openEditProductMarginModal('${p.id}')">Sửa % Lãi</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
function updatePriceManagement() {
    const typeSelect = document.getElementById('price-type-select');
    const marginInput = document.getElementById('price-margin-input');
    
    const productType = typeSelect.value;
    const newMargin = parseInt(marginInput.value);

    if (!productType || isNaN(newMargin) || newMargin < 0) {
        alert('Vui lòng chọn loại sản phẩm và nhập tỉ lệ lợi nhuận hợp lệ (>= 0).');
        return;
    }

    // 1. Cập nhật tỉ lệ lợi nhuận mới
    profitMargins[productType] = newMargin;
    
    // 2. Cập nhật Giá bán cho TẤT CẢ sản phẩm thuộc loại này
    let updatedCount = 0;
    mockProducts.forEach(p => {
        if (p.type === productType) {
            p.customMargin = undefined; // Xóa Tỉ lệ tùy chỉnh nếu có
            const newPrice = calculateSellingPrice(p.cost, newMargin);
            p.price = newPrice;
            updatedCount++;
        }
    });

    // 3. Lưu dữ liệu sản phẩm đã thay đổi
    saveProductsToStorage();
    
    alert(`Đã cập nhật tỉ lệ lợi nhuận ${productType} thành ${newMargin}% và cập nhật giá bán cho ${updatedCount} sản phẩm!`);
    
    // 4. Tải lại cả 2 giao diện
    renderPriceManagement();
    searchProducts(); // Đồng bộ giá bán mới sang Client
}
function populatePriceManagementTypeSelect() {
    const select = document.getElementById('price-type-select');
    // Lấy các loại sản phẩm duy nhất từ mockProducts
    const uniqueTypes = [...new Set(mockProducts.map(p => p.type))].filter(t => t);
    
    select.innerHTML = '<option value="">-- Chọn Loại SP --</option>'; 
    uniqueTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = `${type} (Hiện tại: ${profitMargins[type] || 0}%)`;
        select.appendChild(option);
    });
    
    // Đặt sự kiện để điền % hiện tại khi chọn loại sản phẩm
    select.onchange = function() {
        const currentMargin = profitMargins[select.value] || 0;
        document.getElementById('price-margin-input').value = currentMargin;
    };
    
    // Kích hoạt sự kiện onchange lần đầu tiên
    if (select.options.length > 1) {
        select.dispatchEvent(new Event('change'));
    }
}
function openEditProductMarginModal(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    // Lấy % hiện tại: Ưu tiên Custom Margin, nếu không dùng Margin chung theo Type
    const currentMargin = product.customMargin !== undefined ? product.customMargin : (profitMargins[product.type] || 0);
    
    document.getElementById('edit-margin-product-id').value = productId;
    document.getElementById('edit-margin-product-name').textContent = product.name;
    document.getElementById('edit-margin-product-cost').textContent = product.cost.toLocaleString('vi-VN') + ' đ';
    document.getElementById('edit-margin-value').value = currentMargin;
    
    document.getElementById('edit-margin-modal').style.display = 'flex';
}


function saveProductCustomMargin() {
    const productId = document.getElementById('edit-margin-product-id').value;
    const newMargin = parseInt(document.getElementById('edit-margin-value').value);
    
    if (isNaN(newMargin) || newMargin < 0) {
        alert('Tỉ lệ lợi nhuận phải là số hợp lệ (>= 0).');
        return;
    }
    
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    // 1. Lưu Tỉ lệ lợi nhuận tùy chỉnh
    product.customMargin = newMargin;
    
    // 2. Cập nhật Giá bán cho sản phẩm này
    const newPrice = calculateSellingPrice(product.cost, newMargin);
    product.price = newPrice;
    
    // 3. Lưu dữ liệu đã thay đổi
    saveProductsToStorage();
    
    alert(`Đã cập nhật % lợi nhuận SP ${product.id} thành ${newMargin}% và giá bán mới là ${newPrice.toLocaleString('vi-VN')} đ.`);
    
    // 4. Đóng Modal và tải lại giao diện
    closeModal('edit-margin-modal');
    renderPriceManagement(); // Cập nhật bảng Admin
    searchProducts(); // Cập nhật giá bán mới sang Client
}


// --- I.7. Quản lý đơn hàng ---
function filterAdminOrders() {
    const startDateStr = document.getElementById('order-start-date').value;
    const endDateStr = document.getElementById('order-end-date').value;
    const statusFilter = document.getElementById('order-status-filter').value;

    let filteredOrders = mockOrders;
    
    // 1. Lọc theo Khoảng Ngày Đặt hàng
    if (startDateStr || endDateStr) {
        const startDate = startDateStr ? new Date(startDateStr) : null;
        // Thêm 1 ngày vào ngày kết thúc để bao gồm cả đơn hàng của ngày đó
        const endDate = endDateStr ? new Date(new Date(endDateStr).setHours(23, 59, 59, 999)) : null;

        filteredOrders = filteredOrders.filter(order => {
            const orderDate = new Date(order.date);
            let matchesStart = true;
            let matchesEnd = true;

            if (startDate) {
                // Chỉ so sánh phần ngày (loại bỏ giờ)
                matchesStart = orderDate >= startDate; 
            }
            if (endDate) {
                // Kiểm tra orderDate nhỏ hơn hoặc bằng cuối ngày kết thúc
                matchesEnd = orderDate <= endDate;
            }
            
            return matchesStart && matchesEnd;
        });
    }

    // 2. Lọc theo Tình trạng Đơn hàng
    if (statusFilter !== 'all') {
        filteredOrders = filteredOrders.filter(order => order.status === statusFilter);
    }

    // Tải lại bảng với danh sách đã lọc
    renderAdminOrders(filteredOrders); 
}

function resetOrderFilters() {
    document.getElementById('order-start-date').value = '';
    document.getElementById('order-end-date').value = '';
    document.getElementById('order-status-filter').value = 'all';
    
    // Tải lại bảng (renderAdminOrders sẽ hiển thị toàn bộ mockOrders mặc định)
    renderAdminOrders(); 
}

function renderAdminOrders(ordersList = mockOrders){
    const tbody = document.getElementById('admin-order-list');
    tbody.innerHTML = '';
    
    // Sắp xếp theo ngày đặt hàng gần nhất
    ordersList.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (ordersList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #e74c3c; font-weight: bold;">Không tìm thấy đơn hàng nào khớp với tiêu chí lọc.</td></tr>';
        return;
    }

    ordersList.forEach(order => {
        let statusText = order.status;
        let statusClass = 'status-new';

        // Ánh xạ trạng thái và màu sắc
        if (statusText === 'new') { statusText = 'Mới'; statusClass = 'status-new'; }
        else if (statusText === 'processing') { statusText = 'Đang xử lý'; statusClass = 'status-warning'; }
        else if (statusText === 'delivered') { statusText = 'Đã giao'; statusClass = 'status-success'; }
        else if (statusText === 'cancelled') { statusText = 'Đã hủy'; statusClass = 'status-danger'; }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.customerName}</td>
            <td>${order.total.toLocaleString('vi-VN')} đ</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-info btn-sm" onclick="viewAdminOrderDetails('${order.id}')">Chi tiết</button>
                <button class="btn btn-primary btn-sm" onclick="promptUpdateOrderStatus('${order.id}')">Cập nhật TT</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewAdminOrderDetails(orderId) {
    const order = mockOrders.find(o => o.id === orderId);
    if (!order) return;

    // 1. Cập nhật thông tin tóm tắt
    const summaryDiv = document.getElementById('order-detail-summary');
    if (!summaryDiv) { // 🎯 KIỂM TRA AN TOÀN
        console.error("Lỗi: Không tìm thấy phần tử 'order-detail-summary' trong DOM.");
        return; 
    }
    summaryDiv.innerHTML = `
        <p><strong>Khách hàng:</strong> ${order.customerName}</p>
        <p><strong>Email:</strong> ${order.customerId ? mockClientAccounts.find(c => c.id === order.customerId)?.email : 'N/A'}</p>
        <p><strong>SĐT:</strong> ${order.phone || 'N/A'}</p>
        <p><strong>Địa chỉ Giao:</strong> ${order.delivery || 'N/A'}</p>
        <p><strong>Thanh toán:</strong> ${order.payment === 'cod' ? 'COD' : (order.payment === 'transfer' ? 'Chuyển khoản' : 'Trực tuyến')}</p>
    `;

    // 2. Cập nhật danh sách sản phẩm
    const productsTbody = document.getElementById('order-products-list');
    if (!productsTbody) {
        console.error("Lỗi: Không tìm thấy phần tử 'order-products-list' trong DOM.");
        alert("Lỗi: Không thể hiển thị danh sách sản phẩm. Vui lòng tải lại trang.");
        return; 
    }
    productsTbody.innerHTML = '';
    
    order.products.forEach(item => {
        const subtotal = item.price * item.qty;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price.toLocaleString('vi-VN')} đ</td>
            <td>${subtotal.toLocaleString('vi-VN')} đ</td>
        `;
        productsTbody.appendChild(row);
    });

    // 3. Cập nhật tổng tiền và ID
    const totalDisplay = document.getElementById('order-total-display');
    const idDisplay = document.getElementById('order-id-display');
    const modalTitle = document.getElementById('order-modal-title');
    
    if (totalDisplay) {
        totalDisplay.textContent = order.total.toLocaleString('vi-VN') + ' đ';
    } else {
        console.error("Lỗi: Không tìm thấy 'order-total-display'");
    }
    
    if (idDisplay) {
        idDisplay.textContent = order.id;
    } else {
        console.error("Lỗi: Không tìm thấy 'order-id-display'");
    }
    
    if (modalTitle) {
        modalTitle.textContent = `Chi tiết Đơn hàng ${order.id}`;
    } else {
        console.error("Lỗi: Không tìm thấy 'order-modal-title'");
    }

    // 4. Mở Modal
    const modal = document.getElementById('admin-order-detail-modal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error("Lỗi: Không tìm thấy modal 'admin-order-detail-modal'");
        alert("Lỗi: Không thể mở modal chi tiết đơn hàng.");
    }
    // 5. LƯU ORDER ID VÀO DATASET để sử dụng cho nút Cập nhật
    if (modal) {
        modal.dataset.currentOrderId = orderId;
    }
}
function promptUpdateOrderStatus(orderId) {
    const order = mockOrders.find(o => o.id === orderId);
    if (!order) return;
    
    const validStatuses = ['new', 'processing', 'delivered', 'cancelled'];
    const newStatus = prompt(`Cập nhật trạng thái ĐH ${orderId}. Trạng thái hiện tại: ${order.status}.\nNhập (${validStatuses.join(', ')}):`);
    
    if (newStatus && validStatuses.includes(newStatus.trim())) {
        order.status = newStatus.trim();
        
        saveOrdersToStorage();
        // Cập nhật giao diện sau khi thay đổi
        renderAdminOrders();
        
        // Đóng Modal chi tiết đơn hàng (nếu đang mở)
        closeModal('admin-order-detail-modal'); 
        
        alert(`Trạng thái ĐH ${orderId} đã được cập nhật thành: ${newStatus.trim()}`);
    } else if (newStatus !== null) {
        alert('Trạng thái không hợp lệ.');
    }
}

// HÀM MỚI: Cập nhật trạng thái từ Modal chi tiết
function updateOrderStatusFromModal() {
    const modal = document.getElementById('admin-order-detail-modal');
    const orderId = modal ? modal.dataset.currentOrderId : null;
    
    if (!orderId) {
        alert('Lỗi: Không xác định được ID đơn hàng!');
        console.error('Không tìm thấy orderId trong modal dataset');
        return;
    }
    
    promptUpdateOrderStatus(orderId);
}

// --- I.8. Quản lý Tồn kho (Cảnh báo & Tra cứu) ---
function renderInventoryStatus() {
    const tbody = document.getElementById('inventory-list');
    tbody.innerHTML = '';
    let lowStockCount = 0;

    const sortedProducts = [...mockProducts].sort((a, b) => {
        const isALow = a.stock <= a.lowStockThreshold;
        const isBLow = b.stock <= b.lowStockThreshold;
        
        // Nếu cả hai đều thiếu, sắp xếp theo số lượng tăng dần
        if (isALow && isBLow) return a.stock - b.stock;
        // Sản phẩm sắp hết hàng (A) lên trước
        if (isALow) return -1;
        // Sản phẩm sắp hết hàng (B) lên trước
        if (isBLow) return 1;
        // Nếu không, sắp xếp theo id
        return a.id.localeCompare(b.id); 
    });

    sortedProducts.forEach(p => {
        if (p.status === 'Ẩn') return;

        const isLow = p.stock <= p.lowStockThreshold;
        if (isLow) lowStockCount++;
        
        let statusText = 'Đủ hàng';
        let statusClass = 'status-success';
        if (isLow && p.stock > 0) {
            statusText = '⚠️ Sắp hết hàng';
            statusClass = 'status-warning';
        } else if (p.stock === 0) {
            statusText = '❌ Hết hàng';
            statusClass = 'status-danger';
        }
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.type}</td>
            <td><span style="font-weight: bold; color: ${isLow || p.stock === 0 ? '#e74c3c' : '#27ae60'};">${p.stock}</span></td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="openImportModalForProduct('${p.id}')">Nhập thêm</button>
                <button class="btn btn-info btn-sm" onclick="viewInventoryHistory('${p.id}')">Tra cứu N-X-T</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Cảnh báo sản phẩm sắp hết hàng
    const alertDiv = document.getElementById('low-stock-alert');
    if (lowStockCount > 0) {
        alertDiv.style.display = 'block';
        alertDiv.innerHTML = `⚠️ <strong>Cảnh báo:</strong> Có ${lowStockCount} sản phẩm sắp hết hàng.`;
    } else {
        alertDiv.style.display = 'none';
    }
}

// Hàm Mở Modal Nhập hàng nhanh
function openImportModalForProduct(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    // 1. Mở Modal Thêm Phiếu nhập mới
    openAddImportModal(); 
    
    // 2. Tự động chọn sản phẩm đó trong Select box
    document.getElementById('import-product-select').value = productId;
    
    // 3. Kích hoạt sự kiện onchange để tải giá vốn hiện tại
    document.getElementById('import-product-select').dispatchEvent(new Event('change'));
    
    // 4. Nhấn mạnh rằng Admin nên nhập số lượng
    document.getElementById('import-qty').focus(); 
    
    alert(`Đã chọn sản phẩm ${product.name}. Vui lòng nhập Số lượng và Giá Vốn.`);
}

function viewInventoryHistory(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;
    
    const productName = product.name;
    let initialStock = product.stock; // Bắt đầu từ tồn kho hiện tại (đã được tính toán)
    
    // --- 1. TỔNG HỢP LỊCH SỬ NHẬP ---
    const importHistory = [];
    mockImports.forEach(imp => {
        const item = imp.details.find(d => d.productId === productId);
        if (item) {
            importHistory.push({
                date: imp.date,
                type: 'Nhập hàng',
                status: imp.status,
                qty: item.qty,
                cost: item.cost,
                orderId: imp.id
            });
        }
    });

    // --- 2. TỔNG HỢP LỊCH SỬ XUẤT (Bán hàng) ---
    const outputHistory = [];
    mockOrders.forEach(order => {
        const item = order.products.find(p => p.id === productId); // Giả định product.id được lưu trong order.products
        
        // Cần kiểm tra nếu order.products có chứa ID sản phẩm. 
        // LƯU Ý: mockOrders hiện tại chỉ lưu tên sản phẩm, không phải ID.
        // Tạm thời, tôi sẽ lọc theo TÊN sản phẩm để mô phỏng.
        const orderItem = order.products.find(p => p.name === productName); 
        
        if (orderItem && order.status === 'delivered') { // Chỉ tính là xuất khi đã giao
             outputHistory.push({
                date: order.date,
                type: 'Xuất (Bán)',
                status: order.status,
                qty: -orderItem.qty, // Số lượng âm (xuất)
                cost: orderItem.price, // Giá bán (không phải giá vốn)
                orderId: order.id
            });
        }
    });
    
    // --- 3. KẾT HỢP VÀ SẮP XẾP LỊCH SỬ THEO THỜI GIAN ---
    let combinedHistory = [...importHistory, ...outputHistory];
    combinedHistory.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sắp xếp giảm dần theo ngày
    
    // --- 4. TẠO HTML VÀ TÍNH TỒN KHO LUỸ KẾ (Đảo ngược) ---
    
    // Để tính tồn kho lũy kế chính xác, chúng ta cần duyệt từ lịch sử cũ nhất (tăng dần theo ngày)
    // Nhưng vì dữ liệu giả lập không đầy đủ, chúng ta sẽ hiển thị tồn kho hiện tại
    
    let historyHtml = `
        <h4 style="margin-top: 15px; color: #2980b9;">Lịch sử Nhập - Xuất</h4>
        <div class="data-table" style="max-height: 400px; overflow-y: auto;">
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>Ngày</th>
                    <th>Loại</th>
                    <th>Mã L/ĐH</th>
                    <th>SL</th>
                    <th>Giá</th>
                    <th>Tình trạng</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    combinedHistory.forEach(item => {
        const qtyColor = item.qty > 0 ? '#27ae60' : '#e74c3c';
        const costLabel = item.type === 'Nhập hàng' ? 'Giá vốn' : 'Giá bán';

        historyHtml += `
            <tr>
                <td>${item.date}</td>
                <td>${item.type}</td>
                <td>${item.orderId}</td>
                <td><span style="font-weight: bold; color: ${qtyColor};">${item.qty}</span></td>
                <td>${item.cost.toLocaleString('vi-VN')} đ (${costLabel})</td>
                <td>${item.status}</td>
            </tr>
        `;
    });
    
    historyHtml += `</tbody></table></div>`;

    // --- 5. HIỂN THỊ MODAL ---
    const modalContent = document.getElementById('inventory-history-content');
    modalContent.innerHTML = `
        <span class="close-btn" onclick="closeModal('inventory-history-modal')">&times;</span>
        <h3 style="color: #E74C3C; margin-bottom: 20px;">Tra cứu NXT: ${productName} (${productId})</h3>
        
        <div class="filter-section" style="box-shadow: none; padding: 10px;">
            <p style="font-size: 1.1em;"><strong>Tồn kho Hiện tại:</strong> <span style="color: #27ae60; font-size: 1.3em;">${product.stock}</span> món</p>
            <p><strong>Giá vốn Hiện tại:</strong> ${product.cost.toLocaleString('vi-VN')} đ</p>
            <p><strong>Ngưỡng cảnh báo:</strong> ${product.lowStockThreshold} món</p>
        </div>
        
        ${historyHtml}

        <div style="text-align: right; margin-top: 20px;">
            <button class="btn btn-secondary" onclick="closeModal('inventory-history-modal')">Đóng</button>
        </div>
    `;

    document.getElementById('inventory-history-modal').style.display = 'flex';
}

// --- II.1. Quản lý Đăng nhập / Đăng ký trong Modal ---

function clientLoginModal() {
    const email = document.getElementById('client-login-email').value;
    const password = document.getElementById('client-login-password').value;

    const account = mockClientAccounts.find(
        acc => acc.email === email && acc.password === password
    );

    if (account) {
        if (account.status !== 'Hoạt động') {
            alert('Tài khoản này đã bị khóa!');
            return;
        }

        // Cập nhật thông tin client hiện tại
        currentClient.id = account.id;
        currentClient.name = account.name;
        currentClient.email = account.email;
        currentClient.address = account.address;
        currentClient.phone = account.phone;
        currentClient.isLoggedIn = true;
        
        saveClientSession(currentClient);
        alert(`Đăng nhập thành công! Chào mừng ${currentClient.name}.`);
        closeAuthModal();
        updateAuthDropdown(); 
        updateProfileView(); 
        setActiveView('home'); 
    } else {
        alert('Sai Email, Mật khẩu hoặc tài khoản không tồn tại.');
    }
}

function clientRegisterModal() {
    const name = document.getElementById('client-register-name').value.trim();
    const email = document.getElementById('client-register-email').value.trim();
    const password = document.getElementById('client-register-password').value.trim();
    const confirmPassword = document.getElementById('client-register-confirm-password').value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (!email.includes('@')) {
        alert('Định dạng Email không hợp lệ. Vui lòng kiểm tra lại Email!');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    if (mockClientAccounts.some(acc => acc.email === email)) {
        alert('Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác.');
        return;
    }

    // Tạo ID mới (giả lập)
    const newId = 'K' + String(mockClientAccounts.length + 1).padStart(3, '0');
    
    const newAccount = {
        id: newId,
        name: name,
        email: email,
        password: password, // Lưu mật khẩu dưới dạng plain text cho mục đích demo
        address: 'Địa chỉ chưa cập nhật',
        phone: 'Chưa cập nhật',
        status: 'Hoạt động'
    };
    
    mockClientAccounts.push(newAccount);
    saveClientAccountsToStorage();

    alert(`Đăng ký thành công! Chào mừng ${newAccount.name}.\nBạn có thể đăng nhập ngay.`);
    
    // Xóa form và chuyển sang Đăng nhập
    document.getElementById('client-register-name').value = '';
    document.getElementById('client-login-email').value = email; 
    document.getElementById('client-register-email').value = ''; 
    document.getElementById('client-register-password').value = '';
    document.getElementById('client-register-confirm-password').value = '';
    
    switchAuthModal('login'); 
    document.getElementById('client-login-password').focus();
    if (document.getElementById('user-management').classList.contains('active')) {
        loadUsers(); 
    }
}

function clientLogout(event) {
    if (event) event.preventDefault();

    currentClient.id = null;
    currentClient.name = 'Khách';
    currentClient.email = null;
    currentClient.address = 'Chưa cập nhật';
    currentClient.isLoggedIn = false;
    
    clearClientSession();
    alert('Đăng xuất thành công!');
    updateAuthDropdown();
    setActiveView('home');
}

function loadClientSession() {
    const storedClient = localStorage.getItem(CURRENT_CLIENT_KEY);
    if (storedClient) {
        // Nếu có dữ liệu, phân tích cú pháp và gán cho currentClient
        const clientData = JSON.parse(storedClient);
        // Đảm bảo dữ liệu được tải lại hoàn toàn, bao gồm cả isLoggedIn
        currentClient = clientData; 
    }
}

// --- II.2. Hiển thị & Tìm kiếm Sản phẩm (Trang chủ) ---
let slideIndex = 1;

// Hàm chính hiển thị slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Xử lý index tràn
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Ẩn tất cả các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active-slide");
    }
    
    // Bỏ active khỏi tất cả các chấm tròn
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Hiển thị slide hiện tại và chấm tròn tương ứng
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
        slides[slideIndex-1].classList.add("active-slide");
    }
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
    }
}

// Hàm chuyển slide (Tiến/Lùi)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Hàm chuyển đến slide cụ thể khi click chấm tròn
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hàm tự động trượt
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Thoát nếu không có slide
    
    // Tăng slideIndex hoặc reset về 1
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    // Reset hiển thị
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active-slide");
    }
    
    // Hiển thị slide mới
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("active-slide");
    
    // Cập nhật chấm tròn (Tùy chọn: cần gọi lại showSlides để cập nhật chấm tròn)
    showSlides(slideIndex);
    
    setTimeout(autoShowSlides, 5000); // Trượt sau mỗi 5 giây
}
// HÀM MỚI: Lọc sản phẩm theo Category (Loại đồ ăn)
function filterByCategory(type, shouldScroll, event) {
    if (event) event.preventDefault();
    document.getElementById('search-name').value = '';
    document.getElementById('search-category').value = type; // Đặt giá trị category hiện tại
    document.getElementById('search-price-min').value = '';
    document.getElementById('search-price-max').value = '';
    const currentViewId = document.querySelector('.client-view.active').id;
    if (currentViewId !== 'home') {
        setActiveView('home'); 
    }
    
    // Đặt lại trang hiện tại về 1
    currentPage = 1;

    // Loại bỏ active khỏi tất cả các category link
    document.querySelectorAll(".category-link").forEach(link => link.classList.remove('active'));

    // Tạo map tra cứu trạng thái Category
    const categoryStatusMap = mockCategories.reduce((map, cat) => {
        map[cat.name] = cat.status;
        return map;
    }, {});

    let filtered = mockProducts.filter(p => {
        // 1. Phải là sản phẩm 'Hiện'
        const isProductVisible = p.status === 'Hiện';
        // 2. Phải thuộc loại sản phẩm 'Hiện'
        const isCategoryVisible = categoryStatusMap[p.categoryType] === 'Hiện';
        
        // 3. Nếu là 'all', chỉ cần sản phẩm và loại sản phẩm đều 'Hiện'
        if (type === 'all') {
            return isProductVisible && isCategoryVisible;
        } 
        
        // 4. Nếu là loại cụ thể, phải khớp loại AND (sản phẩm & loại đều 'Hiện')
        const matchesCategory = p.categoryType === type;
        return matchesCategory && isProductVisible && isCategoryVisible;
    });

    if (type === 'all') {
        document.querySelector('.category-link[data-category="all"]').classList.add('active');
    } else {
        const clickedLink = document.querySelector(`.category-link[data-category="${type}"]`);
        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    }

    renderClientProducts(filtered);
    
    // Cuộn mượt đến phần lưới sản phẩm
    if (shouldScroll) {
        if (type === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // CUỘN ĐẾN LƯỚI SẢN PHẨM (cho các danh mục cụ thể)
            document.querySelector('#product-grid-section').scrollIntoView({behavior: 'smooth'});
        }
    }
}

// HÀM MỚI: Cập nhật hiển thị Phân trang
function updatePaginationDisplay(current, total, totalItems) {
    console.log(`PAGINATION: Trang hiện tại: ${current} / Tổng trang: ${total}`);
    const paginationDiv = document.querySelector('.pagination');
    const prevButton = document.getElementById('client-prev-page'); // SỬA ID
    const nextButton = document.getElementById('client-next-page');
    const pageSpan = document.getElementById('client-page-info');


    if (totalItems === 0 || total <= 1) {
        paginationDiv.style.display = 'none';
        // Vẫn gán giá trị 1/1 để reset UI
        pageSpan.textContent = `Trang 1 / 1`; 
        
        // Quan trọng: Vô hiệu hóa nút để đảm bảo không có lỗi click
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;
        return;
    }

    paginationDiv.style.display = 'flex';
    
    if (pageSpan) pageSpan.textContent = `Trang ${current} / ${total}`;

    // Vô hiệu hóa nút
    prevButton.disabled = current === 1;
    nextButton.disabled = current === total;
}

// HÀM MỚI: Chuyển trang
function changePage(direction) {
    const totalPages = Math.ceil(filteredProductsList.length / productsPerPage);
    let oldPage = currentPage; // Lưu trang cũ để so sánh

    // Logic thay đổi currentPage
    if (direction === 'prev' && currentPage > 1) {
        currentPage = Math.max(1, currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage = Math.min(totalPages, currentPage + 1);
    }

    // Chỉ gọi render khi trang đã thay đổi hoặc là lần gọi đầu tiên
    if (currentPage !== oldPage) {
        // Gọi renderClientProducts() để nó sử dụng currentPage mới
        renderClientProducts(filteredProductsList); 
    }
    
    // Cuộn lên đầu
    document.querySelector('#product-grid-section').scrollIntoView({behavior: 'smooth'});
}

// --- BIẾN PHÂN TRANG ---
let productsPerPage = 8;
let currentPage = 1;
let filteredProductsList = mockProducts;


function renderClientProducts(initialProducts = mockProducts) {
    // Lọc chỉ lấy sản phẩm có status !== 'Ẩn'
    filteredProductsList = initialProducts.filter(p => p.status !== 'Ẩn');
    
    const totalPages = Math.ceil(filteredProductsList.length / productsPerPage);
    
    // Đảm bảo currentPage không vượt quá giới hạn
    if (currentPage > totalPages) {
        currentPage = totalPages > 0 ? totalPages : 1;
    }
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToRender = filteredProductsList.slice(startIndex, endIndex);

    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    if (productsToRender.length === 0 && filteredProductsList.length > 0) {
        // Nếu trang hiện tại rỗng nhưng tổng danh sách có sản phẩm, lùi về trang 1
        currentPage = 1;
        renderClientProducts(initialProducts); // Tải lại trang 1
        return;
    }
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Không tìm thấy sản phẩm nào.</p>';
        // Cập nhật hiển thị phân trang
        updatePaginationDisplay(1, 1, 0); 
        return;
    }

    productsToRender.forEach(p => {
        const margin = p.customMargin !== undefined ? p.customMargin : (profitMargins[p.type] || 0);
        const calculatedPrice = calculateSellingPrice(p.cost, margin);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.addEventListener('click', () => viewProductDetail(p.id));
        card.innerHTML = `
            <img src="${p.image_url}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/250x350/3498db/ffffff?text=${p.name.replace(/ /g, '+')}'">
            <div class="product-card-info">
                <h4>${p.name}</h4>
                <p class="detail-price">${calculatedPrice.toLocaleString('vi-VN')}đ</p>
                <button class="btn btn-warning" onclick="viewProductDetail('${p.id}')">Đặt món</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Cập nhật hiển thị phân trang
    updatePaginationDisplay(currentPage, totalPages, filteredProductsList.length);
}

function viewProductDetail(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const margin = product.customMargin !== undefined ? product.customMargin : (profitMargins[product.type] || 0);
    const calculatedPrice = calculateSellingPrice(product.cost, margin);

    const detailContent = document.getElementById('product-detail-content'); // Đã thay đổi ID: content của modal mới
    
    // Đảm bảo Modal content được làm sạch
    detailContent.innerHTML = '';

    detailContent.innerHTML = `
        <span class="close-btn" onclick="closeProductDetailModal()">&times;</span>
        <div class="modal-content-inner">
            <div class="detail-container">
                <div class="detail-image">
                    <img src="${product.image_url}" alt="${product.name}" style="width: 100%; border-radius: 8px;" onerror="this.onerror=null;this.src='https://placehold.co/250x350/3498db/ffffff?text=${product.name.replace(/ /g, '+')}'">
                </div>
                <div class="detail-info">
                    <h2>${product.name}</h2>
                    <p class="detail-price">${calculatedPrice.toLocaleString('vi-VN')}đ</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
                    <p><strong>Loại sản phẩm:</strong> ${product.type}</p>
                    <p><strong>Tồn kho:</strong> ${product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}</p>
                    
                    <div style="margin-top: 20px;">
                        <label for="qty-${product.id}">Số lượng:</label>
                        <input type="number" id="qty-${product.id}" value="1" min="1" max="${product.stock > 0 ? product.stock : 1}" style="width: 80px; padding: 5px;">
                    </div>

                    <button class="btn btn-primary" onclick="addToCartDetail('${product.id}')" style="margin-right: 10px;">Thêm vào giỏ</button>
                    <button class="btn btn-success" onclick="orderNow('${product.id}')">Đặt hàng ngay</button>
                </div>
            </div>
        </div>
    `;
    
    // HIỂN THỊ MODAL MỚI
    document.getElementById('product-detail-modal').classList.add('active'); 
}

// HÀM MỚI: Thêm vào giỏ hàng từ trang chi tiết
function addToCartDetail(productId) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    const qty = parseInt(qtyInput.value);
    
    if (qty > 0) {
        addToCart(productId, qty);
        // Đóng modal sau khi thêm thành công
        closeProductDetailModal(); 
    } else {
        alert("Số lượng phải lớn hơn 0.");
    }
}

// HÀM MỚI: Đặt hàng ngay (bỏ qua giỏ hàng, chuyển thẳng đến thanh toán)
function orderNow(productId) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    const qty = parseInt(qtyInput.value);
        
    const product = mockProducts.find(p => p.id === productId);
    const margin = product.customMargin !== undefined ? product.customMargin : (profitMargins[product.type] || 0);
    const sellingPrice = calculateSellingPrice(product.cost, margin);

    if (qty <= 0) {
        alert("Số lượng phải lớn hơn 0.");
        return;
    }

    if (qty > product.stock) {
        alert(`Xin lỗi, chúng tôi chỉ còn ${product.stock} món trong kho.`);
        return;
    }

    // Xóa giỏ hàng hiện tại (mô phỏng đặt hàng nhanh)
    cart = [];
    
    // Thêm món này vào giỏ hàng
    cart.push({ 
        id: productId, 
        name: product.name, 
        price: sellingPrice, 
        qty: qty 
    });

    updateCartDisplay();
    closeProductDetailModal(); // Đóng modal chi tiết
    showCartModal(); // Mở giỏ hàng modal
}


function searchProducts() {
    const nameQuery = document.getElementById('search-name').value.toLowerCase();
    const categoryQuery = document.getElementById('search-category').value; // Lấy giá trị Category
    const priceMin = parseInt(document.getElementById('search-price-min').value) || 0; // Giá tối thiểu (hoặc 0 nếu trống)
    const priceMax = parseInt(document.getElementById('search-price-max').value) || Infinity; // Giá tối đa (hoặc Infinity nếu trống)

    const categoryStatusMap = mockCategories.reduce((map, cat) => {
        map[cat.name] = cat.status;
        return map;
    }, {});

    const filteredProducts = mockProducts.filter(p => {
        // 1. 🎯 BẮT BUỘC: Tính giá bán động trước khi lọc!
        const margin = p.customMargin !== undefined ? p.customMargin : (profitMargins[p.type] || 0);
        const sellingPrice = calculateSellingPrice(p.cost, margin);

        // Lọc 2: Theo Tên
        const matchesName = p.name.toLowerCase().includes(nameQuery);
        
        // Lọc 3: Theo Khoảng giá
        const matchesPrice = sellingPrice >= priceMin && sellingPrice <= priceMax;
        
        // 4. Lọc theo TRẠNG THÁI SẢN PHẨM (chỉ lấy 'Hiện')
        const isProductVisible = p.status !== 'Ẩn';

        // 5. Lọc theo TRẠNG THÁI LOẠI SẢN PHẨM (chỉ lấy 'Hiện')
        const categoryName = p.categoryType;
        const isCategoryVisible = categoryStatusMap[categoryName] === 'Hiện';

        // 6. Lọc theo Danh mục (nếu có chọn bộ lọc)
        const matchesCategoryFilter = categoryQuery === 'all' || categoryName === categoryQuery;

        // Sản phẩm phải thỏa mãn: Hiển thị && Danh mục hiển thị && Các bộ lọc tìm kiếm
        return isProductVisible && isCategoryVisible && matchesName && matchesPrice && matchesCategoryFilter;
    });
    
    // RẤT QUAN TRỌNG: Đặt lại trang về 1 sau khi tìm kiếm
    currentPage = 1; 
    renderClientProducts(filteredProducts);
    if (nameQuery !== '' || priceMin > 0 || priceMax !== Infinity) {
        document.querySelectorAll(".category-link").forEach(link => link.classList.remove('active'));
    }
}

// --- II.3. Giỏ hàng & Thanh toán ---
function addToCart(productId, quantity = 1) { // Cập nhật hàm để chấp nhận số lượng
    const product = mockProducts.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    const margin = product.customMargin !== undefined ? product.customMargin : (profitMargins[product.type] || 0);
    const sellingPrice = calculateSellingPrice(product.cost, margin);
    
    if (product.stock <= 0) {
        alert('Món ăn đã hết hàng!');
        return;
    }
    
    const qtyToAdd = quantity;
    
    if (cartItem) {
        const newTotalQty = cartItem.qty + qtyToAdd;
        if (newTotalQty <= product.stock) {
            cartItem.qty = newTotalQty;
        } else {
            cartItem.qty = product.stock;
            alert(`Đã đạt số lượng tối đa có thể mua (${product.stock} món)!`);
            return;
        }
    } else {
        if (qtyToAdd <= product.stock) {
            cart.push({ id: productId, name: product.name, price: sellingPrice, qty: qtyToAdd });
        } else {
            alert(`Số lượng yêu cầu quá lớn. Chỉ còn ${product.stock} món!`);
            return;
        }
    }
    
    updateCartDisplay();
    // Loại bỏ alert để không bị double alert khi gọi từ addToCartDetail
    // alert(`Đã thêm ${qtyToAdd} x ${product.name} vào giỏ hàng!`); 
}

function updateCartDisplay() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = totalQty;
    const cartDetailsTable = document.getElementById('cart-details-table');
    
    const checkoutSection = document.getElementById('checkout-section');
    
    if (cart.length === 0) {
        cartDetailsTable.innerHTML = '<p style="padding: 20px;">Giỏ hàng trống.</p>';
        if (checkoutSection) checkoutSection.style.display = 'none';
        return;
    }

    if (checkoutSection) checkoutSection.style.display = 'block';

    let total = 0;
    let html = '<table><thead><tr><th>Sản phẩm</th><th>Giá</th><th>SL</th><th>Thành tiền</th><th></th></tr></thead><tbody>';
    
    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString('vi-VN')}đ</td>
                <td>
                    <input type="number" value="${item.qty}" min="1" onchange="updateCartQty('${item.id}', this.value)" style="width: 60px;">
                </td>
                <td>${subtotal.toLocaleString('vi-VN')}đ</td>
                <td><button class="btn btn-danger" onclick="removeFromCart('${item.id}')">Xóa</button></td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    html += `<h4 style="padding: 15px 0; border-top: 2px dashed #ddd; text-align: right; font-size: 1.3em;">Tổng cộng: <span style="color: #E74C3C; font-weight: 700; margin-left: 10px;">${total.toLocaleString('vi-VN')}đ</span></h4>`;
    
    cartDetailsTable.innerHTML = html;
}

function updateCartQty(productId, newQty) {
    const qty = parseInt(newQty);
    const item = cart.find(i => i.id === productId);
    const product = mockProducts.find(p => p.id === productId);
    
    if (item && qty > 0) {
        if (qty > product.stock) {
            alert(`Chỉ còn ${product.stock} món trong kho!`);
            item.qty = product.stock;
        } else {
            item.qty = qty;
        }
        updateCartDisplay();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function goToCheckout() {
    if (!currentClient.isLoggedIn) {
        alert("Bạn phải đăng nhập để tiến hành thanh toán!");
        closeCartModal();
        showAuthModal('login');
        return;
    }
    
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    
    closeCartModal();      // 1. Đóng Giỏ hàng Modal
    renderCheckoutView();  // 2. Tải dữ liệu vào View Thanh toán
    setActiveView('checkout'); // 3. Chuyển sang View Thanh toán
}

function backToHomeFromCheckout() {
    // 1. Chuyển view về Trang chủ
    setActiveView('home'); 
    
    // 2. Tắt chế độ checkout-mode trên body (setActiveView đã làm điều này, nhưng gọi lại để chắc chắn)
    document.body.classList.remove('checkout-mode'); 

    // Tùy chọn: Đặt lại danh mục sidebar về 'Trang chủ'
    filterByCategory('all', false); 
}

function backToHomeFromProfile() {
    setActiveView('home'); 
}

function renderCheckoutView() {
    document.getElementById('checkout-phone').value = currentClient.phone || '098xxxxxxx'; 
    
    const defaultAddress = currentClient.address || 'Địa chỉ tài khoản chưa được thiết lập. Vui lòng cập nhật Profile.';
    document.getElementById('checkout-address').value = defaultAddress;
    document.getElementById('default-address-text').textContent = defaultAddress;
    
    document.getElementById('delivery-address-type').value = 'account-default';
    document.getElementById('account-address-display').style.display = 'block';
    
    const tbody = document.getElementById('checkout-order-details');
    tbody.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price.toLocaleString('vi-VN')}đ</td>
            <td>${subtotal.toLocaleString('vi-VN')}đ</td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('checkout-total-items').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('checkout-total-amount').textContent = total.toLocaleString('vi-VN') + ' đ';
}

function placeOrder() {
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const paymentMethod = document.getElementById('checkout-payment-method').value;
    const addressType = document.getElementById('delivery-address-type').value;

    if (addressType === 'new-address' && address === '') {
        alert("Bạn đã chọn nhập địa chỉ mới, vui lòng điền địa chỉ giao hàng chi tiết!");
        return;
    }

    if (!name || !phone || !address) {
        alert("Vui lòng điền đầy đủ thông tin người nhận!");
        return;
    }

    const totalOrder = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const newOrderId = 'DH' + new Date().getFullYear() + String(mockOrders.length + 1).padStart(3, '0');
    
    const newOrder = {
        id: newOrderId,
        customerId: currentClient.id, 
        customerName: name,
        date: new Date().toISOString().slice(0, 10),
        total: totalOrder,
        status: 'new',
        products: cart.map(item => ({ id: item.id, name: item.name, qty: item.qty, price: item.price })),
        delivery: address,
        phone: phone,
        payment: paymentMethod,
    };

    newOrder.products.forEach(item => {
        const product = mockProducts.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.qty; 
            if (product.stock < 0) {
                product.stock = 0;
            }
        }
    });

    mockOrders.push(newOrder); 
    saveOrdersToStorage();
    saveProductsToStorage();
    alert(`Đơn hàng ${newOrderId} đã được đặt thành công!\nTổng tiền: ${totalOrder.toLocaleString('vi-VN')}đ.\nBạn sẽ được giao hàng tới: ${address}.`);
    
    cart = [];
    updateCartDisplay();
    renderOrderHistory(); 
    setActiveView('profile');
    if (document.getElementById('inventory-management').classList.contains('active')) {
        renderInventoryStatus();
    }
}

function toggleNewAddressInput(value) {
    const addressInput = document.getElementById('checkout-address');
    const nameInput = document.getElementById('checkout-name');
    const phoneInput = document.getElementById('checkout-phone');
    const addressDisplay = document.getElementById('account-address-display');
    
    // Nếu chọn địa chỉ mới
    if (value === 'new-address') {
        addressInput.value = ''; // Xóa địa chỉ cũ
        addressInput.placeholder = 'Vui lòng nhập địa chỉ giao hàng chi tiết, Tỉnh/Thành phố...';
        addressDisplay.style.display = 'none';
        
        // Bắt buộc người dùng nhập lại thông tin nhận hàng cho địa chỉ mới (tùy chọn)
        nameInput.value = '';
        phoneInput.value = '';

    } else {
        // Sử dụng địa chỉ từ tài khoản
        addressInput.value = currentClient.address || 'Địa chỉ tài khoản chưa được thiết lập.';
        addressInput.placeholder = 'Địa chỉ từ Tài khoản';
        addressDisplay.style.display = 'block';
        
        // Điền lại thông tin tên/SĐT mặc định từ tài khoản
        nameInput.value = currentClient.name || '';
        phoneInput.value = currentClient.phone || ''; // Cần có trường phone trong currentClient nếu muốn dùng
    }
}

// --- II.4. Xem lại đơn hàng đã mua ---
function updateProfileView() {
    if (currentClient.isLoggedIn) {
        document.getElementById('current-username').textContent = currentClient.name;
        document.getElementById('profile-email').textContent = currentClient.email;
        
        // Lấy địa chỉ hiện tại hoặc thông báo chưa có
        const addressText = currentClient.address || 'Chưa có địa chỉ. Vui lòng cập nhật.';
        
        // 1. Cập nhật trường hiển thị
        document.getElementById('profile-address').textContent = addressText;
        
        // 2. Cập nhật trường input chỉnh sửa
        document.getElementById('edit-address-input').value = currentClient.address || ''; 

        // Đảm bảo đang ở chế độ xem khi cập nhật
        toggleEditAddress(false); 
        
        renderOrderHistory();
    }
}

function toggleEditAddress(isEditing = true) {
    const view = document.getElementById('address-view');
    const form = document.getElementById('address-edit-form');
    
    if (isEditing) {
        // Chuyển sang chế độ chỉnh sửa
        view.style.display = 'none';
        form.style.display = 'block';
    } else {
        // Hủy bỏ / Quay lại chế độ xem
        form.style.display = 'none';
        view.style.display = 'block';
        // Reset lại giá trị input nếu người dùng nhấn Hủy
        document.getElementById('edit-address-input').value = currentClient.address || ''; 
    }
}

// TRONG file script.js (Thêm vào sau toggleEditAddress)

function updateAddress() {
    const newAddress = document.getElementById('edit-address-input').value.trim();

    if (newAddress === '' || newAddress.length < 10) {
        alert("Địa chỉ không hợp lệ. Vui lòng nhập địa chỉ chi tiết (ít nhất 10 ký tự).");
        return;
    }

    // 1. Cập nhật trong currentClient
    currentClient.address = newAddress;

    // 2. Cập nhật trong mockClientAccounts (dữ liệu gốc)
    const clientIndex = mockClientAccounts.findIndex(c => c.id === currentClient.id);
    if (clientIndex !== -1) {
        mockClientAccounts[clientIndex].address = newAddress;
        mockClientAccounts[clientIndex].phone = currentClient.phone;
    }

    saveClientAccountsToStorage();

    // 3. Cập nhật UI và thông báo
    updateProfileView();
    alert("Địa chỉ mặc định đã được cập nhật thành công!");
    
    // 4. Quay lại chế độ xem
    toggleEditAddress(false); 
}

function renderOrderHistory() {
    const tbody = document.getElementById('client-order-history');
    tbody.innerHTML = '';
    
    const clientOrders = mockOrders.filter(o => o.customerId === currentClient.id); 

    if (clientOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Bạn chưa có đơn hàng nào.</td></tr>';
        return;
    }

    // Sắp xếp theo ngày đặt hàng gần nhất
    clientOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    clientOrders.forEach(order => {
        let statusText = order.status;
        let statusClass = 'status-new';

        // Ánh xạ trạng thái và màu sắc (Client view)
        if (statusText === 'new') { statusText = 'Mới đặt'; statusClass = 'status-new'; }
        else if (statusText === 'processing') { statusText = 'Đang xử lý'; statusClass = 'status-warning'; }
        else if (statusText === 'delivered') { statusText = 'Đã giao'; statusClass = 'status-success'; }
        else if (statusText === 'cancelled') { statusText = 'Đã hủy'; statusClass = 'status-danger'; }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.total.toLocaleString('vi-VN')}đ</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="viewClientOrderDetails('${order.id}')">Chi tiết</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function viewClientOrderDetails(orderId) {
    const order = mockOrders.find(o => o.id === orderId);
    if (!order) return;
    
    // Đảm bảo chỉ xem đơn hàng của mình
    if (order.customerId !== currentClient.id) {
        alert("Lỗi bảo mật: Không được phép xem đơn hàng này.");
        return;
    }

    let statusText = order.status;
    if (statusText === 'new') statusText = 'Mới đặt';
    else if (statusText === 'processing') statusText = 'Đang xử lý';
    else if (statusText === 'delivered') statusText = 'Đã giao';
    else if (statusText === 'cancelled') statusText = 'Đã hủy';

    let detailsHtml = `
        <span class="close-btn" onclick="closeProductDetailModal()">&times;</span>
        <h4 style="color: #E74C3C; margin-bottom: 20px;">Chi tiết Đơn hàng ${order.id}</h4>
        
        <div style="padding: 10px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px;">
            <p><strong>Ngày đặt:</strong> ${order.date}</p>
            <p><strong>Tình trạng:</strong> <span style="font-weight: bold; color: ${order.status === 'delivered' ? '#27ae60' : (order.status === 'cancelled' ? '#e74c3c' : '#f39c12')};">${statusText}</span></p>
            <p><strong>Địa chỉ Giao:</strong> ${order.delivery || 'Chưa rõ'}</p>
            <p><strong>Phương thức TT:</strong> ${order.payment || 'N/A'}</p>
        </div>
        
        <div class="data-table">
            <table>
                <thead><tr><th>Sản phẩm</th><th>SL</th><th>Giá</th><th>Thành tiền</th></tr></thead>
                <tbody>
    `;

    order.products.forEach(item => {
        const subtotal = item.price * item.qty;
        detailsHtml += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price.toLocaleString('vi-VN')} đ</td>
                <td>${subtotal.toLocaleString('vi-VN')} đ</td>
            </tr>
        `;
    });

    detailsHtml += `
                </tbody>
            </table>
        </div>
        <h4 style="text-align: right; margin-top: 20px;">Tổng tiền: <span style="color: #E74C3C; font-weight: 700;">${order.total.toLocaleString('vi-VN')} đ</span></h4>
    `;
    
    // Sử dụng Modal Chi tiết Sản phẩm chung (#product-detail-modal)
    document.getElementById('product-detail-content').innerHTML = detailsHtml;
    document.getElementById('product-detail-modal').classList.add('active'); 
}

function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.classList.remove('fa-eye'); // Ẩn
        iconElement.classList.add('fa-eye-slash'); // Hiện
    } else {
        input.type = 'password';
        iconElement.classList.remove('fa-eye-slash'); // Hiện
        iconElement.classList.add('fa-eye'); // Ẩn
    }
}
