let toggle_state = false;

const background = document.getElementById("backgroundVideo");
const toggle = document.getElementById("toggle-riv-anim");
//const loader = document.getElementById("loader-div");



// Adiciona um evento de clique ao canvas
toggle.addEventListener('click', () => {
    delay("https://dribbble.com/caroliina888");
});

function delay(URL) {
    if (!toggle_state) {
        setTimeout(() => { 
            window.open(URL, '_blank'); // Abre o URL em uma nova aba
        }, 1500);
        toggle_state = true;
    } else {
        toggle_state = false;
    }
}



const r_toggle = new rive.Rive({
    //src: "https://firebasestorage.googleapis.com/v0/b/proseniortv2.appspot.com/o/toggle_experiment.riv?alt=media&token=4281b29f-e2aa-4ae2-a6df-50bfa9208098",
    src: "./toggle_experiment.riv",
    //resources/riv/toggle_experiment.riv
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: toggle, // Use o elemento toggle como canvas
    autoplay: true,
    stateMachines: "State Machine 1",
    automaticallyHandleEvents: true,
    onLoad: () => {

        r_toggle.resizeDrawingSurfaceToCanvas();
        console.log("Fez load da anim");

        // Define o z-index do elemento de fundo como -1
        setTimeout(() => { 
            //loader.style.display = "none";
            background.style.zIndex = -1;
            window.scrollTo(0, 0);
        }, 1000);

        
    }
});


/*==============================================================================================================================================*/

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-wrapper');
    const content = document.getElementById('content');


    setTimeout(() => { 
        // Oculta o loader e revela o conteúdo
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 500);

    
});


