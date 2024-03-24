import FormPay from "./FormPay"
import ShowTrip from "./ShowTrip"

const IndexPay = () => {
    return (<>
        <div className="w-full h-[auto] lg:w-[100%] py-10 flex justify-center bg-[#f2f2f2] sm:px-10">
            <div className="grid w-[1016px] h-[auto] bg-white rounded-lg grid-cols gap-2 md:grid-cols-3 lg:gap-2 lg:px-4 sm:px-4">
                <div className="h-[auto] md:col-span-2 ">
                    <div className="lg:mr-12 mt-12"><ShowTrip /></div>
                </div>
                <div className="h-[auto] py-10"><FormPay /></div>
            </div>
        </div>

    </>)
}

export default IndexPay