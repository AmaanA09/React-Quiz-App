const EditModal = ({setEditModal}) => {

    return (
        <>
            <section id='opacity-question-detail'>
                <div id='opacity' onClick={() => (setEditModal(false))}></div>
                <div id='edit-form-wrap'>
                    <div>
                        <button id='exitButton' onClick={() => (setEditModal(false))}>X</button>
                        <form id="add-question-form">
                            <div>
                                <div>
                                    <label htmlFor="question">Question<span className="star">*</span></label>
                                </div>
                                <textarea type="text" id="question" placeholder="Enter Question"></textarea>
                            </div>
                            <div className="option-wrapper">
                                <div>
                                    <div>
                                        <label htmlFor="option-A">Option 1<span className="star">*</span> </label>
                                    </div>
                                    <input type="text" id="option1" placeholder="Enter Option 1" autoComplete="off" />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="option-B">Option 2<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option2" placeholder="Enter Option 2" autoComplete="off" />
                                </div>
                            </div>
                            <div className="option-wrapper">
                                <div>
                                    <div>
                                        <label htmlFor="option-C">Option 3<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option3" placeholder="Enter Option 3" autoComplete="off" />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="Option-D">Option 4<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option4" placeholder="Enter Option 4" autoComplete="off" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="correct-answer">Correct Answer<span className="star">*</span></label>
                                </div>
                                <select id="option-list">
                                    <option value="" id="correct-answer">Select The Correct Answer</option>
                                    <option value="" id="select-option1">option1</option>
                                    <option value="" id="select-option2">option2</option>
                                    <option value="" id="select-option3">option3</option>
                                    <option value="" id="select-option4">option4</option>
                                </select>
                            </div>
                            <button type="button" id="edit-add-quiz">Add Quize</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EditModal