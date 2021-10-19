import MediaPlayer from "../MediaPlayer";

class AutoPlay{

    constructor(){

    }

    run(player: MediaPlayer){
        if (!player.media.muted) {
            player.media.muted = true;
          }
          //player.play(); //lo comenté porque estaba dando el error:
          //DOMException: The play() request was interrupted by a call to pause()
          //ya que el AutoPause también está llamanando al método player.play()
          //el cual pausa el video si se está reproduciendo
    }
}

export default AutoPlay;