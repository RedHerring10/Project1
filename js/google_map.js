function initMap() {
    const mapCenter = { lat: 43.001795378459, lng: -78.78949171731864 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        center: mapCenter,
        zoom: 14,
    });

    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: "Old U.S. Nearu Location",
    });
}