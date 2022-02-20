export class MediaPlayer {
	constructor(config) {
		this.media = config.element;
	}

	play = () => this.media.play();
	pause = () => this.media.pause();

	togglePlayPause = () => (this.media.paused ? this.play() : this.pause());
}

// export default MediaPlayer;
