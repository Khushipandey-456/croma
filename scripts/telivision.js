

  function renderProducts(productsToRender) {
    const gallery = document.getElementById('product-gallery');
    gallery.innerHTML = '';
    productsToRender.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
      `;
      gallery.appendChild(productDiv);
    });
  }

  function updateGallery() {
    const category = document.getElementById('category').value;
    const sort = document.getElementById('sort').value;

    // Filter products by category
    if (category === 'all') {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(product => product.category === category);
    }

    // Sort products
    if (sort === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-asc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update pagination and render products
    showPage(currentPage);
  }

  function showPage(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    renderProducts(currentProducts);

    // Update pagination buttons
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = endIndex >= filteredProducts.length;
  }

  function changePage(direction) {
    currentPage += direction;
    showPage(currentPage);
  }

  // Initialize
  updateGallery();