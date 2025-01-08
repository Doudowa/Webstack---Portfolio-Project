const habitForm = document.getElementById('habit-form');
const habitNameInput = document.getElementById('habit-name');
const habitGoalInput = document.getElementById('habit-goal');
const habitsList = document.getElementById('habits');
habits.forEach((habit, index) => {
    const habitItem = document.createElement('li');
    habitItem.innerHTML = `
      <strong>${habit.name}</strong>
      <p>Goal: ${habit.goal} | Progress: ${habit.progress}</p>
      <button onclick="updateProgress(${index})">+1 Progress</button>
    `;
    habitsList.appendChild(habitItem);
  });
}
function updateProgress(index) {
	habits[index].progress++;
	renderHabits();
}
habitForm.addEventListener('submit', addHabit);

