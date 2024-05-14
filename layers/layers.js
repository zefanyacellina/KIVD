var wms_layers = [];


        var lyr_PetaDasar_0 = new ol.layer.Tile({
            'title': 'Peta Dasar',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaManado_1 = new ol.format.GeoJSON();
var features_KotaManado_1 = format_KotaManado_1.readFeatures(json_KotaManado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaManado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaManado_1.addFeatures(features_KotaManado_1);
var lyr_KotaManado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KotaManado_1, 
                style: style_KotaManado_1,
                popuplayertitle: "Kota Manado",
                interactive: true,
                title: '<img src="styles/legend/KotaManado_1.png" /> Kota Manado'
            });
var format_Universitas_2 = new ol.format.GeoJSON();
var features_Universitas_2 = format_Universitas_2.readFeatures(json_Universitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universitas_2.addFeatures(features_Universitas_2);
var lyr_Universitas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Universitas_2, 
                style: style_Universitas_2,
                popuplayertitle: "Universitas",
                interactive: true,
                title: '<img src="styles/legend/Universitas_2.png" /> Universitas'
            });
var format_SekolahMenengahKejuruan_3 = new ol.format.GeoJSON();
var features_SekolahMenengahKejuruan_3 = format_SekolahMenengahKejuruan_3.readFeatures(json_SekolahMenengahKejuruan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahMenengahKejuruan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahMenengahKejuruan_3.addFeatures(features_SekolahMenengahKejuruan_3);
var lyr_SekolahMenengahKejuruan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahMenengahKejuruan_3, 
                style: style_SekolahMenengahKejuruan_3,
                popuplayertitle: "Sekolah Menengah Kejuruan",
                interactive: true,
                title: '<img src="styles/legend/SekolahMenengahKejuruan_3.png" /> Sekolah Menengah Kejuruan'
            });
var format_SekolahMenengahAtas_4 = new ol.format.GeoJSON();
var features_SekolahMenengahAtas_4 = format_SekolahMenengahAtas_4.readFeatures(json_SekolahMenengahAtas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahMenengahAtas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahMenengahAtas_4.addFeatures(features_SekolahMenengahAtas_4);
var lyr_SekolahMenengahAtas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahMenengahAtas_4, 
                style: style_SekolahMenengahAtas_4,
                popuplayertitle: "Sekolah Menengah Atas",
                interactive: true,
                title: '<img src="styles/legend/SekolahMenengahAtas_4.png" /> Sekolah Menengah Atas'
            });
var format_SekolahMenengahPertama_5 = new ol.format.GeoJSON();
var features_SekolahMenengahPertama_5 = format_SekolahMenengahPertama_5.readFeatures(json_SekolahMenengahPertama_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahMenengahPertama_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahMenengahPertama_5.addFeatures(features_SekolahMenengahPertama_5);
var lyr_SekolahMenengahPertama_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahMenengahPertama_5, 
                style: style_SekolahMenengahPertama_5,
                popuplayertitle: "Sekolah Menengah Pertama",
                interactive: true,
                title: '<img src="styles/legend/SekolahMenengahPertama_5.png" /> Sekolah Menengah Pertama'
            });
var format_SekolahLuarBiasa_6 = new ol.format.GeoJSON();
var features_SekolahLuarBiasa_6 = format_SekolahLuarBiasa_6.readFeatures(json_SekolahLuarBiasa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahLuarBiasa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahLuarBiasa_6.addFeatures(features_SekolahLuarBiasa_6);
var lyr_SekolahLuarBiasa_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahLuarBiasa_6, 
                style: style_SekolahLuarBiasa_6,
                popuplayertitle: "Sekolah Luar Biasa",
                interactive: true,
                title: '<img src="styles/legend/SekolahLuarBiasa_6.png" /> Sekolah Luar Biasa'
            });
var format_SekolahDasar_7 = new ol.format.GeoJSON();
var features_SekolahDasar_7 = format_SekolahDasar_7.readFeatures(json_SekolahDasar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahDasar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahDasar_7.addFeatures(features_SekolahDasar_7);
var lyr_SekolahDasar_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SekolahDasar_7, 
                style: style_SekolahDasar_7,
                popuplayertitle: "Sekolah Dasar",
                interactive: true,
                title: '<img src="styles/legend/SekolahDasar_7.png" /> Sekolah Dasar'
            });
var format_TamanKanakKanak_8 = new ol.format.GeoJSON();
var features_TamanKanakKanak_8 = format_TamanKanakKanak_8.readFeatures(json_TamanKanakKanak_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TamanKanakKanak_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TamanKanakKanak_8.addFeatures(features_TamanKanakKanak_8);
var lyr_TamanKanakKanak_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TamanKanakKanak_8, 
                style: style_TamanKanakKanak_8,
                popuplayertitle: "Taman Kanak-Kanak",
                interactive: true,
                title: '<img src="styles/legend/TamanKanakKanak_8.png" /> Taman Kanak-Kanak'
            });

lyr_PetaDasar_0.setVisible(true);lyr_KotaManado_1.setVisible(true);lyr_Universitas_2.setVisible(true);lyr_SekolahMenengahKejuruan_3.setVisible(true);lyr_SekolahMenengahAtas_4.setVisible(true);lyr_SekolahMenengahPertama_5.setVisible(true);lyr_SekolahLuarBiasa_6.setVisible(true);lyr_SekolahDasar_7.setVisible(true);lyr_TamanKanakKanak_8.setVisible(true);
var layersList = [lyr_PetaDasar_0,lyr_KotaManado_1,lyr_Universitas_2,lyr_SekolahMenengahKejuruan_3,lyr_SekolahMenengahAtas_4,lyr_SekolahMenengahPertama_5,lyr_SekolahLuarBiasa_6,lyr_SekolahDasar_7,lyr_TamanKanakKanak_8];
lyr_KotaManado_1.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', });
lyr_Universitas_2.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'dtmhsw': 'dtmhsw', 'fakultas': 'fakultas', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhdosen': 'jmlhdosen', 'jmlhmhsw': 'jmlhmhsw', 'jmlhmhswan': 'jmlhmhswan', 'kantin': 'kantin', 'lapangan': 'lapangan', 'lsparkiran': 'lsparkiran', 'nadek': 'nadek', 'narek': 'narek', 'notelp': 'notelp', 'perpustaka': 'perpustaka', 'prodi': 'prodi', 'ptns': 'ptns', 'stakre': 'stakre', 'toilet': 'toilet', });
lyr_SekolahMenengahKejuruan_3.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'aulars': 'aulars', 'dtm': 'dtm', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhguru': 'jmlhguru', 'jmlhmurid': 'jmlhmurid', 'jmlhmurida': 'jmlhmurida', 'kantin': 'kantin', 'lapangan': 'lapangan', 'lksmk': 'lksmk', 'nkepsek': 'nkepsek', 'notelp': 'notelp', 'parkiran': 'parkiran', 'perpustaka': 'perpustaka', 'toilet': 'toilet', 'uks': 'uks', 'jmlhrombel': 'jmlhrombel', 'laboratori': 'laboratori', });
lyr_SekolahMenengahAtas_4.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'aulars': 'aulars', 'dtm': 'dtm', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhguru': 'jmlhguru', 'jmlhmurid': 'jmlhmurid', 'kantin': 'kantin', 'lapangan': 'lapangan', 'lsparkiran': 'lsparkiran', 'nkepsek': 'nkepsek', 'notelp': 'notelp', 'toilet': 'toilet', 'uks': 'uks', 'jmlhrombel': 'jmlhrombel', 'laboratori': 'laboratori', 'perpustaka': 'perpustaka', });
lyr_SekolahMenengahPertama_5.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'aulars': 'aulars', 'dtm': 'dtm', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhguru': 'jmlhguru', 'jmlhmurid': 'jmlhmurid', 'jmlhmurida': 'jmlhmurida', 'kantin': 'kantin', 'lapangan': 'lapangan', 'lsparkiran': 'lsparkiran', 'nkepsek': 'nkepsek', 'notelp': 'notelp', 'perpustaka': 'perpustaka', 'toilet': 'toilet', 'uks': 'uks', 'jmlhrombel': 'jmlhrombel', 'laboratori': 'laboratori', });
lyr_SekolahLuarBiasa_6.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhguru': 'jmlhguru', 'jmlhmurid': 'jmlhmurid', 'nkepsek': 'nkepsek', 'notelp': 'notelp', 'perpustaka': 'perpustaka', 'toilet': 'toilet', 'uks': 'uks', 'jmlhrombel': 'jmlhrombel', 'laboratori': 'laboratori', });
lyr_SekolahDasar_7.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'icon': 'icon', 'ket': 'ket', 'nama': 'nama', 'status': 'status', 'aulars': 'aulars', 'dtm': 'dtm', 'fasgama': 'fasgama', 'fasilitas': 'fasilitas', 'jlmhrk': 'jlmhrk', 'jmlhguru': 'jmlhguru', 'jmlhmurid': 'jmlhmurid', 'jmlhmurida': 'jmlhmurida', 'kantin': 'kantin', 'lapangan': 'lapangan', 'nkepsek': 'nkepsek', 'notelp': 'notelp', 'perpustaka': 'perpustaka', 'toilet': 'toilet', 'uks': 'uks', 'jmlhrombel': 'jmlhrombel', 'laboratori': 'laboratori', });
lyr_TamanKanakKanak_8.set('fieldAliases', {'id': 'id', 'kode': 'kode', 'alamat': 'alamat', 'buff_size': 'buff_size', 'nama': 'nama', });
lyr_KotaManado_1.set('fieldImages', {'fid': 'Range', 'Kecamatan': 'TextEdit', });
lyr_Universitas_2.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'dtmhsw': 'TextEdit', 'fakultas': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhdosen': 'TextEdit', 'jmlhmhsw': 'TextEdit', 'jmlhmhswan': 'TextEdit', 'kantin': 'TextEdit', 'lapangan': 'TextEdit', 'lsparkiran': 'TextEdit', 'nadek': 'TextEdit', 'narek': 'TextEdit', 'notelp': 'TextEdit', 'perpustaka': 'TextEdit', 'prodi': 'TextEdit', 'ptns': 'TextEdit', 'stakre': 'TextEdit', 'toilet': 'TextEdit', });
lyr_SekolahMenengahKejuruan_3.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'aulars': 'TextEdit', 'dtm': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhguru': 'TextEdit', 'jmlhmurid': 'TextEdit', 'jmlhmurida': 'TextEdit', 'kantin': 'TextEdit', 'lapangan': 'TextEdit', 'lksmk': 'TextEdit', 'nkepsek': 'TextEdit', 'notelp': 'TextEdit', 'parkiran': 'TextEdit', 'perpustaka': 'TextEdit', 'toilet': 'TextEdit', 'uks': 'TextEdit', 'jmlhrombel': 'Range', 'laboratori': 'TextEdit', });
lyr_SekolahMenengahAtas_4.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'aulars': 'TextEdit', 'dtm': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhguru': 'TextEdit', 'jmlhmurid': 'TextEdit', 'kantin': 'TextEdit', 'lapangan': 'TextEdit', 'lsparkiran': 'TextEdit', 'nkepsek': 'TextEdit', 'notelp': 'TextEdit', 'toilet': 'TextEdit', 'uks': 'TextEdit', 'jmlhrombel': 'Range', 'laboratori': 'TextEdit', 'perpustaka': 'TextEdit', });
lyr_SekolahMenengahPertama_5.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'aulars': 'TextEdit', 'dtm': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhguru': 'TextEdit', 'jmlhmurid': 'TextEdit', 'jmlhmurida': 'TextEdit', 'kantin': 'TextEdit', 'lapangan': 'TextEdit', 'lsparkiran': 'TextEdit', 'nkepsek': 'TextEdit', 'notelp': 'TextEdit', 'perpustaka': 'TextEdit', 'toilet': 'TextEdit', 'uks': 'TextEdit', 'jmlhrombel': 'Range', 'laboratori': 'TextEdit', });
lyr_SekolahLuarBiasa_6.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhguru': 'TextEdit', 'jmlhmurid': 'TextEdit', 'nkepsek': 'TextEdit', 'notelp': 'TextEdit', 'perpustaka': 'TextEdit', 'toilet': 'TextEdit', 'uks': 'TextEdit', 'jmlhrombel': 'Range', 'laboratori': 'TextEdit', });
lyr_SekolahDasar_7.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'icon': 'TextEdit', 'ket': 'TextEdit', 'nama': 'TextEdit', 'status': 'TextEdit', 'aulars': 'TextEdit', 'dtm': 'TextEdit', 'fasgama': 'TextEdit', 'fasilitas': 'TextEdit', 'jlmhrk': 'TextEdit', 'jmlhguru': 'TextEdit', 'jmlhmurid': 'TextEdit', 'jmlhmurida': 'TextEdit', 'kantin': 'TextEdit', 'lapangan': 'TextEdit', 'nkepsek': 'TextEdit', 'notelp': 'TextEdit', 'perpustaka': 'TextEdit', 'toilet': 'TextEdit', 'uks': 'TextEdit', 'jmlhrombel': 'Range', 'laboratori': 'TextEdit', });
lyr_TamanKanakKanak_8.set('fieldImages', {'id': 'TextEdit', 'kode': 'TextEdit', 'alamat': 'TextEdit', 'buff_size': 'TextEdit', 'nama': 'TextEdit', });
lyr_KotaManado_1.set('fieldLabels', {'fid': 'no label', 'Kecamatan': 'no label', });
lyr_Universitas_2.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'no label', 'icon': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'dtmhsw': 'no label', 'fakultas': 'inline label - visible with data', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhdosen': 'no label', 'jmlhmhsw': 'no label', 'jmlhmhswan': 'no label', 'kantin': 'no label', 'lapangan': 'no label', 'lsparkiran': 'no label', 'nadek': 'no label', 'narek': 'no label', 'notelp': 'no label', 'perpustaka': 'no label', 'prodi': 'no label', 'ptns': 'no label', 'stakre': 'no label', 'toilet': 'no label', });
lyr_SekolahMenengahKejuruan_3.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'no label', 'icon': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'aulars': 'no label', 'dtm': 'no label', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhguru': 'no label', 'jmlhmurid': 'no label', 'jmlhmurida': 'no label', 'kantin': 'no label', 'lapangan': 'no label', 'lksmk': 'no label', 'nkepsek': 'no label', 'notelp': 'no label', 'parkiran': 'no label', 'perpustaka': 'no label', 'toilet': 'no label', 'uks': 'no label', 'jmlhrombel': 'no label', 'laboratori': 'no label', });
lyr_SekolahMenengahAtas_4.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'no label', 'icon': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'aulars': 'no label', 'dtm': 'no label', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhguru': 'no label', 'jmlhmurid': 'no label', 'kantin': 'no label', 'lapangan': 'no label', 'lsparkiran': 'no label', 'nkepsek': 'no label', 'notelp': 'no label', 'toilet': 'no label', 'uks': 'no label', 'jmlhrombel': 'no label', 'laboratori': 'no label', 'perpustaka': 'no label', });
lyr_SekolahMenengahPertama_5.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'no label', 'icon': 'no label', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'aulars': 'no label', 'dtm': 'no label', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhguru': 'no label', 'jmlhmurid': 'no label', 'jmlhmurida': 'no label', 'kantin': 'no label', 'lapangan': 'no label', 'lsparkiran': 'no label', 'nkepsek': 'no label', 'notelp': 'no label', 'perpustaka': 'no label', 'toilet': 'no label', 'uks': 'no label', 'jmlhrombel': 'no label', 'laboratori': 'no label', });
lyr_SekolahLuarBiasa_6.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'icon': 'no label', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhguru': 'no label', 'jmlhmurid': 'no label', 'nkepsek': 'no label', 'notelp': 'no label', 'perpustaka': 'no label', 'toilet': 'no label', 'uks': 'no label', 'jmlhrombel': 'no label', 'laboratori': 'no label', });
lyr_SekolahDasar_7.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'no label', 'icon': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'status': 'inline label - visible with data', 'aulars': 'no label', 'dtm': 'no label', 'fasgama': 'no label', 'fasilitas': 'no label', 'jlmhrk': 'no label', 'jmlhguru': 'no label', 'jmlhmurid': 'no label', 'jmlhmurida': 'no label', 'kantin': 'no label', 'lapangan': 'no label', 'nkepsek': 'no label', 'notelp': 'no label', 'perpustaka': 'no label', 'toilet': 'no label', 'uks': 'no label', 'jmlhrombel': 'no label', 'laboratori': 'no label', });
lyr_TamanKanakKanak_8.set('fieldLabels', {'id': 'inline label - visible with data', 'kode': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'buff_size': 'inline label - visible with data', 'nama': 'inline label - visible with data', });
lyr_TamanKanakKanak_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});