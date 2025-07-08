
const form = document.getElementById("product-form");
const tableBody = document.querySelector("#product-table tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("product-id").value.trim();
    const name = document.getElementById("product-name").value.trim();
    const price = document.getElementById("product-price").value.trim();
    const qty = document.getElementById("product-qty").value.trim();

    if (!id || !name || !price || !qty) {
        alert("Please fill all fields!");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${parseFloat(price).toFixed(2)}</td>
        <td>${qty}</td>
        <td>
            <button onclick="updateRow(this)">Update</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
    form.reset();
});

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.remove();
}

function updateRow(btn) {
    const row = btn.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    document.getElementById("product-id").value = cells[0].innerText;
    document.getElementById("product-name").value = cells[1].innerText;
    document.getElementById("product-price").value = cells[2].innerText;
    document.getElementById("product-qty").value = cells[3].innerText;

    row.remove(); 
}
