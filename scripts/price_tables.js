let pricing = document.getElementById('pricing');
let btnWeb2 = document.getElementById('btnWeb2');
let btnAds = document.getElementById('btnAds');
let btnSmm2 = document.getElementById('btnSmm2');
let btnBusiness2 = document.getElementById('btnBusiness2');

let webPricesDetailed = document.getElementById('web-prices-detailed');
let advertisingPricesDetailed = document.getElementById('advertising-prices-detailed');
let smmPricesDetailed = document.getElementById('smm-prices-detailed');
let businessPricesDetailed = document.getElementById('business-prices-detailed');

// generate a table and a call-to-action button
function generateTable (divID, figcaption, tableId, td1, td2,
td3, td4, td5, td6, td7, td8) {
    let div = document.createElement('div');
    pricing.appendChild(div);
    div.setAttribute('id', divID);
    div.classList.add('prices-block');

    let figure = document.createElement('figure');
    div.appendChild(figure);
    let figcap = document.createElement('figcaption');
    figure.appendChild(figcap);
    figcap.innerHTML = figcaption;

    let table = document.createElement('table');
    figure.appendChild(table);
    table.setAttribute('id', tableId);
    table.classList.add('detailed-prices');

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.innerHTML = 'Service';
    let th2 = document.createElement('th');
    tr1.appendChild(th2);
    th2.innerHTML = 'Price';

    let tr2 = document.createElement('tr');
    table.appendChild(tr2);
    let tdOne = document.createElement('td');
    tr2.appendChild(tdOne);
    tdOne.innerHTML = td1;
    let tdTwo = document.createElement('td');
    tr2.appendChild(tdTwo);
    tdTwo.innerHTML = td2;

    let tr3 = document.createElement('tr');
    table.appendChild(tr3);
    let tdThree = document.createElement('td');
    tr3.appendChild(tdThree);
    tdThree.innerHTML = td3;
    let tdFour = document.createElement('td');
    tr3.appendChild(tdFour);
    tdFour.innerHTML = td4;

    let tr4 = document.createElement('tr');
    table.appendChild(tr4);
    let tdFive = document.createElement('td');
    tr4.appendChild(tdFive);
    tdFive.innerHTML = td5;
    let tdSix = document.createElement('td');
    tr4.appendChild(tdSix);
    tdSix.innerHTML = td6;

    let tr5 = document.createElement('tr');
    table.appendChild(tr5);
    let tdSeven = document.createElement('td');
    tr5.appendChild(tdSeven);
    tdSeven.innerHTML = td7;
    let tdEight = document.createElement('td');
    tr5.appendChild(tdEight);
    tdEight.innerHTML = td8;

    let submit = document.createElement('div');
    figure.appendChild(submit);
    submit.classList.add('submit');
    let a = document.createElement('a');
    submit.appendChild(a);
    a.setAttribute('class', 'call-to-action');
    a.setAttribute('href', 'contact.html');
    a.innerHTML = 'submit your application';
    span = document.createElement('span');
    a.appendChild(span);
}

let webTable = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            executed = true;
            generateTable('web-prices-detailed', 'Detailed Prices for Web Development', 'web-prices', 'Landing Page', 'from 1,200,000 soums', 'Corporate Website', 'from 2,000,000 soums', 'Site-catalog', 'from 5,000,000 soums', 'Online Store', 'from 9,000,000 soums');
            webPricesDetailed.scrollIntoView();
        }
    };
})();

btnWeb2.addEventListener('click', webTable); // executed only once

let adsTable = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            executed = true;
            generateTable('advertising-prices-detailed', 'Detailed Prices for Advertisement and Promotion', 'advertising-prices', 'Advertising in Yandex', 'from 600,000 soums', 'Google Ads', 'from 1,000,000 soums', 'Setting Up Ads in Mobile Applications', 'from 1,500,000 soums', 'SEO Promotion', 'from 2,500,000 soums');
            advertisingPricesDetailed.scrollIntoView();
        }
    };
})();

btnAds.addEventListener('click', adsTable); // executed only once

let smmTable = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            executed = true;
            generateTable('smm-prices-detailed', 'Detailed Prices for Social Media Marketing', 'smm-prices', 'Facebook Ads', 'from 700,000 soums', 'Instagram Ads', 'from 900,000 soums', 'Advertising in Telegram Channels', 'from 1,400,000 soums', 'Advertising on 5 Social Media Platforms', 'from 4,000,000 soums');
            smmPricesDetailed.scrollIntoView();
        }
    };
})();

btnSmm2.addEventListener('click', smmTable); // executed only once

let businessTable = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            executed = true;
            generateTable('business-prices-detailed', 'Detailed Prices for Business Tools', 'business-prices', 'Designing Logo and Banners', 'from 1,000,000 soums', 'Creating a Telegram Bot', 'from 1,400,000 soums', 'Website Optimization', 'from 1,600,000 soums', 'Payment System Integration', 'from 2,200,000 soums');
            businessPricesDetailed.scrollIntoView();
        }
    };
})();

btnBusiness2.addEventListener('click', businessTable); // executed only once