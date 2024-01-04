import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { Mike } from '../../../Images';
import CloseIcon from '@mui/icons-material/Close';
import { ClickSound, closesound } from '../../../Images';
// import { keyframes } from 'styled-components';

function MicrophoneDropdown({isOpen, onClose}) {


    // const [audio] = useState(new Audio()); // Create an audio element
    // const [closeAudio] = useState(new Audio(closesound)); // Create an audio element
    const [isAnimating, setIsAnimating] = useState(true);
    const [backColor, setBackColor] = useState('#cc0000')
    const [fillColor , setFillColor] = useState('white');
    const [microphoneText, setMicrophoneText] = useState("Listening...")
    const [rerender, setRerender] = useState(false); // State to trigger re-render
    const [intervalId, setIntervalId] = useState(null);

    // const playSound = () => {
    //     audio.src = ClickSound; 
    //     audio.currentTime = 0; // Reset audio to start if it's already playing
    //     audio.play();
    // };
    // const closeSound = () => {
    //     closeAudio.currentTime = 0; // Reset audio to start if it's already playing
    //     closeAudio.play();
    // };

    const resetStateAndInterval = () => {
        setIsAnimating(true);
        setBackColor('#cc0000');
        setFillColor('white');
        setMicrophoneText('Listening...');

        if (intervalId) {
            clearInterval(intervalId); // Clear previous interval
        }

        const newIntervalId = setInterval(() => {
            setIsAnimating(false); // Stop the animation after a certain time

            const newBackColor = backColor === '#cc0000' ? '#CECECE' : '#cc0000';
            setBackColor(newBackColor);

            const newColor = fillColor === 'white' ? 'black' : 'white';
            setFillColor(newColor);

            setMicrophoneText('Microphone off. Try again.');

            // closeSound()
        }, 10000); // Change 10000 to the duration you want the animation to run (in milliseconds)

        setIntervalId(newIntervalId);
        // playSound();
    };

    const handlefillColor = () => {
        const newColor = fillColor === 'white' ? 'black' : 'white';
        setFillColor(newColor);
        const newBackColor = backColor === '#cc0000' ? '#CECECE' : '#cc0000';
        setBackColor(newBackColor);
        resetStateAndInterval();
    };

    useEffect(() => {
        resetStateAndInterval();

        return () => {
            if (intervalId) {
                clearInterval(intervalId); // Clean up the interval on unmounting
            }
        };
    }, []);


const style = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '40%',
        left: '49%',
        transform: 'translate(-50%, -50%)',
        width: 580,
        height: 450,
        bgcolor: 'background.paper',
        boxShadow: 24,
        outlineStyle: 'none',
        p: 4,
      };

    return ( <>

<div>
    <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <div style={{flex: 1, position: 'relative',}}>
                <Typography sx={{marginTop: 5,}} variant="h5">{microphoneText}</Typography>
                <div className='Cross' onClick={onClose}>
                    <CloseIcon fontSize="large"/>
                </div>
            </div>
            <div style={{flex: 1,display: 'flex', marginBottom: 20, alignItems: 'end', justifyContent: 'center',}}>
                <div className={`microphone_circle ${isAnimating ? 'animated' : 'stopped'}`}></div>
                <div className='inner_Mike' onClick={handlefillColor} style={{backgroundColor: backColor}}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  focusable="false" style={{pointerEvents: 'none', display: 'block', width: 42, height: 100,}}>
                    <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z" 
                    fill={fillColor}></path></svg>
                </div>
            </div>
        </Box>
    </Modal>
    </div> 

    {/* <div className='Microphone_Dropdown' style={{display: isOpen ? 'flex' : 'none'}}>

    </div> */}
    </> );
}

export default MicrophoneDropdown;