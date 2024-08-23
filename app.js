// JSON data (you can imagine this being fetched from an API)
const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    { id: 4, name: "Emily Davis", email: "emily@example.com" },
    { id: 5, name: "William Brown", email: "william@example.com" }
];

// Function to render the search results
function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `<strong>${item.name}</strong> - ${item.email}`;
            resultsContainer.appendChild(div);
        });
    }
}

// Function to handle the search
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    
    const filteredResults = data.filter(item => {
        return item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query);
    });
    renderResults(filteredResults);
}

// Attach event listener to the search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
