// Manage UI interactions and tab navigation

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Show the current tab content
            const target = tab.dataset.target;
            document.querySelector(target).classList.add('active');
            // Set the clicked tab as active
            tab.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', initTabs);