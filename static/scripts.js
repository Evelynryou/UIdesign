document.addEventListener('DOMContentLoaded', () => {
    const goToHomePage = () => {
        window.location.href = '/index';
    };

    const goToSymbolismPage = () => {
        window.location.href = '/symbolism';
    };

    const goToArnolfiniPage = () => {
        window.location.href = '/arnolfini';
    };

    const goToPreviousPage = () => {
        window.location.href = '/previous';
    };

    const goToNextPage = () => {
        window.location.href = '/next';
    };

    const goToJanVanEyckPage = () => {
        window.location.href = '/jan-van-eyck';
    };

    const goToArnolfiniDetailPage = () => {
        window.location.href = '/portrait-of-giovanni-arnolfini-and-his-wife';
    };

    const goToDetailElementsPage = () => {
        window.location.href = '/detail-elements-of-arnolfini';
    };
    const goToQuiz1Page = () => {
        window.location.href = '/quiz1';
    };
    const goToQuiz2Page = () => {
        window.location.href = '/quiz2';
    };
    const goToQuiz3Page = () => {
        window.location.href = '/quiz3';
    };
    const goToQuiz4Page = () => {
        window.location.href = '/quiz4';
    };
    const goToQuiz5Page = () => {
        window.location.href = '/quiz5';
    };
    const goToQuiz6Page = () => {
        window.location.href = '/quiz6';
    };
    const goToQuiz7Page = () => {
        window.location.href = '/quiz7';
    };
    const goToQuiz8Page = () => {
        window.location.href = '/quiz8';
    };

    const attachButtonEvents = () => {
        const homeButton = document.getElementById('home-button');
        const symbolismButton = document.getElementById('symbolism-button');
        const arnolfiniButton = document.getElementById('arnolfini-button');
        const previousButton = document.getElementById('previous-button');
        const nextButton = document.getElementById('next-button');
        const janVanEyckButton = document.getElementById('jan-van-eyck-button');
        const arnolfiniDetailButton = document.getElementById('arnolfini-detail-button');
        const detailElementsButton = document.getElementById('detail-elements-button');
        const quiz1button = document.getElementById('quiz1-button');
        const quiz2button = document.getElementById('quiz2-button');
        const quiz3button = document.getElementById('quiz3-button');
        const quiz4button = document.getElementById('quiz4-button');
        const quiz5button = document.getElementById('quiz5-button');
        const quiz6button = document.getElementById('quiz6-button');
        const quiz7button = document.getElementById('quiz7-button');
        const quiz8button = document.getElementById('quiz8-button');

        if (homeButton) {
            homeButton.addEventListener('click', goToHomePage);
        }
        if (symbolismButton) {
            symbolismButton.addEventListener('click', goToSymbolismPage);
        }
        if (arnolfiniButton) {
            arnolfiniButton.addEventListener('click', goToArnolfiniPage);
        }
        if (previousButton) {
            previousButton.addEventListener('click', goToPreviousPage);
        }
        if (nextButton) {
            nextButton.addEventListener('click', goToNextPage);
        }
        if (janVanEyckButton) {
            janVanEyckButton.addEventListener('click', goToJanVanEyckPage);
        }
        if (arnolfiniDetailButton) {
            arnolfiniDetailButton.addEventListener('click', goToArnolfiniDetailPage);
        }
        if (detailElementsButton) {
            detailElementsButton.addEventListener('click', goToDetailElementsPage);
        }
    };

    attachButtonEvents();
    button.addEventListener('click', function() {
      const isCorrect = this.getAttribute('data-correct') === 'true';
      const feedback = document.getElementById('feedback');
      const hint = document.getElementById('hint');

      if (isCorrect) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        hint.style.display = 'none';
      } else {
        feedback.textContent = 'Try again!';
        feedback.style.color = 'red';
        hint.style.display = 'block';
      }
    });
  });

  document.getElementById('previous').addEventListener('click', function() {
    // Implement the logic to go to the previous question or page
    window.location.href = '/previous';
  });

  document.getElementById('next').addEventListener('click', function() {
    // Implement the logic to go to the next question or page
    window.location.href = '/next';

});
