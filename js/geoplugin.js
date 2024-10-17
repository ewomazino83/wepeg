function geoplugin_request() { return '77.111.246.42';} 
function geoplugin_status() { return '206';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite2 data created by MaxMind, available from <a href=\'https://www.maxmind.com\'>https://www.maxmind.com</a>.';} 
function geoplugin_delay() { return '1ms';} 
function geoplugin_city() { return '';} 
function geoplugin_region() { return '';} 
function geoplugin_regionCode() { return '';} 
function geoplugin_regionName() { return '';} 
function geoplugin_areaCode() { return '';} 
function geoplugin_dmaCode() { return '';} 
function geoplugin_countryCode() { return 'US';} 
function geoplugin_countryName() { return 'United States';} 
function geoplugin_inEU() { return 0;} 
function geoplugin_euVATrate() { return ;} 
function geoplugin_continentCode() { return 'NA';} 
function geoplugin_latitude() { return '37.751';} 
function geoplugin_longitude() { return '-97.822';} 
function geoplugin_locationAccuracyRadius() { return '1000';} 
function geoplugin_timezone() { return 'America/Chicago';} 
function geoplugin_currencyCode() { return 'USD';} 
function geoplugin_currencySymbol() { return '&#36;';} 
function geoplugin_currencySymbol_UTF8() { return '$';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 0; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#36;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
