var wms_layers = [];


        var lyr_CartoDBPositron_0 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BasildonLSOAs_1 = new ol.format.GeoJSON();
var features_BasildonLSOAs_1 = format_BasildonLSOAs_1.readFeatures(json_BasildonLSOAs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasildonLSOAs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasildonLSOAs_1.addFeatures(features_BasildonLSOAs_1);
var lyr_BasildonLSOAs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasildonLSOAs_1, 
                style: style_BasildonLSOAs_1,
                popuplayertitle: 'Basildon LSOAs',
                interactive: true,
                title: '<img src="styles/legend/BasildonLSOAs_1.png" /> Basildon LSOAs'
            });
var format_BasildonMSOAs_2 = new ol.format.GeoJSON();
var features_BasildonMSOAs_2 = format_BasildonMSOAs_2.readFeatures(json_BasildonMSOAs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasildonMSOAs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasildonMSOAs_2.addFeatures(features_BasildonMSOAs_2);
var lyr_BasildonMSOAs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasildonMSOAs_2, 
                style: style_BasildonMSOAs_2,
                popuplayertitle: 'Basildon MSOAs',
                interactive: true,
                title: '<img src="styles/legend/BasildonMSOAs_2.png" /> Basildon MSOAs'
            });

lyr_CartoDBPositron_0.setVisible(true);lyr_BasildonLSOAs_1.setVisible(true);lyr_BasildonMSOAs_2.setVisible(true);
var layersList = [lyr_CartoDBPositron_0,lyr_BasildonLSOAs_1,lyr_BasildonMSOAs_2];
lyr_BasildonLSOAs_1.set('fieldAliases', {'FID': 'FID', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'LSOA21CD_1': 'LSOA21CD_1', 'RUC21CD': 'RUC21CD', 'RUC21NM': 'RUC21NM', 'Urban_rura': 'Urban_rura', 'Shape_Leng': 'Shape_Leng', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID_2': 'GlobalID_2', });
lyr_BasildonMSOAs_2.set('fieldAliases', {'FID': 'FID', 'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'MSOA21CD_1': 'MSOA21CD_1', 'RUC21CD': 'RUC21CD', 'RUC21NM': 'RUC21NM', 'Urban_rura': 'Urban_rura', 'Shape_Leng': 'Shape_Leng', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID_2': 'GlobalID_2', });
lyr_BasildonLSOAs_1.set('fieldImages', {'FID': 'Range', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'LSOA21CD_1': 'TextEdit', 'RUC21CD': 'TextEdit', 'RUC21NM': 'TextEdit', 'Urban_rura': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID_2': 'TextEdit', });
lyr_BasildonMSOAs_2.set('fieldImages', {'FID': 'Range', 'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'MSOA21CD_1': 'TextEdit', 'RUC21CD': 'TextEdit', 'RUC21NM': 'TextEdit', 'Urban_rura': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID_2': 'TextEdit', });
lyr_BasildonLSOAs_1.set('fieldLabels', {'FID': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'LSOA21CD_1': 'no label', 'RUC21CD': 'no label', 'RUC21NM': 'no label', 'Urban_rura': 'no label', 'Shape_Leng': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID_2': 'no label', });
lyr_BasildonMSOAs_2.set('fieldLabels', {'FID': 'no label', 'MSOA21CD': 'no label', 'MSOA21NM': 'no label', 'MSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'MSOA21CD_1': 'no label', 'RUC21CD': 'no label', 'RUC21NM': 'no label', 'Urban_rura': 'no label', 'Shape_Leng': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID_2': 'no label', });
lyr_BasildonMSOAs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});