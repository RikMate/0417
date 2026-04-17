class ViewElement
{
    /**@type {string} */
    #id;
    /**@type {HTMLElement} */
    #div;
    /**@type {import("./gomszab").ActivateCallback} */
    #activateCallback;

    /**
     * 
     * @param {string} id 
     */
    constructor(id)
    {

    }
    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendTo(parent)
    {

    }

    navigate()
    {

    }
    get id()
    {
        return this.#id;
    }
    get div()
    {
        return this.#div;
    }
    /**@param {import("./gomszab").ActivateCallback} value */
    set activateCallback(value)
    {
        this.#activateCallback = value;
    }
}
export {ViewElement}