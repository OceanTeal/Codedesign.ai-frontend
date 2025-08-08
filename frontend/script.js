// Function to open the modal
function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
}

// Function to close the modal
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// Function to switch between tabs
function switchTab(tabName) {
    // Remove active class from all tabs and panels
    document.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

    // Add active class to selected tab and panel
    document.getElementById(tabName + 'Tab').classList.add('active');
    document.getElementById(tabName + 'Panel').classList.add('active');
}

// Function to handle checkbox toggling
function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all custom checkboxes
    document.querySelectorAll('.custom-checkbox').forEach(checkboxContainer => {
        checkboxContainer.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });
    });

    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});