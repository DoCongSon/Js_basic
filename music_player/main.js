const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dashboard__header = $('.dashboard__header h3');
const thums_CD = $('.thums-CD');
const audio = $('#audio');
const cd = $('.CD');
const toggel_play = $('.toggel_play-button');
const toggel_play_icon = $('.toggel_play-button span');
const progress = $('.progress');
const previous = $('.skip_previous-button');
const next = $('.skip_next-button');
const replay = $('.replay-button');
const shuffle = $('.shuffle-button');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isReplay: false,
    isShuffle: false,
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
            name: 'Độ tộc 2',
            singer: 'Masew, Độ Mixi, Phúc Du, Pháo',
            path: './assets/music/DoToc2-MasewDoMixiPhucDuPhao.mp3',
            img: './assets/img/dotoc.jpg'
        },
        {
            name: 'Thê lương',
            singer: 'Phúc Chinh',
            path: './assets/music/TheLuong-PhucChinh.mp3',
            img: './assets/img/theluong.jpg'
        },
        {
            name: 'Sài Gòn đau lòng quá',
            singer: 'Hứa Kim Tuyền, Hoàng Duyên',
            path: './assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen.mp3',
            img: './assets/img/saigondaulongqua.jpg'
        },
        {
            name: ' Chúng ta sau này',
            singer: 'T.R.I',
            path: './assets/music/ChungTaSauNay-TRI.mp3',
            img: './assets/img/chungtasaunay.jpg'
        },
        {
            name: 'Nàng thơ',
            singer: 'Hoàng Dũng',
            path: './assets/music/NangTho-HoangDung.mp3',
            img: './assets/img/nangtho.jpg'
        },
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
        const cdWidth = cd.offsetWidth;
        
        // sử lý cd quay
        const cd_animate = cd.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 20000,
            // Infinity: vô hạn
            // lặp vô hạn
            iterations: Infinity 
        })
        cd_animate.pause();
        
        // sử lý thu phóng CD
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
            cd_animate.play();
        }

        // sử lý khi pause
        audio.onpause = function() {
            _this.isPlaying = false;
            toggel_play_icon.innerText = 'play_arrow';
            cd_animate.pause();
        }

        // Sử lý khi thời gian phát thay đổi (bài hát đang phát => timeupdate thay đổi)
        // sử lý thay đổi thanh progress khi phát nhạc
        audio.ontimeupdate = function() {
            // trong này this === audio
            const progress_percent = this.currentTime/ this.duration * 100;
            if (progress_percent) {
                progress.value = progress_percent.toFixed(0);
            }
        }
        // sử lý khi tua trên thanh progress
        progress.onchange = function(e) {
            // 2 cách giống nhau
            // const time_progress = progress.value / 100 * audio.duration;
            const time_progress = e.target.value / 100 * audio.duration;
            
            if (time_progress) {
                audio.currentTime = time_progress.toFixed(0);
            }
        }

        // sử lý khi ấn next bài hát
        next.onclick = function () {
            if (_this.isShuffle) {
               _this.shuffleSong(); 
            } else {
                _this.nextSong();
            }
            if (_this.isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        }

        // sử lý khi ấn previous bài hát
        previous.onclick = function () {
            if (_this.isShuffle) {
                _this.shuffleSong(); 
            } else {
                _this.previousSong();
            }
            if (_this.isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        }

        // sử lý khi ấn replay bài hát
        replay.onclick = function() {
            _this.isReplay = !_this.isReplay;
            this.classList.toggle('active', _this.isReplay);
        }

        // sử lý khi ấn shuffle bài hát
        shuffle.onclick = function() {
            _this.isShuffle = !_this.isShuffle;
            this.classList.toggle('active', _this.isShuffle);
        }

        // sử lý khi bài hát kết thúc
        audio.onended = function() {
            if (!_this.isReplay) {
                next.click();
            }
            audio.play();
        }
    },
    // render HTML
    render: function() {
        var htmls = this.songs.map(function(song, index) {
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
        this.songActive();
    },

    loadCurrentSong: function() {
        dashboard__header.innerText = this.currentSong.name;
        thums_CD.style.backgroundImage = `url(${this.currentSong.img})`;
        audio.src = this.currentSong.path;
    },

    nextSong: function () {
        if(this.currentIndex >= this.songs.length - 1) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
        this.loadCurrentSong();
        this.songActive();
    },

    previousSong: function () {
        if(this.currentIndex <= 0) {
            this.currentIndex = this.songs.length - 1;
        }
        else {
            this.currentIndex--;
        }
        this.loadCurrentSong();
        this.songActive();
    },

    replaySong: function () {
        if (this.isReplay) {
            audio.replay();
        }
    },

    shuffleSong: function () {
        let newCurentIndex;
        do {
            newCurentIndex = Math.floor(Math.random() * this.songs.length)
        } while (newCurentIndex === this.currentIndex);
        this.currentIndex = newCurentIndex;
        this.loadCurrentSong();
    },

    songActive: function () {
        $$('.song').forEach((element, index) => {
            if (element.classList.length === 2) {
                element.classList.remove('active');
            }
            if (this.currentIndex === index) {
                element.classList.add('active');
            }
        });
    },

    start: function() {
        this.definePropertys();
        this.handleEvents();

        this.loadCurrentSong()

        this.render()
    }
}

app.start();