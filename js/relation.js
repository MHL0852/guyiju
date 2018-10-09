let map = function () {
  var infoWindow;
  var map = new AMap.Map("map", {
    resizeEnable: true,
    center: relationData.map.mapCenter,
    zoom: 13
  });
  
  var lnglats = relationData.map.mapLnglats;
  
  //在指定位置打开信息窗体
  function openInfo() {
    //构建信息窗体中显示的内容
    var info = [];
    info.push("<ul class=\"guyiju\"><li class=\"info_title\">"+relationData.map.title+"</li><li>"+relationData.map.address+"</li><li>"+relationData.map.postcode+"</li><li>"+relationData.map.phone+"</li></ul>")
    infoWindow = new AMap.InfoWindow({
      content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
    });
    
    
    var marker = new AMap.Marker({
      position: lnglats,
      map: map
    });
    
    marker.on('click', ()=>{
      infoWindow.open(map, marker.getPosition());
    });
    marker.emit('click', {target: marker});
    
    infoWindow.open(map, marker.getPosition());
  }
  
  openInfo()
};

map();