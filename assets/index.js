const video = document.querySelector('video');
const button = document.querySelector('button');

class MediaPlayer {
	constructor(config) {
		this.media = config.element;
	}

	play = () => this.media.play();
	pause = () => this.media.pause();

	togglePlayPause = () => (this.media.paused ? this.play() : this.pause());
}

const player = new MediaPlayer({ element: video });

button.onclick = () => player.togglePlayPause();
// function MediaPlayer(config) {
// 	this.media = config.element;
// }
// const MediaPlayer = (config) => (this.media = config.element);

// MediaPlayer.prototype.play = () => this.media.play();

// MediaPlayer.prototype.pause = () => this.media.pause();

// const player = new MediaPlayer({ element: video });

// button.onclick = () => {
// 	player.paused ? player.play() : player.play();
// };
