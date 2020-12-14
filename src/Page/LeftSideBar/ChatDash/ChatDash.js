import React from 'react'
import './ChatDash.css'
import {Grid , ButtonBase , Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Chats = [
        {
            name : 'Anne',
            image : "Images/Anne.png",
            text : 'Your order has been shipped into your address'
        },
        {
            name : 'Alanlove',
            image : "Images/Alanlove.png",
            text : 'Come and follow my YouTube' +
                ' channel for the latest and interesting' +
                ' content'
        },
        {
            name : 'Catherine',
            image : "Images/Catherine.png",
            text : 'The latest and interesting content' +
                ' come and share'
        },
        {
            name : 'Pandora',
            image : "Images/Pandora.png",
            text : 'Shoe Designer John Fluevog On New' +
                ' Book,Spirtuality and "Slow Fashion"'
        },
]

const ChatDash = ()=>{
    return(
        <div className='ChatDash'>
            <Grid container direction={'column'}>
                <Grid item alignItems={'center'}>
                    <SearchIcon className='searchIcon'/>
                    <input type='text' className='search'/>
                    <ButtonBase className='searchButton' style={{outline: 'none'}}><WifiRoundedIcon style={{fontSize : 40}}/></ButtonBase>
                </Grid>
                <Grid item direction={'column'} style={{marginTop: '-4rem'}}>
                    {
                        Chats.map(item=><Grid  item container className='chats'>
                                <ButtonBase style={{outline: 'none'}}>
                                    <MoreHorizIcon className='threeDot' style={{fontSize : 30}}/>
                                    <img src={item.image} className='chatImg'/>
                                    <Typography className='chatName'>{item.name}</Typography>
                                    <Typography className='chatTxt'>{item.text}</Typography>
                                </ButtonBase>
                        </Grid>
                        )}
                </Grid>

            </Grid>
        </div>
    )
}

export default ChatDash;