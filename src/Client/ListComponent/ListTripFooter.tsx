interface TypeListData {
    name?: string | null,
    link1?: string | null,
    link2?: string | null,
    link3?: string | null,
    link4?: string | null,
    link5?: string | null,
    link6?: string | null,
    link7?: string | null,
    link8?: string | null,
}
interface TypeProps {
    listData: TypeListData
}
const ListTripFooter = ({ listData }: TypeProps) => {
    return (<div className="colum-child text-black  flex flex-col text-left">
        <span className="text-lg whitespace-nowrap">{listData.name}</span>
        <div className="list_route flex flex-col underline justify-between h-full mt-4">
            <a href="">{listData.link1}</a>
            <a href="">{listData.link2}</a>
            <a href="">{listData.link3}</a>
            <a href="">{listData.link4}</a>
            <a href="">{listData.link5}</a>
            <a href="">{listData.link6}</a>
            <a className="text-sm" href="">{listData.link7}</a>
            <a className="text-sm" href="">{listData.link8}</a>
        </div>
    </div>)
}

export default ListTripFooter