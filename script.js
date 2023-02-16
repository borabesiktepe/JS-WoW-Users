const playerBox = document.querySelector(".player-box");
const searchButton = document.querySelector(".search-box button");
const container = document.querySelector(".container");
const classArt = document.querySelector(".art");
const classAmblem = document.querySelector(".class-amblem");

playerBox.style.display = "none";

searchButton.addEventListener("click", () => {
    const ID = document.querySelector(".search-box input").value;

    if (ID === "")
        return;

    fetch(`http://localhost:8080/user?id=${ID}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);

            playerBox.style.display = "block";

            const userName = document.querySelector(".player-box .user-name");
            const userLevel = document.querySelector(".player-box .user-level");
            const userClass = document.querySelector(".player-box .user-class");
            const userMail = document.querySelector(".player-box .user-mail p");

            userName.innerHTML = `${json.userName}`;
            userLevel.innerHTML = `${parseInt(json.userLevel)}`;
            userClass.innerHTML = `${json.userClass}`;
            userMail.innerHTML = `${json.email}`;

            document.title = `User :: ${json.userName}`;

            switch (json.userClass) {
                case "Warrior":
                    container.style.backgroundColor = "#221411";
                    container.style.color = "#aa936d";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt54d5579252c664a5/5ee3e475e35f99710ac78ec3/79ERIMWIO8R71457037487361.jpg')";
                    classArt.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0832522d9b547a53/5ee3e474d217327180733d15/WBKV55DJH5K41457037487603.png">';
                    classAmblem.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte5777795e548c8c9/5ee3e476fc5bec085f1e6551/RPOZRXV8MCMC1457037487166.png">';
                    break;

                case "Mage":
                    container.style.backgroundColor = "#140e1a";
                    container.style.color = "#aa936d";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blta6f57671066f6ebe/5ee3e44f14a7bc718bab5fa4/35VSGIBOT25W1457037534604.jpg')";
                    classArt.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte2fbb62dd8f59369/5ee3e44d14a7bc718bab5f9e/0F6G3KI710BK1457037534522.png">';
                    classAmblem.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt56494dcd20feee74/5ee3e450e8f74907ecce0124/OGQYW3GHV8RL1457037534068.png">';
                    break;

                case "Warlock":
                    container.style.backgroundColor = "#1c0905";
                    container.style.color = "#aa936d";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5aa3a5a6600613cc/5ee3e8c318f34d710497c5cf/MXE8KIC3809W1457037494415.jpg')";
                    classArt.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5966b0c7ee968577/5ee3e8c2a7c560086afc4009/PFZ6V66EDO9R1457037494021.png">';
                    classAmblem.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8cee1118340e0529/5ee3e8c5a9170407eeb4b79d/ODSDYFWLT9B01457037493681.png">';
                    break;

                case "Death Knight":
                    container.style.backgroundColor = "#05131c";
                    container.style.color = "#aa936d";
                    document.body.style.background = "url('https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8188691206e90b90/5ee3e3d63a8621077a04a2fa/645V41F29QLU1457037563514.jpg')";
                    classArt.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt53c129fceb86b6e0/5ee3e3d5e35f99710ac78ebd/W4Q96YE42NCC1457037563833.png">';
                    classAmblem.innerHTML = '<img src="https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8bfa36196bf61105/5ee3e3d7889f917094610ea0/IMLWRYPWBRYL1457037563416.png">';
                    break;
            }
        })
        .catch((error) => {
            console.log(error)
            alert("Something went wrong..");
        });
})