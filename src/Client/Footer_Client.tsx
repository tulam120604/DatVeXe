import ListTripFooter from "./ListComponent/ListTripFooter"

const Footer_Client = () => {
    return (<>
        <div className="Footer_Client h-[1236px] relative border mt-5 text-center text-neutral-400 text-sm flex items-center justify-center tracking-wide">
            <div className="w-full flex justify-center list-trip-parent bg-[#f2f2f2] h-[1044px] top-0 absolute font-semibold">
                <section className="list-trip w-[980px] h-[100%] absolute grid py-4">
                    <div className="rows v1 grid mt-4">
                        <div className="colum v2 w-[100%] grid text-xs">
                            <ListTripFooter listData={{
                                name: 'Tuyến đường',
                                link1: 'Xe đi Buôn Mê Thuột từ Sài Gòn',
                                link2: 'Xe đi Vũng Tàu từ Sài Gòn',
                                link3: 'Xe đi Nha Trang từ Sài Gòn',
                                link4: 'Xe đi Đà Lạt từ Sài Gòn',
                                link5: 'Xe đi Sâp từ Hà Nội',
                                link6: 'Xe đi Hải Phòng từ Hà Nội',
                                link7: 'Xe đi Vinh từ Hà Nội',
                            }} />
                            <ListTripFooter listData={{
                                name: 'Xe Limousine',
                                link1: 'Xe Limousine đi Đà Lạt từ Sài Gòn',
                                link2: 'Xe Limousine đi Vũng Tàu từ Sài Gòn',
                                link3: 'Xe Limousine đi Nha Trang từ Sài Gòn',
                                link4: 'Xe Limousine đi Hải Phòng từ Hà Nội',
                                link5: 'Xe Limousine đi Hạ Long từ Hà Nội',
                                link6: 'Xe Limousine đi Sapa Từ Hà Nội',
                                link7: 'Xe Limousine đi Quảng Ninh từ Hà Nội',
                            }} />
                        </div>
                        <ListTripFooter listData={{
                            name: 'Tin tức',
                            link1: 'Xe giường nằm Limousine - đỉnh cao mới của ngành xe khách',
                            link2: 'Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao ',
                            link3: 'Review xe limousine đi Đà Lạt: những câu hỏi thường gặp',
                            link4: 'Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao',
                            link5: '',
                            link6: '',
                            link7: '',
                        }} />
                    </div>
                    {/* --- */}
                    <div className="rows s2 mt-1 grid">
                        <ListTripFooter listData={{
                            name: 'Bến xe',
                            link1: 'Bến xe Miền Đông',
                            link2: 'Bến xe Trung tâm Đà Nẵng  ',
                            link3: 'Bến xe Gia Lâm ',
                            link4: 'Bến xe Mỹ Đình ',
                            link5: 'Bến xe An Sương',
                            link6: 'Bến xe Nước Ngầm',
                            link7: 'Bến xe Miền Tây',
                        }} />

                        <section className="flex text-sm">
                            <ListTripFooter listData={{
                                name: 'Tuyến đường',
                                link1: 'Xe Liên Hưng',
                                link2: 'Xe Long Vân Limosine ',
                                link3: 'Xe Vie Limosine ',
                                link4: 'Xe Cúc Tùng ',
                                link5: 'Xe An Phú Buslines',
                                link6: 'Xe Bằng Phấn',
                                link7: 'Xe Hà Lan',
                                link8: 'Xe 36 Limosine',
                            }} />
                            <ListTripFooter listData={{
                                name: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                                link1: 'Xe Thuận Tiến',
                                link2: 'Xe Thanh Phong',
                                link3: 'Xe Tiến oanh',
                                link4: 'Xe Hạnh Cafe ',
                                link5: 'Xe Tân Kim Chi ',
                                link6: 'Xe Quang Nghị',
                                link7: 'Xe Nam Cường Limosine',
                                link8: 'Xe Phúc Xuyên',
                            }} />
                            <ListTripFooter listData={{
                                name: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                                link1: ' Xe Điền Linh',
                                link2: ' Xe Tuấn Hưng',
                                link3: 'Xe Phong Phú',
                                link4: ' Xe Trà Lan Viên',
                                link5: ' Xe Nam Quỳnh Anh ',
                                link6: 'Xe G8 Open Tour ',
                                link7: 'Xe Hải Âu ',
                                link8: ' Xe Tràng An Limosine',
                            }} />
                            <ListTripFooter listData={{
                                name: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                                link1: ' Xe Đồng Phước',
                                link2: ' Xe Hảo',
                                link3: 'Xa Hoa Mai',
                                link4: 'Xe An Phú Quý ',
                                link5: ' Xe Xuân Tráng Limosine',
                                link6: ' Xe Sao Việt',
                                link7: ' Xe Xe Sao Nghệ Limosine',
                                link8: ' Xe Minh Quốc',
                            }} />
                        </section>
                    </div>
                    {/*  */}
                    <div className="rows s2 grid rowsvs2 w-full">
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
                        <section className="flex vs2">
                            <div className="colum-child  text-black  flex flex-col text-left">
                                <span className="text-xl whitespace-nowrap">Về chúng tôi</span>
                                <div className="list_route flex flex-col underline justify-between h-full mt-4">
                                    <a href="">Phần mềm đại lý</a>
                                    <a href="">Giới thiệu Vexere.com</a>
                                    <a href="">Tuyển dụng</a>
                                    <a href="">Tin tức</a>
                                    <a href="">Liên hệ</a>
                                </div>
                                <span className="text-xl mt-5">Chứng nhận</span>
                            </div>
                            <div className="flex">
                                <div className="colum-child whitespace-nowrap text-black  flex flex-col text-left">
                                    <span className="text-xl">Đối tác thanh toán</span>
                                </div>
                                <div className="colum-child downapp text-black flex flex-col text-left">
                                    <span className="text-xl">Tải ứng dụng Vexere</span>
                                    <img className="mt-4" src="../src/assets/Images/qr.png" alt="" />
                                </div>
                            </div>
                        </section>

                    </div>
                </section>
            </div>
            {/* ---- */}
            <section className="box2 absolute bottom-0 flex flex-col justify-center">
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