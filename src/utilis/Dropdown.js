import { useState } from "react"
import { Link } from "react-router-dom"

const Dropdown = (props) => {
    const [openDropDown, setOpenDropDown] = useState(false);

   const openHandler = () => {
       setOpenDropDown(!openDropDown)
   }

   let classes = !openDropDown ? "hidden" : "block";

    return (
        <div onClick={openHandler} className="text-white relative group hover:bg-gray-400">
            <h2 className="p-4 font-bold ">{props.name}</h2>
            {props.genres?.length > 0 && (<div className={`absolute z-50 max-w-max top-0 left-0 ${classes} hidden group-hover:block`}>
            <ul className="p-4 text-white bg-dropdown_gray w-max grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 whitespace-nowrap">
                {props.genres?.map(el => (<Link key="el" className="hover:bg-gray-400 p-3" to="#">{el}</Link>))}
            </ul></div>)}
            
        </div>
        
    )
}

export default Dropdown