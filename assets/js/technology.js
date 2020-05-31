(function () {
    $(function () {
        $(".vegas-slider").vegas({
            slides: [
                { src: 'assets/images/technology/Connected cow2.jpg' },
                 
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });

        $(".vegas-slider-2").vegas({
            slides: [   
             
                 { src: 'assets/images/technology/Connected Cow1.jpg' },
                
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });


        $(".vegas-slider-3").vegas({
            slides: [

                { src: 'assets/images/technology/Smart Farming 3.png' },
              
        
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });

        $(".vegas-slider-4").vegas({
            slides: [

                { src: 'assets/images/technology/E_Elyx_01.png' },
                { src: 'assets/images/technology/E_Elyx_02.png' },
                { src: 'assets/images/technology/E_Elyx_08.png' },
                { src: 'assets/images/technology/E_Elyx_9.png' },
                { src: 'assets/images/technology/E_Elyx_11.png' },
                { src: 'assets/images/technology/E_Elyx_12.png' },
                { src: 'assets/images/technology/E_Elyx_15.png' },
                { src: 'assets/images/technology/E_Elyx_17.png' },
              
        
            ],
            overlay: 'assets/vendor/vegas/overlays/10.png',
            transition: 'zoomIn',
            transitionDuration: 4000,
            delay: 10000,
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
            animationDuration: 20000,
        });
    })
}());