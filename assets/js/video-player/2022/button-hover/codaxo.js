var myFP = fluidPlayer("video", {
   layoutControls: {
     controlBar: {
       autoHideTimeout: 3,
       animated: true,
       autoHide: true,
     },
     htmlOnPauseBlock: {
       html: null,
       height: null,
       width: null,
     },
     autoPlay: false,
     mute: true,
     allowTheatre: true,
     playPauseAnimation: true,
     playbackRateEnabled: true,
     allowDownload: false,
     playButtonShowing: true,
     fillToContainer: false,
     posterImage: "/assets/img/thumbnail/2022/button-hover/codaxo.png",
   },
   vastOptions: {
     adList: [],
     adCTAText: false,
     adCTATextPosition: "",
   },
 });