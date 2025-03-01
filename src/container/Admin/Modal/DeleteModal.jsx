import { useDispatch, useSelector } from "react-redux"
import exclamationMark from "../../../assets/exclamation.png" 
import { deleteQuestionsRequest } from "../../../store/question/questionAction"

const DeleteModal = ({setDeleteModal,questionIndex}) => {
    const question = useSelector((state)=> state.questions.questions)
    const dispatch = useDispatch()

    const handlDelete = (id)=>{
        console.log("hiiii",id)
        if(!id){
            console.error("attemped to delete with undefined id ")
            return 
        }
        dispatch(deleteQuestionsRequest(id))
        setDeleteModal(false)
    }
    console.log("heloo",question[questionIndex].id)

    if(!question[questionIndex]){
        return null
    }

    return (
        <>
            <section id='opacity-question-detail'>
                <div id='opacity' onClick={() => (setDeleteModal(false))}></div>
                <div id='delete-wrap'>
                    <div>
                        <img src={exclamationMark} alt="Exclamation Mark" />
                        <p>Are You Sure Delete This Item</p>
                        <div id="btn-wrap">
                            <button className="delete-btn" onClick={()=>handlDelete(question[questionIndex].id)} >Delete</button>
                            <button className="cancel-btn" onClick={() => (setDeleteModal(false))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DeleteModal