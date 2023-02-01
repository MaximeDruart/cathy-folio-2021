import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArchivesData = styled.div`
    width: 100%;
    margin-bottom: -0.5px;
    .separator{
        width: 100%;
        height: 1px;
        transition: background-color 0.6s;
        background-color: ${({ theme }) => theme.colors.text.disabled2};
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
        span{
            color: ${({ theme }) => theme.colors.text.text};
            margin-right: 6px;
        }
        &.name{
            width: 140px;
            text-align: left;
        }
        &.date{
            width: 120px;
            align-self: right;
            @media (max-width: 600px) {
               width: 80px;
            }
        }
        &.tags{
            @media (max-width: 600px) {
                display: none;
            }
        }
    }
`


function ArchivesData(archives) {
    return (
        <StyledArchivesData>
            <Link to={archives.to}>
            <div className="separator"/>
            <div className="content">
                <p className="text-button name"><span>({archives.number})</span>{archives.name}</p>
                <p className="text-button tags">{archives.tag}</p>
                <p className="text-button date">{archives.date}</p>
            </div>
            <div className="separator"/>
            </Link>
        </StyledArchivesData>
    );
}

export default ArchivesData;