// 현재 연도를 자동으로 업데이트
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} My Blog`;

// 추가 기능: 글 클릭 시 알림 표시
const articles = document.querySelectorAll('article h2 a');
articles.forEach(link => {
    link.addEventListener('click', (e) => {
        alert(`Navigating to: ${e.target.textContent}`);
    });
});
