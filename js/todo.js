let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    let takeText = document.getElementById('input-text').value;


    if (takeText == '') {
        alert('give some work list');
    }
    else {
        let mainContainer = document.getElementById('table-data');

        let tabaleContainer = document.createElement("tr");

        tabaleContainer.innerHTML = `<th>${count}</th>
        <td>${takeText}</td>
        <td><button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-success">Done</button></td>`;

        mainContainer.appendChild(tabaleContainer);
    }
})


