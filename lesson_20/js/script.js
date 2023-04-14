"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest(".header__burger")) {
        document.documentElement.classList.toggle("menu-open");
    }

    if (targetItem.closest(".right-side__button") || targetItem.closest(".right-side__search-close")) {
        document.documentElement.classList.toggle("search-open");
    }

}

