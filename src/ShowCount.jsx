import React, { memo } from 'react';

const ShowCount = ({ count, title }) => {
    return (
        <p>
            {title} is {count}
        </p>
    );
};

export default memo(ShowCount);