import React from 'react';
import './newStudent.css';
import Button from '../../../ui/button/button';
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/withClass';

function NewStudent(props) {
    const {studentName, studentNameHandler, studentClass, studentClassHandler, studentPhone, studentPhoneHandler,
    studentEmail, studentEmailHandler, addStudent} = props;
    return (
        <WithClass className="newStudent">
            <h1>اضافه کردن دانشجو</h1>
            <label>:نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler} />
            <label>:کلاس</label>
            <input type="text" value={studentClass} onChange={studentClassHandler} />
            <label>:شماره تلفن</label>
            <input type="number" value={studentPhone} onChange={studentPhoneHandler} />
            <label>:ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button btnType='danger' clicked={addStudent}>اضافه کردن</Button>
        </WithClass>
    );
}

export default React.memo(NewStudent);

NewStudent.propTypes = {
    studentName: PropTypes.string.isRequired,
    studentClass: PropTypes.string.isRequired,
    studentPhone: PropTypes.string.isRequired,
    studentEmail: PropTypes.string.isRequired,
    studentNameHandler: PropTypes.func.isRequired,
    studentClassHandler: PropTypes.func.isRequired,
    studentPhoneHandler: PropTypes.func.isRequired,
    studentEmailHandler: PropTypes.func.isRequired,
    addStudent: PropTypes.func.isRequired
};
