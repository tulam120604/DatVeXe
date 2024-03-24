import { Link } from "react-router-dom"
interface TypeData {
    name?: string | number | null,
    image?: string,
    price?: string | number | null,
    priceOld?: string | number | null,
}
interface TypeProps {
    dataTrip: TypeData
}

const Trip1 = ({ dataTrip }: TypeProps) => {
    return (<Link to={'deital'} className="item w-full h-52 border-none grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
        <img className="w-full h-full" src={dataTrip.image} alt="" />
        <section className="text-white" style={{ background: '#9E947C' }}>
            <span style={{ top: '12px', left: '12px' }} className="text-lg relative">{dataTrip.name}</span>
            <p style={{ top: '12px', left: '12px' }} className="text-sm relative font-sans">Từ {Intl.NumberFormat('vi-VN').format(dataTrip.price)}đ <del className="text-xs ml-2 text-slate-300">{dataTrip.priceOld} </del></p>
        </section>
    </Link>)
}

export default Trip1