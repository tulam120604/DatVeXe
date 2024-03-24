import TripDeital1 from "./ListTripDeital/TripDeital1"
import SideBar from "./SideBar"

const DeitalPage = () => {
    return (<>
        <div className="Deital_Page flex justify-center">
            <section className="main_deital_page mt-4 w-full flex justify-between relative">
                <SideBar />
                <section className="list-deital desktop w-full rounded-xl overflow-hidden">
                    <TripDeital1
                        data={{
                            name: "Hải Phòng Travel (Đất Cảng)",
                            price: 230000, image: '../../src/assets/Images/sp1.png', icon:
                                '../../src/assets/Images/SVG.png', timeStart: '19:00', time: '1h30m', timeEnd: '20:30', start: 'Hà Nội', end: 'Hải Phòng',
                            chair: 'Còn 11 chỗ trống', trip: 'Chọn chuyến'
                        }} />
                    {/* -- */}
                    <TripDeital1 data={{
                        name: "Hải Phòng Travel (Đất Cảng)",
                        price: 230000, image: '../../src/assets/Images/sp1.png', icon:
                            '../../src/assets/Images/SVG.png', timeStart: '19:00', time: '1h30m', timeEnd: '20:30', start: 'Hà Nội', end: 'Hải Phòng',
                        chair: 'Còn 11 chỗ trống', trip: 'Chọn chuyến'
                    }} />
                    {/* -- */}
                    <TripDeital1 data={{
                        name: "Hải Phòng Travel (Đất Cảng)",
                        price: 230000, image: '../../src/assets/Images/sp2.png', icon:
                            '../../src/assets/Images/SVG.png', timeStart: '19:00', time: '1h30m', timeEnd: '20:30', start: 'Hà Nội', end: 'Hải Phòng',
                        chair: 'Còn 11 chỗ trống', trip: 'Chọn chuyến'
                    }} />
                </section>

                {/* mobile */}
                <section className="list-deital mobile w-full rounded-xl overflow-hidden">
                    <div className="mobile bg-white rounded overflow-hidden mb-4">
                        <img className="w-full h-40" src="../../src/assets/Images/sp1.png" alt="" />
                        <div className="mt-2">
                            <div>
                                <span className="font-semibold">Hải Phòng Travel (Đất Cảng)</span>
                                <p className="text-blue-500 text-xl">Từ 230.000đ</p>
                            </div>

                            <div className="flex flex-col items-center gap-8 text-xs">
                                <div className="name-route w-full flex justify-between">
                                    <div className="start flex items-end">
                                        <img className="h-fit" src="../../src/assets/Images/SVG.png" alt="" />
                                        <section className="flex flex-col justify-between ml-2">
                                            <div className="time-start flex items-center"><span className="font-semibold text-xl">19:00</span> <p className="text-sm font-normal ml-2.5">• Hà Nội</p></div>
                                            <p className="text-sm py-1 text-slate-400">1h30m</p>
                                            <div className="time-start flex items-center text-gray-500"><span className="font-semibold text-xl">20:30</span> <p className="text-sm font-normal ml-2.5">• Hải Phòng</p></div>
                                        </section>
                                    </div>
                                    <div className="end flex flex-col justify-end">
                                        <span className="text-base text-slate-500">Còn 11 chỗ trống</span>
                                        <button className="h-9 rounded bg-amber-400 text-sm mt-2">Chọn chuyến</button>
                                    </div>
                                </div>
                                <div className="name-route w-full h-7 text-end text-sm uppercase font-semibold">
                                    Không cần thanh toán trước
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -- */}
                    <div className="mobile bg-white rounded overflow-hidden mb-4">
                        <img className="w-full h-40" src="../../src/assets/Images/sp1.png" alt="" />
                        <div className="mt-2">
                            <div>
                                <span className="font-semibold">Hải Phòng Travel (Đất Cảng)</span>
                                <p className="text-blue-500 text-xl">Từ 230.000đ</p>
                            </div>

                            <div className="flex flex-col items-center gap-8 text-xs">
                                <div className="name-route w-full flex justify-between">
                                    <div className="start flex items-end">
                                        <img className="h-fit" src="../../src/assets/Images/SVG.png" alt="" />
                                        <section className="flex flex-col justify-between ml-2">
                                            <div className="time-start flex items-center"><span className="font-semibold text-xl">19:00</span> <p className="text-sm font-normal ml-2.5">• Hà Nội</p></div>
                                            <p className="text-sm py-1 text-slate-400">1h30m</p>
                                            <div className="time-start flex items-center text-gray-500"><span className="font-semibold text-xl">20:30</span> <p className="text-sm font-normal ml-2.5">• Hải Phòng</p></div>
                                        </section>
                                    </div>
                                    <div className="end flex flex-col justify-end">
                                        <span className="text-base text-slate-500">Còn 11 chỗ trống</span>
                                        <button className="h-9 rounded bg-amber-400 text-sm mt-2">Chọn chuyến</button>
                                    </div>
                                </div>
                                <div className="name-route w-full h-7 text-end text-sm uppercase font-semibold">
                                    Không cần thanh toán trước
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---- */}
                    <div className="mobile bg-white rounded overflow-hidden mb-4">
                        <img className="w-full h-40" src="../../src/assets/Images/sp1.png" alt="" />
                        <div className="mt-2">
                            <div>
                                <span className="font-semibold">Hải Phòng Travel (Đất Cảng)</span>
                                <p className="text-blue-500 text-xl">Từ 230.000đ</p>
                            </div>

                            <div className="flex flex-col items-center gap-8 text-xs">
                                <div className="name-route w-full flex justify-between">
                                    <div className="start flex items-end">
                                        <img className="h-fit" src="../../src/assets/Images/SVG.png" alt="" />
                                        <section className="flex flex-col justify-between ml-2">
                                            <div className="time-start flex items-center"><span className="font-semibold text-xl">19:00</span> <p className="text-sm font-normal ml-2.5">• Hà Nội</p></div>
                                            <p className="text-sm py-1 text-slate-400">1h30m</p>
                                            <div className="time-start flex items-center text-gray-500"><span className="font-semibold text-xl">20:30</span> <p className="text-sm font-normal ml-2.5">• Hải Phòng</p></div>
                                        </section>
                                    </div>
                                    <div className="end flex flex-col justify-end">
                                        <span className="text-base text-slate-500">Còn 11 chỗ trống</span>
                                        <button className="h-9 rounded bg-amber-400 text-sm mt-2">Chọn chuyến</button>
                                    </div>
                                </div>
                                <div className="name-route w-full h-7 text-end text-sm uppercase font-semibold">
                                    Không cần thanh toán trước
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


        </div>
    </>)
}

export default DeitalPage