const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Play with Fire",
        artist: 'Sam',
        url: 'http://dl.stream.qqmusic.qq.com/C400002M2O7s2TfKGW.m4a?guid=7778252452&vkey=022C2DB27D471533E80766AB4AAACD38AC42378045203E873E584C6F228DD849535314C42A9E718B3F3D0C1A3D771F5409369545B503850F&uin=0&fromtag=66',
        cover: 'https://s2.ax1x.com/2019/03/19/AuuZp6.jpg',
      },
      {
        name: 'Eversleeping',
        artist: 'Xandria',
        url: 'http://183.131.48.143/amobile.music.tc.qq.com/C400003RLRN81E7IE5.m4a?guid=7778252452&vkey=D5DD927F9F7B6D85B82B9913E2AE214360579861EC044D3C24D7AD48E731568FC5C90516A57EC3803B39FC634A1CA12EA663235647E40108&uin=0&fromtag=66',
        cover: 'https://s2.ax1x.com/2019/03/19/AuuAt1.jpg',
      },
      {
        name: 'Viva La Vida',
        artist: 'Coldplay',
        url: 'http://183.131.48.143/amobile.music.tc.qq.com/C400004Uab9y2RNMRO.m4a?guid=7778252452&vkey=878F4489FA06963E408F82ABBCEA7B5113C1525642E916D7499FAA743468032A1381EAD3699222CFEA2D942A41853C876A2195CAE3D94877&uin=0&fromtag=66',
        cover: 'https://s2.ax1x.com/2019/03/19/AuunXD.jpg',
      }
    ]
});