import BanerClient from "../ListComponent/Baner/BanerClient"

const Baner_Wrapper = () => {
    return (<>
        <div className="Baner_Wrapper text-center flex flex-col justify-between w-[1016px] sm:h-[auto]">
            <span className="text-2xl text-white mb-4">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</span>
            <BanerClient
                dataBaner={[{ name: 'Xe khách', icon: '../../src/assets/Images/bus.png' }
                    , { name: 'Máy bay', icon: '../../src/assets/Images/plane.png', ticker: '-20K' },
                    , { name: 'Tàu hỏa', icon: '../../src/assets/Images/train.png', ticker: 'Mới' },
                    , { name: 'Thuê xe', icon: '../../src/assets/Images/car.png', ticker: 'Mới' }
                ]} />
        </div>
    </>)
}

export default Baner_Wrapper