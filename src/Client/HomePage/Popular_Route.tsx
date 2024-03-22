
const Popular_Route = () => {
    return (
        <div className="popular-route-component w-full flex flex-col justify-center items-center relative">
            <section className="section-popular h-2/3">
                <span className="text-xl">Tuyến đường phổ biến</span>
                <div className="box_item mt-4 ">
                    <div className="item w-full h-52 border-none grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
                        <img className="w-full h-full" src="../../src/assets/Images/img_hero.png" alt="" />
                        <section className="text-white" style={{ background: '#9E947C' }}>
                            <span style={{ top: '12px', left: '12px' }} className="text-lg relative">Sài Gòn - Nha Trang</span>
                            <p style={{ top: '12px', left: '12px' }} className="text-sm relative font-sans">Từ 200.000đ <del className="text-xs ml-2 text-slate-300">250.000đ </del></p>
                        </section>
                    </div>
                    <div className="item w-full h-52 border-none grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
                        <img className="w-full h-full" src="../../src/assets/Images/img_hero_1.png" alt="" />
                        <section className="text-white" style={{ background: '#585279' }}>
                            <span style={{ top: '12px', left: '12px' }} className="text-lg relative">Sài Gòn - Nha Trang</span>
                            <p style={{ top: '12px', left: '12px' }} className="text-sm relative font-sans">Từ 200.000đ <del className="text-xs ml-2 text-slate-300">250.000đ </del></p>
                        </section>
                    </div>
                    <div className="item w-full h-52 border-none grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
                        <img className="w-full h-full" src="../../src/assets/Images/img_hero_2.png" alt="" />
                        <section className="text-white" style={{ background: '#C6324E' }}>
                            <span style={{ top: '12px', left: '12px' }} className="text-lg relative">Sài Gòn - Nha Trang</span>
                            <p style={{ top: '12px', left: '12px' }} className="text-sm relative font-sans">Từ 200.000đ <del className="text-xs ml-2 text-slate-300">250.000đ </del></p>
                        </section>
                    </div>
                    <div className="item w-full h-52 border-none grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
                        <img className="w-full h-full" src="../../src/assets/Images/img_hero_3.png" alt="" />
                        <section className="text-white" style={{ background: '#4C6C8C' }}>
                            <span style={{ top: '12px', left: '12px' }} className="text-lg relative">Sài Gòn - Nha Trang</span>
                            <p style={{ top: '12px', left: '12px' }} className="text-sm relative font-sans">Từ 200.000đ <del className="text-xs ml-2 text-slate-300">250.000đ </del></p>
                        </section>
                    </div>
                </div>
            </section>
            <section className="panigation-popular absolute flex justify-between">
                <button style={{ borderRadius: '50%' }} className="w-9 duration-300 h-9 border cursor-pointer bg-white border-none opacity-40 hover:bg-sky-700">&#10092;</button>
                <button style={{ borderRadius: '50%' }} className="w-9 duration-300 h-9 border cursor-pointer bg-white border-none opacity-40 hover:bg-red-700">&#10093;</button>
            </section>
        </div>
    )
}

export default Popular_Route