class QuestionManager
{
    /**@type {Question[]} */
    #questionList;
    /**@type {import("./gomszab").RenderCallback} */
    #renderCallback;

    /**
     * 
     * @param {import("./gomszab").QuestionType[]} questions 
     */
    constructor(questions)
    {
        
    }

    /**
     * @returns {void}
     */
    getAllElement()
    {

    }
    /**@type {import("./gomszab").RenderCallback} */
    set RenderCallback(value)
    {
        this.#renderCallback = value;
    }

    /**
     * 
     * @param {import("./gomszab").QuestionType} question 
     */
    #createQuestion(question)
    {

    }
}

export {QuestionManager}