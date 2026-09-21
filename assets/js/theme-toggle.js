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

        var isDark = root.getAttribute('data-theme') === 'dark';

        var btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.setAttribute('aria-label', 'Chuyển giao diện sáng/tối');
        btn.setAttribute('aria-pressed', isDark);
        btn.innerHTML =
            '<span class="theme-toggle__icon theme-toggle__icon--sun">☀️</span>' +
            '<span class="theme-toggle__thumb"></span>' +
            '<span class="theme-toggle__icon theme-toggle__icon--moon">🌙</span>';

        btn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            btn.setAttribute('aria-pressed', next === 'dark');
            localStorage.setItem('theme', next);
        });

        document.body.appendChild(btn); // gắn vào body, không phụ thuộc masthead
    });
})();