import React from 'react';
import './RightSideBar.css';
import {Grid , ButtonBase , Typography , Button} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import TuneIcon from '@material-ui/icons/Tune';


const Cards = [
    {
        title: 'Fashion',
        info: '99+ items',
        image: 'Images/Fashion.jpg'
    },
    {
        title: 'Outfit',
        info: '20+ items',
        image: 'Images/Outfit.jpg'
    },
    {
        title: 'Street shot',
        info: '55+ items',
        image: 'Images/StreetShot.jpg'
    },
    {
        title: 'Office',
        info: '120+ items',
        image: 'Images/Office.jpg'
    },
    {
        title: 'Desktop',
        info: '190+ items',
        image: 'Images/Desktop.jpg'
    },
    {
        title: 'Business',
        info: '99+ items',
        image: 'Images/Business.jpg'
    },
]

const RightSideBar = ()=>{
    return(
        <div className='rightSide'>
            <Grid container direction={"column"}>
                <Grid item>
                    <ButtonBase><TuneIcon className='cardsSettingButton'/></ButtonBase>
                    <Typography className='cardHeadTitle'>Daily Sharing</Typography>
                </Grid>
                    <Grid item container className='cardContainer'>
                        {
                            Cards.map(item => <ButtonBase  style={{outline: 'none'}}>
                            <Card className='shadow-lg cards' style={{width: '18rem'}}>
                                <Card.Img className='cardImage' variant="top" src={item.image}/>
                                <Card.Body>
                                    <Card.Title className='text-left font-weight-bolder'>{item.title}</Card.Title>
                                    <Card.Text className='text-left'>
                                        {item.info}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </ButtonBase>)
                        }
                    </Grid>
            </Grid>
        </div>
    )
}

export default RightSideBar;