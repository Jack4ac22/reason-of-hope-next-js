export default function OverlayPage() {
  return (
    <>
      <div id="overlay-item">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

// over laying component on top of the page... usestate to show hid, another useState to set the url, a third usestate to the loading state another usestate for the returned data from the fetch request via fetchUrl.js. then useEffect to set the loading to false when the returned data state is set. then a conditional to show the loading state or the returned data state. then a button to close the overlay and a button to open the url in a new tab.
//  check the response type and see how it will be displayed in overlay... innerhtml or iframe or something else.