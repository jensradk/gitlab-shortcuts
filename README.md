# Add (more) shortcuts to various pages of gitlab

## Missing pages:
- https://gitlab.cego.dk/*/-/pipelines


## Notes
https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
// Alternative to load event
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
