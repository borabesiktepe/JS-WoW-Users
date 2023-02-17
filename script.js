const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const playerBox = document.querySelector(".player-box");
const classArt = document.querySelector(".art img");
const classAmblem = document.querySelector(".class-amblem img");

playerBox.style.display = "none";

searchButton.addEventListener("click", () => {
    const userID = searchInput.value;

    if (userID === "")
        return;

    fetch(`http://127.0.0.1:8080/user?id=${userID}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            if (json.status === 400) {
                searchInput.value = "";
                searchInput.placeholder = "Invalid ID";
                return;
            }

            document.title = `User :: ${json.userName}`;
            playerBox.style.display = "";
            playerBox.classList.add("fadeIn");
            container.style.color = "#aa936d";
            container.style.height = "288px";

            const userName = document.querySelector(".player-box .user-name");
            const userLevel = document.querySelector(".player-box .user-level");
            const userClass = document.querySelector(".player-box .user-class");
            const userMail = document.querySelector(".player-box .user-mail p");

            userName.innerHTML = `${json.userName}`;
            userLevel.innerHTML = `${parseInt(json.userLevel)}`;
            userClass.innerHTML = `${json.userClass}`;
            userMail.innerHTML = `${json.email}`;

            switch (json.userClass) {
                case "Warrior":
                    container.style.backgroundColor = "#221411";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt54d5579252c664a5/5ee3e475e35f99710ac78ec3/79ERIMWIO8R71457037487361.jpg')";
                    classArt.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0832522d9b547a53/5ee3e474d217327180733d15/WBKV55DJH5K41457037487603.png";
                    classAmblem.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte5777795e548c8c9/5ee3e476fc5bec085f1e6551/RPOZRXV8MCMC1457037487166.png";
                    break;

                case "Mage":
                    container.style.backgroundColor = "#140e1a";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blta6f57671066f6ebe/5ee3e44f14a7bc718bab5fa4/35VSGIBOT25W1457037534604.jpg')";
                    classArt.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte2fbb62dd8f59369/5ee3e44d14a7bc718bab5f9e/0F6G3KI710BK1457037534522.png";
                    classAmblem.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt56494dcd20feee74/5ee3e450e8f74907ecce0124/OGQYW3GHV8RL1457037534068.png";
                    break;

                case "Warlock":
                    container.style.backgroundColor = "#1c0905";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5aa3a5a6600613cc/5ee3e8c318f34d710497c5cf/MXE8KIC3809W1457037494415.jpg')";
                    classArt.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5966b0c7ee968577/5ee3e8c2a7c560086afc4009/PFZ6V66EDO9R1457037494021.png";
                    classAmblem.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8cee1118340e0529/5ee3e8c5a9170407eeb4b79d/ODSDYFWLT9B01457037493681.png";
                    break;

                case "Death Knight":
                    container.style.backgroundColor = "#05131c";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8188691206e90b90/5ee3e3d63a8621077a04a2fa/645V41F29QLU1457037563514.jpg')";
                    classArt.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt53c129fceb86b6e0/5ee3e3d5e35f99710ac78ebd/W4Q96YE42NCC1457037563833.png";
                    classAmblem.src = "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8bfa36196bf61105/5ee3e3d7889f917094610ea0/IMLWRYPWBRYL1457037563416.png";
                    break;

                default:
                    container.style.background = "#fff";
                    document.body.style.background = "";
                    classArt.src = "";
                    classAmblem.src = "";
            }
        })
        .catch((error) => {
            console.log(error)
            alert("Something went wrong..");
        });
})

particlesJS("particles-js",
    {
        "particles": {
            "number": {
                "value": 47,
                "density": {
                    "enable": true,
                    "value_area": 868.0624057955
                }
            },
            "color": {
                "value": "#a81f00"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3235505330692318,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3.945738208161363,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 14.385614385614385,
                    "size_min": 3.196803196803197,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });