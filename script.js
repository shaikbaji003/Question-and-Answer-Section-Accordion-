document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('.icon');

                       faqQuestions.forEach(otherQuestion => {
                const otherFaqItem = otherQuestion.closest('.faq-item');
                if (otherFaqItem !== faqItem && otherFaqItem.classList.contains('active')) {
                    otherFaqItem.classList.remove('active');
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherQuestion.querySelector('.icon').classList.remove('fa-minus');
                    otherQuestion.querySelector('.icon').classList.add('fa-plus');
                }
            });

            faqItem.classList.toggle('active');
            const isExpanded = faqItem.classList.contains('active');
            question.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
           
            if (isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + "px"; 
            } else {
                answer.style.maxHeight = "0";
            }
        });

      
        question.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); 
                question.click(); 
            }
        });
    });

   
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    `;
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.faq-section').classList.toggle('dark-mode');
        
    });
});