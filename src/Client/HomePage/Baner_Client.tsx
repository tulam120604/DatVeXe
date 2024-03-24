import Baner_Wrapper from "./Baner_Wrapper"
const Baner_Client = () => {
    return (<>
        <div className="bannerHome h-[380px] xl:h-[480px] relative">
            <img className="object-fill h-full w-full" src="../../src/assets/Images/banner.jpg" alt="" />
            <div style={{ transform: "translateY(-100%)", background: "rgba(0, 0, 0, 0.5)" }} className="voucher_baner w-full h-16 flex justify-center">
                <div className="w-[775px] list_voucher flex justify-between items-center text-white text-base">
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
            </div>{/* baner wrapper */}
            <div className="baner_wrapper w-full flex items-center justify-center inset-0 absolute">
                <Baner_Wrapper />
            </div>
        </div>
    </>)
}
export default Baner_Client