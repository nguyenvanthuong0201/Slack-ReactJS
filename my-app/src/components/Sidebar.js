import React from 'react'
import styled from "styled-components";
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
//icon
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import BackspaceIcon from '@material-ui/icons/Backspace';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
// end icon
import { db } from '../firebase';
import {useCollection} from 'react-firebase-hooks/firestore'

function Sidebar() {
    const [channels,loading,error]= useCollection(db.collection("rooms"))
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Thương Nguyễn</h2>
                    <h3><FaceIcon/>Frontend develope</h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
            <SidebarOption Icon={AccountBoxIcon} title="Threads"/>
            <SidebarOption Icon={AddBoxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={AnnouncementIcon} title="Saved items"/>
            <SidebarOption Icon={AssignmentLateIcon} title="Channel browser"/>
            <SidebarOption Icon={BackspaceIcon} title="People & user groups"/>
            <SidebarOption Icon={BlurLinearIcon} title="Apps"/>
            <SidebarOption Icon={BrandingWatermarkIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channel"/>
            <hr/>
            <SidebarOption  Icon={AddIcon} addChannelOption title="Add channel"/>
             {/* Điều kiện trồng với map */}
            {channels?.docs.map((doc)=>(  
                <SidebarOption
                key={doc.id} 
                id={doc.id} 
                addChannelOption 
                title={doc.data().name}/>
            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color:var(--slack-color);
    color:white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }

`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
    align-items:center;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
        margin-left:auto;
    }
`;
const SidebarInfo = styled.div`
    > h2 {
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;

    }
    > h3 > .MuiSvgIcon-root {
        font-size:14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green; 
    }
`;
