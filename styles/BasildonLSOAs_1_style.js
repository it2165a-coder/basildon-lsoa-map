var size = 0;
var placement = 'point';

var style_BasildonLSOAs_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#b310d7";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("LSOA21NM") !== null) {
        labelText = String(feature.get("LSOA21NM"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,16,215,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.18}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
