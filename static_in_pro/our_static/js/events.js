
  var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
          alert("hello");
        reject(status);
      }
    };
    xhr.send();
  });
}

    var jsonData=getJSON('https://www.eventbriteapi.com/v3/events/search/?categories=117,118,119&token=ESS74QGJ4DENACAOB5MA').then(function(data)
 {
    var sjd="";
    for(var i=0; i<data.events.length; i++)
     {
         var url=data.events[i].url;
         var startdate=data.events[i].start.local;
         var splitstartdate=startdate.split("T");
         var time=splitstartdate[1].split(":");
         var zone=data.events[i].start.timezone;
         var splitzone=zone.split("/");
         sjd+='<h4>'+ "<br/>"+'<b>'+ data.events[i].name.text +'</b>'+
              '<a href="'+url+'">' + ' Buy tickets' + '</a>'+'<br>'+'</h4>'+
              '<h5>'+' Event on '+splitstartdate[0]+" At "+ time[0]+":"+time[1]+ ' in '+splitzone[1] +'</h5>'+
              '<h6>'+data.events[i].description.text+ '<br>'+'</h6>';
     }
     document.getElementById("events").innerHTML = sjd ;
 }
 );


