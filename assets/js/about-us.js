(function () {
    $(function () {
        $(".vegas-slider").vegas({
            slides: [
                { src: 'assets/images/about-us/Cow Tech1.jpg' },
                 
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
             
                 { src: 'assets/images/about-us/Smart Farming 2.jpg' },
                
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

                { src: 'assets/images/about-us/IoT Cows2.jpg' },
              
        
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