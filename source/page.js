
const main = document.getElementById('main');
const intro = document.getElementById('intro-sect');

const style = document.createElement('link');   // general page style
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', './page.css');
document.head.appendChild(style);

const textCol = document.createElement('div');
const imgCol = document.createElement('div');
const title = document.createElement('h2');
const description = document.createElement('p');
const imgSlice = document.createElement('img');

textCol.setAttribute('id', 'text-col');
imgCol.setAttribute('id', 'img-col');
title.setAttribute('id', 'intro-title');
description.setAttribute('id', 'intro-description');
imgSlice.setAttribute('src', './images/vs-code.png');
imgSlice.setAttribute('alt', 'VS Code window');
// imgSlice.style.height = '500px'; // TODO temp

title.textContent = 'Visual Studio Code.';
description.textContent = 'Is a free, open-source, cross-platform source code editor. It’s a '
    + 'lightweight yet powerful tool that can be used to edit, debug, and build code for a '
    + 'variety of programming languages, including JavaScript, Python, C++, and many others. '
    + 'VS Code provides many features that help developers write code efficiently, such as code '
    + 'completion, syntax highlighting, debugging, Git integration, and more. It has a wide '
    + 'range of extensions and plugins available that allow developers to customize their editing '
    + 'environments and add support for additional languages and frameworks.';

intro.appendChild(textCol);
intro.appendChild(imgCol);
textCol.appendChild(title);
textCol.appendChild(description);
imgCol.appendChild(imgSlice);
