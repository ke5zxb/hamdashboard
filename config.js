const topBarCenterText = `KE5ZXB - EL88RP`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "Live cam World",
	"iframe|https://www.youtube.com/embed/z7SiAaN4ogw?autoplay=1&mute=1",
  ],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KTBW_loop.gif",
  ],
  [
    "", // Traffic
	"https://fl511.com/map/Cctv/2278?t=1737565106",
	"https://fl511.com/map/Cctv/1140--11",
	"https://fl511.com/map/Cctv/1142--11",
	"https://fl511.com/map/Cctv/1143--11",
	"https://fl511.com/map/Cctv/679--11",
	"https://fl511.com/map/Cctv/3333?t=1737562105",
  ],
  [
    "SATELLITE - GULF OF MEXICO",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/gm/EXTENT3/GOES16-GM-EXTENT3-1000x1000.gif",
  ],
  [
    "SATELLITE - SOUTHEAST US",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/se/EXTENT3/GOES16-SE-EXTENT3-600x600.gif",
  ],
  [
    "SATELLITE - ATLANTIC",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/GEOCOLOR/900x540.jpg",
  ],
  [
    "Derived Motion Winds",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/DMW/GOES16-ABI-CONUS-DMW.gif",
  ],
  ["Snow & Ice Outlook",
    "https://www.weather.gov/images/lwx/winter/StormTotalSnowWeb1.jpg",
    "https://www.weather.gov/images/lwx/winter/StormTotalIceWeb1.jpg",	  
    "https://www.weather.gov/images/lwx/winter/SnowAmt90Prcntl.jpg",
    "https://www.weather.gov/images/lwx/winter/SnowAmt10Prcntl.jpg",	
    "https://www.weather.gov/images/lwx/winter/outlook/D3_WinterThreat.png",
    "https://www.weather.gov/images/lwx/winter/outlook/D4_WinterThreat.png",
    "https://www.weather.gov/images/lwx/winter/outlook/D5_WinterThreat.png",
    "https://www.weather.gov/images/lwx/winter/outlook/D6_WinterThreat.png",
    "https://www.weather.gov/images/lwx/winter/outlook/D7_WinterThreat.png",
    "https://www.weather.gov/images/lwx/winter/ProbSnowGETr.jpg",
    "https://www.weather.gov/images/lwx/winter/ProbSnowGE01.jpg",],
  [
    "Tampa International - TPA",
    "iframe|https://globe.adsbexchange.com/?airport=TPA",
  ],
  ["7-DAY TROPICAL OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",],
  ["LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_fl.png",],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];
