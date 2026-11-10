
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

// Add Student
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value.trim();

    // Remove empty message
    const emptyRow = document.getElementById("emptyRow");

    if (emptyRow) {
        emptyRow.remove();
    }

    // Combine full name
    const fullName = `${firstName} ${middleName ? middleName + " " : ""}${lastName}`;

    // Create table row
    const row = document.createElement("tr");

    // Add student information
    const values = [fullName, email, course, year, section];

    values.forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Create Remove button
    const actionCell = document.createElement("td");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.className = "remove-btn";

    // Remove student
    removeButton.addEventListener("click", function() {
        const confirmRemove = confirm("Are you sure you want to remove this student?");

        if (confirmRemove) {
            row.remove();

            // Show empty message if no students remain
            if (table.querySelectorAll("tr").length === 0) {
                const emptyRow = document.createElement("tr");
                emptyRow.id = "emptyRow";

                const emptyCell = document.createElement("td");
                emptyCell.colSpan = 6;
                emptyCell.textContent = "No students registered yet.";

                emptyRow.appendChild(emptyCell);
                table.appendChild(emptyRow);
            }
        }
    });

    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    // Display student
    table.appendChild(row);

    // Clear form
    form.reset();
});
