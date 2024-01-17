// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

(function (document) {
    "use strict";
    const ready = (callback) => {
        if (document.readyState != "loading") callback();
        else document.addEventListener("DOMContentLoaded", callback);
    };

    ready(() => {
        document.querySelectorAll('[data-bs-toggle="modal"]').forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                const bigImage = e.target.getAttribute('data-bigimage');
                const modalId = e.target.getAttribute('data-bs-target').substring(1); // Removing the # from the modal ID
                const img = document.getElementById(`image-${modalId}`);
                const modal = new bootstrap.Modal(document.getElementById(modalId));

                modal.show();
                
                if (img) {
                    img.src = bigImage;
                }
            });
        });
    });
})(document);