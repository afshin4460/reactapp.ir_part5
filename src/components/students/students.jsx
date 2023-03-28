import React from 'react';
import Student from './student/student';
import './students.css';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function Students(props) {

    const students = props.studentsList.map((student, index) => (
        <ErrorBoundary key={index}>
            <Student 
                id={student.id}
                name={student.name}
                class={student.classNumber}
                phone={student.phoneNumber}
                email={student.email}
                deleted={() => props.deleted(student.id)}
            />
        </ErrorBoundary>
    ));

    if (props.toggle) {
        return (
            <div className="student-section">
                { students }
            </div>
        );
    }

    return (
        students
    );
}

export default React.memo(Students);

Students.propTypes = {
    studentsList: PropTypes.array.isRequired,
    toggle: PropTypes.bool.isRequired,
    nameChanged: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
};
