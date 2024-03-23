
const SideBar = () => {
    return (<>
        <div className="Side_Bar w-64 h-72 flex flex-col justify-between list-none p-3.5 rounded-xl bg-white text-sm">
            <span className="font-semibold text-lg">Sắp xếp</span>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                    checked
                />Mặc định</li>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                />Giờ đi sớm nhất</li>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                />Giờ đi muộn nhất</li>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                />Đánh giá cao nhất</li>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                />Giá tăng dần</li>
                <li className="flex items-center"><input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryPriority"
                    className="size-5 border-blue-300 mr-2 text-blue-500 cursor-pointer"
                />Giá giảm dần</li>
        </div>
    </>)
}

export default SideBar