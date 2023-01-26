
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export const ButtonsPagination = ({ nextPage, prevPage, postsLength, changePage }) => {

    return (
        <div className="container-arrows">
         {
             prevPage !== 0 && (
                 <button onClick={() => changePage(false)}>
                     <FaArrowLeft className="btn-arrow"/>
                 </button>
             )
         }
         {
             nextPage < postsLength - 1 && (
                 <button onClick={() => changePage(true)}>
                     <FaArrowRight className="btn-arrow"/>
                 </button>
             )
         }
        </div>
    )

}