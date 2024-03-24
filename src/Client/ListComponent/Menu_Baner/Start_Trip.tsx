interface Type {
    name?: string | number,
    title?: string | number,
    icon?: string,
}

interface TypeProps {
    dataProps: Type
}
const Start_Trip = ({ dataProps }: TypeProps) => {
    return (<div className="w-1/4 h-full border-r flex items-center cursor-pointer btn-trip col sm:w-[auto]">
        <div className="icon1 ml-4">
            <img src={dataProps.icon} alt="" />
        </div>
        <div className="w-full h-full flex flex-col justify-center px-2 ">
            <label htmlFor="HeadlineAct" className="cursor-pointer block font-medium text-xs text-slate-400 text-left ml-1">{dataProps.name}</label>
            <select
                name="HeadlineAct"
                id="HeadlineAct"
                className=" w-full cursor-pointer outline-none rounded-lg border-gray-300 text-sm font-semibold sm:text-sm"
            >
                <option value="">Ha Noi</option>
                <option value="JM">Ha Noi</option>
                <option value="SRV">Ha Noi</option>
                <option value="SRV">Ha Noi</option>
                <option value="SRV">Ha Noi</option>
                <option value="SRV">Ha Noi</option>
            </select>
        </div>
    </div>)
}

export default Start_Trip