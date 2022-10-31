// Define colors
var defaultColor = "#b2b2b2";
var thisClusterColor = "#0088db";
var thatClusterColor = "#fcba03";
var selectedColor = "#1c2791";
var hovorColor = selectedColor;

// The URL endpoint for querying clusters
var midClustersURL = "https://pmacg.pythonanywhere.com/mid-clusters"

// Define a mapping between the country ID from mapael and the country name used
// by the python backend
var id_to_country = {"AF":"Afghanistan","AX":"\u00c5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua & Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","BQ":"Caribbean Netherlands","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Democratic Republic of the Congo","CK":"Cook Islands","CR":"Costa Rica","CI":"Ivory Coast","HR":"Croatia","CU":"Cuba","CW":"Cura\u00e7ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Swaziland","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard & McDonald Islands","HN":"Honduras","HK":"Hong Kong SAR China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao SAR China","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Federated States of Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MK":"Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Islands","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\u00e9union","RO":"Romania","RU":"Russia","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia & South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","BL":"St. Barth\u00e9lemy","SH":"St. Helena","KN":"St. Kitts and Nevis","LC":"St. Lucia","MF":"St. Martin","PM":"St. Pierre & Miquelon","VC":"St. Vincent and the Grenadines","SD":"Sudan","SR":"Suriname","SJ":"Svalbard & Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"East Timor","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks & Caicos Islands","TV":"Tuvalu","UM":"U.S. Outlying Islands","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States of America","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Vietnam","WF":"Wallis & Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};

// We will configure the country_to_id dictionary from the previous one
// in the initialisation function.
var country_to_id = {}

// Add a list of mappings from some historical countries to present-day countries
var historical_country_to_country = {
    "Austria-Hungary": ["Austria", "Hungary"],
    "Yugoslavia": ["Bosnia and Herzegovina", "Croatia", "Macedonia", "Montenegro", "Serbia", "Slovenia"],
    "Czechoslovakia": ["Slovakia", "Czechia"],
    "Korea": ["South Korea", "North Korea"],
    "Yemen Arab Republic": ["Yemen"],
    "Yemen People's Republic": ["Yemen"],
    "Hanover": ["Germany"],
    "Bavaria": ["Germany"],
    "German Federal Republic": ["Germany"],
    "German Democratic Republic": ["Germany"],
    "Baden": ["Germany"],
    "Saxony": ["Germany"],
    "Wuerttemburg": ["Germany"],
    "Hesse Electoral": ["Germany"],
    "Hesse Grand Ducal": ["Germany"],
    "Mecklenburg Schwerin": ["Germany"],
    "Papal States": ["Vatican City"],
    "Two Sicilies": ["Italy"],
    "Modena": ["Italy"],
    "Parma": ["Italy"],
    "Tuscany": ["Italy"],
    "Kosovo": ["Serbia"],
    "Zanzibar": ["Tanzania"],
    "Republic of Vietnam": ["Vietnam"]
}
var country_to_historical_country = {};

// Declare variables for the start and end years
// these will be set by the slider element of the UI
var start_year = 1900;
var end_year = 1950;
var size_factor = 0.5;

// Keep track of the currently selected country
var current_country = undefined;

// Keep track of whether the user is currently clicking on the slider
var mousedown_on_date_slider = false;
var mousedown_on_size_slider = false;

function update_clusters(seed_country, response) {
    // Reset the colors of all countries on the map
    reset_country_colors();

    // Set the colors of 'this cluster'
    var ids = [];
    for (const country_name of response.this_cluster) {
        if (country_name in country_to_id) {
            ids.push(country_to_id[country_name]);
        } else {
            if (country_name in historical_country_to_country) {
                for (const other_country of historical_country_to_country[country_name]) {
                    ids.push(country_to_id[other_country])
                }
            } else {
                console.log(`ERROR: ${country_name} not in country dictionary`);
            }
        }
    }
    set_country_colors(ids, thisClusterColor);

    // Set the colors ot 'that cluster'
    var ids = [];
    for (const country_name of response.that_cluster) {
        if (country_name in country_to_id) {
            ids.push(country_to_id[country_name]);
        } else {
            if (country_name in historical_country_to_country) {
                for (const other_country of historical_country_to_country[country_name]) {
                    ids.push(country_to_id[other_country])
                }
            } else {
                console.log(`ERROR: ${country_name} not in country dictionary`);
            }
        }
    }
    set_country_colors(ids, thatClusterColor);

    // Finally, set the color of the clicked country
    set_country_color(country_to_id[seed_country], selectedColor);
}

// Make a call to the backend server to get the clusters for a given time period
// and starting country.
function get_clusters(start_year, end_year, country, size) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            update_clusters(country, JSON.parse(xmlHttp.responseText));
        else if (xmlHttp.status == 500) {
            console.log("Not enough data for the selected country and time period.")
            warninglabel.innerText = "Not enough data for the selected country and time period.";
        }
    }
    xmlHttp.open("GET", `${midClustersURL}?start_year=${start_year}&end_year=${end_year}&country=${encodeURIComponent(country)}&size=${size}` , true); // true for asynchronous
    xmlHttp.send(null);
}

// Given the map ID of a single country, set it to the given color
function set_country_color(country_id, color) {
    var colorData = {
        'areas': {}
    }
    colorData.areas[country_id] = {
        attrs: {
            fill: color
        }
    }

    $(".mapcontainer").trigger('update', [{ mapOptions: colorData}]);
}

// Given an array of country ids, set them all to the given color
function set_country_colors(country_ids, color){
    var colorData = {
        'areas': {}
    }

    for (const country_id of country_ids) {
        colorData.areas[country_id] = {
            attrs: {
                fill: color
            }
        }
    }

    $(".mapcontainer").trigger('update', [{ mapOptions: colorData}]);
}

// Reset the color of all countries
function reset_country_colors() {
    ids = Object.keys(id_to_country);
    set_country_colors(ids, defaultColor);
}

// Handle a click on a country on the map
function country_click_handler(e, id, mapElem, textElem) {
    warninglabel.innerText = "";

    if (!(id in id_to_country)) {
        console.log(`ERROR: ${id} not in country dictionary`)
        warninglabel.innerText = `ERROR: country ID ${id} not recognised`
        return;
    }

    console.log(`Getting clusters for ${id_to_country[id]} between ${start_year} and ${end_year}.`)
    reset_country_colors();
    set_country_color(id, selectedColor);
    current_country = id;
    get_clusters(start_year, end_year, id_to_country[id], size_factor);
}

// Entry function - set up handlers for the map etc.
$(function () {
    // Configure the id to country dictionary
    for (id in id_to_country) {
        country_to_id[id_to_country[id]] = id;
    }
    for (historic_country in historical_country_to_country) {
        for (const modern_country of historical_country_to_country[historic_country]) {
            if (!(modern_country in country_to_historical_country)) {
                country_to_historical_country[modern_country] = [];
            }
            country_to_historical_country[modern_country].push(historic_country);
        }
    }

    // Initialise the main map object
    $(".mapcontainer").mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                attrsHover: {
                    fill: hovorColor,
                    animDuration: 0
                },
                eventHandlers: {
                    click: country_click_handler
                }
            }
        }
    });

    // Make sure that the colors are set correctly
    reset_country_colors();

    // Simulate a click on the US.
    country_click_handler(0, "US", 0, 0);

    // Initialise the sliders
    $( "#slider-date-range" ).slider({
      range: true,
      min: 1810,
      max: 2020,
      step: 10,
      values: [ 1900, 1950 ],
      slide: function( event, ui ) {
        dateslabel.innerText = "Date range: " + ui.values[0] + " - " + ui.values[1];
        start_year = ui.values[0];
        end_year = ui.values[1];
      },
      start: function(event, ui) {
        mousedown_on_date_slider = true;
      },
      stop: function(event, ui) {
        if (!mousedown_on_date_slider) {
            // Do nothing
            return;
        }

        mousedown_on_date_slider = false;

        // Update the map for the currently selected country
        if (current_country !== undefined) {
            country_click_handler(0, current_country, 0, 0);
        }
      }
    });


    $( "#slider-size" ).slider({
      min: 0,
      max: 1,
      values: [0.5],
      step: 0.05,
      slide: function( event, ui ) {
        sizelabel.innerText = "Cluster size factor: " + ui.values[0];
        size_factor = ui.values[0];
      },
      start: function(event, ui) {
        mousedown_on_size_slider = true;
      },
      stop: function(event, ui) {
        if (!mousedown_on_size_slider) {
            // Do nothing
            return;
        }

        mousedown_on_size_slider = false;

        // Update the map for the currently selected country
        if (current_country !== undefined) {
            country_click_handler(0, current_country, 0, 0);
        }
      }
    });
});