/**
 * @module Main
 */

import * as gl from './globals.js';
import InfoBox from './info-box.js';

// Add styles
const style = document.createElement('link');   // general page style
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', './index.css');
document.head.appendChild(style);

const files = ['1-intro', '2-dev-box', '3-drive', '4-gvfs', '5-repo', 
        '6-vs-code', '7-razzle', '8-changes', '9-undo', '10-ac-monitors',
        '11-ac-razzle', '12-ac-vs-code', '13-report', '14-find',
        '15-contact'];

window.addEventListener('DOMContentLoaded', init);

async function init() {
    setData();
    // const data = fetchData();
    // if (data != null) {
    //     populateData(data);
    // }
}

async function setData() {
    try {
        // fetch each .json file all at once (sync)
        let responses = files.map((file) => fetch(`data/${file}.json`));
        responses = await Promise.all(responses);
        let data = responses.map((res) => res.json());
        data = await Promise.all(data);
        // return data;
        populateData(data);
    } catch(e) {
        if (e instanceof TypeError) {
            console.error(gl.FETCH_NET_ERR);
        } else if (e instanceof SyntaxError) {
            console.error(gl.FETCH_SYN_ERR);
        } else {
            console.error(`[UNKNOWN ERROR]: ${e}`);
        }
        // return null;
    }
}

async function populateData(data) {
    for (let i = 0; i < files.length; i++) {
        const listElem = document.createElement('li');
        listElem.setAttribute('state', 'summary');
        const box = new InfoBox();
        console.log(data[i].step + ': ' + data[i].name);
        box.setName(data[i].name);
        box.setStep(i + 1);
        box.setDescription(data[i].description);
        box.setTime(data[i].time);
        box.shadowRoot.firstChild.setAttribute('priority', data[i].priority);
        listElem.appendChild(box);
        document.getElementById(data[i].section).appendChild(listElem);
    }
}