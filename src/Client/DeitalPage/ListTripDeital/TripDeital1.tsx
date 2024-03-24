interface TypeData {
    name?: string | number | null,
    price?: number | string | null,
    image?: string,
    icon?: string,
    timeStart?: string | number | null,
    time?: string | number | null,
    timeEnd?: string | number | null,
    start?: string | null,
    end?: string | null,
    chair?: string | null,
    trip?: string | null,
}

interface TypeProps {
    data: TypeData
}
const TripDeital1 = ({ data }: TypeProps) => {
    return (<div className="item px-3 w-full rounded-xl bg-white flex items-end">
        <div className="w-full h-48 mb-4 flex justify-between">
            <img className="w-36 h-40" src={data.image} alt="" />
            <div className="right flex flex-col justify-between">
                <div className="name-route w-full h-7 flex justify-between">
                    <span className="font-semibold">{data.name}</span>
                    <p className="text-blue-500 text-xl">Từ {new Intl.NumberFormat('vi-VN').format(data.price)}đ</p>
                </div>
                <div className="name-route w-full flex justify-between mt-7">
                    <div className="start flex items-end">
                        <img className="h-fit" src={data.icon} alt="" />
                        <section className="flex flex-col justify-between ml-2">
                            <div className="time-start flex items-center"><span className="font-semibold text-xl">{data.timeStart}</span> <p className="text-sm font-normal ml-2.5">• {data.start}</p></div>
                            <p className="text-sm py-1 text-slate-400">{data.time}</p>
                            <div className="time-start flex items-center text-gray-500"><span className="font-semibold text-xl">{data.timeEnd}</span> <p className="text-sm font-normal ml-2.5">• {data.end}</p></div>
                        </section>
                    </div>
                    <div className="end flex flex-col justify-end">
                        <span className="text-base text-slate-500">{data.chair}</span>
                        <button className="h-9 rounded bg-amber-400 text-sm mt-2">{data.trip}</button>
                    </div>
                </div>
                <div className="name-route w-full h-7 text-end text-sm uppercase font-semibold">
                    Không cần thanh toán trước
                </div>
            </div>
        </div>
    </div>)
}

export default TripDeital1