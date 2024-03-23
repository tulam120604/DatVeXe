const Footer_Client = () => {
    return (<>
        <div className="Footer_Client relative border mt-5 text-center text-neutral-400 text-sm flex items-center justify-center tracking-wide">
            <div className="w-full flex justify-center list-trip-parent absolute font-semibold">
                <section className="list-trip w-full absolute grid py-4">
                    <div className="rows v1 grid mt-4">
                        <div className="colum v2 grid">
                            <div className="colum-child text-black  flex flex-col text-left">
                                <span className="text-lg">Tuyến đường</span>
                                <div className="list_route flex flex-col underline justify-between h-full mt-4 text-xs">
                                    <a href="">Xe đi Buôn Mê Thuột từ Sài Gòn</a>
                                    <a href="">Xe đi Vũng Tàu từ Sài Gòn</a>
                                    <a href="">Xe đi Nha Trang từ Sài Gòn</a>
                                    <a href="">Xe đi Đà Lạt từ Sài Gòn</a>
                                    <a href="">Xe đi Sâp từ Hà Nội</a>
                                    <a href="">Xe đi Hải Phòng từ Hà Nội</a>
                                    <a className="text-sm" href="">Xe đi Vinh từ Hà Nội</a>
                                </div>
                            </div>
                            <div className="colum-child text-black  flex flex-col text-left">
                                <span className="text-lg">Xe Limousine</span>
                                <div className="list_route flex flex-col underline justify-between h-full mt-4 text-xs">
                                    <a href="">Xe Limousine đi Đà Lạt từ Sài Gòn</a>
                                    <a href="">Xe Limousine đi Vũng Tàu từ Sài Gòn</a>
                                    <a href="">Xe Limousine đi Nha Trang từ Sài Gòn </a>
                                    <a href="">Xe Limousine đi Hải Phòng từ Hà Nội </a>
                                    <a href="">Xe Limousine đi Hạ Long từ Hà Nội</a>
                                    <a href="">Xe Limousine đi Sapa Từ Hà Nội </a>
                                    <a className="text-sm" href="">Xe Limousine đi Quảng Ninh từ Hà Nội</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-black  flex flex-col text-left">
                            <span className="text-xl">Tin tức</span>
                            <div className="list_route flex flex-col underline w-3/4 justify-between h-full mt-4 text-xs pr-0">
                                <a href="">Xe giường nằm Limousine - đỉnh cao mới của
                                    ngành xe khách  </a>
                                <a href="">Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe
                                    chất lượng cao  </a>
                                <a href="">Review xe limousine đi Đà Lạt: những câu hỏi
                                    thường gặp  </a>
                                <a className="text-sm" href=""> Xe limousine đi Sapa: Tổng hợp top các hãng xe
                                    chất lượng cao </a>
                            </div>
                        </div>
                    </div>
                    {/* --- */}
                    <div className="rows s2 mt-1 grid">
                        <div className="colum-child text-black  flex flex-col text-left">
                            <span className="text-xl whitespace-nowrap pb-0.5">Bến xe</span>
                            <div className="list_route flex flex-col underline justify-between h-full mt-2.5 text-xs">
                                <a href="">Bến xe Miền Đông </a>
                                <a href="">Bến xe Trung tâm Đà Nẵng </a>
                                <a href="">Bến xe Gia Lâm </a>
                                <a href="">Bến xe Mỹ Đình </a>
                                <a href="">Bến xe An Sương </a>
                                <a href="">Bến xe Nước Ngầm </a>
                                <a className="text-sm" href="">Bến xe Miền Tây </a>
                            </div>
                        </div>
                        <section className="flex">
                            <div className="colum-child text-black  flex flex-col text-left pr-2">
                                <span className="text-xl whitespace-nowrap">Tuyến đường</span>
                                <div className="list_route flex flex-col underline justify-between mt-2 mr-4 text-sm">
                                    <a className="mt-2.5 py-0.5" href="">Xe Liên Hưng</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Long Vân Limosine</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Vie Limosine</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Cúc Tùng</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe An Phú Buslines</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Bằng Phấn</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Hà Lan</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe 36 Limosine</a>
                                </div>
                            </div>
                            <div className="colum-child  text-black  flex flex-col text-left pr-2">
                                <span className="text-xl">&#160;</span>
                                <div className="list_route flex flex-col underline justify-between mt-2 mr-4 text-sm">
                                    <a className="mt-2.5 py-0.5" href="">Xe Thuận Tiến</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Thanh Phong</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Tiến oanh</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Hạnh Cafe</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Tân Kim Chi</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Quang Nghị</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Nam Cường Limosine</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Phúc Xuyên</a>
                                </div>
                            </div>
                            <div className="colum-child  text-black  flex flex-col text-left pr-2">
                                <span className="text-xl">&#160;</span>
                                <div className="list_route flex flex-col underline justify-between mt-2 mr-4 text-sm">
                                    <a className="mt-2.5 py-0.5" href="">Xe Điền Linh</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Tuấn Hưng</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Phong Phú</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Trà Lan Viên</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Nam Quỳnh Anh</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe G8 Open Tour</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Hải Âu</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Tràng An Limosine</a>
                                </div>
                            </div>
                            <div className="colum-child  text-black  flex flex-col text-left pr-2">
                                <span className="text-xl">&#160;</span>
                                <div className="list_route flex flex-col underline justify-between mt-2 text-sm">
                                    <a className="mt-2.5 py-0.5" href="">Xe Đồng Phước</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Hảo</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Hoa Mai</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Minh Quốc</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe An Phú Quý</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Xuân Thắng Limosine</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Sao Việt</a>
                                    <a className="mt-2.5 py-0.5" href="">Xe Sao Nghệ Limosine</a>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/*  */}
                    <div className="rows s2 mt-5 grid">
                        <div className="colum-child text-black  flex flex-col text-left text-sm">
                            <span className="text-xl">Hỗ trợ</span>
                            <div className="list_route flex flex-col underline justify-between h-full mt-4 pr-6">
                                <a href="">Hướng dẫn thanh toán</a>
                                <a href="">Quy chế Vexere.com</a>
                                <a href="">Chính sách bảo mật thông tin</a>
                                <a href="">Chính sách bảo mật thanh toán</a>
                                <a href="">Chính sách và quy trình giải quyết tranh chấp, khiếu nại</a>
                                <a href="">Câu hỏi thường gặp</a>
                                <a href="">Tra cứu đơn hàng</a>
                            </div>
                        </div>
                        <section className="flex">
                            <div className="colum-child  text-black  flex flex-col text-left">
                                <span className="text-xl">Về chúng tôi</span>
                                <div className="list_route flex flex-col underline justify-between h-full mt-4">
                                    <a href="">Phần mềm đại lý</a>
                                    <a href="">Giới thiệu Vexere.com</a>
                                    <a href="">Tuyển dụng</a>
                                    <a href="">Tin tức</a>
                                    <a href="">Liên hệ</a>
                                </div>
                                <span className="text-xl mt-5">Chứng nhận</span>
                            </div>
                            <div className="colum-child whitespace-nowrap text-black  flex flex-col text-left mx-5">
                                <span className="text-xl">Đối tác thanh toán</span>
                            </div>
                            <div className="colum-child  text-black  flex flex-col text-left">
                                <span className="text-xl">Tải ứng dụng Vexere</span>
                                <img className="mt-4" src="../src/assets/Images/qr.png" alt="" />
                            </div>
                        </section>

                    </div>
                </section>
            </div>

            {/* ---- */}
            <section className="box2 absolute flex flex-col justify-center">
                <span className="text-2xl text-black">Công ty TNHH Thương Mại Dịch Vụ Vexere</span>
                <p style={{ fontSize: '8px' }}>Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam</p>
                <p>Địa chỉ : <a href="">Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam</a></p>
                <a className="w-auto" href="">Tầng 3, toà nhà 101 Láng Hạ, Đường 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội, Việt Nam</a>
                <a href="">Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu ngày 27/6/2018</a>
                <p>Bản quyền © 2020 thuộc về Vexere.Com</p>
            </section>
        </div>
    </>)
}

export default Footer_Client