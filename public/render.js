export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'aftenbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend'
}

export const renderTemplate = (container, template, place) => { 
    container.insertAdjasmentHTML(place, template) 
};