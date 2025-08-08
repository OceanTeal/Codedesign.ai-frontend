function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

    document.getElementById(tabName + 'Tab').classList.add('active');
    document.getElementById(tabName + 'Panel').classList.add('active');
}
function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
}
document.addEventListener('DOMContentLoaded', function() {
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

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});