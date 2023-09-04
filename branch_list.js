window.addEventListener('load', function () {
    this.window.setTimeout(() => {
        // Add z, x, c and v shortcuts for the different subpages:
        var elOverview = this.document.querySelector('[title="Show overview of the branches"');
        elOverview.insertBefore(document.createTextNode('(alt+z) '), elOverview.firstChild);
        elOverview.setAttribute('accesskey', 'z');

        var elActive = document.querySelector('[title="Show active branches"]');
        elActive.insertBefore(document.createTextNode('(alt+x) '), elActive.firstChild);
        elActive.setAttribute('accesskey', 'x')

        var elStale = document.querySelector('[title="Show stale branches"]');
        elStale.insertBefore(document.createTextNode('(alt+c) '), elStale.firstChild);
        elStale.setAttribute('accesskey', 'c')
        
        var elAll = document.querySelector('[title="Show all branches"]');
        elAll.insertBefore(document.createTextNode('(alt+v) '), elAll.firstChild);
        elAll.setAttribute('accesskey', 'v')

        // Add number shortcuts for the branches in the list:
        var branchContainerList = document.querySelectorAll('[data-qa-selector="branch_container"]');
        var shortcutList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 0; i < Math.min(10, branchContainerList.length); i++) {
            var shortcut = shortcutList[i];
            var branchContainer = branchContainerList[i];
            var branchLink = branchContainer.querySelector('[data-qa-selector="branch_link"]');
            branchLink.insertBefore(document.createTextNode('(alt+' + shortcut + ') '), branchLink.firstChild);
            branchLink.setAttribute('accesskey', shortcut.toString());
        }
    }, 250)
})