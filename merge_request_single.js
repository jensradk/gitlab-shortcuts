window.addEventListener('load', function () {
    this.window.setTimeout(() => {
    
        var elShow = document.querySelectorAll('[data-action="show"]')[1];
        elShow.insertBefore(document.createTextNode('(alt+z) '), elShow.firstChild);
        elShow.setAttribute('accesskey', 'z')

        var elCommits = document.querySelectorAll('[data-action="commits"]')[1];
        elCommits.insertBefore(document.createTextNode('(alt+x) '), elCommits.firstChild);
        elCommits.setAttribute('accesskey', 'x')
        
        var elPipelines = document.querySelectorAll('[data-action="pipelines"]')[1];
        elPipelines.insertBefore(document.createTextNode('(alt+c) '), elPipelines.firstChild);
        elPipelines.setAttribute('accesskey', 'c')
        
        var elDiffs = document.querySelectorAll('[data-action="diffs"]')[1];
        elDiffs.insertBefore(document.createTextNode('(alt+v) '), elDiffs.firstChild);
        elDiffs.setAttribute('accesskey', 'v')
    }, 250)
})