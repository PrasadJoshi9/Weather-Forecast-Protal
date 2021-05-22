<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Weather Forecasting</title>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/search.js"></script>
<link rel="stylesheet" type="text/css" href="css/search.css">

</head>
<body>
<ul>
  <li><a href="index.jsp" class="active" class="a">Home</a></li>
  <li><a type="button" id="Mumbai" class="a">Mumbai</a></li>
  <li><a type="button" id="Delhi" class="a">Delhi</a></li>
  <li><a type="button" id="Bangalore" class="a">Bangalore</a></li>
  <li><a type="button" id="Kolkata" class="a">Kolkata</a></li>
</ul>
<div align="center">
<h1>Weather Forecasting</h1>
<input type="text" id="searchText" />
<button type="button" id="searchbtn">Search</button>

<br>

<table id="resulttab" style="display:  none;">
<tr><br></tr>
<tr><br>
<br>
</tr>
    <tr>
        <td>
           <label  id="city"></label>  <span id="mintemp"></span>
         
        </td>
    </tr>

</table>

</div>
</body>



</html>