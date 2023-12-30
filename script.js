const $ = (id) => {
    return document.getElementById(id);
};

const $days = $('days');
const $hours = $('hours');
const $minutes = $('minutes');
const $seconds = $('seconds');
const targetDate = new Date('2023-12-31T23:59');

const updateTimer = () => {
    let totalInSec = Math.floor(
        (targetDate.valueOf() - new Date().valueOf()) / 1000
    );

    if (totalInSec < 0) {
        totalInSec = 0;
    }

    const seconds = Math.floor(
        totalInSec % 60
    );

    const minutes = Math.floor(
        (totalInSec / 60) % 60
    );
    const hours = Math.floor(
        (totalInSec / (60 * 60)) % 24
    );
    const days = Math.floor(
        totalInSec / (60 * 60 * 24)
    );
    const format = (num) => {
        return `${num}`.padStart(2, '0');
    };

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
};

setInterval(updateTimer, 1000);

