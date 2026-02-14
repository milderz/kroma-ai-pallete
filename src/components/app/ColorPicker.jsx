import React, { useState, useRef } from 'react';
import './ColorPicker.css';
import { CopyIcon } from './CopyIcon';
import { getContrastTextColor } from "../../lib/colorUtils";

const ColorPicker = ({propColor}) => {
    const [color, setColor] = useState(propColor);

    const inputRef = useRef(null);

    const openPicker = () => {
        inputRef.current.click();
    }

    return (
        <div className='color-picker'>
            <input
                className='color-picker-input'
                ref={inputRef}
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            
                <button onClick={openPicker} className='color-picker-btn' style={{ backgroundColor: `${color}` }}>
                    <p className='hex-code' style={{ color: getContrastTextColor(color) }}>{color}</p>
                </button>
                <button className='color-picker-copy'>
                    <CopyIcon />
                </button>
           

        </div>
    );
};

export default ColorPicker;