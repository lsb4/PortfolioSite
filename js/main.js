$(document).ready(

    // Feature Images Effect
    
    function(){
        $('.featureOne').mouseover(
            function(){
                $('.imgOne').css('transform','scale(10.9) translateX(14.5px) translateY(13.5px)');
                $('.imgOne').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureOne').mouseout(
            function(){
                $('.imgOne').css('transform','scale(1.0)');
                $('.imgOne').css('box-shadow','none');
            }
        )

        $('.featureTwo').mouseover(
            function(){
                $('.imgTwo').css('transform','scale(10.9) translateX(8.8px) translateY(13.5px)');
                $('.imgTwo').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureTwo').mouseout(
            function(){
                $('.imgTwo').css('transform','scale(1.0)');
                $('.imgTwo').css('box-shadow','none');
            }
        )

        $('.featureThree').mouseover(
            function(){
                $('.imgThree').css('transform','scale(10.9) translateX(3.0px) translateY(13.5px)');
                $('.imgThree').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureThree').mouseout(
            function(){
                $('.imgThree').css('transform','scale(1.0)');
                $('.imgThree').css('box-shadow','none');
            }
        )

        $('.featureFour').mouseover(
            function(){
                $('.imgFour').css('transform','scale(10.9) translateX(-3px) translateY(13.5px)');
                $('.imgFour').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureFour').mouseout(
            function(){
                $('.imgFour').css('transform','scale(1.0)');
                $('.imgFour').css('box-shadow','none');
            }
        )

        $('.featureFive').mouseover(
            function(){
                $('.imgFive').css('transform','scale(10.9) translateX(-9px) translateY(13.5px)');
                $('.imgFive').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureFive').mouseout(
            function(){
                $('.imgFive').css('transform','scale(1.0)');
                $('.imgFive').css('box-shadow','none');
            }
        )

        $('.featureSix').mouseover(
            function(){
                $('.imgSix').css('transform','scale(10.9) translateX(-15px) translateY(13.5px)');
                $('.imgSix').css('box-shadow', '0px 0px 5px rgb(49, 49, 49)');
            }
        )
        $('.featureSix').mouseout(
            function(){
                $('.imgSix').css('transform','scale(1.0)');
                $('.imgSix').css('box-shadow','none');
            }
        )
    }
)