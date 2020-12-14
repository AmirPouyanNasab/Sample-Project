import React from 'react'
import './LeftSolidBar.css'
import {ButtonBase, Grid} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TextsmsSharpIcon from '@material-ui/icons/TextsmsSharp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import FacebookIcon from '@material-ui/icons/Facebook';
import SettingsIcon from '@material-ui/icons/Settings';


const Menubuttons = [
    <MenuIcon style={{fontSize : 35}}/>,
    <div className='Notification'><NotificationsIcon style={{fontSize : 35}}/></div>,
    <EmailIcon style={{fontSize : 35}}/>,
    <FavoriteIcon style={{fontSize : 35}}/>,
    <DateRangeIcon style={{fontSize : 35}}/>,
    <TextsmsSharpIcon style={{fontSize : 35}}/>,
    <BookmarkIcon style={{fontSize : 35}}/>,
    <DataUsageIcon style={{fontSize : 35}}/>,
    <FacebookIcon style={{fontSize : 35}}/>,
    <SettingsIcon style={{marginTop: '5rem',fontSize : 35}}/>

]

const LeftSolidBar = ()=>{
    return(
        <div className='LeftSolidBar'>
            <Grid container direction={'column'}>
                    {
                        Menubuttons.map(item=><Grid item className='leftMenu' >
                        <ButtonBase style={{outline: 'none'}}>{item}</ButtonBase>
                    </Grid>)

                    }

            </Grid>
        </div>
    )
}

export default LeftSolidBar;