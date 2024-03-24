import { Link } from "react-router-dom"
import Start_Trip from "./ListComponent/Menu_Baner/Start_Trip"

const Menu_Baner = () => {
    return (<div className="row2_widget w-[1016px] rounded-lg flex justify-between items-center overflow-hidden">
        <form className="section-widget-baner w-[820px] h-[56px] flex border rounded-lg ml-[16px]">
            <Start_Trip dataProps={{ name: 'Noi xuat phat', title: 'Ha Noi', icon: '../../src/assets/Images/pickup.png' }}
            />
            {/* -- */}
            <Start_Trip dataProps={{ name: 'Noi den', title: 'Ha Noi', icon: '../../src/assets/Images/address.png' }} />
            {/* -- */}
            <Start_Trip dataProps={{ name: 'Thoi gian di', title: 'Ha Noi', icon: '../../src/assets/Images/event.png' }} />
            {/* ---- */}
            <Start_Trip dataProps={{ name: 'Them ngay ve', title: 'Ha Noi' }} />
        </form>
        <div className="search-widget-baner w-2/12 flex justify-end">
            <button className="w-5/6 h-[56px] border-none font-semibold rounded-lg duration-300 text-lg mr-[16px] bg-[#ffd333] hover:bg-[#ffe37e;]"> <Link className="w-full" to={'/deital'}>Tim kiem</Link></button>
        </div>
    </div>)
}

export default Menu_Baner