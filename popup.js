/* ----------------------- script for extension popup ----------------------- */

// will handle admin link click...
document.querySelector('.admin-link').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.runtime.sendMessage({message: 'admin_link_clicked'});
});

// will handle user sign in...
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    // getting current values of the form.
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const invite = document.querySelector('#invite').value;

    // sending a post request to the server, which will store the user in the database.
    fetch('http://localhost:3000/new_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            invite 
        })
    })
    .then(res => res.json())
    .then(data => {
        // storing the user id in the local storage, which will be needed to send images to the server, in content.js.
        chrome.storage.local.set({userid: data.userid});
        // messaging the background.js, to open the eLitmus homepage and start the webcam.
        chrome.runtime.sendMessage({message: 'user_signed_in', name});
    })
    .catch(err => console.log(err));
});