const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    const icon = accordion.querySelector(".icon");
    const answer = accordion.querySelector(".answer");
    accordion.addEventListener("click", () => {
        //    icon.classList.toggle("active");// isme koi problem nahi hai but
        //    answer.classList.toggle("active");//isme animation problem hai 
        if (icon.classList.contains("active")) 
        {
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        }
        else 
        {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
