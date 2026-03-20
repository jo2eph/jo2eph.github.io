const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('click', () => {
    const section1 = document.getElementById("section-1");
    section1.scrollIntoView(
        {behavior: "smooth"}
    )
})