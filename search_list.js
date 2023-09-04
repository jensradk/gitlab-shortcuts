window.addEventListener('load', function () {
    this.window.setTimeout(() => {
        // Add number shortcuts for the branches in the list:
        var projectList = document.querySelectorAll('[class="project-row"]');
        var shortcutList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 0; i < Math.min(10, projectList.length); i++) {
            var shortcut = shortcutList[i];
            var project = projectList[i];
            var projectLink = project.querySelector('[class="text-plain gl-mr-3 js-prefetch-document"]');
            projectLink.insertBefore(document.createTextNode('(alt+' + shortcut + ') '), projectLink.firstChild);
            projectLink.setAttribute('accesskey', shortcut.toString());
        }
    }, 250)
})