
// Detect if the user is accessing from a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect if the user is accessing from a mobile device
function redirectIfMobile() {
    if (isMobile()) {
        // Redirect to a different page
        window.location.href = "https://example.com/not-allowed-on-mobile.html";
    }
}

// Call the function to check and redirect on page load
window.onload = redirectIfMobile;


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "mobile_not_supported.html";
}
