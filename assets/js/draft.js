

function multiTabs(event, tabName) {

    // Get all elements with class="tabcontent" and hide them
    let hideMain = document.querySelector('.main').style.display = 'none';
    /*        let tabcontent = document.querySelectorAll('.tab');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = 'none';
            }
    */
/*
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.querySelectorAll(".header-menuItem");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "inherit";
    evt.currentTarget.className += " active";

}