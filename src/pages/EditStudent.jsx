import React, {useEffect} from 'react';
import Button from '../components/ui/button/button';
import './styles/EditStudent.css';

function EditStudent(props) {
    
    const handleEditStudent = () => {
        alert('successfull');
    };
    return (
        <div className="editStudent">
            <h1>ویرایش دانشجو</h1>
            <label>:نام و نام خانوادگی</label>
            <input type="text" />
            <label>:کلاس</label>
            <input type="text" />
            <label>:شماره تلفن</label>
            <input type="number" />
            <label>:ایمیل</label>
            <input type="email" />
            <Button btnType='danger' clicked={handleEditStudent}>ویرایش اطلاعات</Button>
        </div>
    );
}

export default React.memo(EditStudent);
