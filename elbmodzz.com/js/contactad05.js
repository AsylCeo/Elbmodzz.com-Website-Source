function openContactEmbed(embedLink) {
    document.getElementById('embed-iframe').src = embedLink;
    document.getElementById('embed').style.opacity = 0;
    document.getElementById('embed').style.display = "block";
    setTimeout(function() {
        document.getElementById('embed').style.opacity = 1;
      }, 100);
}