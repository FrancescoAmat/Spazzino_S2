var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_674_Sabato_09_30_15_50_1 = new ol.format.GeoJSON();
var features_674_Sabato_09_30_15_50_1 = format_674_Sabato_09_30_15_50_1.readFeatures(json_674_Sabato_09_30_15_50_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Sabato_09_30_15_50_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Sabato_09_30_15_50_1.addFeatures(features_674_Sabato_09_30_15_50_1);
var lyr_674_Sabato_09_30_15_50_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Sabato_09_30_15_50_1, 
                style: style_674_Sabato_09_30_15_50_1,
                popuplayertitle: '674_Sabato_09_30_15_50',
                interactive: true,
    title: '674_Sabato_09_30_15_50<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_0.png" /> 1<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_1.png" /> 2<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_2.png" /> 3<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_3.png" /> 4<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_4.png" /> 5<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_5.png" /> 6<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_6.png" /> 7<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_1_7.png" /> 8<br />' });
var format_672_Sabato_05_30_13_06_2 = new ol.format.GeoJSON();
var features_672_Sabato_05_30_13_06_2 = format_672_Sabato_05_30_13_06_2.readFeatures(json_672_Sabato_05_30_13_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Sabato_05_30_13_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Sabato_05_30_13_06_2.addFeatures(features_672_Sabato_05_30_13_06_2);
var lyr_672_Sabato_05_30_13_06_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Sabato_05_30_13_06_2, 
                style: style_672_Sabato_05_30_13_06_2,
                popuplayertitle: '672_Sabato_05_30_13_06',
                interactive: true,
    title: '672_Sabato_05_30_13_06<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_0.png" /> 1<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_1.png" /> 2<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_2.png" /> 3<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_3.png" /> 4<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_4.png" /> 5<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_5.png" /> 6<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_6.png" /> 7<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_7.png" /> 8<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_8.png" /> 9<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_9.png" /> 10<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_10.png" /> 11<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_11.png" /> 12<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_12.png" /> 13<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_13.png" /> 14<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_14.png" /> 15<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_15.png" /> 16<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_16.png" /> 17<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_17.png" /> 18<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_18.png" /> 19<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_19.png" /> 20<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_20.png" /> 21<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_2_21.png" /> 22<br />' });
var format_674_Venerdi_09_30_15_50_3 = new ol.format.GeoJSON();
var features_674_Venerdi_09_30_15_50_3 = format_674_Venerdi_09_30_15_50_3.readFeatures(json_674_Venerdi_09_30_15_50_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Venerdi_09_30_15_50_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Venerdi_09_30_15_50_3.addFeatures(features_674_Venerdi_09_30_15_50_3);
var lyr_674_Venerdi_09_30_15_50_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Venerdi_09_30_15_50_3, 
                style: style_674_Venerdi_09_30_15_50_3,
                popuplayertitle: '674_Venerdi_09_30_15_50',
                interactive: true,
    title: '674_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_0.png" /> 1<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_1.png" /> 2<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_2.png" /> 3<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_3.png" /> 4<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_4.png" /> 5<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_5.png" /> 6<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_6.png" /> 7<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_3_7.png" /> 8<br />' });
var format_672_Venerdi_05_30_13_06_4 = new ol.format.GeoJSON();
var features_672_Venerdi_05_30_13_06_4 = format_672_Venerdi_05_30_13_06_4.readFeatures(json_672_Venerdi_05_30_13_06_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Venerdi_05_30_13_06_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Venerdi_05_30_13_06_4.addFeatures(features_672_Venerdi_05_30_13_06_4);
var lyr_672_Venerdi_05_30_13_06_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Venerdi_05_30_13_06_4, 
                style: style_672_Venerdi_05_30_13_06_4,
                popuplayertitle: '672_Venerdi_05_30_13_06',
                interactive: true,
    title: '672_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_0.png" /> 1<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_1.png" /> 2<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_2.png" /> 3<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_3.png" /> 4<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_4.png" /> 5<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_5.png" /> 6<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_6.png" /> 7<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_7.png" /> 8<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_8.png" /> 9<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_9.png" /> 10<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_10.png" /> 11<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_11.png" /> 12<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_12.png" /> 13<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_13.png" /> 14<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_14.png" /> 15<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_15.png" /> 16<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_16.png" /> 17<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_17.png" /> 18<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_18.png" /> 19<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_19.png" /> 20<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_20.png" /> 21<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_4_21.png" /> 22<br />' });
var format_674_Giovedi_09_30_15_50_5 = new ol.format.GeoJSON();
var features_674_Giovedi_09_30_15_50_5 = format_674_Giovedi_09_30_15_50_5.readFeatures(json_674_Giovedi_09_30_15_50_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Giovedi_09_30_15_50_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Giovedi_09_30_15_50_5.addFeatures(features_674_Giovedi_09_30_15_50_5);
var lyr_674_Giovedi_09_30_15_50_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Giovedi_09_30_15_50_5, 
                style: style_674_Giovedi_09_30_15_50_5,
                popuplayertitle: '674_Giovedi_09_30_15_50',
                interactive: true,
    title: '674_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_0.png" /> 1<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_1.png" /> 2<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_2.png" /> 3<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_3.png" /> 4<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_4.png" /> 5<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_5.png" /> 6<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_6.png" /> 7<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_5_7.png" /> 8<br />' });
var format_672_Giovedi_05_30_13_06_6 = new ol.format.GeoJSON();
var features_672_Giovedi_05_30_13_06_6 = format_672_Giovedi_05_30_13_06_6.readFeatures(json_672_Giovedi_05_30_13_06_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Giovedi_05_30_13_06_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Giovedi_05_30_13_06_6.addFeatures(features_672_Giovedi_05_30_13_06_6);
var lyr_672_Giovedi_05_30_13_06_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Giovedi_05_30_13_06_6, 
                style: style_672_Giovedi_05_30_13_06_6,
                popuplayertitle: '672_Giovedi_05_30_13_06',
                interactive: true,
    title: '672_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_0.png" /> 1<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_1.png" /> 2<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_2.png" /> 3<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_3.png" /> 4<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_4.png" /> 5<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_5.png" /> 6<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_6.png" /> 7<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_7.png" /> 8<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_8.png" /> 9<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_9.png" /> 10<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_10.png" /> 11<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_11.png" /> 12<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_12.png" /> 13<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_13.png" /> 14<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_14.png" /> 15<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_15.png" /> 16<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_16.png" /> 17<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_17.png" /> 18<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_18.png" /> 19<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_19.png" /> 20<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_20.png" /> 21<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_6_21.png" /> 22<br />' });
var format_674_Mercoledi_09_30_15_50_7 = new ol.format.GeoJSON();
var features_674_Mercoledi_09_30_15_50_7 = format_674_Mercoledi_09_30_15_50_7.readFeatures(json_674_Mercoledi_09_30_15_50_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Mercoledi_09_30_15_50_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Mercoledi_09_30_15_50_7.addFeatures(features_674_Mercoledi_09_30_15_50_7);
var lyr_674_Mercoledi_09_30_15_50_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Mercoledi_09_30_15_50_7, 
                style: style_674_Mercoledi_09_30_15_50_7,
                popuplayertitle: '674_Mercoledi_09_30_15_50',
                interactive: true,
    title: '674_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_0.png" /> 1<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_1.png" /> 2<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_2.png" /> 3<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_3.png" /> 4<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_4.png" /> 5<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_5.png" /> 6<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_6.png" /> 7<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_7_7.png" /> 8<br />' });
var format_672_Mercoledi_05_30_13_06_8 = new ol.format.GeoJSON();
var features_672_Mercoledi_05_30_13_06_8 = format_672_Mercoledi_05_30_13_06_8.readFeatures(json_672_Mercoledi_05_30_13_06_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Mercoledi_05_30_13_06_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Mercoledi_05_30_13_06_8.addFeatures(features_672_Mercoledi_05_30_13_06_8);
var lyr_672_Mercoledi_05_30_13_06_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Mercoledi_05_30_13_06_8, 
                style: style_672_Mercoledi_05_30_13_06_8,
                popuplayertitle: '672_Mercoledi_05_30_13_06',
                interactive: true,
    title: '672_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_0.png" /> 1<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_1.png" /> 2<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_2.png" /> 3<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_3.png" /> 4<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_4.png" /> 5<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_5.png" /> 6<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_6.png" /> 7<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_7.png" /> 8<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_8.png" /> 9<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_9.png" /> 10<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_10.png" /> 11<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_11.png" /> 12<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_12.png" /> 13<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_13.png" /> 14<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_14.png" /> 15<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_15.png" /> 16<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_16.png" /> 17<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_17.png" /> 18<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_18.png" /> 19<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_19.png" /> 20<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_20.png" /> 21<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_8_21.png" /> 22<br />' });
var format_674_Martedi_09_30_15_50_9 = new ol.format.GeoJSON();
var features_674_Martedi_09_30_15_50_9 = format_674_Martedi_09_30_15_50_9.readFeatures(json_674_Martedi_09_30_15_50_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Martedi_09_30_15_50_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Martedi_09_30_15_50_9.addFeatures(features_674_Martedi_09_30_15_50_9);
var lyr_674_Martedi_09_30_15_50_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Martedi_09_30_15_50_9, 
                style: style_674_Martedi_09_30_15_50_9,
                popuplayertitle: '674_Martedi_09_30_15_50',
                interactive: true,
    title: '674_Martedi_09_30_15_50<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_0.png" /> 1<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_1.png" /> 2<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_2.png" /> 3<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_3.png" /> 4<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_4.png" /> 5<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_5.png" /> 6<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_6.png" /> 7<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_9_7.png" /> 8<br />' });
var format_672_Martedi_05_30_13_06_10 = new ol.format.GeoJSON();
var features_672_Martedi_05_30_13_06_10 = format_672_Martedi_05_30_13_06_10.readFeatures(json_672_Martedi_05_30_13_06_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Martedi_05_30_13_06_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Martedi_05_30_13_06_10.addFeatures(features_672_Martedi_05_30_13_06_10);
var lyr_672_Martedi_05_30_13_06_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Martedi_05_30_13_06_10, 
                style: style_672_Martedi_05_30_13_06_10,
                popuplayertitle: '672_Martedi_05_30_13_06',
                interactive: true,
    title: '672_Martedi_05_30_13_06<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_0.png" /> 1<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_1.png" /> 2<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_2.png" /> 3<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_3.png" /> 4<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_4.png" /> 5<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_5.png" /> 6<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_6.png" /> 7<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_7.png" /> 8<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_8.png" /> 9<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_9.png" /> 10<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_10.png" /> 11<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_11.png" /> 12<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_12.png" /> 13<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_13.png" /> 14<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_14.png" /> 15<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_15.png" /> 16<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_16.png" /> 17<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_17.png" /> 18<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_18.png" /> 19<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_19.png" /> 20<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_20.png" /> 21<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_10_21.png" /> 22<br />' });
var format_674_Lunedi_09_30_15_50_11 = new ol.format.GeoJSON();
var features_674_Lunedi_09_30_15_50_11 = format_674_Lunedi_09_30_15_50_11.readFeatures(json_674_Lunedi_09_30_15_50_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Lunedi_09_30_15_50_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Lunedi_09_30_15_50_11.addFeatures(features_674_Lunedi_09_30_15_50_11);
var lyr_674_Lunedi_09_30_15_50_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Lunedi_09_30_15_50_11, 
                style: style_674_Lunedi_09_30_15_50_11,
                popuplayertitle: '674_Lunedi_09_30_15_50',
                interactive: true,
    title: '674_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_0.png" /> 1<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_1.png" /> 2<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_2.png" /> 3<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_3.png" /> 4<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_4.png" /> 5<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_5.png" /> 6<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_6.png" /> 7<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_11_7.png" /> 8<br />' });
var format_672_Lunedi_05_30_13_06_12 = new ol.format.GeoJSON();
var features_672_Lunedi_05_30_13_06_12 = format_672_Lunedi_05_30_13_06_12.readFeatures(json_672_Lunedi_05_30_13_06_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Lunedi_05_30_13_06_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Lunedi_05_30_13_06_12.addFeatures(features_672_Lunedi_05_30_13_06_12);
var lyr_672_Lunedi_05_30_13_06_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Lunedi_05_30_13_06_12, 
                style: style_672_Lunedi_05_30_13_06_12,
                popuplayertitle: '672_Lunedi_05_30_13_06',
                interactive: true,
    title: '672_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_0.png" /> 1<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_1.png" /> 2<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_2.png" /> 3<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_3.png" /> 4<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_4.png" /> 5<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_5.png" /> 6<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_6.png" /> 7<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_7.png" /> 8<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_8.png" /> 9<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_9.png" /> 10<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_10.png" /> 11<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_11.png" /> 12<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_12.png" /> 13<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_13.png" /> 14<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_14.png" /> 15<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_15.png" /> 16<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_16.png" /> 17<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_17.png" /> 18<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_18.png" /> 19<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_19.png" /> 20<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_20.png" /> 21<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_12_21.png" /> 22<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_674_Lunedi_09_30_15_50_11,lyr_672_Lunedi_05_30_13_06_12,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_674_Martedi_09_30_15_50_9,lyr_672_Martedi_05_30_13_06_10,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_674_Mercoledi_09_30_15_50_7,lyr_672_Mercoledi_05_30_13_06_8,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_674_Giovedi_09_30_15_50_5,lyr_672_Giovedi_05_30_13_06_6,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_674_Venerdi_09_30_15_50_3,lyr_672_Venerdi_05_30_13_06_4,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_674_Sabato_09_30_15_50_1,lyr_672_Sabato_05_30_13_06_2,],
                                fold: 'close',
                                title: 'Sabato'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_674_Sabato_09_30_15_50_1.setVisible(true);lyr_672_Sabato_05_30_13_06_2.setVisible(true);lyr_674_Venerdi_09_30_15_50_3.setVisible(true);lyr_672_Venerdi_05_30_13_06_4.setVisible(true);lyr_674_Giovedi_09_30_15_50_5.setVisible(true);lyr_672_Giovedi_05_30_13_06_6.setVisible(true);lyr_674_Mercoledi_09_30_15_50_7.setVisible(true);lyr_672_Mercoledi_05_30_13_06_8.setVisible(true);lyr_674_Martedi_09_30_15_50_9.setVisible(true);lyr_672_Martedi_05_30_13_06_10.setVisible(true);lyr_674_Lunedi_09_30_15_50_11.setVisible(true);lyr_672_Lunedi_05_30_13_06_12.setVisible(true);
var layersList = [lyr_Mappa_web_Fra_0,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_674_Sabato_09_30_15_50_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Sabato_05_30_13_06_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Venerdi_09_30_15_50_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Venerdi_05_30_13_06_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Giovedi_09_30_15_50_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Giovedi_05_30_13_06_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Mercoledi_09_30_15_50_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Mercoledi_05_30_13_06_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Martedi_09_30_15_50_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Martedi_05_30_13_06_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Lunedi_09_30_15_50_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Lunedi_05_30_13_06_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'loc_ref': 'loc_ref', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Sabato_09_30_15_50_1.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Sabato_05_30_13_06_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Venerdi_09_30_15_50_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Venerdi_05_30_13_06_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Giovedi_09_30_15_50_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Giovedi_05_30_13_06_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Mercoledi_09_30_15_50_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Mercoledi_05_30_13_06_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Martedi_09_30_15_50_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Martedi_05_30_13_06_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Lunedi_09_30_15_50_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Lunedi_05_30_13_06_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'loc_ref': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Sabato_09_30_15_50_1.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Sabato_05_30_13_06_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Venerdi_09_30_15_50_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Venerdi_05_30_13_06_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Giovedi_09_30_15_50_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Giovedi_05_30_13_06_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Mercoledi_09_30_15_50_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Mercoledi_05_30_13_06_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Martedi_09_30_15_50_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Martedi_05_30_13_06_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Lunedi_09_30_15_50_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Lunedi_05_30_13_06_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'loc_ref': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Lunedi_05_30_13_06_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});