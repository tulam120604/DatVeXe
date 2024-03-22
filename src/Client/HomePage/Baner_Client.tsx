import Baner_Wrapper from "./Baner_Wrapper"
const Baner_Client = () => {
    return (<>
        <div className="bannerHome">
            <img className="h-full w-full" src="../../src/assets/Images/banner.jpg" alt="" />

            <div style={{ transform: "translateY(-100%)", background: "rgba(0, 0, 0, 0.5)" }} className="voucher_baner w-full h-16 flex justify-center">
                <div style={{ width: "775px" }} className="list_voucher flex justify-between items-center text-white text-base">
                    <section className="flex">
                        <img className="h-6 w-6 mr-1.5" src="../../src/assets/Images/tick.png" alt="" />
                        Chắc chắn có chỗ
                    </section>
                    <section className="flex">
                        <img className="h-6 w-6 mr-1.5" src="../../src/assets/Images/headset_mic.png" alt="" />
                        Hỗ trợ 24/7
                    </section>
                    <section className="flex">
                        <img className="h-6 w-6 mr-1.5" src="../../src/assets/Images/discount.png" alt="" />
                        Nhiều ưu đãi
                    </section>
                    <section className="flex">
                        <img className="h-6 w-6 mr-1.5" src="../../src/assets/Images/money.png" alt="" />
                        Thanh toán đa dạng
                    </section>
                </div>
                {/* baner wrapper */}
                <div style={{ transform: 'translateY(-150%)' }} className="baner_wrapper absolute">
                    <Baner_Wrapper />
                </div>

            </div>
        </div>
    </>)
}
export default Baner_Client