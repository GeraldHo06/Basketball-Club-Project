 document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        answer.classList.toggle('show');
      });
    });

    document.getElementById('faq-search').addEventListener('input', function () {
      const search = this.value.toLowerCase();
      document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        if (question.includes(search) || answer.includes(search)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });