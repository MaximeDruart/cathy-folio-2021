import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArchivesData = styled.div`
    width: 100%;
    margin-bottom: -0.5px;
    .separator{
        margin: 0;
    }
    .content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        font-size: 12px;
        padding: 24px 0;
        display: block;
        color: ${({ theme }) => theme.colors.text.standard};
        &.name{
            width: 120px;
        }
        &.date{
            width: 120px;
            text-align: right;
        }
    }
`


function ArchivesData(archives) {
    return (
        <StyledArchivesData>
            <Link to={archives.to}>
            <div className="separator"/>
            <div className="content">
                <p className="text-button name">{archives.name}</p>
                <p className="text-button tags">{archives.tag}</p>
                <p className="text-button date">{archives.date}</p>
            </div>
            <div className="separator"/>
            </Link>
        </StyledArchivesData>
    );
}

export default ArchivesData;