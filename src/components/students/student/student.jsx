import React from 'react';
import './student.css';
import Button from '../../ui/button/button';
import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className='students'>
            <label>شماره دانشجویی: {props.id + 1}</label>
            <label>:نام و نام خانوادگی</label>
            <input type="text" value={props.name} onChange={props.nameChanged} />
            <label>:نام کلاس</label>
            <input type="text" value={props.class} />
            <label>:شماره تلفن</label>
            <input type="number" value={props.phone} />
            <label>:ایمیل</label>
            <input type="email" value={props.email} />
            <Button clicked={props.deleted} btnType='danger'>حذف</Button>
        </div>
    );
}

export default React.memo(Student);

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nameChanged: PropTypes.func.isRequired,
    class: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    deleted: PropTypes.func.isRequired
};
