import { Link } from "react-router-dom"

const Menu_Baner = () => {
    return (<div className="row2_widget rounded-lg flex justify-between items-center overflow-hidden">
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
            <Link className="w-5/6" to={'deital'}><button className="w-full h-full border-none font-semibold rounded-lg duration-300 text-lg">Tim kiem</button></Link>
        </div>
    </div>)
}

export default Menu_Baner