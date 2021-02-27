import React from 'react'
import styled from "styled-components";

function SidebarOption({Icon,title}) {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon fontSize="small" style={{padding:10}}/> }
            {Icon ? (<h3>{title}</h3>):(<SideBarOptionChannel><span>#</span></SideBarOptionChannel>)}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover{
        opacity: 0.8;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 900;
    }
    > h3 > span{
        padding: 15px;
    }
`;

const SideBarOptionChannel = styled.div``;