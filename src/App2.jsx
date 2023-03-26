import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Students from './components/students/students';
import Button from './components/ui/button/button';
import NewStudent from './components/students/student/newStudent/newStudents';
import Toolbar from './containers/header/toolbar/toolbar';

function App2() {
    const [studentsState, setStudents] = useState([
        {id: 0, name: 'Afshin', classNumber: 204, phoneNumber: 12345, email: 'afshin.m4460@gmail.com'},
        {id: 1, name: 'Mahdi', classNumber: 214, phoneNumber: 123456, email: 'afshin.m4460@gmail.com'},
        {id: 2, name: 'Ali', classNumber: 224, phoneNumber: 1234567, email: 'afshin.m4460@gmail.com'},
        {id: 3, name: 'Amir', classNumber: 234, phoneNumber: 12345678, email: 'afshin.m4460@gmail.com'}
    ]);
    const handleNameChange = (id, event) => {
        const studentIndex = studentsState.findIndex((student) => {
            return student.id === id;
        });
        const newStudent = {...studentsState[studentIndex]};
        newStudent.name = event.target.vaule;
        const newStudents = [...studentsState];
        newStudents[studentIndex] = newStudent;
        setStudents(newStudents);
    };
    const deleteStudent = (id) => {
        const studentIndex = studentsState.findIndex((student) => {
            return student.id === id;
        });
        const students = [...studentsState];
        students.splice(studentIndex, 1);
        setStudents(students);
    };
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const [searchBarValue, setSearchBarValue] = useState('');
    const [arrayHolder, setArrayHolder] = useState([]);
    useEffect(() => {
        setArrayHolder(studentsState);
        inputEl.current.focus();
    }, []);
    const searchFilterFunction = (event) => {
        const itemData = arrayHolder.filter((item) => {
            const itemData = item.name.toUpperCase();
            const itemValue = event.target.value.toUpperCase();
            return itemData.indexOf(itemValue) > -1;
        });
        setSearchBarValue(event.target.value);
        setStudents(itemData);
    };
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
        const newStudentState = [...studentsState];
        newStudentState.push({
            id: studentsState.length,
            name: studentName,
            classNumber: studentClass,
            phoneNumber: studentPhone,
            email: studentEmail
        });
        setStudents(newStudentState);
        setStudentName('');
        setStudentClass('');
        setStudentPhone('');
        setStudentEmail('');
    };
    const inputEl = useRef(null);
    const executeScroll = () => {
        window.scroll(0, inputEl.current.offsetTop);
    };
    return (
        <div className='App'>
            <Toolbar />
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
            <input type="text" placeholder='Search..' value={searchBarValue} onChange={searchFilterFunction} ref={inputEl} />
            <Button btnType='success' clicked={handleToggle}>تغییر وضعیت نمایش</Button>
            <Students
                studentsList={studentsState}
                nameChanged={handleNameChange}
                deleted={deleteStudent}
                toggle={toggle}
            />
            <Button btnType='danger' clicked={executeScroll}>Click Scroll To Top</Button>
        </div>
    );
}

export default React.memo(App2);
