import exclamationMark from "../../../assets/exclamation.png" 

const DeleteModal = ({setDeleteModal}) => {

    return (
        <>
            <section id='opacity-question-detail'>
                <div id='opacity' onClick={() => (setDeleteModal(false))}></div>
                <div id='delete-wrap'>
                    <div>
                        <img src={exclamationMark} alt="Exclamation Mark" />
                        <p>Are You Sure Delete This Item</p>
                        <div id="btn-wrap">
                            <button className="delete-btn" >Delete</button>
                            <button className="cancel-btn" onClick={() => (setDeleteModal(false))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DeleteModal