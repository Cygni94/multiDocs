//preventDefault on <a> @ tabs
let aTabs = document.querySelectorAll('btn.header-menuItem > a');
for (var index = 0; index < aTabs.length; index++) {
    aTabs[index].addEventListener("click", function (event) {
        event.preventDefault()
    });
};

function hideTabs() {
    let tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    };
};