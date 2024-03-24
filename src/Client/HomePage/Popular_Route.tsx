import Trip1 from "./ListTrip/Trip1"

const Popular_Route = () => {
    return (
        <div className="popular-route-component w-full 2xl:h-[362px] sm:h-[600px] sm:mt-[-50px] flex flex-col justify-center items-center relative">
            <section className="section-popular w-[980px] h-2/3">
                <span className="text-xl">Tuyến đường phổ biến</span>
                <div className="box_item mt-4 justify-between">
                    <Trip1
                        dataTrip={{ name: "Sài Gòn - Nha Trang", image: '../../src/assets/Images/img_hero.png', price: 200000, priceOld: 250000 }}
                    />
                    <Trip1
                        dataTrip={{ name: "Hà Nội - Hải Phòng", image: '../../src/assets/Images/img_hero_1.png', price: 80000, priceOld: 110000 }} />
                    <Trip1
                        dataTrip={{ name: "Sài Gòn - Đà Lạt", image: '../../src/assets/Images/img_hero_2.png', price: 200000 }} />
                    <Trip1
                        dataTrip={{ name: "Sài Gòn - Phan Thiết", image: '../../src/assets/Images/img_hero_3.png', price: 150000 }} />
                </div>
            </section>
            <section className="panigation-popular w-[930px] top-[46%] absolute flex justify-between">
                <button style={{ borderRadius: '50%' }} className="w-9 duration-300 h-9 border cursor-pointer bg-white border-none opacity-40 hover:bg-sky-700 hover:scale-[1.1] hover:opacity-[1]">&#10092;</button>
                <button style={{ borderRadius: '50%' }} className="w-9 duration-300 h-9 border cursor-pointer bg-white border-none opacity-40 hover:bg-red-700 hover:scale-[1.1] hover:opacity-[1]">&#10093;</button>
            </section>
        </div>
    )
}

export default Popular_Route