// Asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Element where data will be displayed

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert the response to JSON

        // Clear the existing loading message
        dataContainer.innerHTML = '';

        // Create an unordered list to display the user names
        const userList = document.createElement('ul');

        // Loop through the user data and create a list item for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as text
            userList.appendChild(listItem); // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors if the fetch operation fails
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Run the fetchUserData function after the DOM has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
