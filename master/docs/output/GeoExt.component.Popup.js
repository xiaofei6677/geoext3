Ext.data.JsonP.GeoExt_component_Popup({"tagname":"class","name":"GeoExt.component.Popup","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Popup.js","href":"Popup.html#GeoExt-component-Popup"}],"aliases":{"widget":["gx_popup","gx_component_popup"]},"alternateClassNames":[],"extends":"Ext.Component","mixins":[],"requires":[],"uses":[],"members":[{"name":"map","tagname":"cfg","owner":"GeoExt.component.Popup","id":"cfg-map","meta":{}},{"name":"overlay","tagname":"cfg","owner":"GeoExt.component.Popup","id":"cfg-overlay","meta":{}},{"name":"cls","tagname":"property","owner":"GeoExt.component.Popup","id":"property-cls","meta":{}},{"name":"overlayElement","tagname":"property","owner":"GeoExt.component.Popup","id":"property-overlayElement","meta":{"private":true}},{"name":"overlayElementCreated","tagname":"property","owner":"GeoExt.component.Popup","id":"property-overlayElementCreated","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.component.Popup","id":"method-constructor","meta":{}},{"name":"getMap","tagname":"method","owner":"GeoExt.component.Popup","id":"method-getMap","meta":{}},{"name":"getOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-getOverlay","meta":{}},{"name":"initComponent","tagname":"method","owner":"GeoExt.component.Popup","id":"method-initComponent","meta":{"private":true}},{"name":"onBeforeDestroy","tagname":"method","owner":"GeoExt.component.Popup","id":"method-onBeforeDestroy","meta":{"private":true}},{"name":"position","tagname":"method","owner":"GeoExt.component.Popup","id":"method-position","meta":{}},{"name":"setMap","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setMap","meta":{}},{"name":"setOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setOverlay","meta":{}},{"name":"setOverlayElement","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setOverlayElement","meta":{"private":true}},{"name":"setupOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setupOverlay","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.component.Popup","short_doc":"An GeoExt.component.Popup can be used to displays a popup over the map. ...","component":true,"superclasses":["Ext.Component"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.component.Popup</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Popup.html#GeoExt-component-Popup' target='_blank'>Popup.js</a></div></pre><div class='doc-contents'><p>An <a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a> can be used to displays a popup over the map.</p>\n\n<p>Example (hover over anything in the map to see a popup):</p>\n\n<pre class='inline-example preview'><code>var olMap = new ol.Map({\n    layers: [\n        new ol.layer.Tile({\n           source: new ol.source.MapQuest({layer: 'osm'})\n        })\n    ],\n    view: new ol.View({\n        center: ol.proj.fromLonLat([-8.751278, 40.611368]),\n        zoom: 12\n    })\n})\nvar mapComponent = Ext.create('<a href=\"#!/api/GeoExt.component.Map\" rel=\"GeoExt.component.Map\" class=\"docClass\">GeoExt.component.Map</a>', {\n    map: olMap,\n    pointerRest: true,\n    pointerRestInterval: 750,\n    pointerRestPixelTolerance: 5,\n    renderTo: Ext.getBody(),\n    height: 200\n});\nvar popup = Ext.create('<a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a>', {\n    map: olMap,\n    width: 140\n});\nmapComponent.on('pointerrest', function(evt) {\n    var coord = evt.coordinate;\n    var transformed = ol.proj.toLonLat(coord);\n    var hdms = ol.coordinate.toStringHDMS(transformed);\n    hdms = hdms.replace(/([NS])/, '$1&lt;br&gt;');\n    popup.setHtml('&lt;p&gt;&lt;strong&gt;Pointer rested on&lt;/strong&gt;' +\n            '&lt;br /&gt;&lt;code&gt;' + hdms + '&lt;/code&gt;&lt;/p&gt;');\n    popup.position(coord);\n    popup.show();\n});\nmapComponent.on('pointerrestout', popup.hide, popup);\n</code></pre>\n\n<p>The above example loads the provided CSS-file <code>resources/css/gx-popup.css</code>\nand also uses the following inline CSS:</p>\n\n<pre><code>.gx-popup p {\n    padding: 5px 5px 0 5px;\n    border-radius: 7px;\n    background-color: rgba(255,255,255,0.85);\n    border: 3px solid white;\n    margin: 0;\n    text-align: center;\n}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-map' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-cfg-map' class='name expandable'>map</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-overlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-cfg-overlay' class='name expandable'>overlay</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The CSS class of the popup. ...</div><div class='long'><p>The CSS class of the popup.</p>\n<p>Defaults to: <code>'gx-popup'</code></p></div></div></div><div id='property-overlayElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-overlayElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-overlayElement' class='name expandable'>overlayElement</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-overlayElementCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-overlayElementCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-overlayElementCreated' class='name expandable'>overlayElementCreated</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.component.Popup-method-constructor' class='name expandable'>GeoExt.component.Popup</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Construct a popup. ...</div><div class='long'><p>Construct a popup.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of map. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-map\" rel=\"GeoExt.component.Popup-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-getOverlay' class='name expandable'>getOverlay</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of overlay. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-overlay\" rel=\"GeoExt.component.Popup-cfg-overlay\" class=\"docClass\">overlay</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBeforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-onBeforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-onBeforeDestroy' class='name expandable'>onBeforeDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-position' class='name expandable'>position</a>( <span class='pre'>coordinate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>(Re-)Positions the popup to the given coordinates. ...</div><div class='long'><p>(Re-)Positions the popup to the given coordinates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coordinate</span> : ol.Coordinate<div class='sub-desc'><p>The new position of the popup as\n    <code>ol.Coordinate</code>.</p>\n</div></li></ul></div></div></div><div id='method-setMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setMap' class='name expandable'>setMap</a>( <span class='pre'>map</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of map. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-map\" rel=\"GeoExt.component.Popup-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setOverlay' class='name expandable'>setOverlay</a>( <span class='pre'>overlay</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of overlay. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-overlay\" rel=\"GeoExt.component.Popup-cfg-overlay\" class=\"docClass\">overlay</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overlay</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setOverlayElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-setOverlayElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setOverlayElement' class='name expandable'>setOverlayElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setupOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-setupOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setupOverlay' class='name expandable'>setupOverlay</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});