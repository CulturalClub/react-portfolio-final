import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    transparent 50%,
    transparent 50%) bottom,
    linear-gradient(
    to right,
    transparent 50%,
    transparent 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 70%;
    transform: translate(-50%,0%);
    width: 100%;
    height:100%;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

 h1, h3, h6 {
    font-family: 'DynaPuff', cursive;
  }


display: flex;
flex-direction: column;
justify-content: space-evenly;


&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
    font-family: 'DynaPuff', cursive;
}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '60vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>Welcome to Cultural Club XIME.</h3>
                    <h6>United by ART.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
