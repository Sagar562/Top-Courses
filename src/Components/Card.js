import React from 'react'
import {FcLike} from "react-icons/fc"
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";


const Card = ({course,liked,setLiked}) => {

    function clickHandler() {

        if (liked.includes(course.id))
        {
            setLiked( (prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else
        {
            if (liked.length === 0)
            {
                setLiked([course.id]);
            }
            else
            {
                setLiked( (prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    } 

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
            <img className="object-cover" src={course.image.url} />

            <div className="bg-white rounded-full absolute w-[40px] h-[40px] right-2
            -bottom-3 flex justify-center">
                <button onClick={clickHandler}>

                    {liked.includes(course.id) ? (<FcLike fontSize="1.7rem"></FcLike>) : (<FcLikePlaceholder fontSize="1.7rem"/>)}
                            
                </button>
            </div>
        </div>

        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="mt-2 text-white">
            {course.description.length > 100 ? 
            (course.description.substr(0,100)) + "..." : 
            (course.description)
            }
            </p>
        </div>

    </div>
  )
}

export default Card;