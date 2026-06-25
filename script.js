function showPage(pageId) {
    // 1. Handle the Page Content (Your existing code)
    let activePage = document.querySelector('.page.active');
    if (activePage) {
        activePage.classList.remove('active');
    }
    let pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }

    // 2. NEW: Handle the Nav Button Highlights
    // Remove 'active' class from whichever button currently has it
    let activeBtn = document.querySelector('.menulist button.active');
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    
    // Find the specific button that was just clicked and add 'active' to it
    // (Note: This assumes your inline onclick looks like: showPage('home', this) )
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}