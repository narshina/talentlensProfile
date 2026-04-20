  const toggleBtn = document.getElementById('toggleSidebar');
        const mainContent = document.querySelector('.mainContent');

        if (window.innerWidth <= 768) {
            mainContent.classList.add('collapsed');
        }

        toggleBtn.addEventListener('click', () => {
            mainContent.classList.toggle('collapsed');
        });