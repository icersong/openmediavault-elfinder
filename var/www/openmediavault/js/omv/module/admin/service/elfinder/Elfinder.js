/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    icersong
 * @copyright Copyright (c) 2020 icersong
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/panel/Panel.js")
/* global _ */

Ext.define("OMV.module.admin.service.elfinder.Info", {
    extend: "Ext.panel.Panel",

    initComponent: function() {
        var me = this;

        me.html = "<ul>"
            + "<li>" + _("Default username:  admin") + "</li>"
            + "<li>" + _("Default password:  openmediavault") + "</li>"
            + "</ul>"
            + "<ul>"
            + "<li>" + _("Give the <b>elfinder</b> user read or read/write privileges to any shared folder to be accessed in elFinder.") + "</li>"
            + "</ul>"
            + "<ul>"
            + "<li><a href='/elfinder/' target='_blank'>" + _("Open in a new window") + "</a></li>"
            + "</ul>";

        me.callParent(arguments);
    }
});

Ext.define("OMV.module.admin.service.elfinder.Interface", {
    extend: "Ext.panel.Panel",

    initComponent: function() {
        var me = this;

        me.html = "<iframe src='/elfinder/' name='elfinder' longsec='elfinder' width='100%' height='100%' />";
        me.callParent(arguments);
    }
});

OMV.WorkspaceManager.registerNode({
    id: "elfinder",
    path: "/service",
    text: _("elFinder"),
    icon16: "images/elfinder.png",
    iconSvg: "images/elfinder.svg"
});

OMV.WorkspaceManager.registerPanel({
    id: "interface",
    path: "/service/elfinder",
    text: _("elFinder"),
    position: 10,
    className: "OMV.module.admin.service.elfinder.Interface"
});

OMV.WorkspaceManager.registerPanel({
    id: "info",
    path: "/service/elfinder",
    text: _("Information"),
    position: 20,
    className: "OMV.module.admin.service.elfinder.Info"
});
