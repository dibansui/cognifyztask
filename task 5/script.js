const fetchButton = document.getElementById('fetchButton');
const dataContainer = document.getElementById('api-data-container');


fetchButton.addEventListener('click', function() {
    
    dataContainer.innerHTML = '<p>Loading data...</p>';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            
            dataContainer.innerHTML = '';

        
            data.slice(0, 5).forEach(post => {
                
                const postDiv = document.createElement('div');
                postDiv.style.border = '1px solid #ddd';
                postDiv.style.margin = '10px 0';
                postDiv.style.padding = '10px';
                postDiv.style.borderRadius = '5px';
                postDiv.style.backgroundColor = '#f9f9f9';

                postDiv.innerHTML = `
                    <h3 style="color: navy;">${post.title}</h3>
                    <p>${post.body}</p>
                `;

                dataContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            dataContainer.innerHTML = '<p style="color: red;">Failed to load data.</p>';
        });
});