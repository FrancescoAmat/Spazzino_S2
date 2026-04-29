var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_556_Domenica_16_00_23_30_1 = new ol.format.GeoJSON();
var features_556_Domenica_16_00_23_30_1 = format_556_Domenica_16_00_23_30_1.readFeatures(json_556_Domenica_16_00_23_30_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Domenica_16_00_23_30_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Domenica_16_00_23_30_1.addFeatures(features_556_Domenica_16_00_23_30_1);
var lyr_556_Domenica_16_00_23_30_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Domenica_16_00_23_30_1, 
                style: style_556_Domenica_16_00_23_30_1,
                popuplayertitle: '556_Domenica_16_00_23_30',
                interactive: true,
    title: '556_Domenica_16_00_23_30<br />\
    <img src="styles/legend/556_Domenica_16_00_23_30_1_0.png" /> 1<br />' });
var format_555_Domenica_13_00_19_00_2 = new ol.format.GeoJSON();
var features_555_Domenica_13_00_19_00_2 = format_555_Domenica_13_00_19_00_2.readFeatures(json_555_Domenica_13_00_19_00_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_555_Domenica_13_00_19_00_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_555_Domenica_13_00_19_00_2.addFeatures(features_555_Domenica_13_00_19_00_2);
var lyr_555_Domenica_13_00_19_00_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_555_Domenica_13_00_19_00_2, 
                style: style_555_Domenica_13_00_19_00_2,
                popuplayertitle: '555_Domenica_13_00_19_00',
                interactive: true,
    title: '555_Domenica_13_00_19_00<br />\
    <img src="styles/legend/555_Domenica_13_00_19_00_2_0.png" /> 1<br />' });
var format_552_Domenica_10_00_16_00_3 = new ol.format.GeoJSON();
var features_552_Domenica_10_00_16_00_3 = format_552_Domenica_10_00_16_00_3.readFeatures(json_552_Domenica_10_00_16_00_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Domenica_10_00_16_00_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Domenica_10_00_16_00_3.addFeatures(features_552_Domenica_10_00_16_00_3);
var lyr_552_Domenica_10_00_16_00_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Domenica_10_00_16_00_3, 
                style: style_552_Domenica_10_00_16_00_3,
                popuplayertitle: '552_Domenica_10_00_16_00',
                interactive: true,
    title: '552_Domenica_10_00_16_00<br />\
    <img src="styles/legend/552_Domenica_10_00_16_00_3_0.png" /> 1<br />' });
var format_674_Sabato_09_30_15_50_4 = new ol.format.GeoJSON();
var features_674_Sabato_09_30_15_50_4 = format_674_Sabato_09_30_15_50_4.readFeatures(json_674_Sabato_09_30_15_50_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Sabato_09_30_15_50_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Sabato_09_30_15_50_4.addFeatures(features_674_Sabato_09_30_15_50_4);
var lyr_674_Sabato_09_30_15_50_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Sabato_09_30_15_50_4, 
                style: style_674_Sabato_09_30_15_50_4,
                popuplayertitle: '674_Sabato_09_30_15_50',
                interactive: true,
    title: '674_Sabato_09_30_15_50<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_0.png" /> 1<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_1.png" /> 2<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_2.png" /> 3<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_3.png" /> 4<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_4.png" /> 5<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_5.png" /> 6<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_6.png" /> 7<br />\
    <img src="styles/legend/674_Sabato_09_30_15_50_4_7.png" /> 8<br />' });
var format_672_Sabato_05_30_13_06_5 = new ol.format.GeoJSON();
var features_672_Sabato_05_30_13_06_5 = format_672_Sabato_05_30_13_06_5.readFeatures(json_672_Sabato_05_30_13_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Sabato_05_30_13_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Sabato_05_30_13_06_5.addFeatures(features_672_Sabato_05_30_13_06_5);
var lyr_672_Sabato_05_30_13_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Sabato_05_30_13_06_5, 
                style: style_672_Sabato_05_30_13_06_5,
                popuplayertitle: '672_Sabato_05_30_13_06',
                interactive: true,
    title: '672_Sabato_05_30_13_06<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_0.png" /> 1<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_1.png" /> 2<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_2.png" /> 3<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_3.png" /> 4<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_4.png" /> 5<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_5.png" /> 6<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_6.png" /> 7<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_7.png" /> 8<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_8.png" /> 9<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_9.png" /> 10<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_10.png" /> 11<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_11.png" /> 12<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_12.png" /> 13<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_13.png" /> 14<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_14.png" /> 15<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_15.png" /> 16<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_16.png" /> 17<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_17.png" /> 18<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_18.png" /> 19<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_19.png" /> 20<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_20.png" /> 21<br />\
    <img src="styles/legend/672_Sabato_05_30_13_06_5_21.png" /> 22<br />' });
var format_556_Sabato_16_00_23_30_6 = new ol.format.GeoJSON();
var features_556_Sabato_16_00_23_30_6 = format_556_Sabato_16_00_23_30_6.readFeatures(json_556_Sabato_16_00_23_30_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Sabato_16_00_23_30_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Sabato_16_00_23_30_6.addFeatures(features_556_Sabato_16_00_23_30_6);
var lyr_556_Sabato_16_00_23_30_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Sabato_16_00_23_30_6, 
                style: style_556_Sabato_16_00_23_30_6,
                popuplayertitle: '556_Sabato_16_00_23_30',
                interactive: true,
    title: '556_Sabato_16_00_23_30<br />\
    <img src="styles/legend/556_Sabato_16_00_23_30_6_0.png" /> 1<br />' });
var format_555_Sabato_13_00_19_00_7 = new ol.format.GeoJSON();
var features_555_Sabato_13_00_19_00_7 = format_555_Sabato_13_00_19_00_7.readFeatures(json_555_Sabato_13_00_19_00_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_555_Sabato_13_00_19_00_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_555_Sabato_13_00_19_00_7.addFeatures(features_555_Sabato_13_00_19_00_7);
var lyr_555_Sabato_13_00_19_00_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_555_Sabato_13_00_19_00_7, 
                style: style_555_Sabato_13_00_19_00_7,
                popuplayertitle: '555_Sabato_13_00_19_00',
                interactive: true,
    title: '555_Sabato_13_00_19_00<br />\
    <img src="styles/legend/555_Sabato_13_00_19_00_7_0.png" /> 1<br />' });
var format_552_Sabato_10_00_16_00_8 = new ol.format.GeoJSON();
var features_552_Sabato_10_00_16_00_8 = format_552_Sabato_10_00_16_00_8.readFeatures(json_552_Sabato_10_00_16_00_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Sabato_10_00_16_00_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Sabato_10_00_16_00_8.addFeatures(features_552_Sabato_10_00_16_00_8);
var lyr_552_Sabato_10_00_16_00_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Sabato_10_00_16_00_8, 
                style: style_552_Sabato_10_00_16_00_8,
                popuplayertitle: '552_Sabato_10_00_16_00',
                interactive: true,
    title: '552_Sabato_10_00_16_00<br />\
    <img src="styles/legend/552_Sabato_10_00_16_00_8_0.png" /> 1<br />' });
var format_674_Venerdi_09_30_15_50_9 = new ol.format.GeoJSON();
var features_674_Venerdi_09_30_15_50_9 = format_674_Venerdi_09_30_15_50_9.readFeatures(json_674_Venerdi_09_30_15_50_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Venerdi_09_30_15_50_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Venerdi_09_30_15_50_9.addFeatures(features_674_Venerdi_09_30_15_50_9);
var lyr_674_Venerdi_09_30_15_50_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Venerdi_09_30_15_50_9, 
                style: style_674_Venerdi_09_30_15_50_9,
                popuplayertitle: '674_Venerdi_09_30_15_50',
                interactive: true,
    title: '674_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_0.png" /> 1<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_1.png" /> 2<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_2.png" /> 3<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_3.png" /> 4<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_4.png" /> 5<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_5.png" /> 6<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_6.png" /> 7<br />\
    <img src="styles/legend/674_Venerdi_09_30_15_50_9_7.png" /> 8<br />' });
var format_672_Venerdi_05_30_13_06_10 = new ol.format.GeoJSON();
var features_672_Venerdi_05_30_13_06_10 = format_672_Venerdi_05_30_13_06_10.readFeatures(json_672_Venerdi_05_30_13_06_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Venerdi_05_30_13_06_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Venerdi_05_30_13_06_10.addFeatures(features_672_Venerdi_05_30_13_06_10);
var lyr_672_Venerdi_05_30_13_06_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Venerdi_05_30_13_06_10, 
                style: style_672_Venerdi_05_30_13_06_10,
                popuplayertitle: '672_Venerdi_05_30_13_06',
                interactive: true,
    title: '672_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_0.png" /> 1<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_1.png" /> 2<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_2.png" /> 3<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_3.png" /> 4<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_4.png" /> 5<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_5.png" /> 6<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_6.png" /> 7<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_7.png" /> 8<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_8.png" /> 9<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_9.png" /> 10<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_10.png" /> 11<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_11.png" /> 12<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_12.png" /> 13<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_13.png" /> 14<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_14.png" /> 15<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_15.png" /> 16<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_16.png" /> 17<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_17.png" /> 18<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_18.png" /> 19<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_19.png" /> 20<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_20.png" /> 21<br />\
    <img src="styles/legend/672_Venerdi_05_30_13_06_10_21.png" /> 22<br />' });
var format_556_Venerdi_16_00_23_30_11 = new ol.format.GeoJSON();
var features_556_Venerdi_16_00_23_30_11 = format_556_Venerdi_16_00_23_30_11.readFeatures(json_556_Venerdi_16_00_23_30_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Venerdi_16_00_23_30_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Venerdi_16_00_23_30_11.addFeatures(features_556_Venerdi_16_00_23_30_11);
var lyr_556_Venerdi_16_00_23_30_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Venerdi_16_00_23_30_11, 
                style: style_556_Venerdi_16_00_23_30_11,
                popuplayertitle: '556_Venerdi_16_00_23_30',
                interactive: true,
    title: '556_Venerdi_16_00_23_30<br />\
    <img src="styles/legend/556_Venerdi_16_00_23_30_11_0.png" /> 1<br />' });
var format_555_Venerdi_13_00_19_00_12 = new ol.format.GeoJSON();
var features_555_Venerdi_13_00_19_00_12 = format_555_Venerdi_13_00_19_00_12.readFeatures(json_555_Venerdi_13_00_19_00_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_555_Venerdi_13_00_19_00_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_555_Venerdi_13_00_19_00_12.addFeatures(features_555_Venerdi_13_00_19_00_12);
var lyr_555_Venerdi_13_00_19_00_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_555_Venerdi_13_00_19_00_12, 
                style: style_555_Venerdi_13_00_19_00_12,
                popuplayertitle: '555_Venerdi_13_00_19_00',
                interactive: true,
    title: '555_Venerdi_13_00_19_00<br />\
    <img src="styles/legend/555_Venerdi_13_00_19_00_12_0.png" /> 1<br />' });
var format_552_Venerdi_10_00_16_00_13 = new ol.format.GeoJSON();
var features_552_Venerdi_10_00_16_00_13 = format_552_Venerdi_10_00_16_00_13.readFeatures(json_552_Venerdi_10_00_16_00_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Venerdi_10_00_16_00_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Venerdi_10_00_16_00_13.addFeatures(features_552_Venerdi_10_00_16_00_13);
var lyr_552_Venerdi_10_00_16_00_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Venerdi_10_00_16_00_13, 
                style: style_552_Venerdi_10_00_16_00_13,
                popuplayertitle: '552_Venerdi_10_00_16_00',
                interactive: true,
    title: '552_Venerdi_10_00_16_00<br />\
    <img src="styles/legend/552_Venerdi_10_00_16_00_13_0.png" /> 1<br />' });
var format_674_Giovedi_09_30_15_50_14 = new ol.format.GeoJSON();
var features_674_Giovedi_09_30_15_50_14 = format_674_Giovedi_09_30_15_50_14.readFeatures(json_674_Giovedi_09_30_15_50_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Giovedi_09_30_15_50_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Giovedi_09_30_15_50_14.addFeatures(features_674_Giovedi_09_30_15_50_14);
var lyr_674_Giovedi_09_30_15_50_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Giovedi_09_30_15_50_14, 
                style: style_674_Giovedi_09_30_15_50_14,
                popuplayertitle: '674_Giovedi_09_30_15_50',
                interactive: true,
    title: '674_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_0.png" /> 1<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_1.png" /> 2<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_2.png" /> 3<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_3.png" /> 4<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_4.png" /> 5<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_5.png" /> 6<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_6.png" /> 7<br />\
    <img src="styles/legend/674_Giovedi_09_30_15_50_14_7.png" /> 8<br />' });
var format_672_Giovedi_05_30_13_06_15 = new ol.format.GeoJSON();
var features_672_Giovedi_05_30_13_06_15 = format_672_Giovedi_05_30_13_06_15.readFeatures(json_672_Giovedi_05_30_13_06_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Giovedi_05_30_13_06_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Giovedi_05_30_13_06_15.addFeatures(features_672_Giovedi_05_30_13_06_15);
var lyr_672_Giovedi_05_30_13_06_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Giovedi_05_30_13_06_15, 
                style: style_672_Giovedi_05_30_13_06_15,
                popuplayertitle: '672_Giovedi_05_30_13_06',
                interactive: true,
    title: '672_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_0.png" /> 1<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_1.png" /> 2<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_2.png" /> 3<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_3.png" /> 4<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_4.png" /> 5<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_5.png" /> 6<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_6.png" /> 7<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_7.png" /> 8<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_8.png" /> 9<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_9.png" /> 10<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_10.png" /> 11<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_11.png" /> 12<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_12.png" /> 13<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_13.png" /> 14<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_14.png" /> 15<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_15.png" /> 16<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_16.png" /> 17<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_17.png" /> 18<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_18.png" /> 19<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_19.png" /> 20<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_20.png" /> 21<br />\
    <img src="styles/legend/672_Giovedi_05_30_13_06_15_21.png" /> 22<br />' });
var format_556_Giovedi_16_00_23_30_16 = new ol.format.GeoJSON();
var features_556_Giovedi_16_00_23_30_16 = format_556_Giovedi_16_00_23_30_16.readFeatures(json_556_Giovedi_16_00_23_30_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Giovedi_16_00_23_30_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Giovedi_16_00_23_30_16.addFeatures(features_556_Giovedi_16_00_23_30_16);
var lyr_556_Giovedi_16_00_23_30_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Giovedi_16_00_23_30_16, 
                style: style_556_Giovedi_16_00_23_30_16,
                popuplayertitle: '556_Giovedi_16_00_23_30',
                interactive: true,
    title: '556_Giovedi_16_00_23_30<br />\
    <img src="styles/legend/556_Giovedi_16_00_23_30_16_0.png" /> 1<br />' });
var format_552_Giovedi_10_00_16_00_17 = new ol.format.GeoJSON();
var features_552_Giovedi_10_00_16_00_17 = format_552_Giovedi_10_00_16_00_17.readFeatures(json_552_Giovedi_10_00_16_00_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Giovedi_10_00_16_00_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Giovedi_10_00_16_00_17.addFeatures(features_552_Giovedi_10_00_16_00_17);
var lyr_552_Giovedi_10_00_16_00_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Giovedi_10_00_16_00_17, 
                style: style_552_Giovedi_10_00_16_00_17,
                popuplayertitle: '552_Giovedi_10_00_16_00',
                interactive: true,
    title: '552_Giovedi_10_00_16_00<br />\
    <img src="styles/legend/552_Giovedi_10_00_16_00_17_0.png" /> 1<br />' });
var format_674_Mercoledi_09_30_15_50_18 = new ol.format.GeoJSON();
var features_674_Mercoledi_09_30_15_50_18 = format_674_Mercoledi_09_30_15_50_18.readFeatures(json_674_Mercoledi_09_30_15_50_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Mercoledi_09_30_15_50_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Mercoledi_09_30_15_50_18.addFeatures(features_674_Mercoledi_09_30_15_50_18);
var lyr_674_Mercoledi_09_30_15_50_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Mercoledi_09_30_15_50_18, 
                style: style_674_Mercoledi_09_30_15_50_18,
                popuplayertitle: '674_Mercoledi_09_30_15_50',
                interactive: true,
    title: '674_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_0.png" /> 1<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_1.png" /> 2<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_2.png" /> 3<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_3.png" /> 4<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_4.png" /> 5<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_5.png" /> 6<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_6.png" /> 7<br />\
    <img src="styles/legend/674_Mercoledi_09_30_15_50_18_7.png" /> 8<br />' });
var format_672_Mercoledi_05_30_13_06_19 = new ol.format.GeoJSON();
var features_672_Mercoledi_05_30_13_06_19 = format_672_Mercoledi_05_30_13_06_19.readFeatures(json_672_Mercoledi_05_30_13_06_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Mercoledi_05_30_13_06_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Mercoledi_05_30_13_06_19.addFeatures(features_672_Mercoledi_05_30_13_06_19);
var lyr_672_Mercoledi_05_30_13_06_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Mercoledi_05_30_13_06_19, 
                style: style_672_Mercoledi_05_30_13_06_19,
                popuplayertitle: '672_Mercoledi_05_30_13_06',
                interactive: true,
    title: '672_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_0.png" /> 1<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_1.png" /> 2<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_2.png" /> 3<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_3.png" /> 4<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_4.png" /> 5<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_5.png" /> 6<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_6.png" /> 7<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_7.png" /> 8<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_8.png" /> 9<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_9.png" /> 10<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_10.png" /> 11<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_11.png" /> 12<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_12.png" /> 13<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_13.png" /> 14<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_14.png" /> 15<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_15.png" /> 16<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_16.png" /> 17<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_17.png" /> 18<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_18.png" /> 19<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_19.png" /> 20<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_20.png" /> 21<br />\
    <img src="styles/legend/672_Mercoledi_05_30_13_06_19_21.png" /> 22<br />' });
var format_556_Mercoledi_16_00_23_30_20 = new ol.format.GeoJSON();
var features_556_Mercoledi_16_00_23_30_20 = format_556_Mercoledi_16_00_23_30_20.readFeatures(json_556_Mercoledi_16_00_23_30_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Mercoledi_16_00_23_30_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Mercoledi_16_00_23_30_20.addFeatures(features_556_Mercoledi_16_00_23_30_20);
var lyr_556_Mercoledi_16_00_23_30_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Mercoledi_16_00_23_30_20, 
                style: style_556_Mercoledi_16_00_23_30_20,
                popuplayertitle: '556_Mercoledi_16_00_23_30',
                interactive: true,
    title: '556_Mercoledi_16_00_23_30<br />\
    <img src="styles/legend/556_Mercoledi_16_00_23_30_20_0.png" /> 1<br />' });
var format_552_Mercoledi_10_00_16_00_21 = new ol.format.GeoJSON();
var features_552_Mercoledi_10_00_16_00_21 = format_552_Mercoledi_10_00_16_00_21.readFeatures(json_552_Mercoledi_10_00_16_00_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Mercoledi_10_00_16_00_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Mercoledi_10_00_16_00_21.addFeatures(features_552_Mercoledi_10_00_16_00_21);
var lyr_552_Mercoledi_10_00_16_00_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Mercoledi_10_00_16_00_21, 
                style: style_552_Mercoledi_10_00_16_00_21,
                popuplayertitle: '552_Mercoledi_10_00_16_00',
                interactive: true,
    title: '552_Mercoledi_10_00_16_00<br />\
    <img src="styles/legend/552_Mercoledi_10_00_16_00_21_0.png" /> 1<br />' });
var format_674_Martedi_09_30_15_50_22 = new ol.format.GeoJSON();
var features_674_Martedi_09_30_15_50_22 = format_674_Martedi_09_30_15_50_22.readFeatures(json_674_Martedi_09_30_15_50_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Martedi_09_30_15_50_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Martedi_09_30_15_50_22.addFeatures(features_674_Martedi_09_30_15_50_22);
var lyr_674_Martedi_09_30_15_50_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Martedi_09_30_15_50_22, 
                style: style_674_Martedi_09_30_15_50_22,
                popuplayertitle: '674_Martedi_09_30_15_50',
                interactive: true,
    title: '674_Martedi_09_30_15_50<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_0.png" /> 1<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_1.png" /> 2<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_2.png" /> 3<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_3.png" /> 4<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_4.png" /> 5<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_5.png" /> 6<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_6.png" /> 7<br />\
    <img src="styles/legend/674_Martedi_09_30_15_50_22_7.png" /> 8<br />' });
var format_672_Martedi_05_30_13_06_23 = new ol.format.GeoJSON();
var features_672_Martedi_05_30_13_06_23 = format_672_Martedi_05_30_13_06_23.readFeatures(json_672_Martedi_05_30_13_06_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Martedi_05_30_13_06_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Martedi_05_30_13_06_23.addFeatures(features_672_Martedi_05_30_13_06_23);
var lyr_672_Martedi_05_30_13_06_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Martedi_05_30_13_06_23, 
                style: style_672_Martedi_05_30_13_06_23,
                popuplayertitle: '672_Martedi_05_30_13_06',
                interactive: true,
    title: '672_Martedi_05_30_13_06<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_0.png" /> 1<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_1.png" /> 2<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_2.png" /> 3<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_3.png" /> 4<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_4.png" /> 5<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_5.png" /> 6<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_6.png" /> 7<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_7.png" /> 8<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_8.png" /> 9<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_9.png" /> 10<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_10.png" /> 11<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_11.png" /> 12<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_12.png" /> 13<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_13.png" /> 14<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_14.png" /> 15<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_15.png" /> 16<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_16.png" /> 17<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_17.png" /> 18<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_18.png" /> 19<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_19.png" /> 20<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_20.png" /> 21<br />\
    <img src="styles/legend/672_Martedi_05_30_13_06_23_21.png" /> 22<br />' });
var format_556_Martedi_16_00_23_30_24 = new ol.format.GeoJSON();
var features_556_Martedi_16_00_23_30_24 = format_556_Martedi_16_00_23_30_24.readFeatures(json_556_Martedi_16_00_23_30_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Martedi_16_00_23_30_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Martedi_16_00_23_30_24.addFeatures(features_556_Martedi_16_00_23_30_24);
var lyr_556_Martedi_16_00_23_30_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Martedi_16_00_23_30_24, 
                style: style_556_Martedi_16_00_23_30_24,
                popuplayertitle: '556_Martedi_16_00_23_30',
                interactive: true,
    title: '556_Martedi_16_00_23_30<br />\
    <img src="styles/legend/556_Martedi_16_00_23_30_24_0.png" /> 1<br />' });
var format_552_Martedi_10_00_16_00_25 = new ol.format.GeoJSON();
var features_552_Martedi_10_00_16_00_25 = format_552_Martedi_10_00_16_00_25.readFeatures(json_552_Martedi_10_00_16_00_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Martedi_10_00_16_00_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Martedi_10_00_16_00_25.addFeatures(features_552_Martedi_10_00_16_00_25);
var lyr_552_Martedi_10_00_16_00_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Martedi_10_00_16_00_25, 
                style: style_552_Martedi_10_00_16_00_25,
                popuplayertitle: '552_Martedi_10_00_16_00',
                interactive: true,
    title: '552_Martedi_10_00_16_00<br />\
    <img src="styles/legend/552_Martedi_10_00_16_00_25_0.png" /> 1<br />' });
var format_674_Lunedi_09_30_15_50_26 = new ol.format.GeoJSON();
var features_674_Lunedi_09_30_15_50_26 = format_674_Lunedi_09_30_15_50_26.readFeatures(json_674_Lunedi_09_30_15_50_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_674_Lunedi_09_30_15_50_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_674_Lunedi_09_30_15_50_26.addFeatures(features_674_Lunedi_09_30_15_50_26);
var lyr_674_Lunedi_09_30_15_50_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_674_Lunedi_09_30_15_50_26, 
                style: style_674_Lunedi_09_30_15_50_26,
                popuplayertitle: '674_Lunedi_09_30_15_50',
                interactive: true,
    title: '674_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_0.png" /> 1<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_1.png" /> 2<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_2.png" /> 3<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_3.png" /> 4<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_4.png" /> 5<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_5.png" /> 6<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_6.png" /> 7<br />\
    <img src="styles/legend/674_Lunedi_09_30_15_50_26_7.png" /> 8<br />' });
var format_672_Lunedi_05_30_13_06_27 = new ol.format.GeoJSON();
var features_672_Lunedi_05_30_13_06_27 = format_672_Lunedi_05_30_13_06_27.readFeatures(json_672_Lunedi_05_30_13_06_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_672_Lunedi_05_30_13_06_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_672_Lunedi_05_30_13_06_27.addFeatures(features_672_Lunedi_05_30_13_06_27);
var lyr_672_Lunedi_05_30_13_06_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_672_Lunedi_05_30_13_06_27, 
                style: style_672_Lunedi_05_30_13_06_27,
                popuplayertitle: '672_Lunedi_05_30_13_06',
                interactive: true,
    title: '672_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_0.png" /> 1<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_1.png" /> 2<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_2.png" /> 3<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_3.png" /> 4<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_4.png" /> 5<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_5.png" /> 6<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_6.png" /> 7<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_7.png" /> 8<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_8.png" /> 9<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_9.png" /> 10<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_10.png" /> 11<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_11.png" /> 12<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_12.png" /> 13<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_13.png" /> 14<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_14.png" /> 15<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_15.png" /> 16<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_16.png" /> 17<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_17.png" /> 18<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_18.png" /> 19<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_19.png" /> 20<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_20.png" /> 21<br />\
    <img src="styles/legend/672_Lunedi_05_30_13_06_27_21.png" /> 22<br />' });
var format_556_Lunedi_16_00_23_30_28 = new ol.format.GeoJSON();
var features_556_Lunedi_16_00_23_30_28 = format_556_Lunedi_16_00_23_30_28.readFeatures(json_556_Lunedi_16_00_23_30_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_556_Lunedi_16_00_23_30_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_556_Lunedi_16_00_23_30_28.addFeatures(features_556_Lunedi_16_00_23_30_28);
var lyr_556_Lunedi_16_00_23_30_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_556_Lunedi_16_00_23_30_28, 
                style: style_556_Lunedi_16_00_23_30_28,
                popuplayertitle: '556_Lunedi_16_00_23_30',
                interactive: true,
    title: '556_Lunedi_16_00_23_30<br />\
    <img src="styles/legend/556_Lunedi_16_00_23_30_28_0.png" /> 1<br />' });
var format_552_Lunedi_10_00_16_00_29 = new ol.format.GeoJSON();
var features_552_Lunedi_10_00_16_00_29 = format_552_Lunedi_10_00_16_00_29.readFeatures(json_552_Lunedi_10_00_16_00_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_552_Lunedi_10_00_16_00_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_552_Lunedi_10_00_16_00_29.addFeatures(features_552_Lunedi_10_00_16_00_29);
var lyr_552_Lunedi_10_00_16_00_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_552_Lunedi_10_00_16_00_29, 
                style: style_552_Lunedi_10_00_16_00_29,
                popuplayertitle: '552_Lunedi_10_00_16_00',
                interactive: true,
    title: '552_Lunedi_10_00_16_00<br />\
    <img src="styles/legend/552_Lunedi_10_00_16_00_29_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_674_Lunedi_09_30_15_50_26,lyr_672_Lunedi_05_30_13_06_27,lyr_556_Lunedi_16_00_23_30_28,lyr_552_Lunedi_10_00_16_00_29,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_674_Martedi_09_30_15_50_22,lyr_672_Martedi_05_30_13_06_23,lyr_556_Martedi_16_00_23_30_24,lyr_552_Martedi_10_00_16_00_25,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_674_Mercoledi_09_30_15_50_18,lyr_672_Mercoledi_05_30_13_06_19,lyr_556_Mercoledi_16_00_23_30_20,lyr_552_Mercoledi_10_00_16_00_21,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_674_Giovedi_09_30_15_50_14,lyr_672_Giovedi_05_30_13_06_15,lyr_556_Giovedi_16_00_23_30_16,lyr_552_Giovedi_10_00_16_00_17,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_674_Venerdi_09_30_15_50_9,lyr_672_Venerdi_05_30_13_06_10,lyr_556_Venerdi_16_00_23_30_11,lyr_555_Venerdi_13_00_19_00_12,lyr_552_Venerdi_10_00_16_00_13,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_674_Sabato_09_30_15_50_4,lyr_672_Sabato_05_30_13_06_5,lyr_556_Sabato_16_00_23_30_6,lyr_555_Sabato_13_00_19_00_7,lyr_552_Sabato_10_00_16_00_8,],
                                fold: 'close',
                                title: 'Sabato'});
var group_Domenica = new ol.layer.Group({
                                layers: [lyr_556_Domenica_16_00_23_30_1,lyr_555_Domenica_13_00_19_00_2,lyr_552_Domenica_10_00_16_00_3,],
                                fold: 'close',
                                title: 'Domenica'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_556_Domenica_16_00_23_30_1.setVisible(false);lyr_555_Domenica_13_00_19_00_2.setVisible(false);lyr_552_Domenica_10_00_16_00_3.setVisible(false);lyr_674_Sabato_09_30_15_50_4.setVisible(false);lyr_672_Sabato_05_30_13_06_5.setVisible(false);lyr_556_Sabato_16_00_23_30_6.setVisible(false);lyr_555_Sabato_13_00_19_00_7.setVisible(false);lyr_552_Sabato_10_00_16_00_8.setVisible(false);lyr_674_Venerdi_09_30_15_50_9.setVisible(false);lyr_672_Venerdi_05_30_13_06_10.setVisible(false);lyr_556_Venerdi_16_00_23_30_11.setVisible(false);lyr_555_Venerdi_13_00_19_00_12.setVisible(false);lyr_552_Venerdi_10_00_16_00_13.setVisible(false);lyr_674_Giovedi_09_30_15_50_14.setVisible(false);lyr_672_Giovedi_05_30_13_06_15.setVisible(false);lyr_556_Giovedi_16_00_23_30_16.setVisible(false);lyr_552_Giovedi_10_00_16_00_17.setVisible(false);lyr_674_Mercoledi_09_30_15_50_18.setVisible(false);lyr_672_Mercoledi_05_30_13_06_19.setVisible(false);lyr_556_Mercoledi_16_00_23_30_20.setVisible(false);lyr_552_Mercoledi_10_00_16_00_21.setVisible(false);lyr_674_Martedi_09_30_15_50_22.setVisible(false);lyr_672_Martedi_05_30_13_06_23.setVisible(false);lyr_556_Martedi_16_00_23_30_24.setVisible(false);lyr_552_Martedi_10_00_16_00_25.setVisible(false);lyr_674_Lunedi_09_30_15_50_26.setVisible(true);lyr_672_Lunedi_05_30_13_06_27.setVisible(false);lyr_556_Lunedi_16_00_23_30_28.setVisible(false);lyr_552_Lunedi_10_00_16_00_29.setVisible(false);
var layersList = [lyr_Mappa_web_Fra_0,group_Domenica,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_556_Domenica_16_00_23_30_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_555_Domenica_13_00_19_00_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Domenica_10_00_16_00_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Sabato_09_30_15_50_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Sabato_05_30_13_06_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Sabato_16_00_23_30_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_555_Sabato_13_00_19_00_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Sabato_10_00_16_00_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Venerdi_09_30_15_50_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Venerdi_05_30_13_06_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Venerdi_16_00_23_30_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_555_Venerdi_13_00_19_00_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Venerdi_10_00_16_00_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Giovedi_09_30_15_50_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Giovedi_05_30_13_06_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Giovedi_16_00_23_30_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Giovedi_10_00_16_00_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Mercoledi_09_30_15_50_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Mercoledi_05_30_13_06_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Mercoledi_16_00_23_30_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Mercoledi_10_00_16_00_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Martedi_09_30_15_50_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Martedi_05_30_13_06_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Martedi_16_00_23_30_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Martedi_10_00_16_00_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_674_Lunedi_09_30_15_50_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_672_Lunedi_05_30_13_06_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Lunedi_16_00_23_30_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_552_Lunedi_10_00_16_00_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_556_Domenica_16_00_23_30_1.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_555_Domenica_13_00_19_00_2.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Domenica_10_00_16_00_3.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Sabato_09_30_15_50_4.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Sabato_05_30_13_06_5.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Sabato_16_00_23_30_6.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_555_Sabato_13_00_19_00_7.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Sabato_10_00_16_00_8.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Venerdi_09_30_15_50_9.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Venerdi_05_30_13_06_10.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Venerdi_16_00_23_30_11.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_555_Venerdi_13_00_19_00_12.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Venerdi_10_00_16_00_13.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Giovedi_09_30_15_50_14.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Giovedi_05_30_13_06_15.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Giovedi_16_00_23_30_16.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Giovedi_10_00_16_00_17.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Mercoledi_09_30_15_50_18.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Mercoledi_05_30_13_06_19.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Mercoledi_16_00_23_30_20.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Mercoledi_10_00_16_00_21.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Martedi_09_30_15_50_22.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Martedi_05_30_13_06_23.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Martedi_16_00_23_30_24.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Martedi_10_00_16_00_25.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_674_Lunedi_09_30_15_50_26.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_672_Lunedi_05_30_13_06_27.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Lunedi_16_00_23_30_28.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_552_Lunedi_10_00_16_00_29.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_556_Domenica_16_00_23_30_1.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_555_Domenica_13_00_19_00_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Domenica_10_00_16_00_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Sabato_09_30_15_50_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Sabato_05_30_13_06_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_556_Sabato_16_00_23_30_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_555_Sabato_13_00_19_00_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Sabato_10_00_16_00_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Venerdi_09_30_15_50_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Venerdi_05_30_13_06_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_556_Venerdi_16_00_23_30_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_555_Venerdi_13_00_19_00_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Venerdi_10_00_16_00_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Giovedi_09_30_15_50_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Giovedi_05_30_13_06_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_556_Giovedi_16_00_23_30_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Giovedi_10_00_16_00_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Mercoledi_09_30_15_50_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Mercoledi_05_30_13_06_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_556_Mercoledi_16_00_23_30_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Mercoledi_10_00_16_00_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Martedi_09_30_15_50_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Martedi_05_30_13_06_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_556_Martedi_16_00_23_30_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Martedi_10_00_16_00_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_674_Lunedi_09_30_15_50_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_672_Lunedi_05_30_13_06_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'hidden field', });
lyr_556_Lunedi_16_00_23_30_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Lunedi_10_00_16_00_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_552_Lunedi_10_00_16_00_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});