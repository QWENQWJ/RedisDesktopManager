import QtQuick 2.15
import QtQuick.Layouts 1.1
import QtQuick.Controls 2.13
import QtQuick.Controls 1.4 as LC
import QtQuick.Dialogs 1.3
import Qt.labs.settings 1.0
import QtQuick.Window 2.3
import "../common"
import "."
import "../common/platformutils.js" as PlatformUtils

Dialog {
    id: root
    title: qsTranslate("RESP","Settings")

    property bool restartRequired: false

    contentItem: Rectangle {
        id: dialogRoot
        implicitWidth: 950
        implicitHeight: PlatformUtils.isOSX() && qmlUtils.isAppStoreBuild()? 600 : 650

        color: sysPalette.base

        Control {
            palette: approot.palette
            anchors.fill: parent
            anchors.margins: 20

            ScrollView {
                id: globalSettingsScrollView
                width: parent.width
                height: parent.height
                ScrollBar.horizontal.policy: ScrollBar.AlwaysOff

                ColumnLayout {
                    id: innerLayout
                    width: globalSettingsScrollView.width - 25
                    height: (dialogRoot.height - 50 > implicitHeight) ? dialogRoot.height - 50 : implicitHeight
                    spacing: 10

                    RowLayout {
                        Layout.fillWidth: true

                        SettingsGroupTitle {
                            Layout.fillWidth: true
                            text: qsTranslate("RESP","General")
                        }

                        BetterLabel {
                            color: disabledSysPalette.text
                            text: qsTranslate("RESP","Application will be restarted to apply these settings.")
                        }
                    }

                    GridLayout {
                        columns: 2
                        rows: 3
                        flow: GridLayout.TopToBottom
                        Layout.fillWidth: true
                        rowSpacing: 10
                        columnSpacing: 15

                        ComboboxOption {
                            id: appLang

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            model: ["system", "en_US", "zh_CN", "zh_TW", "ru_RU", "es_ES", "ja_JP"]
                            value: "system"
                            label: qsTranslate("RESP","Language")
                            onValueChanged: root.restartRequired = true
                        }

                        ComboboxOption {
                            id: appFont

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30
                            popupWidth: 300

                            model: Qt.fontFamilies()
                            label: qsTranslate("RESP","Font")

                            onValueChanged: root.restartRequired = true

                        }

                        FontSizeOption {
                            id: appFontSize

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            label: qsTranslate("RESP","Font Size")

                            onValueChanged: root.restartRequired = true                            
                        }

                        ComboboxOption {
                            id: darkModeWindows

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            model: ["Auto", "On", "Off"]
                            value: "Auto"
                            label: qsTranslate("RESP","Dark Mode")

                            visible: PlatformUtils.isWindows()

                            onValueChanged: root.restartRequired = true
                        }

                        BoolOption {
                            id: darkModeLinux

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: false
                            label: qsTranslate("RESP","Dark Mode")

                            visible: PlatformUtils.isLinux()

                            onValueChanged: root.restartRequired = true
                        }

                        BoolOption {
                            id: systemProxy

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: false
                            label: qsTranslate("RESP","Use system proxy settings")

                            onValueChanged: root.restartRequired = true
                        }

                        BoolOption {
                            id: disableProxyForRedisConnections

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: false
                            label: qsTranslate("RESP","Use system proxy only for HTTP(S) requests")
                        }
                    }

                    SettingsGroupTitle {
                        Layout.topMargin: 10
                        text: qsTranslate("RESP","Value Editor")
                    }

                    GridLayout {
                        columns: 2
                        rows: 2
                        flow: GridLayout.TopToBottom
                        rowSpacing: 10
                        columnSpacing: 15


                        ComboboxOption {
                            id: valueEditorFont

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30
                            popupWidth: 300

                            model: Qt.fontFamilies()
                            label: qsTranslate("RESP","Font")

                            onValueChanged: root.restartRequired = true
                        }

                        FontSizeOption {
                            id: valueEditorFontSize

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: Qt.platform.os == "osx"? "12" : "11"
                            label: qsTranslate("RESP","Font Size")

                            onValueChanged: root.restartRequired = true
                        }

                        IntOption {
                            id: valueSizeLimit

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            min: 1000
                            max: 20000000
                            value: 1500000
                            label: qsTranslate("RESP","Maximum Formatted Value Size")
                            description: qsTranslate("RESP", "Size in bytes")
                        }

                    }

                    SettingsGroupTitle {
                        text: qsTranslate("RESP","Connections Tree")
                        Layout.topMargin: 20
                    }

                    GridLayout {
                        columns: 2
                        rows: 3
                        flow: GridLayout.TopToBottom
                        rowSpacing: 10
                        columnSpacing: 20

                        BoolOption {
                            id: nsOnTop

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: Qt.platform.os == "windows"? true : false
                            label: qsTranslate("RESP","Show namespaced keys on top")
                        }

                        BoolOption {
                            id: nsReload

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: true
                            label: qsTranslate("RESP","Reopen namespaces on reload")
                            description: qsTranslate("RESP","(Disable to improve treeview performance)")
                        }

                        BoolOption {
                            id: namespacedKeysShortName

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            value: true
                            label: qsTranslate("RESP","Show only last part for namespaced keys")
                        }

                        IntOption {
                            id: childItemsLimit

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            min: 1
                            max: 100000
                            value: 1000
                            label: qsTranslate("RESP","Maximum amount of rendered child items")
                        }

                        IntOption {
                            id: liveKeyLimit

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            min: 100
                            max: 100000
                            value: 1000
                            label: qsTranslate("RESP","Live update maximum allowed keys")
                        }

                        IntOption {
                            id: liveUpdateInterval

                            Layout.fillWidth: true
                            Layout.preferredHeight: 30

                            min: 3
                            max: 100000
                            value: 10
                            label: qsTranslate("RESP","Live update interval (in seconds)")
                        }

                    }

                    RowLayout {
                        Layout.topMargin: 10

                        SettingsGroupTitle {
                            visible: !(PlatformUtils.isOSX() && qmlUtils.isAppStoreBuild())
                            text: qsTranslate("RESP","External Value View Formatters")
                        }

                        Item {
                            Layout.fillWidth: true
                        }

                        Text {
                            visible: !(PlatformUtils.isOSX() && qmlUtils.isAppStoreBuild())
                            text: formattersManager? qsTranslate("RESP","Formatters path: %0").arg(formattersManager.formattersPath()) : ""
                            font.pixelSize: 12
                            color: "grey"
                        }
                    }

                    LC.TableView {
                        id: formattersTable
                        visible: !(PlatformUtils.isOSX() && qmlUtils.isAppStoreBuild())

                        Layout.fillWidth: true
                        Layout.fillHeight: true
                        Layout.preferredHeight: 100
                        verticalScrollBarPolicy: Qt.ScrollBarAlwaysOn

                        LC.TableViewColumn {
                            role: "name"
                            title: qsTranslate("RESP","Name")
                        }
                        LC.TableViewColumn {
                            role: "version"
                            width: 75
                            title: qsTranslate("RESP","Version")
                        }
                        LC.TableViewColumn {
                            role: "cmd"
                            title: qsTranslate("RESP","Command")
                        }

                        LC.TableViewColumn {
                            width: 250
                            role: "description"
                            title: qsTranslate("RESP","Description")
                        }

                        model: formattersManager
                    }

                    Item {
                        visible: !formattersTable.visible
                        Layout.fillHeight: true
                    }

                    RowLayout {
                        Layout.fillWidth: true

                        Item { Layout.fillWidth: true; }
                        BetterButton {
                            text: qsTranslate("RESP","OK")
                            onClicked: {
                                if (root.restartRequired === true) {
                                    // restart app
                                    Qt.exit(1001)
                                }

                                restartRequired = false
                                root.close()
                            }
                        }
                        BetterButton {
                            text: qsTranslate("RESP","Cancel")
                            onClicked: root.close()
                        }
                    }
                }
            }
        }
    }

    Settings {
        id: globalSettings
        category: "app"

        property alias showNamespacesOnTop: nsOnTop.value
        property alias reopenNamespacesOnReload: nsReload.value        
        property alias namespacedKeysShortName: namespacedKeysShortName.value
        property alias treeItemMaxChilds: childItemsLimit.value
        property alias liveUpdateKeysLimit: liveKeyLimit.value
        property alias liveUpdateInterval: liveUpdateInterval.value
        property alias appFont: appFont.value
        property alias appFontSize: appFontSize.value
        property alias valueEditorFont: valueEditorFont.value
        property alias valueEditorFontSize: valueEditorFontSize.value
        property alias valueSizeLimit: valueSizeLimit.value
        property alias locale: appLang.value
        property alias darkModeOn: darkModeLinux.value
        property alias darkMode: darkModeWindows.value
        property alias useSystemProxy: systemProxy.value
        property alias disableProxyForRedisConnections: disableProxyForRedisConnections.value
    }

    Settings {
        id: customFormatters
        category: "formatters"

        property var formatters
    }

    Component.onCompleted: {
        restartRequired = false
    }
}
