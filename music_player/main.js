const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dashboard__header = $('.dashboard__header h3');
const thums_CD = $('.thums-CD');
const audio = $('#audio');
const cd = $('.CD');
const toggel_play = $('.toggel_play-button');
const toggel_play_icon = $('.toggel_play-button span');

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            name: 'Cưới thôi',
            singer: 'Masew-Maisu, Bray, TAP',
            path: './assets/music/CuoiThoi-MasewMasiuBRayTAP.mp3',
            img: './assets/img/cuoithoi.jpg'
        },
        {
            name: 'Không phải dạng vừa đâu',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/KhongPhaiDangVuaDau-SonTungMTP.mp3',
            img: './assets/img/khongphaidangvuadau.jpg'
        },
        {
            name: 'Ái nộ',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/AiNo-MasewKhoiVu.mp3',
            img: './assets/img/aino.png'
        },
        {
            name: 'Ái nộ',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/AiNo-MasewKhoiVu.mp3',
            img: './assets/img/aino.png'
        },
        {
            name: 'Ái nộ',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/AiNo-MasewKhoiVu.mp3',
            img: './assets/img/aino.png'
        },
        {
            name: 'Ái nộ',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/AiNo-MasewKhoiVu.mp3',
            img: './assets/img/aino.png'
        },
        {
            name: 'Ái nộ',
            singer: 'Masew, Khôi Vũ',
            path: './assets/music/AiNo-MasewKhoiVu.mp3',
            img: './assets/img/aino.png'
        }
    ],
    // Định nghĩa các thuộc tính cho Object
    definePropertys: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    // hàm sử lý sự kiện
    handleEvents: function() {
        const _this = this;
        // sử lý thu phóng CD
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            // window.scrollY ~ document.documentElement.scrollTop
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            
        
            cd.style.width = (newCdWidth > 0) ? newCdWidth + 'px' : 0; 
            cd.style.height = (newCdWidth > 0) ? newCdWidth + 'px' : 0; 
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // sử lý click play
        toggel_play.onclick = function() {
            // ! chú ý:
            // * _this === app
            // * còn this là toggel_play
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        // sử lý khi play
        audio.onplay = function() {
            _this.isPlaying = true;
            toggel_play_icon.innerText = 'pause';
        }

        audio.onpause = function() {
            _this.isPlaying = false;
            toggel_play_icon.innerText = 'play_arrow';
        }
    },
    // render HTML
    render: function() {
        var htmls = this.songs.map(function(song) {
            return `<div class="song">
            <div class="song__thumb" style="background-image: url(${song.img})"></div>
            <div class="song__info">
              <h3 class="song__name">${song.name}</h3>
              <p class="song__singer">${song.singer}</p>
            </div>
            <div class="song__more">
              <span class="material-icons-round">
                more_horiz
              </span>
            </div>
          </div>`
        }).join('\n');
        $('.playlists').innerHTML = htmls;
    },

    loadCurrentSong: function() {
        dashboard__header.innerText = this.currentSong.name;
        thums_CD.style.backgroundImage = `url(${this.currentSong.img})`;
        audio.src = this.currentSong.path
    },

    start: function() {
        this.definePropertys();
        this.handleEvents();

        this.loadCurrentSong()

        this.render()
    }
}

app.start();