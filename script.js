let goalCount = 0;

const goalButton = document.getElementById('goal-button');
const goalCounterDisplay = document.getElementById('goal-counter');
goalButton.addEventListener('click', () => {
    goalCount++;
    goalCounterDisplay.textContent = goalCount;
});
