class MediaPlayer {

    public media: HTMLMediaElement;
    public container: HTMLElement;
    private plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        //yo no quiero que los plugins tengan acceso a todo el object (this)
        //estabamos pasando plugin.run(this); pero lo cambiamos
        //ahora utilizamos getters y setters para ocultar info a los plugins:
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
    pause() {
        this.media.pause();
    }
    mute() {
        if (this.media.muted) {
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }
    unmute() {
        this.media.muted = false;
    }
}






export default MediaPlayer;