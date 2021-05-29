var map;
    
DG.then(function () {
    map = DG.map('mobile_map', {
        center: [61.271006, 73.4253],
        zoom: 17
    });
    DG.marker([61.271006, 73.4253]).addTo(map).bindPopup('Лучшие ворота здесь!');
   
});