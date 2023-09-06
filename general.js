// If there is an element with a data-track-label = 'branches', add b accesskey to it
var elBranchesButton = document.querySelector('[data-track-label="branches"]');
if (elBranchesButton != null) {
    elBranchesButton.setAttribute('accesskey', 'b');

    var branchesButtonText = elBranchesButton.querySelector('[class="gl-flex-grow-1 gl-text-gray-900 gl-truncate-end"]');
    if (branchesButtonText != null) {
        branchesButtonText.innerHTML = ' Branches (alt+b)';
    }
}