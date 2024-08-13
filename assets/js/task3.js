document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { category: 'nature', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUczZQDiklZBGMSWonYRioD8cMo5SHaN82w&s', title: 'Cloud', description: 'Lorem ipsum dolor...' },
        { category: 'nature', image: 'https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg', title: 'Forest', description: 'Lorem ipsum dolor...' },
        { category: 'nature', image: 'https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_3x2.jpg', title: 'Mountains', description: 'Lorem ipsum dolor...' },
        { category: 'car', image: 'https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds', title: 'Sport', description: 'Lorem ipsum dolor...' },
        { category: 'car', image: 'https://media.istockphoto.com/id/176793256/photo/red-car-in-havana-sunset.jpg?s=612x612&w=0&k=20&c=i6L_wDLwiv4ya0P4hPH7Am7FHKI8eFZqk3Vkz0DpB08=', title: 'Retro', description: 'Lorem ipsum dolor...' },
        { category: 'car', image: 'https://qph.cf2.quoracdn.net/main-qimg-7fd00061da711d05adcf6643a85fb8a4-lq', title: 'Modern', description: 'Lorem ipsum dolor...' },
        { category: 'people', image: 'https://st5.depositphotos.com/1007930/61990/i/450/depositphotos_619904980-stock-photo-fashion-girl-garden.jpg', title: 'Girl', description: 'Lorem ipsum dolor...' },
        { category: 'people', image: 'https://static.vecteezy.com/system/resources/thumbnails/032/040/858/small/an-old-indian-man-with-a-white-beard-and-mustache-ai-generated-photo.jpg', title: 'Man', description: 'Lorem ipsum dolor...' },
        { category: 'people', image: 'https://assets.vogue.com/photos/5fced19ddad9ba0c310e4d7e/master/pass/IMG_1849.JPG', title: 'Woman', description: 'Lorem ipsum dolor...' }
    ];

    const container = document.querySelector('.container');
    const filterButtons = document.querySelectorAll('ul li');

    function renderItems(filter) {
        container.innerHTML = ''; 

        const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

        filteredItems.forEach(item => {
            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('filter', item.category);

            const img = document.createElement('img');
            img.src = item.image;

            const title = document.createElement('h4');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.description;

            box.appendChild(img);
            box.appendChild(title);
            box.appendChild(description);

            container.appendChild(box);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.textContent.toLowerCase().replace(' ', '');
            renderItems(filter === 'showall' ? 'all' : filter);
        });
    });

    renderItems('all');
});
