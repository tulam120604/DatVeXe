import { NavLink } from 'react-router-dom';
import Menu_Baner from '../Menu_Baner';

const Baner_Deital = () => {
    return (<>
        <div className="bannerHome bannerDeital flex items-center justify-center">
            <div className="Baner_Wrapper w-full h-52 text-center flex flex-col justify-between pb-2.5 bg-white">
                <div className="widget_baner w-full bg-white rounded-lg flex flex-col justify-around overflow-hidden items-center">
                    <div className="row1_widget flex justify-center">
                        <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                            <img className="mr-2.5" src="../../src/assets/Images/bus.png" alt="" />
                            80K
                            <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1"></div>
                        </NavLink>
                        <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                            <img className="mr-2.5" src="../../src/assets/Images/plane.png" alt="" />
                            May bay
                            <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">-20k</div>
                        </NavLink>
                        <NavLink to={''} className="w-40 relative cursor-pointer relative duration-300 hover:text-blue-500 h-14 flex items-center justify-center">
                            <img className="mr-2.5" src="../../src/assets/Images/train.png" alt="" />
                            93K
                            <div className="ticker absolute top-0 right-0 px-1.5 text-xs bg-red-500 text-white border-none rounded-lg mt-1">new</div>
                        </NavLink>
                    </div>

                    <Menu_Baner />
                </div>
            </div>
        </div>
    </>)
}

export default Baner_Deital