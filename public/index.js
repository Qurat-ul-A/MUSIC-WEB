let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbarItem=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})

let musicSection=document.getElementById('music');
let isplaying=true;

musicSection.addEventListener('click',function(event){

    // function for play button 
    let TargetedElement = event.target;

    // select play button using class 'options' 
    if(TargetedElement.className.includes('Options')){
        let selected =document.querySelector('.Selected');
        let img =TargetedElement.parentElement.parentElement.querySelector('.img')
        let music =TargetedElement.previousElementSibling.previousElementSibling;
        let sounds =document.getElementsByTagName('audio');
        let playElements =document.getElementsByClassName('fa-pause')

        // set loop for pause 
        for(let i = 0; i < sounds.length; i++){
            // pause all sound 
            if(sounds[i].play) sounds[i].pause();

            //changing pause icons to play
            if(playElements[i]) playElements[i].classList.replace('fa-pause','fa-play-circle');

            //remove the 'playmusic' class from all the images
            document.querySelectorAll('.img').forEach(function (img){
                img.classList.remove('playmusic')
            })
        }

        //checking the condition for playing
        if(isplaying){
            music.play();
            isplaying=false;
            TargetedElement.classList.replace('fa-play-circle','fa-pause');
            img.classList.add('playmusic')
        }else{
            music.pause();
            music.currentTime=0; //reset playback to the beginning
            isplaying=true;
            TargetedElement.classList.replace('fa-pause','fa-play-circle');
            img.classList.remove('playmusic');
        }
         //remove the selected elements
         if(selected) selected.classList.remove('Selected');

         //adding class to a targeted element so we will able to select it later
         TargetedElement.parentElement.parentElement.classList.add('Selected')
    }
})