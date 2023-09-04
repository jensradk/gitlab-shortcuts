window.addEventListener('DOMContentLoaded', function () {
    this.window.setTimeout(() => {
        // Add z, x, c and v shortcuts for the different subpages:
        var elAll = this.document.querySelector('[data-testid="pipelines-tab-all"');
        elAll.insertBefore(document.createTextNode('(alt+z) '), elAll.firstChild);
        elAll.setAttribute('accesskey', 'z');

        var elFinished = document.querySelector('[pipelines-tab-finished]');
        elFinished.insertBefore(document.createTextNode('(alt+x) '), elFinished.firstChild);
        elFinished.setAttribute('accesskey', 'x')

        var elBranches = document.querySelector('[data-testid="pipelines-tab-branches"]');
        elBranches.insertBefore(document.createTextNode('(alt+c) '), elBranches.firstChild);
        elBranches.setAttribute('accesskey', 'c')
        
        var elTags = document.querySelector('[data-testid="pipelines-tab-tags"]');
        elTags.insertBefore(document.createTextNode('(alt+v) '), elTags.firstChild);
        elTags.setAttribute('accesskey', 'v')

        // Add number shortcuts for the merge requests in the list:
        var pipelineList = document.querySelectorAll('[data-testid="pipeline-table-row"]');
        var shortcutList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 0; i < Math.min(10, pipelineList.length); i++) {
            var shortcut = shortcutList[i];
            var pipeline = pipelineList[i];
            var pipelineLink = pipeline.querySelector('[class="text-plain gl-mr-3 js-prefetch-document"]');
            pipelineLink.insertBefore(document.createTextNode('(alt+' + shortcut + ') '), pipelineLink.firstChild);
            pipelineLink.setAttribute('accesskey', shortcut.toString());
        }
    }, 250)
})