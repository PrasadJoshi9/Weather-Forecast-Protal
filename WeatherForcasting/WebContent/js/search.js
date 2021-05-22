$(function(){
	
	$("#searchbtn").click(function(){
		
		var searchText=$("#searchText").val();
		$.get('http://api.openweathermap.org/data/2.5/weather?q='+searchText+',IN&APPID=10f64ea30123293919165e11d515da83',function(response){
			$("#resulttab").show();
			
			var temp=response.main.temp-273.19;
			var tempmin=response.main.temp_min-273.19;
			var tempmax=response.main.temp_max-273.19;
			var result=temp+' Degree_Cel temperature from '+
			tempmin+ ' to '+tempmax+ ' Degree_Cel, wind '+ response.wind.speed +' m/s. clouds '
			+response.clouds.all+' %, '+response.main.pressure+ ' hpa.';
			$("#mintemp").text(result);
			$("#city").text(searchText+": ");
			
			
			
			
			console.log(response);	
		});
	});
	
$("#Mumbai").click(function(){
		
		
		$.get('http://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&APPID=10f64ea30123293919165e11d515da83',function(response){
			$("#resulttab").show();
			
			var temp=response.main.temp-273.19;
			var tempmin=response.main.temp_min-273.19;
			var tempmax=response.main.temp_max-273.19;
			var result=temp+' Degree_Cel temperature from '+
			tempmin+ ' to '+tempmax+ ' Degree_Cel, wind '+ response.wind.speed +' m/s. clouds '
			+response.clouds.all+' %, '+response.main.pressure+ ' hpa.';
			$("#mintemp").text(result);
			$("#city").text("Mumbai: ");
			
			
			
			console.log(response);	
		});
	});
$("#Delhi").click(function(){
	
	
	$.get('http://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&APPID=10f64ea30123293919165e11d515da83',function(response){
		$("#resulttab").show();
		
		var temp=response.main.temp-273.19;
		var tempmin=response.main.temp_min-273.19;
		var tempmax=response.main.temp_max-273.19;
		var result=temp+' Degree_Cel temperature from '+
		tempmin+ ' to '+tempmax+ ' Degree_Cel, wind '+ response.wind.speed +' m/s. clouds '
		+response.clouds.all+' %, '+response.main.pressure+ ' hpa.';
		$("#mintemp").text(result);
		$("#city").text("Delhi: ");
		
		
		
		console.log(response);	
	});
});

$("#Bangalore").click(function(){
	
	
	$.get('http://api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&APPID=10f64ea30123293919165e11d515da83',function(response){
		$("#resulttab").show();
		
		var temp=response.main.temp-273.19;
		var tempmin=response.main.temp_min-273.19;
		var tempmax=response.main.temp_max-273.19;
		var result=temp+' Degree_Cel temperature from '+
		tempmin+ ' to '+tempmax+ ' Degree_Cel, wind '+ response.wind.speed +' m/s. clouds '
		+response.clouds.all+' %, '+response.main.pressure+ ' hpa.';
		$("#mintemp").text(result);
		$("#city").text("Banglore: ");
		
		
		
		console.log(response);	
	});
});

$("#Kolkata").click(function(){
	
	
	$.get('http://api.openweathermap.org/data/2.5/weather?q=Kolkata,IN&APPID=10f64ea30123293919165e11d515da83',function(response){
		$("#resulttab").show();
		
		var temp=response.main.temp-273.19;
		var tempmin=response.main.temp_min-273.19;
		var tempmax=response.main.temp_max-273.19;
		var result=temp+' Degree_Cel temperature from '+
		tempmin+ ' to '+tempmax+ ' Degree_Cel, wind '+ response.wind.speed +' m/s. clouds '
		+response.clouds.all+' %, '+response.main.pressure+ ' hpa.';
		$("#mintemp").text(result);
		$("#city").text("Kolkata: ");
		
		
		
		console.log(response);	
	});
});





	
	
	
	
});