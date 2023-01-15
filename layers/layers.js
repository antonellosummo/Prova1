var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_calabriazvn2021coord_modificato_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "calabria zvn 2021coord_modificato",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/calabriazvn2021coord_modificato_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1704657.258468, 4551237.827889, 1954667.205944, 4902675.285574]
                            })
                        });
var lyr_ProvinceUffici_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "province",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Province - Uffici",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ProvinceUffici_2, 0]);
var lyr_Mappe_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralZoning",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mappe",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Mappe_3, 0]);
var lyr_Acque_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "acque",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Acque",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Acque_4, 0]);
var lyr_Strade_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "strade",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Strade",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Strade_5, 0]);
var lyr_Particelle_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Particelle",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Particelle_6, 0]);
var lyr_Fabbricati_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "fabbricati",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fabbricati",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fabbricati_7, 0]);
var lyr_Vestizioni_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?VER%20SION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "vestizioni",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vestizioni",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vestizioni_8, 0]);
var format_limiticomunali_9 = new ol.format.GeoJSON();
var features_limiticomunali_9 = format_limiticomunali_9.readFeatures(json_limiticomunali_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiticomunali_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiticomunali_9.addFeatures(features_limiticomunali_9);
var lyr_limiticomunali_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limiticomunali_9,
maxResolution:100.81607814814305,
 
                style: style_limiticomunali_9,
                interactive: true,
                title: '<img src="styles/legend/limiticomunali_9.png" /> limiti comunali'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_calabriazvn2021coord_modificato_1.setVisible(true);lyr_ProvinceUffici_2.setVisible(true);lyr_Mappe_3.setVisible(true);lyr_Acque_4.setVisible(true);lyr_Strade_5.setVisible(true);lyr_Particelle_6.setVisible(true);lyr_Fabbricati_7.setVisible(true);lyr_Vestizioni_8.setVisible(true);lyr_limiticomunali_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_calabriazvn2021coord_modificato_1,lyr_ProvinceUffici_2,lyr_Mappe_3,lyr_Acque_4,lyr_Strade_5,lyr_Particelle_6,lyr_Fabbricati_7,lyr_Vestizioni_8,lyr_limiticomunali_9];
lyr_limiticomunali_9.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FILE_ID': 'FILE_ID', 'FONTE': 'FONTE', 'RILIEVO': 'RILIEVO', 'TIPO_ELAB': 'TIPO_ELAB', 'NOTE': 'NOTE', 'NOME': 'NOME', 'ISTAT': 'ISTAT', 'TIPO_LIM': 'TIPO_LIM', });
lyr_limiticomunali_9.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FILE_ID': 'Range', 'FONTE': 'TextEdit', 'RILIEVO': 'TextEdit', 'TIPO_ELAB': 'TextEdit', 'NOTE': 'TextEdit', 'NOME': 'TextEdit', 'ISTAT': 'TextEdit', 'TIPO_LIM': 'TextEdit', });
lyr_limiticomunali_9.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FILE_ID': 'no label', 'FONTE': 'no label', 'RILIEVO': 'no label', 'TIPO_ELAB': 'no label', 'NOTE': 'no label', 'NOME': 'no label', 'ISTAT': 'no label', 'TIPO_LIM': 'no label', });
lyr_limiticomunali_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});