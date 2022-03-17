function greatQuotesSlider() {
    const data = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        // "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        // "Не спеши выполнять приказ — его могут отменить.",
        // "Тому, кто сам ничего не делает, все кажется по плечу.",
        // "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        // "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        // "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        // "Не будь незаменимым — тебя никогда не повысят.",
        // "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];
    const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];
    let count = 0;
    let slideCollection;

    const programStart = function (event) {
        event.stopPropagation();
        this.classList.add('hide');
        renderQuote();
    };

    const renderQuote = () => {
        const outputField = document.querySelector('.wrap');
        for (let i = 0; i < data.length; i++) {
            let blockForSlide = document.createElement('div');
            blockForSlide.classList.add('slide');
            if (i !== 0) blockForSlide.classList.add('hide');
            if (i === 0) blockForSlide.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
            let quoteInSlide = document.createElement('div');
            quoteInSlide.textContent = data[i];
            blockForSlide.append(quoteInSlide);
            outputField.append(blockForSlide);
        }
        outputField.addEventListener('click', showSlide);
        slideCollection = document.querySelectorAll('.slide');
    };

    const showSlide = (event) => {
        hideSingleSlide(count);
        if (count + 1 < data.length) {
            count++;
        }
        else {
            count = 0;
        }
        showSingleSlide(count);
    };

    const showSingleSlide = (n) => {
        slideCollection[n].classList.remove('hide');
        slideCollection[n].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
    };

    const hideSingleSlide = (n) => {
        slideCollection[n].classList.add('hide');
    };

    const randomInteger = (min, max) => {
        // случайное число от min до (max+1)
        let randomNum = min + Math.random() * (max + 1 - min);
        return Math.floor(randomNum);
    };

    document.querySelector('.btn-start').addEventListener('click', programStart);
}

document.addEventListener("DOMContentLoaded", greatQuotesSlider);
