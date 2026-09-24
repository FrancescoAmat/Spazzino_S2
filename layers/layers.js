var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Confini_Comune_Milano_1 = new ol.format.GeoJSON();
var features_Confini_Comune_Milano_1 = format_Confini_Comune_Milano_1.readFeatures(json_Confini_Comune_Milano_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_Comune_Milano_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_Comune_Milano_1.addFeatures(features_Confini_Comune_Milano_1);
var lyr_Confini_Comune_Milano_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_Comune_Milano_1, 
                style: style_Confini_Comune_Milano_1,
                popuplayertitle: 'Confini_Comune_Milano ',
                interactive: true,
                title: '<img src="styles/legend/Confini_Comune_Milano_1.png" /> Confini_Comune_Milano '
            });
var format_674_Venerdi_09_30_15_50_2 = new ol.format.GeoJSON();
var features_674_Venerdi_09_30_15_50_2 = format_674_Venerdi_09_30_15_50_2.readFeatures(json_674_Venerdi_09_30_15_50_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Venerdi_09_30_15_50_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Venerdi_09_30_15_50_2.addFeatures(features_674_Venerdi_09_30_15_50_2);
var lyr_674_Venerdi_09_30_15_50_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Venerdi_09_30_15_50_2, 
                style: style_674_Venerdi_09_30_15_50_2,
                popuplayertitle: '674_Venerdi_09_30_15_50',
                interactive: true,
    title: '674_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_0.png" /> 1<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_1.png" /> 2<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_2.png" /> 3<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_3.png" /> 4<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_4.png" /> 5<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_5.png" /> 6<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_6.png" /> 7<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_2_7.png" /> 8<br />' });
var format_672_Venerdi_05_30_13_06_3 = new ol.format.GeoJSON();
var features_672_Venerdi_05_30_13_06_3 = format_672_Venerdi_05_30_13_06_3.readFeatures(json_672_Venerdi_05_30_13_06_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Venerdi_05_30_13_06_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Venerdi_05_30_13_06_3.addFeatures(features_672_Venerdi_05_30_13_06_3);
var lyr_672_Venerdi_05_30_13_06_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Venerdi_05_30_13_06_3, 
                style: style_672_Venerdi_05_30_13_06_3,
                popuplayertitle: '672_Venerdi_05_30_13_06',
                interactive: true,
    title: '672_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_0.png" /> 1<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_1.png" /> 2<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_2.png" /> 3<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_3.png" /> 4<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_4.png" /> 5<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_5.png" /> 6<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_6.png" /> 7<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_7.png" /> 8<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_8.png" /> 9<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_9.png" /> 10<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_10.png" /> 11<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_11.png" /> 12<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_12.png" /> 13<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_13.png" /> 14<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_14.png" /> 15<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_15.png" /> 16<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_16.png" /> 17<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_17.png" /> 18<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_18.png" /> 19<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_19.png" /> 20<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_20.png" /> 21<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_3_21.png" /> 22<br />' });
var format_674_Giovedi_09_30_15_50_4 = new ol.format.GeoJSON();
var features_674_Giovedi_09_30_15_50_4 = format_674_Giovedi_09_30_15_50_4.readFeatures(json_674_Giovedi_09_30_15_50_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Giovedi_09_30_15_50_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Giovedi_09_30_15_50_4.addFeatures(features_674_Giovedi_09_30_15_50_4);
var lyr_674_Giovedi_09_30_15_50_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Giovedi_09_30_15_50_4, 
                style: style_674_Giovedi_09_30_15_50_4,
                popuplayertitle: '674_Giovedi_09_30_15_50',
                interactive: true,
    title: '674_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_0.png" /> 1<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_1.png" /> 2<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_2.png" /> 3<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_3.png" /> 4<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_4.png" /> 5<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_5.png" /> 6<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_6.png" /> 7<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_4_7.png" /> 8<br />' });
var format_672_Giovedi_05_30_13_06_5 = new ol.format.GeoJSON();
var features_672_Giovedi_05_30_13_06_5 = format_672_Giovedi_05_30_13_06_5.readFeatures(json_672_Giovedi_05_30_13_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Giovedi_05_30_13_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Giovedi_05_30_13_06_5.addFeatures(features_672_Giovedi_05_30_13_06_5);
var lyr_672_Giovedi_05_30_13_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Giovedi_05_30_13_06_5, 
                style: style_672_Giovedi_05_30_13_06_5,
                popuplayertitle: '672_Giovedi_05_30_13_06',
                interactive: true,
    title: '672_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_0.png" /> 1<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_1.png" /> 2<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_2.png" /> 3<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_3.png" /> 4<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_4.png" /> 5<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_5.png" /> 6<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_6.png" /> 7<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_7.png" /> 8<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_8.png" /> 9<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_9.png" /> 10<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_10.png" /> 11<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_11.png" /> 12<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_12.png" /> 13<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_13.png" /> 14<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_14.png" /> 15<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_15.png" /> 16<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_16.png" /> 17<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_17.png" /> 18<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_18.png" /> 19<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_19.png" /> 20<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_20.png" /> 21<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_5_21.png" /> 22<br />' });
var format_674_Mercoledi_09_30_15_50_6 = new ol.format.GeoJSON();
var features_674_Mercoledi_09_30_15_50_6 = format_674_Mercoledi_09_30_15_50_6.readFeatures(json_674_Mercoledi_09_30_15_50_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Mercoledi_09_30_15_50_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Mercoledi_09_30_15_50_6.addFeatures(features_674_Mercoledi_09_30_15_50_6);
var lyr_674_Mercoledi_09_30_15_50_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Mercoledi_09_30_15_50_6, 
                style: style_674_Mercoledi_09_30_15_50_6,
                popuplayertitle: '674_Mercoledi_09_30_15_50',
                interactive: true,
    title: '674_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_0.png" /> 1<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_1.png" /> 2<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_2.png" /> 3<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_3.png" /> 4<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_4.png" /> 5<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_5.png" /> 6<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_6.png" /> 7<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_6_7.png" /> 8<br />' });
var format_672_Mercoledi_05_30_13_06_7 = new ol.format.GeoJSON();
var features_672_Mercoledi_05_30_13_06_7 = format_672_Mercoledi_05_30_13_06_7.readFeatures(json_672_Mercoledi_05_30_13_06_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Mercoledi_05_30_13_06_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Mercoledi_05_30_13_06_7.addFeatures(features_672_Mercoledi_05_30_13_06_7);
var lyr_672_Mercoledi_05_30_13_06_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Mercoledi_05_30_13_06_7, 
                style: style_672_Mercoledi_05_30_13_06_7,
                popuplayertitle: '672_Mercoledi_05_30_13_06',
                interactive: true,
    title: '672_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_0.png" /> 1<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_1.png" /> 2<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_2.png" /> 3<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_3.png" /> 4<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_4.png" /> 5<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_5.png" /> 6<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_6.png" /> 7<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_7.png" /> 8<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_8.png" /> 9<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_9.png" /> 10<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_10.png" /> 11<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_11.png" /> 12<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_12.png" /> 13<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_13.png" /> 14<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_14.png" /> 15<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_15.png" /> 16<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_16.png" /> 17<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_17.png" /> 18<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_18.png" /> 19<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_19.png" /> 20<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_20.png" /> 21<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_7_21.png" /> 22<br />' });
var format_674_Martedi_09_30_15_50_8 = new ol.format.GeoJSON();
var features_674_Martedi_09_30_15_50_8 = format_674_Martedi_09_30_15_50_8.readFeatures(json_674_Martedi_09_30_15_50_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Martedi_09_30_15_50_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Martedi_09_30_15_50_8.addFeatures(features_674_Martedi_09_30_15_50_8);
var lyr_674_Martedi_09_30_15_50_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Martedi_09_30_15_50_8, 
                style: style_674_Martedi_09_30_15_50_8,
                popuplayertitle: '674_Martedi_09_30_15_50',
                interactive: true,
    title: '674_Martedi_09_30_15_50<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_0.png" /> 1<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_1.png" /> 2<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_2.png" /> 3<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_3.png" /> 4<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_4.png" /> 5<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_5.png" /> 6<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_6.png" /> 7<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_8_7.png" /> 8<br />' });
var format_672_Martedi_05_30_13_06_9 = new ol.format.GeoJSON();
var features_672_Martedi_05_30_13_06_9 = format_672_Martedi_05_30_13_06_9.readFeatures(json_672_Martedi_05_30_13_06_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Martedi_05_30_13_06_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Martedi_05_30_13_06_9.addFeatures(features_672_Martedi_05_30_13_06_9);
var lyr_672_Martedi_05_30_13_06_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Martedi_05_30_13_06_9, 
                style: style_672_Martedi_05_30_13_06_9,
                popuplayertitle: '672_Martedi_05_30_13_06',
                interactive: true,
    title: '672_Martedi_05_30_13_06<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_0.png" /> 1<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_1.png" /> 2<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_2.png" /> 3<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_3.png" /> 4<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_4.png" /> 5<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_5.png" /> 6<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_6.png" /> 7<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_7.png" /> 8<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_8.png" /> 9<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_9.png" /> 10<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_10.png" /> 11<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_11.png" /> 12<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_12.png" /> 13<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_13.png" /> 14<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_14.png" /> 15<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_15.png" /> 16<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_16.png" /> 17<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_17.png" /> 18<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_18.png" /> 19<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_19.png" /> 20<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_20.png" /> 21<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_9_21.png" /> 22<br />' });
var format_674_Lunedi_09_30_15_50_10 = new ol.format.GeoJSON();
var features_674_Lunedi_09_30_15_50_10 = format_674_Lunedi_09_30_15_50_10.readFeatures(json_674_Lunedi_09_30_15_50_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Lunedi_09_30_15_50_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Lunedi_09_30_15_50_10.addFeatures(features_674_Lunedi_09_30_15_50_10);
var lyr_674_Lunedi_09_30_15_50_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Lunedi_09_30_15_50_10, 
                style: style_674_Lunedi_09_30_15_50_10,
                popuplayertitle: '674_Lunedi_09_30_15_50',
                interactive: true,
    title: '674_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_0.png" /> 1<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_1.png" /> 2<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_2.png" /> 3<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_3.png" /> 4<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_4.png" /> 5<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_5.png" /> 6<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_6.png" /> 7<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_10_7.png" /> 8<br />' });
var format_672_Lunedi_05_30_13_06_11 = new ol.format.GeoJSON();
var features_672_Lunedi_05_30_13_06_11 = format_672_Lunedi_05_30_13_06_11.readFeatures(json_672_Lunedi_05_30_13_06_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Lunedi_05_30_13_06_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Lunedi_05_30_13_06_11.addFeatures(features_672_Lunedi_05_30_13_06_11);
var lyr_672_Lunedi_05_30_13_06_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Lunedi_05_30_13_06_11, 
                style: style_672_Lunedi_05_30_13_06_11,
                popuplayertitle: '672_Lunedi_05_30_13_06',
                interactive: true,
    title: '672_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_0.png" /> 1<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_1.png" /> 2<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_2.png" /> 3<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_3.png" /> 4<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_4.png" /> 5<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_5.png" /> 6<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_6.png" /> 7<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_7.png" /> 8<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_8.png" /> 9<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_9.png" /> 10<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_10.png" /> 11<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_11.png" /> 12<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_12.png" /> 13<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_13.png" /> 14<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_14.png" /> 15<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_15.png" /> 16<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_16.png" /> 17<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_17.png" /> 18<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_18.png" /> 19<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_19.png" /> 20<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_20.png" /> 21<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_11_21.png" /> 22<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_674_Lunedi_09_30_15_50_10,lyr_672_Lunedi_05_30_13_06_11,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_674_Martedi_09_30_15_50_8,lyr_672_Martedi_05_30_13_06_9,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_674_Mercoledi_09_30_15_50_6,lyr_672_Mercoledi_05_30_13_06_7,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_674_Giovedi_09_30_15_50_4,lyr_672_Giovedi_05_30_13_06_5,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_674_Venerdi_09_30_15_50_2,lyr_672_Venerdi_05_30_13_06_3,],
                                fold: 'close',
                                title: 'Venerdi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milano_1.setVisible(true);lyr_674_Venerdi_09_30_15_50_2.setVisible(false);lyr_672_Venerdi_05_30_13_06_3.setVisible(false);lyr_674_Giovedi_09_30_15_50_4.setVisible(false);lyr_672_Giovedi_05_30_13_06_5.setVisible(false);lyr_674_Mercoledi_09_30_15_50_6.setVisible(false);lyr_672_Mercoledi_05_30_13_06_7.setVisible(false);lyr_674_Martedi_09_30_15_50_8.setVisible(false);lyr_672_Martedi_05_30_13_06_9.setVisible(false);lyr_674_Lunedi_09_30_15_50_10.setVisible(false);lyr_672_Lunedi_05_30_13_06_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milano_1,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_Confini_Comune_Milano_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_674_Venerdi_09_30_15_50_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Venerdi_05_30_13_06_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Giovedi_09_30_15_50_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Giovedi_05_30_13_06_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Mercoledi_09_30_15_50_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Mercoledi_05_30_13_06_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Martedi_09_30_15_50_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Martedi_05_30_13_06_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Lunedi_09_30_15_50_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Lunedi_05_30_13_06_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_Confini_Comune_Milano_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_674_Venerdi_09_30_15_50_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Venerdi_05_30_13_06_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Giovedi_09_30_15_50_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Giovedi_05_30_13_06_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Mercoledi_09_30_15_50_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Mercoledi_05_30_13_06_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Martedi_09_30_15_50_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Martedi_05_30_13_06_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Lunedi_09_30_15_50_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Lunedi_05_30_13_06_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_Confini_Comune_Milano_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_674_Venerdi_09_30_15_50_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Venerdi_05_30_13_06_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Giovedi_09_30_15_50_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Giovedi_05_30_13_06_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Mercoledi_09_30_15_50_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Mercoledi_05_30_13_06_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Martedi_09_30_15_50_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Martedi_05_30_13_06_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Lunedi_09_30_15_50_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Lunedi_05_30_13_06_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Lunedi_05_30_13_06_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});