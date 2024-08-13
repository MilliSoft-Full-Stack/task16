document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const btnsContainer = document.getElementById('btns');

    const itemsPerPage = 5; 
    let currentPage = 1;
    const items = [];

    
    for (let i = 1; i <= 17; i++) {
        items.push(`Item ${i}`);
    }

    const totalPages = Math.ceil(items.length / itemsPerPage);

    
    function updateList(page) {
        list.innerHTML = '';

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const pageItems = items.slice(start, end);

        for (let item of pageItems) {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        }

        
        updatePagination();

        
        updateButtons();
    }

   
    function updatePagination() {
        btnsContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('btn-page');


            if (i === currentPage) {
                btn.classList.add('active');
            }

            
            btn.addEventListener('click', function() {
                currentPage = i;
                updateList(currentPage);
            });
            btnsContainer.appendChild(btn);
        }
    }

   
    function updateButtons() {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }


    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateList(currentPage);
        }
    });

    
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updateList(currentPage);
        }
    });

    
    updateList(currentPage);
});







/* 
document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 10;
    const totalItems = 50; 
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let currentPage = 1;

    const listElement = document.getElementById('list');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const btnContainer = document.getElementById('btns');

    function renderList(page) {
        listElement.innerHTML = '';
        const start = (page - 1) * itemsPerPage + 1;
        const end = Math.min(start + itemsPerPage - 1, totalItems);

        for (let i = start; i <= end; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Item ${i}`;
            listElement.appendChild(listItem);
        }
    }

    function updateButtons() {
        btnContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;

            
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }

            pageBtn.addEventListener('click', function() {
                currentPage = i;
                renderList(currentPage);
                updateButtons();
                toggleButtons();
            });

            btnContainer.appendChild(pageBtn);
        }
    }

    function toggleButtons() {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderList(currentPage);
            updateButtons();
            toggleButtons();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderList(currentPage);
            updateButtons();
            toggleButtons();
        }
    });

    
    renderList(currentPage);
    updateButtons();
    toggleButtons();
});
 */