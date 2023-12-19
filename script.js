document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementsByClassName('close')[0];
    var addArticleBtn = document.getElementById('addArticleBtn');
    var articleList = document.getElementById('articleList');
    var totalElement = document.getElementById('total');
    var total = 0;

    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    }

    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    addArticleBtn.onclick = function () {
        var articleName = document.getElementById('articleName').value;
        var articlePrice = parseFloat(document.getElementById('articlePrice').value);

        if (articleName && !isNaN(articlePrice)) {
            var listItem = document.createElement('li');
            listItem.innerHTML = articleName + ': $' + articlePrice.toFixed(2);

            var deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Supprimer';
            deleteBtn.onclick = function () {
                listItem.remove();
                updateTotal();
            }

            listItem.appendChild(deleteBtn);
            articleList.appendChild(listItem);

            total += articlePrice;
            updateTotal();

            // Clear input fields
            document.getElementById('articleName').value = '';
            document.getElementById('articlePrice').value = '';
        }
    }

    function updateTotal() {
        totalElement.innerHTML = 'Total: $' + total.toFixed(2);
    }
});
