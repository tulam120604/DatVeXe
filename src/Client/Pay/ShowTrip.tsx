import TripDeital1 from "../DeitalPage/ListTripDeital/TripDeital1"

const ShowTrip = () => {
    return (<>
        <div className="list-deital desktop w-full rounded-xl overflow-hidden">
            <TripDeital1
                data={{
                    name: "Hải Phòng Travel (Đất Cảng)",
                    price: 230000, image: '../../src/assets/Images/sp1.png', icon:
                        '../../src/assets/Images/SVG.png', timeStart: '19:00', time: '1h30m', timeEnd: '20:30', start: 'Hà Nội', end: 'Hải Phòng',
                    chair: 'Còn 11 chỗ trống', trip: 'Chọn chuyến'
                }} />
        </div>

    </>)
}

export default ShowTrip