let audio = document.querySelector('audio');
const btn = document.querySelector('button');

    audio.play();
    let isPlaying = true;

	function togglePlay() {
			isPlaying ? audio.pause() : audio.play();
		};
		audio.onplaying = () => {
			isPlaying = true;
		};
		audio.onpause = () => {
			isPlaying = false;
        };	
    
    btn.addEventListener('click', togglePlay); 