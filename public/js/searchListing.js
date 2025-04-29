const searchInput = document.getElementsByClassName("searchInput")[0];
const listingBox = document.getElementsByClassName("singleListing");
const listingTitles = document.getElementsByClassName("title"); // Changed to listingTitles (plural)
const noListingMessage = document.createElement('p'); // Create a new paragraph element for the message
noListingMessage.textContent = "No listings found.";
noListingMessage.classList.add("no-listings"); // Add a class for potential styling
const myBody = document.getElementById("myBody");
// Initially hide the message
noListingMessage.style.display = 'none';

// Append the message element after the listing container (you might need to adjust this based on your HTML structure)
if (listingBox.length > 0 && listingBox[0].parentNode) {
    listingBox[0].parentNode.appendChild(noListingMessage);
} else if (listingTitles.length > 0 && listingTitles[0].parentNode) {
    listingTitles[0].parentNode.appendChild(noListingMessage);
} else if (searchInput && searchInput.parentNode) {
    searchInput.parentNode.appendChild(noListingMessage);
} else {
    console.error("Could not find a suitable parent to append the 'no listings' message.");
}

searchInput.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase(); // Convert input to lowercase once
    let foundListing = false; // Flag to track if any listing is visible

    // Iterate through each listing title element
    for (let i = 0; i < listingTitles.length; i++) {
        const titleElement = listingTitles[i];
        const titleTextElement = titleElement.querySelector('b'); // Find the <b> tag within the current title
        let isVisible = false;

        if (titleTextElement) {
            const titleText = titleTextElement.textContent.toLowerCase(); // Get lowercase text
            isVisible = titleText.includes(inputValue);
        }

        // Assuming listingBox corresponds to listingTitles by index
        if (listingBox[i] && listingBox[i].classList) {
            listingBox[i].classList.toggle("hide", !isVisible); // Use classList directly
            if (isVisible) {
                foundListing = true; // Set the flag to true if at least one listing is visible
            }
        }
    }

    // Show or hide the "no listings" message based on the foundListing flag
    console.log(inputValue);
    // if(inputValue==""){
    //     myBody.style.height=" ";
    //     myBody.style.height="100%";
    // }
    
    // if (noListingMessage) {
    //     myBody.style.height=" ";
    //     myBody.style.height="100vh";
    // }

    if (inputValue == "") {
        myBody.style.height = "100%";
      } else if (noListingMessage) {
        myBody.style.height = "100vh";
      }
});