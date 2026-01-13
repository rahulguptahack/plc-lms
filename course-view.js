/* LOGIN CHECK */
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

let courseKey = "plc-basics-progress";
let totalLessons = 4;

/* LOAD SAVED PROGRESS */
let savedLesson = localStorage.getItem(courseKey);
if (savedLesson) {
    document.getElementById("courseVideo").src =
        "https://www.youtube.com/embed/" + savedLesson;
}

/* LOAD LESSON */
function loadLesson(element, videoId, title) {
    document.getElementById("courseVideo").src =
        "https://www.youtube.com/embed/" + videoId;

    document.getElementById("lessonTitle").innerText = title;

    document.querySelectorAll(".lesson").forEach(l => {
        l.classList.remove("active");
    });
    element.classList.add("active");

    // SAVE PROGRESS
    localStorage.setItem(courseKey, videoId);
    updateProgress();
}

/* UPDATE PROGRESS % */
function updateProgress() {
    let completed = document.querySelectorAll(".lesson.active").length;
    let percent = Math.round((completed / totalLessons) * 100);
    localStorage.setItem("plc-basics-percent", percent);
}
