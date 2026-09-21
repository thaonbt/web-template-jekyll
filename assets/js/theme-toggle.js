(function () {
    var root = document.documentElement;
    var saved = localStorage.getItem('theme');

    if (saved) {
        root.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
    }

    document.addEventListener('DOMContentLoaded', function () {
        var masthead = document.querySelector('.masthead__inner-wrap');
        if (!masthead) return;

        var btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.setAttribute('aria-label', 'Chuyển giao diện sáng/tối');

        function updateLabel() {
            btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
        }
        updateLabel();

        btn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateLabel();
        });

        masthead.appendChild(btn);
    });
})();