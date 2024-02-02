document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const featuredImage = document.querySelector('#gallery figure img'); // Reference to the large image
    const thumbnailList = document.querySelectorAll('#gallery ul li img'); // Reference to all thumbnail images

    // Add click event listener to each thumbnail
    thumbnailList.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {

            // Set the featured image source to the clicked thumbnail
            var image = this.src.replace('small', 'large'); // Replace 'small' with 'large' in the thumbnail source

            featuredImage.src = image; // Set the source of the large image to the modified source

            featuredImage.alt = image.split('/')[4]; // Extract and set the filename as alt attribute

            // Generate a title from the filename with the first letter of each word capital
            var imageTitle = (featuredImage.alt.split('-')[0] + " " + featuredImage.alt.split('-')[1])
                .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

            // Update the caption with the generated title
            document.querySelector('#gallery figure figcaption').textContent = imageTitle;

            // Remove 'active' class from all thumbnails///
            thumbnailList.forEach(item => item.classList.remove('active'));

            // Add 'active' class to the clicked thumbnail
            this.classList.add('active');

        });
    });
});
