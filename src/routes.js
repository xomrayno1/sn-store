var routes = [
    {
        name: "Trang chủ",
        path: "/",
        role: ["user"]
    },{
        name: "Liên hệ",
        path: "/contact",
        role: ["user"]
    },{
        name: "Trang quản lý",
        path: "/manage",
        role: ["user"]
    },{
        name: "Trang chủ",
        path: "/manage",
        role: ["admin"]
    },{
        name: "Quản lý danh mục",
        path: "/manage/category",
        role: ["admin"]
    },{
        name: "Quản lý sản phẩm",
        path: "/manage/product",
        role: ["admin"]
    }
]
export default routes;