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
        <td><button type="button" class="btn btn-danger deleteItem">Delete</button>
        <button type="button" class="btn btn-success doneItem">Done</button></td>`;

        mainContainer.appendChild(tabaleContainer);
    }

    const itemDelete = document.getElementsByClassName('deleteItem');
    for (const item of itemDelete) {
        item.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }

    const itemDone = document.getElementsByClassName('doneItem');
    for (const item of itemDone) {
        item.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }
})


