import React, { useState, useEffect } from "react";
import { Grid, Button, TextField, AccordionDetails, Typography } from '@mui/material';
import useStyles from "./styles";
import ProfilePic from "../../images/common/profile.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReplyIcon from '@mui/icons-material/Reply';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

function About() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [chatList, setChatList] = useState(true);
    const [selectedUser, setSelectedUser] = useState();

    const getStart = () => {
        navigate('/getStarted');
    }
    const selectChat = (userId) => {
        let filtered = userList.find((x) => (
            x.userId === userId
        ))
        setChatList(false)
        setSelectedUser(filtered)
    }
    const userList = [
        {
            userId: '1',
            userName: 'Kate youn',
            recentChat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            userProfile: ProfilePic,
        },
        {
            userId: '2',
            userName: 'Umair',
            recentChat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            userProfile: ProfilePic,
        },
        {
            userId: '3',
            userName: 'Ansah',
            recentChat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            userProfile: ProfilePic,
        },
        {
            userId: '4',
            userName: 'Waleed',
            recentChat: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            userProfile: ProfilePic,
        }
    ]
    useEffect(() => {

    }, [])
    return (
        <>
            <Header></Header>

            <Grid container className={classes.headerContainer}>
                <Button className={classes.backBtn} onClick={() => setChatList(true)}>
                    <ReplyIcon />
                </Button>
            </Grid>

            <Grid container className={classes.container}>

                <Grid item lg={8} sm={8} md={8}>
                    <Grid container className={classes.pageHeader}>
                        <h2>Chats</h2>
                        <div className={classes.chatcontainer}>

                            {chatList ?
                                userList.map((item, i) => (
                                    <div className={classes.userList}>
                                        <Grid container alignItems={'center'}>
                                            <Grid item lg={8} md={8} sm={8}>
                                                <div className={classes.userDetails}>
                                                    <img src={item.userProfile} />
                                                    <div className="userInfo">
                                                        <h3>{item.userName} </h3>
                                                        <p>{item.recentChat} </p>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item lg={4} md={4} sm={4} style={{ textAlign: 'right' }}>
                                                <div className={classes.profilePic}>
                                                    <Button onClick={() => selectChat(item.userId)} className={classes.chatBtn}> Chat </Button>
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                ))
                                :
                                <>
                                    <div className={classes.userList}>

                                        <div className={classes.userDetails}>
                                            <img src={selectedUser.userProfile} />
                                            <div className="userInfo">
                                                <h3>{selectedUser.userName} </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.chatResult}>

                                        <div className={classes.sender}>

                                            <img src={selectedUser.userProfile} />
                                            <div className={classes.senderMessage}>
                                                dsdsdd</div>

                                        </div>

                                        <div className={classes.reciever}>

                                            <img src={selectedUser.userProfile} />
                                            <div className={classes.recieverMessage}>
                                                dsdsdd</div>

                                        </div>

                                    </div>
                                </>
                            }

                        </div>
                    </Grid>

                    {!chatList ?
                        <Grid container className={classes.chatSender}>
                            <div className={classes.chatField}>
                                <Grid container alignItems={'center'}>
                                    <Grid item lg={1} justifyContent={'center'}>
                                        <div className={'actionIcon'}>
                                            <SentimentSatisfiedAltIcon />
                                        </div>
                                    </Grid>
                                    <Grid item lg={10}>
                                        <TextField placeholder="Write Something" className={classes.chatInputField}></TextField>
                                    </Grid>
                                    <Grid item lg={1}>
                                        <div className={'actionIcon'} justifyContent={'center'}>
                                            <SendIcon />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        : ''}
                </Grid>
            </Grid>





            <Footer></Footer>

        </>
    )
}
export default About;