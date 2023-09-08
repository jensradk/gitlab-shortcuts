// Add z, x, c and v shortcuts for the different subpages:
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

// Add number shortcuts for the merge requests in the list:
var mergeRequestContainerList = [];
document.querySelectorAll('li').forEach((elLi) => {
    if (elLi.classList.contains('merge-request')) {
        mergeRequestContainerList.push(elLi);
    }
});

var shortcutList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (var i = 0; i < Math.min(10, mergeRequestContainerList.length); i++) {
    var shortcut = shortcutList[i];
    var branchContainer = mergeRequestContainerList[i];
    var mergeRequestLink = branchContainer.querySelector('[class="js-prefetch-document"]');
    mergeRequestLink.insertBefore(document.createTextNode('(alt+' + shortcut + ') '), mergeRequestLink.firstChild);
    mergeRequestLink.setAttribute('accesskey', shortcut.toString());
}

// Add n accesskey to "New merge request" button:
var elBtnNewBranch = document.querySelector('[class="gl-button btn btn-md btn-confirm "]');
if (elBtnNewBranch != null) {
    elBtnNewBranch.setAttribute('accesskey', 'n');
    var elBtnNewBranchText = elBtnNewBranch.querySelector('[class="gl-button-text"]');
    elBtnNewBranchText.innerHTML = 'New merge request (alt+n)';
}