import { NavLink } from "react-router-dom"

const Baner_Wrapper = () => {
    return (<>
        <div className="Baner_Wrapper w-full h-52 text-center flex flex-col justify-between">
            <span className="text-2xl text-white">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</span>
            <div className="widget_baner w-full bg-white rounded-lg flex flex-col justify-around overflow-hidden items-center">
                <div className="row1_widget flex justify-center">
                    <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                        <img className="mr-2.5" src="../../src/assets/Images/bus.png" alt="" />
                        Xe khach
                        <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1"></div>
                    </NavLink>
                    <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                        <img className="mr-2.5" src="../../src/assets/Images/plane.png" alt="" />
                        May bay
                        <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">-20k</div>
                    </NavLink>
                    <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                        <img className="mr-2.5" src="../../src/assets/Images/train.png" alt="" />
                        Tau hoa
                        <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">new</div>
                    </NavLink>
                    <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                        <img className="mr-2.5" src="../../src/assets/Images/car.png" alt="" />
                        Thue xe
                        <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">new</div>
                    </NavLink>
                </div>

                <div className="row2_widget rounded-lg flex justify-between items-center overflow-hidden">
                    <div className="section-widget-baner w-5/6 flex border rounded-lg">
                        <button className="w-1/4 h-full border-r flex items-center cursor-pointer hover:bg-slate-100 hover:text-blue-500 duration-300">
                            <div className="icon1 ml-4">
                                <img className="mr-2" src="../../src/assets/Images/pickup.png" alt="" />
                            </div>
                            <section className="flex flex-col h-full justify-center items-start">
                                <span className="text-xs text-slate-400 font-normal mb-1 ">Noi xuat phat</span>
                                <p className="text-sm font-semibold tracking-wide ">Ha Noi</p>
                            </section>
                        </button>
                        <button className="w-1/4 h-full border-r flex items-center cursor-pointer hover:bg-slate-100 hover:text-blue-500 duration-300">
                            <div className="icon1 ml-4">
                                <img className="mr-2" src="../../src/assets/Images/address.png" alt="" />
                            </div>
                            <section className="flex flex-col h-full justify-center items-start">
                                <span className="text-xs text-slate-400 font-normal mb-1">Noi den</span>
                                <p className="text-sm font-semibold tracking-wide ">Bac Yen - Son La</p>
                            </section>
                        </button>
                        <button className="w-1/4 h-full border-r flex items-center cursor-pointer hover:bg-slate-100 hover:text-blue-500 duration-300">
                            <div className="icon1 ml-4">
                                <img className="mr-2" src="../../src/assets/Images/event.png" alt="" />
                            </div>
                            <section className="flex flex-col h-full justify-center items-start">
                                <span className="text-xs text-slate-400 font-normal mb-1">Ngay di</span>
                                <p className="text-sm font-semibold tracking-wide ">T2, 18/03/2024</p>
                            </section>
                        </button>
                        <button className="w-1/4 h-full text-blue-500 hover:bg-slate-100 duration-300">
                            Them ngay ve
                        </button>
                    </div>
                    <div className="search-widget-baner w-2/12 flex justify-end">
                        <button className="w-5/6 h-full border-none font-semibold rounded-lg duration-300 text-lg">Tim kiem</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Baner_Wrapper