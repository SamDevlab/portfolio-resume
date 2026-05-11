(function(){
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const storageKey = 'samuel-theme';

    function applyTheme(name){
        if(name === 'dark'){
            body.classList.add('dark-theme');
            toggle.textContent = '☀️';
            toggle.title = 'Tema claro';
        } else {
            body.classList.remove('dark-theme');
            toggle.textContent = '🌙';
            toggle.title = 'Tema escuro';
        }
    }

    // Initialize based on saved preference or system
    const saved = localStorage.getItem(storageKey);
    if(saved){
        applyTheme(saved);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    toggle && toggle.addEventListener('click', function(){
        const isDark = body.classList.contains('dark-theme');
        const next = isDark ? 'light' : 'dark';
        applyTheme(next);
        try{ localStorage.setItem(storageKey, next); }catch(e){}
    });

})();
