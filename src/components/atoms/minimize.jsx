import React, { useState } from 'react';

const Minimize = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div>
            <button onClick={handleMinimize}>
                {isMinimized ? 'Maximize' : 'Minimize'}
            </button>
            {!isMinimized && <p>This is the content to be minimized.</p>}
        </div>
    );
};

export default Minimize;