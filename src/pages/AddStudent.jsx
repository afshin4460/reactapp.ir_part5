import React, { useState } from 'react';
import NewStudent from '../components/students/student/newStudent/newStudents';
import { Navigate } from 'react-router-dom';

function AddStudent() {
    const [studentName, setStudentName] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [studentPhone, setStudentPhone] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const studentNameHandler = (event) => {
        setStudentName(event.target.value);
    };
    const studentClassHandler = (event) => {
        setStudentClass(event.target.value);
    };
    const studentPhoneHandler = (event) => {
        setStudentPhone(event.target.value);
    };
    const studentEmailHandler = (event) => {
        setStudentEmail(event.target.value);
    };
    const [result, setResult] = useState(false);
    const addStudentHandler = () => {
        alert('student added');
        setResult(true);
    };
    let redirect = null;
    if (result) {
        redirect = <Navigate to='/' replace />;
    }

    return (
        <>
            {redirect}
            <NewStudent
                studentName={studentName}
                studentClass={studentClass}
                studentPhone={studentPhone}
                studentEmail={studentEmail}
                studentNameHandler={studentNameHandler}
                studentClassHandler={studentClassHandler}
                studentPhoneHandler={studentPhoneHandler}
                studentEmailHandler={studentEmailHandler}
                addStudent={addStudentHandler}
            />
        </>
    );
}

export default React.memo(AddStudent);
