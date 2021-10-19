import MediaPlayer from "../MediaPlayer";

class AutoPause{

    private threshold: number;
    private player: MediaPlayer;

    constructor(){

        //threshold: umbral, cada vez que la intercepción entre el contenedor y el elemento target sea del 20% ejecuta el callback
        this.threshold = 0.20;

        //como el que llama al handleInterserction es
        //el IntersectionObserver, en el método 
        //handleInterserction no existe el this.threshold
        //porque el this.threshold existe en la clase AutoPause
        //por lo tanto debemos bindear al 
        //handleInterserction de forma permantente con el objeto AutoPause
        this.handleInterserction = this.handleInterserction.bind(this);

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player: MediaPlayer){
        
        this.player = player;
        const observer = new IntersectionObserver(this.handleInterserction, {
            threshold: this.threshold,//umbral de porcentaje de intersección del elemento con su contenedor ("porcentaje visible")
        });
        observer.observe(player.media); //observe el player.media, el contenedor será toda nuestra pantalla

        //le pasamos el callback handleVisibilityChange, por lo tanto cuando se ejecute handleVisibilityChange
        //su this será el EventListener, por eso se hace el bind en el constructor
        //para forzar a que cada vez que se ejecute el handleVisibilityChange su contexto de ejecución (this) sea la clase AutoPause.
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    private handleVisibilityChange(){
        if( document.visibilityState === "visible" ){
            this.player.play();
        }else{
            this.player.pause();
        }
    }

    private handleInterserction(entries: IntersectionObserverEntry[]){//entries es todos los elementos a observar.
        const entry: IntersectionObserverEntry = entries[0]; //en este caso solo es un elemento a observar

        console.log(entry.intersectionRatio);
        if(entry.intersectionRatio > this.threshold){
            this.player.play();
        }else{
            this.player.pause();
        }

        console.log(entry);
    }
}

export default AutoPause;