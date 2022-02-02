import { Global } from "@emotion/react";

import React from 'react';

const Fonts = () => {
    return (
        <Global styles={`@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');`}/>
    );
};

export default Fonts;