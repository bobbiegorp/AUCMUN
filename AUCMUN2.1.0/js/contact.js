function initMap() {
        var auc = {lat: 52.355032, lng: 4.950938};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: auc
        });
        var marker = new google.maps.Marker({
          position: auc,
          map: map
        });
      }