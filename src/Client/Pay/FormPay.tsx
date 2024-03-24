import { useForm } from "react-hook-form"

const FormPay = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const pay = (dataform) => {
    alert(dataform)
  }

  return (<>
    <form onSubmit={handleSubmit(pay)}>
      <section className="flex flex-col mb-6">
        <label htmlFor="name">Name</label>
        <input className="border px-2 rounded h-[6vh] outline-none" id="name"
          {...register('name', { required: true })}
          type="text" placeholder="Name..." />
        {errors.name && <p className="text-red-600 text-xs">Vui nhập tên</p>}
      </section>

      <section className="flex flex-col mb-6">
        <label htmlFor="mail">Email address</label>
        <input className="border px-2 rounded h-[6vh] outline-none" id="mail"
          {...register('email', { required: true })}
          type="email" placeholder="Email address..." />
        {errors.email && <p className="text-red-600 text-xs">Vui lòng nhập email</p>}
      </section>

      <section className="flex flex-col mb-6">
        <label htmlFor="phone">Phone</label>
        <input className="border px-2 rounded h-[6vh] outline-none" id="phone"
          {...register('phone', { required: true })}
          type="text" placeholder="Phone..." />
        {errors.phone && <p className="text-red-600 text-xs">Vui lòng nhập số điện thoại</p>}
      </section>

      <section className="flex flex-col mb-6">
        <label htmlFor="visa">Visa/Card</label>
        <input className="border px-2 rounded h-[6vh] outline-none" id="name"
          {...register('visa', { required: true })}
          type="visa" placeholder="..." />
        {errors.visa && <p className="text-red-600 text-xs">Vui lòng nhập thẻ tín dụng</p>}
      </section>

      <section className="flex justify-between items-center">
        <button className="btn btn-success px-10">Buy</button>
        <span className="text-blue-500 text-xl">230.000đ</span>
      </section>

    </form>

  </>)
}

export default FormPay