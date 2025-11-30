const photos = [
    { file: "1.jpeg", caption: "eating lolipop with you si 2 in 1, can taste both flavors hehe" },
    { file: "2.png", caption: "our first and official photo together, you look so pretty the first time i saw you" },
    { file: "3.jpeg", caption: "happy birthday lovey, your 23rd year is the start the life you deserve and need. I LOVE YOU" },
    { file: "4.jpg", caption: "first lunch date, when i picked you up in your house the first time i still remember the smile on your face. CUTEE" },
    { file: "5.jpg", caption: "HAHAHAHA TALOOOOOOO BLEHHH" },
    { file: "6.jpg", caption: "our first anak, you forgot him ako na lang pinag alaga mo" },
    { file: "7.jpeg", caption: "pictures like this makes the date more memorable, a pretty lady beside me and my goofy face" },
    { file: "8.jpeg", caption: "choco + you = selos, ay HAHAHAHAA, i'm so happy that you play with choco" },
    { file: "9.jpeg", caption: "SORRY. YKIYK" },
    { file: "10.jpeg", caption: "they say that the eyes never lie, so that our hands, warmth were never be scripted " },
    { file: "11.jpeg", caption: "i said \"loveyy update kay mama\" just for me to see your smile" },
    { file: "12.jpeg", caption: "my always safe place" },
    { file: "13.jpeg", caption: "literally love is in the air, we are so PINK" },
    { file: "14.jpeg", caption: "AM I POGI? I KNOW I AM ay HAHAHAHAHAHAHAHAHA" },
    { file: "15.jpeg", caption: "Meet with my tito na lumalaban sa west philippine sea, i'm so happy slowly you are meeting them" },
    { file: "16.jpg", caption: "JEFFFFFFFFFF THE CHEFFFF, our first anak sa POV mo, i hope he is okay with her mama" },
    { file: "17.jpeg", caption: "OMGGG YOU AREE SOOOO PRETTY I DON'T KNOW HOW YOUR CLASSMATES RESIST YOUR PRETTINESS" },
    { file: "18.jpeg", caption: "sarap loveyy?? mas masarap parin kiss ko ay HAHAHAHAHA" },
    { file: "19.jpeg", caption: "together with our least favorite restooo :>" },
    { file: "20.jpeg", caption: "happy ang nanay mo jeff nakidnap ka niya sa arcadeee" }
];

function openPhoto(index) {
    document.getElementById("popupImg").src = "images/" + photos[index].file;
    document.getElementById("popupCaption").textContent = photos[index].caption;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openLetter() {
    document.getElementById("letterPopup").style.display = "flex";
    document.body.classList.add(""); // optional, dims background
}

function closeLetter() {
    document.getElementById("letterPopup").style.display = "none";
    document.body.classList.remove(""); // optional, restores background
}

