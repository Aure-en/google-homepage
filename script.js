//On load, the focus is on the Search Bar.

window.addEventListener("load", () => document.querySelector('.search-bar input').focus());

//Open the Google Apps tab when clicking on the icon and remove the tooltip

let openApps = document.querySelector(".google-apps-open");
let googleApps = document.querySelector(".google-apps");
let googleAppsTooltip = document.querySelector("header .tooltiptext")

openApps.addEventListener("click", function() {
    googleApps.classList.toggle("hidden");
    googleAppsTooltip.classList.add("hidden");

    openApps.addEventListener("mouseout", removeHidden);

    function removeHidden() {
        setTimeout(() => googleAppsTooltip.classList.remove("hidden"), 500);
        openApps.removeEventListener("mouseout", removeHidden);
    }

});

//Darkens the icon when hovering on Google Apps Icon

openApps.addEventListener("mouseover", function() {
    this.src = 'images/google-icon-black.png';
});

openApps.addEventListener("mouseout", function() {
    this.src = 'images/google-icon-grey.png';
})

//Open the Search Tooltip but only if we stop moving the mouse on the search bar

let search = document.querySelector(".search");
let timer;
let tooltip;

search.addEventListener("mousemove", showStill)

function showStill (event) {
    if (tooltip) return;
    clearTimeout(timer);
    timer = setTimeout(() => showTooltip(event), 1000)
}

search.addEventListener("mouseout", function(event) {
    clearTimeout(timer);
    if (tooltip) {
        tooltip.remove()
        tooltip = null;
    }
})


function showTooltip(event) {

    tooltip = document.createElement("div");
    tooltip.innerHTML = "Search";
    tooltip.classList.add("tooltiptext");

    //Styles//
    tooltip.style.visibility="visible";
    tooltip.style.opacity= 1;

    //Position//
    tooltip.style.position="absolute";
    tooltip.style.width = "60px";
    tooltip.style.top = event.pageY + 15 + "px";
    tooltip.style.left = event.pageX + 15 + "px";
    
    document.body.append(tooltip);

}

//Open tablet/mobile nav

let tabletNavOpen = document.querySelector(".header-left li img");
let tabletNav = document.querySelector(".tablet-nav");
let tabletCover = document.querySelector(".tablet-nav-cover")

tabletNavOpen.addEventListener("click", function() {
    tabletNav.classList.add("open-nav")
    tabletCover.classList.remove("hidden");
    tabletCover.addEventListener("click", hideNav);

    function hideNav() {
        tabletNav.classList.remove("open-nav")
        tabletCover.classList.add("hidden");
        tabletCover.removeEventListener("click", hideNav);
    }

})