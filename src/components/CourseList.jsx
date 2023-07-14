import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseAction, removeCourseAction } from '../actions'

export function CourseList() {
    const courses = useSelector(state => state.data)
    const dispatch = useDispatch();

    const [course, setCourse] = useState('');

    function addCourseHandle(course) {
        if (course.trim()) {
            dispatch(addCourseAction(course))
            setCourse('')
        }
    }

    function removeCourseHandle(course) {
        dispatch(removeCourseAction(course))
    }

    return <>

        {courses.length > 0 ?
            <>
                <h1>Courses</h1>
                <ul>
                    {courses.map((course, index) => <li style={{ margin: 5 }} key={index}>{course} <button type='button' onClick={() => { removeCourseHandle(course) }}>🗑</button></li>)}
                </ul>
            </>
            :
            <h1>No courses avaliable</h1>
        }

        <input type="text"
            name="course-name"
            id="course-name"
            onChange={e => setCourse(e.target.value)}
            value={course}
        />

        <button type='button' onClick={() => addCourseHandle(course)}>Add new course</button>
    </>;
}