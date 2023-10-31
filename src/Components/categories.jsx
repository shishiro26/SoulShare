import { NavLink } from 'react-router-dom';

const Categories = () => {
    return (
        <ul >
            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                    aria-current=""
                    to="/browse?productType=Food"
                >
                    FOOD
                </NavLink>
            </li>
            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                    aria-current=""
                    to="/browse?productType=Medicine"
                >
                    MEDICINE
                </NavLink>
            </li>
            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                    aria-current=""
                    to="/browse?productType=Clothes"
                >
                    CLOTHES
                </NavLink>
            </li>
            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[8px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                    aria-current=""
                    to="/browse?productType=Pickle"
                >
                    PICKLE
                </NavLink>
            </li>
            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[8px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                <NavLink
                    data-navbar-item="true"
                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                    aria-current=""
                    to="/browse?productType=Other"
                >
                    OTHERS
                </NavLink>
            </li>
        </ul>


    )
}

export default Categories