import React, { useState } from 'react';
import "../../pages/Menu/MenuStyle.css";

const CheckBox = ({ handleFilters, list }) => {
    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        const newChecked = Checked.includes(value.name)
            ? Checked.filter(item => item !== value.name)  // Nếu đã có, bỏ đi
            : [...Checked, value.name];  // Nếu chưa có, thêm vào

        setChecked(newChecked);
        handleFilters(newChecked);  // Truyền danh sách mới đến handleFilters
    };

    const renderCheckboxLists = () => list && list.map((value, index) => (
        <li key={index}>
            <div className="checkbox ml-3">
                <label>
                    <input
                        onChange={() => handleToggle(value)}  // Truyền toàn bộ đối tượng vào
                        type="checkbox"
                        checked={Checked.includes(value.name)}  // Kiểm tra sự tồn tại của name trong mảng Checked
                    />
                    <span className="cr">
                        <i className="cr-icon fas fa-check"></i></span>
                    {value.name}
                </label>
            </div>
        </li>
    ));

    return (
        <ul className="list-unstyled">
            {renderCheckboxLists()}
        </ul>
    );
}

export default CheckBox;
