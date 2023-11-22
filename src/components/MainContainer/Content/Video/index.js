import React from 'react';
import { dp1, dp2, dp3, dp4, dp5, dp6 } from '../../../../Images/index';

function Video({isSidebarOpen}) {

    const sidebarStyle = {
        width: isSidebarOpen ? '350px' : '400px',
        height: isSidebarOpen ? '300px' : '350px',
        transition: 'all 0.3s ease',
      };

    const Data =[
        {
            id: 1,
            caption:{
                first_title:"FAMILY GUY'S MOSTkkk OFFENSIVE JOKES",
                ChannelName:"SidemenReacts",
                third_title:"17M views • 1 vear ado",
            },
            iframe: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autop',
            profile_pic: dp1,

        },
        {
            id:2,
            caption:{
                first_title:"madara uchiha badass edite anime",
                ChannelName:"ZIN0X999",
                third_title:"235 views • 1 day ago",
            },
            iframe: "https://www.youtube.com/embed/8rFGO-bI1zw?si=xnh0F3QlPdc1qVvs",
            profile_pic: dp2,
        },
        {
            id:3,
            caption:{
                first_title:"Attack on Titan Final Trailer | The Final Season Part 4 | Official",
                ChannelName:"151=# #h-Anime PONY CANYON O",
                third_title:"4.9M views • 3 days ago",
            },
            iframe: 'https://www.youtube.com/embed/E7WytLM2KvY?si=QRYVlnuXqsfXeMR9',
            profile_pic: dp3,
        },
        {
            id:4,
            caption:{
                first_title:"[Amv] MASAMUNE-KUN NO REVENGE I| TO'THE BONE",
                ChannelName:"Yayat [Amv] **",
                third_title:"899K views • 2 years ago",
            },
            iframe: 'https://www.youtube.com/embed/tJSnmsGzgn4?si=tdMgv2RC4O2XPoYU',
            profile_pic: dp4,
        },
        {
            id:5,
            caption:{
                first_title:"Naruto Shippuden Badass Edit - Sharingan [Edit/AMV]",
                ChannelName:"PXRPLE",
                third_title:"485 views • 2 days ago",
            },
            iframe: 'https://www.youtube.com/embed/h8qVyg3vq8I?si=Ky5wVx2tsFwKpIgo',
            profile_pic: dp5,
        },
        {
            id:6,
            caption:{
                first_title:"Tower of God - TOP Stray Kids (Opening) | ENGLISH Ver | AmaLee",
                ChannelName:"LeeandLie (AmaLee) •",
                third_title:"1.5M views • 3 years ago",
            },
            iframe: 'https://www.youtube.com/embed/WQvjiU6Nw3A?si=vGkNcPn5Y9aztHsS',
            profile_pic: dp6,
        },
        {
            id:7,
            caption:{
                first_title:"I Am Death",
                ChannelName:"Zurik 23M O",
                third_title:"10M views • 9 months ago",
            },
            iframe: 'https://www.youtube.com/embed/TGqWphOB9io?si=d_iHqaukqwiV_hz1',
            profile_pic: dp1,
        },
        {
            id:8,
            caption:{
                first_title:"NARUTO revives MADARA in the Boruto anime to face the Otsutsuki...",
                ChannelName:"Lucas Ideale ©",
                third_title:"1.2M views • 1 year ago",
            },
            iframe: 'https://www.youtube.com/embed/-78sapZjWTY?si=bAZTTnyXIHY8kupZ',
            profile_pic: dp2,
        },
        {
            id:8,
            caption:{
                first_title:"The Legend Of Hei (2021) - Official Trailer (HD)",
                ChannelName:"Shout! Studios ©",
                third_title:"248K views • 2 years ago",
            },
            iframe: 'https://www.youtube.com/embed/Ps0O9l2CvOM?si=Kjk-AiUOP90jy8Ih',
            profile_pic: dp3,
        },
        {
            id:9,
            caption:{
                first_title:"Mashiro Tsukiyuki - Bakuten!!/Backflip!! || all sreen time ...",
                ChannelName:"Hailee Starkes",
                third_title:"212K views • 2 years ago",
            },
            iframe: 'https://www.youtube.com/embed/J5EqIllzt2M?si=FsuJTBZ9cu36ntQS',
            profile_pic: dp4,
        },
        {
            id:10,
            caption:{
                first_title:"Noblesse - Frankenstein Meet His Master Raizel For The First Time",
                ChannelName:"Farah Sablee",
                third_title:"45K views • 2 years ago",
            },
            iframe: 'https://www.youtube.com/embed/hw5RPnCxMKA?si=hnvxhKffNclBjsW2',
            profile_pic: dp5,
        }
    ]
    return ( 
        <>
        <div className="videos">
                    {Data.map((items, id)=>{
                        return(
                            <div key={id}>

                    <div className='video_1' style={sidebarStyle}>
                        <div className='video_child'>
                            <iframe src={items.iframe} 
                            style={{width: '-webkit-fill-available', height: '-webkit-fill-available', border: 'none', borderRadius: '15px', }} 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='caption_child'>
                            <div className='caption_img'>
                                <div style={{height: '40px', width: '40px', borderRadius: '50%', display: 'flex',}}>
                                    <img src={items.profile_pic} alt="dp_images" style={{borderRadius: '50%'}}/>
                                </div>
                            </div>
                            <div className='caption_content'>
                                <div style={{width: '250px'}} title={items.caption.first_title}>
                                    <span style={{fontWeight: "500"}}>{items.caption.first_title}</span>
                                </div>
                                <div style={{fontSize: '14px', }} title={items.caption.ChannelName}>
                                    <span>{items.caption.ChannelName} </span>
                                </div>
                                <div style={{fontSize: '12px', }}>
                                    <span>{items.caption.third_title}</span>
                                </div>
                                <div className='three_dots'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                            </div>
                        )
                    })}
                </div>
        </>
     );
}

export default Video;