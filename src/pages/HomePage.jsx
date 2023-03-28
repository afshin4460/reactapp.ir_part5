import React, {useState, useEffect, useRef} from 'react';
import './HomePage.css';
import Students from '../components/students/students';
import Button from '../components/ui/button/button';

function HomePage() {

    const [studentsState, setStudents] = useState([
        {id: 0, name: 'Afshin', classNumber: 204, phoneNumber: 12345, email: 'afshin.m4460@gmail.com'},
        {id: 1, name: 'Mahdi', classNumber: 214, phoneNumber: 123456, email: 'afshin.m4460@gmail.com'},
        {id: 2, name: 'Ali', classNumber: 224, phoneNumber: 1234567, email: 'afshin.m4460@gmail.com'},
        {id: 3, name: 'Amir', classNumber: 234, phoneNumber: 12345678, email: 'afshin.m4460@gmail.com'}
    ]);
    const deleteStudent = (id) => {
        const studentIndex = studentsState.findIndex((student) => {
            return student.id === id;
        });
        const students = [...studentsState];
        students.splice(studentIndex, 1);
        setStudents(students);
    };
    const [toggle, setToggle] = useState(true);
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
    const inputEl = useRef(null);
    const executeScroll = () => {
        window.scroll(0, inputEl.current.offsetTop);
    };

    return (
        <>
            <input type="text" placeholder='Search..' value={searchBarValue} onChange={searchFilterFunction} ref={inputEl} />
            <div className="change">
                <Button btnType='success' clicked={handleToggle}>تغییر وضعیت نمایش</Button>
            </div>
            <Students
                studentsList={studentsState}
                deleted={deleteStudent}
                toggle={toggle}
            />
            <Button btnType='danger' clicked={executeScroll}>Click To Scroll Top</Button>
        </>
    );
}

export default React.memo(HomePage);
