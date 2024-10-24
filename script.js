window.onload = function() {
  // Get the title element
        const titleElement = document.querySelector('.title2');

        // Get the current month
        const currentMonth = new Date().getMonth();

        // Determine the emoji based on the month
        let emoji;
        switch (currentMonth) {
            case 0:  // January
                emoji = '❄️';
                break;
            case 1:  // February
                emoji = '❤️';
                break;
            case 2:  // March
                emoji = '🍀';
                break;
            case 3:  // April
                emoji = '🐰';
                break;
            case 4:  // May
                emoji = '🌸';
                break;
            case 5:  // June
                emoji = '☀️';
                break;
            case 6:  // July
                emoji = '🏖️';
                break;
            case 7:  // August
                emoji = '🍉';
                break;
            case 8:  // September
                emoji = '🍂';
                break;
            case 9:  // October
                emoji = '🎃';
                break;
            case 10: // November
                emoji = '🦃';
                break;
            case 11: // December
                emoji = '🎄';
                break;
            default:
                emoji = '❓'; // Unknown month
        }

        // Update the title with the new emoji
        titleElement.textContent = ` ${emoji}`;
  
    document.getElementById("description idk").innerText = texts[randomIndex];
};
