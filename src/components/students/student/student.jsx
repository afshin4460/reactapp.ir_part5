import React from 'react';
import './student.css';
import Button from '../../ui/button/button';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Student(props) {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/student/${props.id + 1}`);
    };
    return (
        <div className='students'>
            <label>شماره دانشجویی: {props.id + 1}</label>
            <label>{props.name} :نام و نام خانوادگی</label>
            <label>{props.class} :نام کلاس</label>
            <label>{props.phone} :شماره تلفن</label>
            <label>{props.email} :ایمیل</label>
            <div style={{display:'flex', direction: 'rtl'}}>
                <Button clicked={props.deleted} btnType='danger'>حذف</Button>
                <Button clicked={handleEdit} btnType='success'>ویرایش</Button>
            </div>
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
