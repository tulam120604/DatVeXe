import { NavLink } from "react-router-dom"
import Menu_Baner from "../../Menu_Baner"
interface TypeArr {
    name?: string | null,
    icon?: string,
    ticker?: string | null
}
interface TypeProps {
    dataBaner: Array<TypeArr>
}
const BanerClient = ({ dataBaner }: TypeProps) => {
    return (<div className="Baner_Wrapper w-[1016px] text-center flex flex-col justify-between pb-2.5 bg-white rounded-lg sm:w-[100%]">
        <div className="widget_baner w-full bg-white rounded-lg flex flex-col justify-around overflow-hidden items-center">
            <div className="w-full row1_widget flex justify-center border-b-2 my-4">
                {dataBaner.map((item) => {
                    return (<>
                        <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center font-semibold">
                            <img className="mr-2.5" src={item.icon} alt="" />
                            {item.name}
                            <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">{item.ticker}</div>
                        </NavLink>
                    </>)
                })}
            </div>

            <Menu_Baner />
        </div>
    </div>)
}

export default BanerClient