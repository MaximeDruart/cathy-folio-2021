import React from 'react';
import styled from 'styled-components';
import { marginPage } from '../../../styles/globalCustom';

const StyledThanks = styled.div`
    ${marginPage}
`

function Thanks(thanks) {
    return (
        <StyledThanks>
            <div className="spacer"></div>
            <h2 className='text-h2 serif'>Thanks for scrolling</h2>
            <p className="text-description">{thanks.text}</p>
            <div className="big-spacer"></div>
        </StyledThanks>
    );
}

export default Thanks;