let srcText = `Test that should be typed goes there!`
					i = 0;
					result = srcText[i];
				setInterval(() => {
					if(i == srcText.length-1) {
						clearInterval(this);
						return;
					};
					i++;
					result += srcText[i];
				 var target = document.querySelector("#typed-target");
				 target.innerText = result;
                }, 109); // the period between every character and next one, in milliseonds.
                
    // HTML will look like that:           
    //         <div id="typed">
    //             <span id="typed-target"></span>
    //             <span id="typed-cursor">|</span>
    //         </div>
    
    // Sass for animated cursor:
    //     typed-cursor
    //         opacity: 1
    //         font-weight: 800
    //         animation: blink .7s infinite
    //     @keyframes blink 
    //         0%, 100%
    //             opacity: 1
    //         50%
    //             opacity: 0
