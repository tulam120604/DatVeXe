
const LastDayTrip = () => {
    return (<button className="w-1/4 h-full border-r flex items-center cursor-pointer hover:bg-slate-100 hover:text-blue-500 duration-300">
        <div className="w-full h-full flex flex-col justify-center px-2 ">
            <label htmlFor="HeadlineAct" className="cursor-pointer block font-medium text-xs text-slate-400 text-left ml-1 text-[#2474e5]">Them ngay ve </label>
            <select
                name="HeadlineAct"
                id="HeadlineAct"
                className=" w-full cursor-pointer hover:bg-slate-100 outline-none rounded-lg border-gray-300 text-sm font-semibold sm:text-sm"
            >
                <option value="">Bac Yen - Son La</option>
                <option value="JM">Bac Yen - Son La</option>
                <option value="SRV">Bac Yen - Son La</option>
                <option value="SRV">Bac Yen - Son La</option>
                <option value="SRV">Bac Yen - Son La</option>
                <option value="SRV">Bac Yen - Son La</option>
            </select>
        </div>
    </button>)
}

export default LastDayTrip