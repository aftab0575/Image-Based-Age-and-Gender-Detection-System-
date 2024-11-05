
$('#MenuBar').on('click',function () {
    let sideNav = document.getElementById('sideNav')
    let content =document.getElementById('content')
    let topNav = document.getElementById('topNav')
    if (sideNav.classList.contains("side-nav-open")) {
        sideNav.classList.add("side-nav-close");
        sideNav.classList.remove("side-nav-open");
        content.classList.add("content-expand");
        content.classList.remove("content");
        topNav.classList.add("top-navbar-expand");
        topNav.classList.remove("top-navbar");
    } else {
        sideNav.classList.remove("side-nav-close");
        sideNav.classList.add("side-nav-open");
        content.classList.remove("content-expand");
        content.classList.add("content");
        topNav.classList.remove("top-navbar-expand");
        topNav.classList.add("top-navbar");
    }
})


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
let validFileExtensions = ["jpg", "JPG", "jpeg", "JPEG", "PNG", "png", "gif", "GIF"];
function IsImageValid(imgExtension) {
    return validFileExtensions.includes(imgExtension);
}
// Function Error Toast Message
function ErrorToast(msg) {
    toastr.options.positionClass = "toast-bottom-center";
    toastr.error(msg);
}

//Something Went Wrong
function SomethingWentWrong() {
    toastr.options.positionClass = "toast-bottom-center";
    toastr.error("Something Went Wrong !");
}

// Function Success Toast Messsage
function SuccessToast(msg) {
    toastr.options.positionClass = "toast-bottom-center";
    toastr.success(msg);
}
