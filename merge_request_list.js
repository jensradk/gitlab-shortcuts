var elOpened = document.getElementById('state-opened');
elOpened.insertBefore(document.createTextNode('(alt+z) '), elOpened.firstChild);
elOpened.setAttribute('accesskey', 'z')

var elMerged = document.getElementById('state-merged');
elMerged.insertBefore(document.createTextNode('(alt+x) '), elMerged.firstChild);
elMerged.setAttribute('accesskey', 'x');

var elClosed = document.getElementById('state-closed');
elClosed.insertBefore(document.createTextNode('(alt+c) '), elClosed.firstChild);
elClosed.setAttribute('accesskey', 'c');

var elAll = document.getElementById('state-all');
elAll.insertBefore(document.createTextNode('(alt+v) '), elAll.firstChild);
elAll.setAttribute('accesskey', 'v');