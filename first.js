// first.js

document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://products.qikink.com//assetsroot/admin/mockups/all_products.json";
    const container = document.getElementById("product-container");
  
    // Fetch data from API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        console.log(data); // check structure in console
        displayProducts(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        container.innerHTML = "<p>Failed to load products.</p>";
      });
  
    // Function to generate product cards
    function displayProducts(products) {
      container.innerHTML = ""; // Clear previous content
  
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card col-md-3 m-2";
        card.setAttribute("onclick", "selectCategory(this)");
        card.setAttribute("data-title", product.title || "No Title");
        card.setAttribute("data-image", product.image || "");
  
        card.innerHTML = `
          <img
            src="${product.image || 'placeholder.jpg'}"
            class="card-img-top img-fluid"
            alt="${product.title || 'Product'}"
            loading="lazy"
          />
          <div class="card-body">
            <p class="card-text text-center categories-card-title">
              ${product.title || "Unnamed Product"}
            </p>
          </div>
        `;
  
        container.appendChild(card);
      });
    }
  });
  