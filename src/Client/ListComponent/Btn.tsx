interface TypeBtn {
    nameBtn?: string |number
}

const Btn = ({nameBtn} : TypeBtn) => {
  return (<a
    className="rounded-md bg-white flex justify-center items-center text-sm font-medium shadow w-[130px] h-[40px]"
    href="#"
>
    {nameBtn}
</a>)
}

export default Btn