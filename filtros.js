const filterSelect = document.querySelector('#filter');
const productTable = document.querySelector('#product-table');

filterSelect.addEventListener('change', () => {
  const filterValue = filterSelect.value;
  const rows = productTable.rows;

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const categoryCell = row.cells[2]; // Assuming the category is in the third column

    if (filterValue === '' || categoryCell.textContent.trim() === filterValue) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
});