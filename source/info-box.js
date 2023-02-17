const SUMMARY = "summary";
const DETAILS = "details";

class InfoBox extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open'});
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'wrapper');
        shadow.appendChild(wrapper);

        /* TODO move */
        this.style.width = "100%";

        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', './info-box.css');
        shadow.appendChild(style);

        /* create main 2 containers of info section */
        const summary = document.createElement('div');
        const details = document.createElement('div');
        summary.setAttribute('id', SUMMARY);
        details.setAttribute('id', DETAILS);
        wrapper.setAttribute('state', 'summary');
        wrapper.appendChild(summary);

        const summaryTitle = document.createElement('div');
        const summaryName = document.createElement('h3');
        const summaryStep = document.createElement('h4');
        summaryTitle.setAttribute('id', 'summary-title');
        summaryName.setAttribute('id', 'summary-name');
        summaryName.textContent = 'Title';
        summaryStep.setAttribute('id', 'summary-step');
        summaryStep.textContent = '#';
        summary.appendChild(summaryTitle);
        summaryTitle.appendChild(summaryName);
        summaryTitle.appendChild(summaryStep);

        const description = document.createElement('p');
        description.setAttribute('id', 'summary-description');
        summary.appendChild(description);

        const time = document.createElement('span');
        const timeIcon = document.createElement('span');
        const timeNum = document.createElement('span');
        time.setAttribute('id', 'summary-time');
        timeIcon.setAttribute('id', 'time-icon');
        timeNum.setAttribute('id', 'time-number');
        summary.appendChild(time);
        time.appendChild(timeIcon);
        time.appendChild(timeNum);
        timeNum.innerHTML = `0 min`;


        // wrapper.appendChild(details);


        const detailsTitle = document.createElement('div');
        const detailsName = document.createElement('h3');
        const detailsExit = document.createElement('h4');
        detailsTitle.setAttribute('id', 'details-title');
        detailsName.setAttribute('id', 'details-name');
        detailsName.textContent = 'Title';
        detailsExit.textContent = 'Exit';
        details.appendChild(detailsTitle);
        detailsTitle.appendChild(detailsName);
        detailsTitle.appendChild(detailsExit);

        const tutorial = document.createElement('video');
        
        const errorsTitle = document.createElement('h5');
        const errorsList = document.createElement('ul');
        const error1 = document.createElement('li');
        const error2 = document.createElement('li');
        error1.textContent = "This is an error";
        error2.textContent = "Another bug!";
        errorsTitle.textContent = 'Common Errors';
        errorsList.appendChild(error1);
        errorsList.appendChild(error2);
        details.appendChild(errorsTitle);
        details.appendChild(errorsList);

        const checksTitle = document.createElement('h5');
        const checksList = document.createElement('ul');
        checksTitle.textContent = 'Check It Works';
        details.appendChild(checksTitle);
        details.appendChild(checksList);
        

        this.setName = (t) => {
            summaryName.textContent = t;
            detailsName.textContent = t;
        }

        this.setStep = (s) => {
            summaryStep.textContent = s;
        }

        this.setDescription = (d) => {
            description.textContent = d;
        }

        this.setTime = (t) => {
            if (t <= 4) {
                timeIcon.setAttribute('class', 'fast');
            } else if (t <= 7) {
                timeIcon.setAttribute('class', 'medium');
            } else if (t <= 10) {
                timeIcon.setAttribute('class', 'slow');
            } else {
                timeIcon.setAttribute('class', 'eternity');
            }
            timeNum.innerHTML = t + ' min';
        }

        this.getName = () => {
            return summaryName.textContent;
        }

        // const openDetailsEvent = new CustomEvent('openDetails', {
        //     bubbles: true,
        //     composed: true,
        // });

        // const closeDetailsEvent = new CustomEvent('closeDetails', {
        //     bubbles: true,
        //     composed: true,
        // });

        /**
         * State 1: Summary --> remove summary & append details
         * State 2: Details --> do nothing
         */
        this.openDetails = () => {
            if (wrapper.firstChild.getAttribute('id') === SUMMARY) {
                wrapper.removeChild(summary);
                wrapper.appendChild(details);
                wrapper.setAttribute('state', 'details');
                console.log('Summary --> Details');
            }
        }

        /**
         * State 1: Summary --> do nothing
         * State 2: Details --> remove details & append summary
         */
        this.closeDetails = () => {
            if (wrapper.firstChild.getAttribute('id') === DETAILS) {
                wrapper.removeChild(details);
                wrapper.appendChild(summary);
                wrapper.setAttribute('state', 'summary');
                console.log('Details --> Summary');
            }
        }

        
    }
}

customElements.define('info-box', InfoBox);
export default InfoBox;