
function addCourseAction(title) {
    return { type: 'ADD_COURSE', title }
}

function removeCourseAction(title) {
    return { type: 'REMOVE_COURSE', title }
}

export {addCourseAction, removeCourseAction}