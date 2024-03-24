import BanerClient from "../ListComponent/Baner/BanerClient"

const Baner_Deital = () => {
    return (<>
        <div className="bannerHome bannerDeital w-[auto] h-[auto] my-4 flex items-center justify-center">
            <BanerClient
                dataBaner={[{ name: '80K', icon: '../../src/assets/Images/bus.png' }
                    , { name: 'Máy bay', icon: '../../src/assets/Images/bus.png', ticker: '-20K' },
                    , { name: '93K', icon: '../../src/assets/Images/train.png', ticker: 'Mới' }
                ]}
            />
        </div>
    </>)
}

export default Baner_Deital