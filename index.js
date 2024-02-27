function Toggle()
{
    if (window.getComputedStyle(document.getElementById("newsContainerOpen")).display === "none") {
        document.getElementById("newsContainerClosed").style.display = "none";
        document.getElementById("newsContainerOpen").style.display = "block";
    }
    else
    {
        document.getElementById("newsContainerClosed").style.display = "flex";
        document.getElementById("newsContainerOpen").style.display = "none";
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("no-gutters");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

    const cardData = [
        { title: 'StarkNet', description: 'Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2', img: 'Frame 237621.png', expected: '$500 - $5000', probability: '90 %' },
        { title: 'Scroll', description: 'is Ethereum\'s second tier scaling solution that reduces transaction cost and speeds up transfers', img: 'Frame 237620.png', expected: '$500 - $5000', probability: '89 %' },
        { title: 'zkSync', description: 'Is a non-custodial (OTC) crypto wallet that allow you receive, store and send cryptocurrency asset.', img: 'Frame 237616.png', expected: '$500 - $5000', probability: '80 %' },
        { title: 'Metamask', description: 'Is a non-custodial crypto wallet that allow you receive, store and send cryptocurrency asset.', img: 'Frame 237618.png', expected: '$500 - $5000', probability: '85 %' },
        { title: 'LayerZero', description: 'LayerZero is an Omnichain communication protocol designed to simplify message passing across', img: 'Frame 237619.png', expected: '$500 - $5000', probability: '78 %' },
        { title: 'Arbitrum Nova', description: 'Nova powers dapps with high transaction volumes that seek to drive costs even lower, for Game', img: 'Frame 237597.png', expected: '$500 - $5000', probability: '55 %' },
        { title: 'Polygon zkEVM', description: 'Polygon zkEVM Beta is the leading ZK scaling solution that is equivalent to Ethereum Virtual Machine.', img: 'Frame 237623.png', expected: '$500 - $5000', probability: '80 %' },
        { title: 'Zora',  description: 'Zora is a decentralized protocol where anyone can permissionlessly buy, sell, and create. We\'ve created a', img: 'Frame 237624.png', expected: '$500 - $5000', probability: '80 %' },
        { title: 'DeBank', description: 'DeBank creates a cryptocurrency wallet that allows users to access decentralized finance', img: 'Frame 237617.png', expected: '$500 - $5000', probability: '70 %' },
        { title: 'Venom', description: 'Venom is Layer-0 blockchain to power a global ecosystem of Web3 apps.', img: 'Frame 237596.png', expected: '$500 - $5000', probability: '?? %' },
        { title: 'OnePercent', description: 'is a Latin America\'s leader in blockchain solutions. ', img: 'Frame 237622.png', expected: '$500 - $5000', probability: '?? %' },
        { title: 'OnePercent2', description: 'is a Latin America\'s leader in blockchain solutions. ', img: 'Frame 237622.png', expected: '$500 - $5000', probability: '?? %' },
    ];

    const cardContainer = document.getElementById('cardContainer');


    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];

        const cardElement = document.createElement('div');

        cardElement.innerHTML = `
  <div id = "${card.title}" class="card">
            <div class="card-body">
                <div class="card-title">
                    <img  src="./assets/logos/${card.img}" alt="${card.title}"/>
                    <h5 class="card-name">${card.title}</h5>
                </div>
                <p class="card-text description">
                   ${card.description}
                </p>
                <div class="read-more">Read more</div>

                <div class="rect">

                    <div>
                        <div class="onAI">On artificial AI:</div>
                        <div class="exp-air">expected airdrop</div>
                        <div class="exp-air-value">${card.expected}</div>
                    </div>
                    <div style="margin-left: 56px">
                        <div class="probability">probability</div>
                        <div class="probability-value">${card.probability}</div>
                    </div>
                </div>

                <div class="tariff-cost-row">
                    <div class="tariff">Tariff</div>
                    <div class="cost">Cost, $</div>
                </div>

                <div class="accounts-row">
                    <div class="accounts-quantity">5 accounts</div>
                    <div class="accounts-cost">150</div>
                    <div class="accounts-detail">Detail</div>
                </div>
                <div class="accounts-row">
                    <div class="accounts-quantity">10 accounts</div>
                    <div class="accounts-cost">300</div>
                    <div class="accounts-detail">Detail</div>
                </div>
                <div class="accounts-row">
                    <div class="accounts-quantity">15 accounts</div>
                    <div class="accounts-cost">450</div>
                    <div class="accounts-detail">Detail</div>
                </div>
                <div class="accounts-row">
                    <div class="accounts-quantity">20 accounts</div>
                    <div class="accounts-cost">600</div>
                    <div class="accounts-detail">Detail</div>
                </div>
                <div class="accounts-row">
                    <div class="accounts-quantity">25 accounts</div>
                    <div class="accounts-cost">750</div>
                    <div class="accounts-detail">Detail</div>
                </div>
                <div class="accounts-row">
                    <div class="accounts-quantity">30 accounts</div>
                    <div class="accounts-cost">900</div>
                    <div class="accounts-detail">Detail</div>
                </div>

                <button type="button" class="btn btn-light">Buy</button>
                <div class="card-btn-content">Choose a suitable tarif and click the button</div>
            </div>
            </div>
    `;

        cardContainer.appendChild(cardElement);
    }

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const arrowleft = document.querySelector('.arrow-left');
    const arrowright = document.querySelector('.arrow-right');
    const logos = [
        './assets/logos/Frame 237596.png', './assets/logos/Frame 237597.png',
        './assets/logos/Frame 237616.png', './assets/logos/Frame 237617.png',
        './assets/logos/Frame 237618.png', './assets/logos/Frame 237619.png',
        './assets/logos/Frame 237620.png', './assets/logos/Frame 237621.png',
        './assets/logos/Frame 237622.png', './assets/logos/Frame 237623.png',
        './assets/logos/Frame 237624.png', './assets/logos/Frame 237596.png',
        './assets/logos/Frame 237597.png', './assets/logos/Frame 237616.png',
        './assets/logos/Frame 237617.png', './assets/logos/Frame 237618.png',
        './assets/logos/Frame 237619.png', './assets/logos/Frame 237620.png',
        './assets/logos/Frame 237621.png', './assets/logos/Frame 237622.png',
        './assets/logos/Frame 237623.png', './assets/logos/Frame 237624.png',
        './assets/logos/Frame 237596.png', './assets/logos/Frame 237597.png',
        './assets/logos/Frame 237616.png', './assets/logos/Frame 237617.png',
        './assets/logos/Frame 237618.png', './assets/logos/Frame 237619.png',
        './assets/logos/Frame 237620.png', './assets/logos/Frame 237621.png',
        './assets/logos/Frame 237622.png', './assets/logos/Frame 237623.png',
        './assets/logos/Frame 237624.png', './assets/logos/Frame 237596.png',
        './assets/logos/Frame 237597.png', './assets/logos/Frame 237616.png',
    ];


    const anchors = [
        'Venom','Arbitrum Nova','zkSync','Metamask','LayerZero','Arbitrum Nova', 'Polygon zkEVM','Zora','DeBank','Venom','OnePercent',
        'StarkNet','Scroll','zkSync','Metamask','LayerZero','Arbitrum Nova', 'Polygon zkEVM','Zora','DeBank','Venom','OnePercent',
        'StarkNet','Scroll','zkSync','Metamask','LayerZero','Arbitrum Nova', 'Polygon zkEVM','Zora','DeBank','Venom','OnePercent',
        'StarkNet','Zora','Venom','Arbitrum Nova','zkSync'
    ]
    const logosCount = 19;
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(${-currentIndex * 110}px)`;
    }

    function showNextLogos() {
        if (currentIndex < logosCount - 12) {
            console.log(currentIndex)
            currentIndex += 3;
            updateSlider();
        }
        else {
            currentIndex = 0;
            updateSlider();
        }
    }

    function showPrevLogos() {
        if (currentIndex >= 3) {
            currentIndex -= 3;
            updateSlider();
        }
    }

    arrowright.addEventListener('click', showNextLogos);
    arrowleft.addEventListener('click', showPrevLogos);

    for (let i = 0; i < logos.length; i++) {
        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'logo-wrapper';
        slider.appendChild(logoWrapper);

        const logoElement = document.createElement('img');
        logoElement.src = logos[i];
        logoElement.alt = 'Logo';
        logoElement.className = 'logo';
        logoWrapper.appendChild(logoElement);

        const anchor = anchors[i];
        logoWrapper.addEventListener('click', function() {
            let element = document.getElementById(anchor);
            let offset = element.offsetTop - 100;
            scrollToSmoothly(offset, 500);
        });
    }

    function scrollToSmoothly(targetPosition, duration) {
        const startPosition = window.scrollY || window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scrollAnimation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }

});