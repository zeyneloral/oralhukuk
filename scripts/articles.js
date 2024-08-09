
// Fetch articles from the API
async function fetchArticles() {
    try {
        const response = await fetch('https://66b299d07fba54a5b7ea129a.mockapi.io/articles/articles');
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

// Display articles on the page
function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = '';

    // Sort articles by ID
    articles.sort((a, b) => a.id - b.id);

    // Create article elements
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <button onclick="viewArticle('${article.id}')">Read More</button>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// View article details
function viewArticle(articleId) {
    window.location.href = `article.html?id=${articleId}`;
}


// Fetch and display articles on page load
window.onload = fetchArticles;
