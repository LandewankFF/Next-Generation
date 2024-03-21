document.addEventListener('DOMContentLoaded', function() {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
        if (description.scrollHeight > 50) {
            const readMoreButton = description.nextElementSibling;
            readMoreButton.classList.remove('hidden');
        }
    });

});
