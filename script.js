document.addEventListener('DOMContentLoaded', (event) => {
    const profilePic = document.getElementById('profilePic');
    profilePic.addEventListener('load', () => {
        console.log("Natural Height of the profile picture:", profilePic.naturalHeight);
    });

    const timeContainer = document.getElementById('timeContainer');
    const dayContainer = document.getElementById('dayContainer');

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        timeContainer.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
    }

    function updateDay() {
        const now = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysOfWeek[now.getDay()];
        dayContainer.textContent = `Today is ${day}`;
    }


    setInterval(updateTime, 1000);
    updateTime();
    updateDay();
});
