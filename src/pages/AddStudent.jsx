import React, {useState, useEffect} from 'react';
import NewStudent from '../components/students/student/newStudent/newStudents';

function AddStudent(props) {
    useEffect(() => {
        
    }, [])
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
    const addStudentHandler = () => {
        alert('student added');
    };

    return (
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
    );
}

export default React.memo(AddStudent);
