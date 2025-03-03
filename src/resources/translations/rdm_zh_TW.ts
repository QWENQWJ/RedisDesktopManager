<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW">
<context>
    <name>QObject</name>
    <message>
        <location filename="../../../3rdparty/qredisclient/src/qredisclient/connection.cpp" line="360"/>
        <location filename="../../../3rdparty/qredisclient/src/qredisclient/connection.cpp" line="397"/>
        <source>Cannot connect to cluster node %1:%2</source>
        <translation>無法連線到叢集節點 %1:%2</translation>
    </message>
    <message>
        <location filename="../../../3rdparty/qredisclient/src/qredisclient/connection.cpp" line="408"/>
        <location filename="../../../3rdparty/qredisclient/src/qredisclient/connection.cpp" line="435"/>
        <source>Cannot flush db (%1): %2</source>
        <translation>無法清空資料庫 (%1): %2</translation>
    </message>
</context>
<context>
    <name>RESP</name>
    <message>
        <location filename="../../app/app.cpp" line="78"/>
        <source>Settings directory is not writable</source>
        <translation>設定儲存資料夾沒有寫入權限</translation>
    </message>
    <message>
        <location filename="../../app/app.cpp" line="80"/>
        <source>RESP.app can&apos;t save connections file to settings directory. Please change file permissions or restart RESP.app as administrator.</source>
        <translation>RESP.app 無法儲存設定檔。請更改檔寫入權限或者以管理員模式啟動 RESP.app。</translation>
    </message>
    <message>
        <source>RDM can&apos;t save connections file to settings directory. Please change file permissions or restart RDM as administrator.</source>
        <translation type="vanished">RDM 無法儲存設定檔。請更改檔寫入權限或者以管理員模式啟動 RDM。</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="81"/>
        <source>Cannot rename key %1: %2</source>
        <translation>無法重新命名鍵 %1: %2</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="125"/>
        <source>Cannot persist key &apos;%1&apos;. &lt;br&gt; Key does not exist or does not have an assigned TTL value</source>
        <translation>無法將鍵持久化 &apos;%1&apos; &lt;br&gt; 鍵不存在或是不會逾時</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="160"/>
        <source>Cannot parse scan response</source>
        <translation>無法解析 scan 的結果</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="328"/>
        <source>Server returned unexpected response: </source>
        <translation>伺服器返回未預期的回應: </translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="106"/>
        <source>Cannot set TTL for key %1</source>
        <translation>無法設定鍵 %1 的 TTL</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="274"/>
        <location filename="../../app/models/key-models/abstractkey.h" line="285"/>
        <source>Cannot load rows for key %1: %2</source>
        <translation>無法載入鍵 %1 的資料: %2</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/hashkey.cpp" line="42"/>
        <location filename="../../app/models/key-models/hashkey.cpp" line="75"/>
        <location filename="../../app/models/key-models/listkey.cpp" line="14"/>
        <location filename="../../app/models/key-models/listkey.cpp" line="41"/>
        <location filename="../../app/models/key-models/setkey.cpp" line="12"/>
        <location filename="../../app/models/key-models/setkey.cpp" line="33"/>
        <location filename="../../app/models/key-models/sortedsetkey.cpp" line="44"/>
        <location filename="../../app/models/key-models/sortedsetkey.cpp" line="77"/>
        <location filename="../../app/models/key-models/stream.cpp" line="48"/>
        <location filename="../../app/models/key-models/stream.cpp" line="59"/>
        <source>Invalid row</source>
        <translation>無效資料</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/hashkey.cpp" line="113"/>
        <source>Value with the same key already exists</source>
        <translation>已經存在同名的鍵</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/abstractkey.h" line="184"/>
        <location filename="../../app/models/key-models/abstractkey.h" line="340"/>
        <location filename="../../app/models/treeoperations.cpp" line="151"/>
        <location filename="../../modules/console/consolemodel.cpp" line="84"/>
        <source>Connection error: </source>
        <translation>連線錯誤: </translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/hashkey.cpp" line="136"/>
        <location filename="../../app/models/key-models/sortedsetkey.cpp" line="136"/>
        <source>Data was loaded from server partially.</source>
        <translation>部分資料已經從伺服器載入。</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="25"/>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="37"/>
        <source>Cannot load key %1, connection error occurred: %2</source>
        <translation>無法載入鍵 %1，連線發生錯誤: %2</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="48"/>
        <source>Cannot load key %1 because it doesn&apos;t exist in database. Please reload connection tree and try again.</source>
        <translation>無法載入鍵 %1，資料庫中不存在該鍵，請重新載入連線樹後重試。</translation>
    </message>
    <message>
        <source>Cannot load TTL for key %1, connection error occurred: %2</source>
        <translation type="vanished">無法載入鍵 %1 的 TTL 值，連線發生錯誤: %2</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="82"/>
        <source>Cannot retrieve type of the key: </source>
        <translation>無法取得鍵的類型: </translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="125"/>
        <source>Cannot open file with key value</source>
        <translation>無法以鍵值開啟檔案</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/keyfactory.cpp" line="67"/>
        <source>Unsupported Redis Data type %1</source>
        <translation>不支援的 Redis 資料類型 %1</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="129"/>
        <source>Cannot connect to server &apos;%1&apos;. Check log for details.</source>
        <translation>無法連線到伺服器 &apos;%1&apos; 。細節請查看紀錄檔。</translation>
    </message>
    <message>
        <source>Open Source version of RDM &lt;b&gt;doesn&apos;t support SSH tunneling&lt;/b&gt;.&lt;br /&gt;&lt;br /&gt; To get fully-featured application, please buy subscription on &lt;a href=&apos;https://resp.app/subscriptions&apos;&gt;resp.app&lt;/a&gt;. &lt;br/&gt;&lt;br /&gt;Every single subscription gives us funds to continue the development process and provide support to our users. &lt;br /&gt;If you have any questions please feel free to contact us at &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt; or join &lt;a href=&apos;https://t.me/RedisDesktopManager&apos;&gt;Telegram chat&lt;/a&gt;.</source>
        <translation type="vanished">開源版本的 RDM &lt;b&gt;不支援 SSH 隧道功能&lt;/b&gt;。&lt;br /&gt;&lt;br /&gt;若要取得完整功能的程式，請在 &lt;a href=&apos;https://resp.app/subscriptions&apos;&gt;resp.app&lt;/a&gt; 上購買訂閱。&lt;br/&gt;&lt;br /&gt;每個訂閱都是我們繼續開發以及支援使用者的原動力。&lt;br /&gt;如果你有任何問題，請聯絡 &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt; 或是加入 &lt;a href=&apos;https://t.me/RedisDesktopManager&apos;&gt;Telegram 聊天群組&lt;/a&gt;。</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="139"/>
        <source>Open Source version of RESP.app &lt;b&gt;doesn&apos;t support SSH tunneling&lt;/b&gt;.&lt;br /&gt;&lt;br /&gt; To get fully-featured application, please buy subscription on &lt;a href=&apos;https://resp.app/subscriptions&apos;&gt;resp.app&lt;/a&gt;. &lt;br/&gt;&lt;br /&gt;Every single subscription gives us funds to continue the development process and provide support to our users. &lt;br /&gt;If you have any questions please feel free to contact us at &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt; or join &lt;a href=&apos;https://t.me/RedisDesktopManager&apos;&gt;Telegram chat&lt;/a&gt;.</source>
        <translation>開源版本的 RDM &lt;b&gt;不支援 SSH 隧道功能&lt;/b&gt;。&lt;br /&gt;&lt;br /&gt;若要取得完整功能的程式，請在 &lt;a href=&apos;https://resp.app/subscriptions&apos;&gt;resp.app&lt;/a&gt; 上購買訂閱。&lt;br/&gt;&lt;br /&gt;每個訂閱都是我們繼續開發以及支援使用者的原動力。&lt;br /&gt;如果你有任何問題，請聯絡 &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt; 或是加入 &lt;a href=&apos;https://t.me/RedisDesktopManager&apos;&gt;Telegram 聊天群組&lt;/a&gt;。</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="226"/>
        <source>Cannot load keys: %1</source>
        <translation>無法載入鍵: %1</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="328"/>
        <source>Delete key error: %1</source>
        <translation>刪除鍵時發生錯誤:</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="465"/>
        <source>Cannot determine amount of used memory by key: %1</source>
        <translation>無法判定鍵所消耗的記憶體: %1</translation>
    </message>
    <message>
        <location filename="../../app/models/treeoperations.cpp" line="403"/>
        <source>Cannot flush database: </source>
        <translation>無法清空資料庫: </translation>
    </message>
    <message>
        <location filename="../../modules/common/tabmodel.cpp" line="43"/>
        <source>Invalid Connection. Check connection settings.</source>
        <translation>無效連線，請檢查連線設定。</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="234"/>
        <source>Live update was disabled due to exceeded keys limit. Please specify filter more carefully or change limit in settings.</source>
        <translation>由於超出載入鍵的數量限制，同步更新功能已經關閉。請設定更精確的篩選條件或更改載入限制設定。</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="283"/>
        <source>Key was added. Do you want to reload keys in selected database?</source>
        <translation>已經添加鍵。需要重新載入該資料庫的鍵名嗎？</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="291"/>
        <location filename="../../modules/connections-tree/items/namespaceitem.cpp" line="133"/>
        <source>Key was added</source>
        <translation>已經插入鍵</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="299"/>
        <source>Another operation is currently in progress</source>
        <translation>另一項操作正在進行中</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="301"/>
        <source>Please wait until another operation will be finished.</source>
        <translation>請耐心等待另一項操作完成。</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="312"/>
        <source>Do you really want to remove all keys from this database?</source>
        <translation>確定要刪除該資料庫裡面所有的鍵嗎？</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="71"/>
        <location filename="../../modules/connections-tree/items/serveritem.cpp" line="76"/>
        <source>Cannot load databases:

</source>
        <translation>無法載入資料庫:

</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/databaseitem.cpp" line="233"/>
        <source>Live update was disabled</source>
        <translation>同步更新已經禁止</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="183"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="190"/>
        <source>Rename key</source>
        <translation>重新命名鍵</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="199"/>
        <source>New name:</source>
        <translation>新名稱:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/Pagination.qml" line="21"/>
        <source>Total pages: </source>
        <translation>總頁數: </translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/Pagination.qml" line="45"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="222"/>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="351"/>
        <source>Size: </source>
        <translation>大小: </translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="228"/>
        <source>TTL:</source>
        <translation>TTL:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="233"/>
        <source>Set key TTL</source>
        <translation>設定鍵的 TTL</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="242"/>
        <source>New TTL:</source>
        <translation>新的 TTL:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="298"/>
        <source>Delete</source>
        <translation>刪除</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/key.qml" line="23"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="303"/>
        <source>Delete key</source>
        <translation>刪除鍵</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="38"/>
        <source>Changes are not saved</source>
        <translation>並未儲存變更</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="39"/>
        <source>Do you want to close key tab without saving changes?</source>
        <translation>要不儲存變更就關閉頁籤嗎？</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="260"/>
        <source>Persist key</source>
        <translation>將鍵持久化</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="304"/>
        <location filename="../../modules/connections-tree/items/keyitem.cpp" line="145"/>
        <source>Do you really want to delete this key?</source>
        <translation>確定要刪除該鍵？</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="140"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="318"/>
        <source>Reload Value</source>
        <translation>重新載入鍵值</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="22"/>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="31"/>
        <source>Add Row</source>
        <translation>插入列</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="30"/>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="519"/>
        <source>Add Element to HLL</source>
        <translation>新增元素到 HHL</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="68"/>
        <source>Add</source>
        <translation>新增</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="101"/>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="122"/>
        <source>Delete row</source>
        <translation>刪除列</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="107"/>
        <source>The row is the last one in the key. After removing it key will be deleted.</source>
        <translation>此列資料是該鍵最後一列。刪除此列資料，該鍵將會被刪除。</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="109"/>
        <source>Do you really want to remove this row?</source>
        <translation>確定要刪除此列資料嗎？</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="164"/>
        <source>Search on page...</source>
        <translation>頁面搜尋...</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="191"/>
        <source>Full Search</source>
        <translation>全文搜尋</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/serveritem.cpp" line="198"/>
        <source>Value and Console tabs related to this connection will be closed. Do you want to continue?</source>
        <translation>所有與該連線相關的鍵值對話方塊和指令操作對話方塊都將被關閉，確定要繼續嗎？</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/serveritem.cpp" line="210"/>
        <source>Do you really want to delete connection?</source>
        <translation>確定要刪除連線？</translation>
    </message>
    <message>
        <location filename="../../modules/console/consolemodel.cpp" line="13"/>
        <source>Connected to cluster.
</source>
        <translation>已連線到叢集伺服器。
</translation>
    </message>
    <message>
        <location filename="../../modules/console/consolemodel.cpp" line="16"/>
        <source>Connected.
</source>
        <translation>已連線。
</translation>
    </message>
    <message>
        <location filename="../../modules/console/consolemodel.cpp" line="60"/>
        <source>Switch to %1 mode. Close console tab to stop listen for messages.</source>
        <translation>切換為 %1 模式。關閉頁籤以停止監聽訊息。</translation>
    </message>
    <message>
        <source>Switch to Pub/Sub mode. Close console tab to stop listen for messages.</source>
        <translation type="vanished">切斷到 發布/訂閱 模式。關閉控制台以停止監聽訊息。</translation>
    </message>
    <message>
        <location filename="../../modules/console/consolemodel.cpp" line="69"/>
        <source>Subscribe error: %1</source>
        <translation>訂閱錯誤: %1</translation>
    </message>
    <message>
        <location filename="../../modules/server-stats/serverstatsmodel.cpp" line="94"/>
        <source>Server %0</source>
        <translation>伺服器 %0</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="184"/>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="219"/>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="248"/>
        <source>Can&apos;t find formatter with name: %1</source>
        <translation>找不到格式化工具: %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="190"/>
        <source>Invalid callback</source>
        <translation>無效回調</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="204"/>
        <source>Cannot decode value using %1 formatter. </source>
        <translation>無法使用格式化工具解碼值 %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="233"/>
        <source>Cannot validate value using %1 formatter.</source>
        <translation>無法使用格式化工具驗證值 %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/externalformattersmanager.cpp" line="262"/>
        <source>Cannot encode value using %1 formatter. </source>
        <translation>無法使用格式化工具編碼值 %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/tabsmodel.cpp" line="26"/>
        <source>Loading key: %1 from db %2</source>
        <translation>從資料庫 %2 中載入鍵 %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/tabsmodel.cpp" line="68"/>
        <source>Cannot open value tab</source>
        <translation>無法打開鍵值對話方塊</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/tabsmodel.cpp" line="97"/>
        <source>Connection error</source>
        <translation>連接錯誤</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/tabsmodel.cpp" line="115"/>
        <source>Connection error. Can&apos;t open value tab. </source>
        <translation>連線錯誤，無法打開鍵值對話方塊。</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/valueviewmodel.cpp" line="176"/>
        <source>Cannot reload key value: %1</source>
        <translation>無法重新載入鍵值: %1</translation>
    </message>
    <message>
        <location filename="../../modules/value-editor/valueviewmodel.cpp" line="228"/>
        <source>Cannot load key value: %1</source>
        <translation>無法載入鍵值: %1</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="29"/>
        <source>Connect to Redis Server</source>
        <translation>連線到 Redis 伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="114"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="206"/>
        <source>Import</source>
        <translation>匯入</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="48"/>
        <location filename="../../qml/AppToolBar.qml" line="67"/>
        <source>Import Connections</source>
        <translation>匯入連線</translation>
    </message>
    <message>
        <source>Export</source>
        <translation type="vanished">匯出</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="56"/>
        <location filename="../../qml/AppToolBar.qml" line="72"/>
        <source>Export Connections</source>
        <translation>匯出連線</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="98"/>
        <source>Report issue</source>
        <translation>回報問題</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="105"/>
        <source>Documentation</source>
        <translation>說明文件</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="112"/>
        <source>Join Telegram Chat</source>
        <translation>加入 Telegram 聊天群組</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="119"/>
        <source>Follow</source>
        <translation>追隨</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="126"/>
        <source>Star on GitHub!</source>
        <translation>在 GitHub 上給個 Star</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="134"/>
        <source>Log</source>
        <translation>紀錄</translation>
    </message>
    <message>
        <location filename="../../qml/AppToolBar.qml" line="142"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="14"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="11"/>
        <source>New Connection Settings</source>
        <translation>新連線設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="144"/>
        <source>How to connect</source>
        <translation>如何連線</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="151"/>
        <source>Connection Settings</source>
        <translation>連線設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="180"/>
        <source>Create connection from Redis URL</source>
        <translation>以 Redis URL 建立連線</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="233"/>
        <source>Learn more about Redis URL:  </source>
        <translation>了解更多關於 Redis URL: </translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="241"/>
        <source>Connection guides</source>
        <translation>連線嚮導</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="262"/>
        <source>Local or Public Redis</source>
        <translation>本機或公開的 Redis</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="278"/>
        <source>Redis with SSL/TLS</source>
        <translation>使用 SSL/TLS 的 Redis</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="294"/>
        <source>SSH tunnel</source>
        <translation>SSH 隧道</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="310"/>
        <source>UNIX socket</source>
        <translation>UNIX socket</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="397"/>
        <source>Cannot figure out how to connect to your redis-server?</source>
        <translation>不知道如何連線到您的 Redis 伺服器嗎？</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="403"/>
        <source>&lt;a href=&quot;https://docs.resp.app/en/latest/quick-start/&quot;&gt;Read the Docs&lt;/a&gt;, &lt;a href=&quot;mailto:support@resp.app&quot;&gt;Contact Support&lt;/a&gt; or ask for help in our &lt;a href=&quot;https://t.me/RedisDesktopManager&quot;&gt;Telegram Group&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://docs.resp.app/en/latest/quick-start/&quot;&gt;閱讀文件&lt;/a&gt;，&lt;a href=&quot;mailto:support@resp.app&quot;&gt;聯絡客服&lt;/a&gt;或是在 &lt;a href=&quot;https://t.me/RedisDesktopManager&quot;&gt;Telegram 群組&lt;/a&gt; 內請求協助。</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="415"/>
        <source>Don&apos;t have running Redis?</source>
        <translation>Redis 沒有在執行中嗎？</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="421"/>
        <source>Spin up hassle-free Redis on Digital Ocean</source>
        <translation>快速使用 Digital Ocean 上的 Redis</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="433"/>
        <source>Skip</source>
        <translation>略過</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="468"/>
        <source>Name:</source>
        <translation>名稱:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="474"/>
        <source>Connection Name</source>
        <translation>連線名稱</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="480"/>
        <source>Address:</source>
        <translation>位址:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="485"/>
        <source>redis-server host</source>
        <translation>Redis 伺服器位址</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="509"/>
        <source>(Optional) redis-server authentication password</source>
        <translation>(可選) Redis 伺服器的認證密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="528"/>
        <source>Security</source>
        <translation>安全設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="559"/>
        <source>Public Key:</source>
        <translation>公鑰:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="565"/>
        <source>(Optional) Public Key in PEM format</source>
        <translation>(可選) PEM 格式的公鑰</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="567"/>
        <source>Select public key in PEM format</source>
        <translation>選擇 PEM 格式的公鑰</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="578"/>
        <source>(Optional) Private Key in PEM format</source>
        <translation>(可選) PEM 格式的私鑰</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="580"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="675"/>
        <source>Select private key in PEM format</source>
        <translation>選擇 PEM 格式的私鑰</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="585"/>
        <source>Authority:</source>
        <translation>授權證書:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="591"/>
        <source>(Optional) Authority in PEM format</source>
        <translation>(可選) PEM 格式的授權證書</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="593"/>
        <source>Select authority file in PEM format</source>
        <translation>選擇 PEM 格式的授權證書</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="612"/>
        <source>SSH Tunnel</source>
        <translation>SSH 隧道</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="631"/>
        <source>SSH Address:</source>
        <translation>SSH 位址:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="635"/>
        <source>Remote Host with SSH server</source>
        <translation>SSH 遠端伺服器位址</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="643"/>
        <source>SSH User:</source>
        <translation>SSH 使用者:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="649"/>
        <source>Valid SSH User Name</source>
        <translation>有效的 SSH 使用者名稱</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="572"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="657"/>
        <source>Private Key</source>
        <translation>私鑰</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="673"/>
        <source>Path to Private Key in PEM format</source>
        <translation>PEM 格式私鑰路徑</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="683"/>
        <source>&lt;b&gt;Tip:&lt;/b&gt; Use &lt;code&gt;⌘ + Shift + .&lt;/code&gt; to show hidden files and folders in dialog</source>
        <translation>&lt;b&gt;提示: &lt;/b&gt; &lt;code&gt;⌘ + Shift + .&lt;/code&gt; 可以顯示隱藏的檔案與資料夾</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="688"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="706"/>
        <source>SSH User Password</source>
        <translation>SSH 使用者密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="728"/>
        <source>Enable TLS-over-SSH (&lt;b&gt;AWS ElastiCache&lt;/b&gt; &lt;b&gt;Encryption in-transit&lt;/b&gt;)</source>
        <translation>啟用 TLS-over-SSH (&lt;b&gt;AWS ElastiCache&lt;/b&gt; &lt;b&gt;Encryption in-transit&lt;/b&gt;)</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="156"/>
        <source>Advanced Settings</source>
        <translation>進階設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="496"/>
        <source>For better network performance please use 127.0.0.1</source>
        <translation>使用 127.0.0.1 以提高網路性能</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="514"/>
        <source>Username:</source>
        <translation>使用者名稱:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="520"/>
        <source>(Optional) redis-server authentication username (Redis &gt;6.0)</source>
        <translation>(可選) Redis 伺服器認證使用者名稱 (Redis &gt;6.0)</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="539"/>
        <source>SSL / TLS</source>
        <translation>SSL / TLS</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="598"/>
        <source>Enable strict mode:</source>
        <translation>啟用嚴格模式:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="703"/>
        <source>Passphrase for provided private key</source>
        <translation>私鑰的密詞</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="705"/>
        <source>Password request will be prompt prior to connection</source>
        <translation>將會在連接前詢問密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="716"/>
        <source>Ask for password</source>
        <translation>詢問密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="765"/>
        <source>Keys loading</source>
        <translation>鍵的載入</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="769"/>
        <source>Default filter:</source>
        <translation>預設篩選器:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="775"/>
        <source>Pattern which defines loaded keys from redis-server</source>
        <translation>指定載入鍵名運算式:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="781"/>
        <source>Namespace Separator:</source>
        <translation>命名空間的分隔符號:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="788"/>
        <source>Separator used for namespace extraction from keys</source>
        <translation>從鍵名中提取命名空間用的分隔符號</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="794"/>
        <source>Timeouts &amp; Limits</source>
        <translation>超時 &amp; 限制</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="798"/>
        <source>Connection Timeout (sec):</source>
        <translation>連線逾時 (秒):</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="811"/>
        <source>Execution Timeout (sec):</source>
        <translation>執行超時 (秒):</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="822"/>
        <source>Databases discovery limit:</source>
        <translation>資料庫探索上限:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="836"/>
        <source>Cluster</source>
        <translation>叢集</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="840"/>
        <source>Change host on cluster redirects:</source>
        <translation>在叢集重定向後改變 host :</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="850"/>
        <source>Formatters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="854"/>
        <source>Default value formatter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="870"/>
        <source>Auto detect (JSON / Plain Text / HEX)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="871"/>
        <source>Last selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="872"/>
        <source>Select formatter ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="967"/>
        <source>Invalid settings detected!</source>
        <translation>檢測到無效的設定！</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="938"/>
        <source>Test Connection</source>
        <translation>測試連線</translation>
    </message>
    <message>
        <location filename="../../qml/common/OkDialogOverlay.qml" line="20"/>
        <location filename="../../qml/common/SaveToFileButton.qml" line="115"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="975"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="349"/>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="887"/>
        <source>OK</source>
        <translation>確定</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="294"/>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="508"/>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="399"/>
        <location filename="../../qml/common/BetterDialog.qml" line="44"/>
        <location filename="../../qml/connections-tree/ConnectionGroupDialog.qml" line="62"/>
        <location filename="../../qml/connections/AskSecretDialog.qml" line="89"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="989"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="361"/>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="172"/>
        <location filename="../../qml/value-editor/ValueTableActions.qml" line="89"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="268"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="47"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="52"/>
        <source>Application will be restarted to apply these settings.</source>
        <translation>程式將會重新啟動以套用此設定</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="72"/>
        <source>Language</source>
        <translation>語言</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="393"/>
        <source>Application will be restarted to apply this setting.</source>
        <translation>程式將會重新啟動以套用新的設定</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="84"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="174"/>
        <source>Font</source>
        <translation>字體</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="96"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="186"/>
        <source>Font Size</source>
        <translation>字體大小</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="109"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="123"/>
        <source>Dark Mode</source>
        <translation>深色模式</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="200"/>
        <source>Maximum Formatted Value Size</source>
        <translation>最大格式化長度</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="201"/>
        <source>Size in bytes</source>
        <translation>長度（位元組）</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="259"/>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="392"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="137"/>
        <source>Use system proxy settings</source>
        <translation>使用系統的代理設定</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="149"/>
        <source>Use system proxy only for HTTP(S) requests</source>
        <translation>只為 HTTP(S) 使用系統的代理</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="155"/>
        <source>Value Editor</source>
        <translation>值編輯器</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="207"/>
        <source>Connections Tree</source>
        <translation>連線列表</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="225"/>
        <source>Show namespaced keys on top</source>
        <translation>置頂有命名空間的鍵</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="235"/>
        <source>Reopen namespaces on reload</source>
        <translation>重新載入時重新打開命名空間</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="236"/>
        <source>(Disable to improve treeview performance)</source>
        <translation>(停用樹狀檢視以提高性能)</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="246"/>
        <source>Show only last part for namespaced keys</source>
        <translation>對有命名空間的鍵只顯示最後一部分</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="258"/>
        <source>Maximum amount of rendered child items</source>
        <translation>子項目的最大渲染數量</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="270"/>
        <source>Live update maximum allowed keys</source>
        <translation>同步更新最大允許鍵數量</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="282"/>
        <source>Live update interval (in seconds)</source>
        <translation>同步更新時間 (秒)</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="292"/>
        <source>External Value View Formatters</source>
        <translation>外部的值格式化工具</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="301"/>
        <source>Formatters path: %0</source>
        <translation>格式化工具路徑: %0</translation>
    </message>
    <message>
        <location filename="../../qml/settings/GlobalSettings.qml" line="318"/>
        <source>Name</source>
        <translation>名稱</translation>
    </message>
    <message>
        <location filename="../../qml/WelcomeTab.qml" line="30"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="323"/>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>Explore RDM</source>
        <translation type="vanished">探索 RDM</translation>
    </message>
    <message>
        <source>Before using RDM take a look on the %1</source>
        <translation type="vanished">在使用 RDM 之前，您可以先看看 %1</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="947"/>
        <source>Quick Start Guide</source>
        <translation>快速入門指南</translation>
    </message>
    <message>
        <location filename="../../qml/app.qml" line="127"/>
        <source>Successful connection to redis-server</source>
        <translation>成功連線到 Redis 伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/app.qml" line="130"/>
        <source>Can&apos;t connect to redis-server</source>
        <translation>無法連線到 Redis 伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/app.qml" line="314"/>
        <source>Add Group</source>
        <translation>新增分組</translation>
    </message>
    <message>
        <location filename="../../qml/app.qml" line="329"/>
        <source>Regroup connections</source>
        <translation>重組連線</translation>
    </message>
    <message>
        <location filename="../../qml/app.qml" line="351"/>
        <source>Exit Regroup Mode</source>
        <translation>離開分組模式</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="10"/>
        <source>Bulk Operations Manager</source>
        <translation>批次操作管理器</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="63"/>
        <source>Invalid RDB path</source>
        <translation>無效的 RDB 路徑</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="63"/>
        <source>Please specify valid path to RDB file</source>
        <translation>請指定有效的 RDB 檔案</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="85"/>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="86"/>
        <source>Delete keys</source>
        <translation>刪除鍵</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="95"/>
        <source>Set TTL</source>
        <translation>設定 TTL</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="103"/>
        <source>Copy keys to another database</source>
        <translation>複製鍵到其他資料庫</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="104"/>
        <source>Copy keys</source>
        <translation>複製鍵</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="113"/>
        <source>Import data from rdb file</source>
        <translation>從 RDB 檔案中匯入資料</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="148"/>
        <source>Redis Server:</source>
        <translation>Redis 伺服器:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="160"/>
        <source>Database number:</source>
        <translation>資料庫編號:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="180"/>
        <source>Path to RDB file:</source>
        <translation>RDB 檔案的路徑:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="202"/>
        <source>Select DB in RDB file:</source>
        <translation>選擇 RDB 檔案中的資料庫:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="222"/>
        <source>Key pattern:</source>
        <translation>鍵名運算式:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="222"/>
        <source>Import keys that match &lt;b&gt;regex&lt;/b&gt;:</source>
        <translation>匯入符合&lt;b&gt;正規表達式&lt;/b&gt;的鍵:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="269"/>
        <source>Destination Redis Server:</source>
        <translation>目標 Redis 伺服器:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="280"/>
        <source>Destination Redis Server Database Index:</source>
        <translation>目標資料庫編號:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="317"/>
        <source>Show matched keys</source>
        <translation>顯示符合的鍵</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="317"/>
        <source>Show Affected keys</source>
        <translation>顯示受影響的鍵</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="340"/>
        <source>Affected keys:</source>
        <translation>受影響的鍵:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="340"/>
        <source>Matched keys:</source>
        <translation>符合的鍵:</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="365"/>
        <source>Bulk Operation finished.</source>
        <translation>批次操作完成。</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="370"/>
        <source>Bulk Operation finished with errors</source>
        <translation>批次操作完成但途中曾發生錯誤</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="422"/>
        <source>Processed: </source>
        <translation>已處理: </translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="424"/>
        <source>Getting list of affected keys...</source>
        <translation>正在取得受影響的鍵的清單...</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="472"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="1030"/>
        <source>Success</source>
        <translation>成功</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="498"/>
        <source>Confirmation</source>
        <translation>確認</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="499"/>
        <source>Do you really want to perform bulk operation?</source>
        <translation>確認要執行批次操作？</translation>
    </message>
    <message>
        <source>Sign in with resp.app account</source>
        <translation type="vanished">以 resp.app 的帳號登入</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="231"/>
        <source>Renew your subscription</source>
        <translation>續期您的訂閱</translation>
    </message>
    <message>
        <source>Your trial has ended.</source>
        <translation type="vanished">您的試用已經到期</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="234"/>
        <source>You have no active subscription</source>
        <translation>您沒有可用的訂閱</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="237"/>
        <source>No internet connection</source>
        <translation>無網絡連線</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="240"/>
        <source>Your trial has ended</source>
        <translation>您的試用已結束</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="252"/>
        <source>To use this version you need to renew your subscription.</source>
        <translation>您必須續期訂閱已繼續使用此版本。</translation>
    </message>
    <message>
        <source>Please make sure that RDM is not blocked by a firewall and you have an internet connection.</source>
        <translation type="vanished">請確保 RDM 沒有被防火牆阻擋，並且網絡連線正常。</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="257"/>
        <source>If you’re behind a proxy please enable </source>
        <translation>如果您處於代理之中，請啟用 </translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="261"/>
        <source> option before sign-in.</source>
        <translation> 選項（在登入前）。</translation>
    </message>
    <message>
        <source>Please purchase a subscription to continue using RDM.</source>
        <translation type="vanished">請購買訂閱以繼續使用 RDM 。</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="11"/>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="317"/>
        <source>Sign in with RESP.app account</source>
        <translation>以 resp.app 的帳號登入</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="255"/>
        <source>Please make sure that RESP.app is not blocked by a firewall and you have an internet connection.</source>
        <translation>請確保 RDM 沒有被防火牆阻擋，並且網絡連線正常。</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="264"/>
        <source>Please purchase a subscription to continue using RESP.app.</source>
        <translation>請購買訂閱以繼續使用 RDM 。</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="268"/>
        <source>If you have any questions please contact support </source>
        <translation>如果您有任何問題，請聯絡客服 </translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="279"/>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="71"/>
        <source>Renew Subscription</source>
        <translation>續期訂閱</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="280"/>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="32"/>
        <source>Buy Subscription</source>
        <translation>購買訂閱</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="293"/>
        <source>Try Again</source>
        <translation>重試</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="331"/>
        <source>Email:</source>
        <translation>Email:</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="347"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="503"/>
        <source>Password:</source>
        <translation>密碼:</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="370"/>
        <location filename="../../qml/common/PasswordInput.qml" line="29"/>
        <source>Show password</source>
        <translation>顯示密碼</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="376"/>
        <source>Forgot password?</source>
        <translation>忘記密碼？</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="404"/>
        <source>Sign In</source>
        <translation>登入</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="409"/>
        <source>Please enter email &amp; password to sign in.</source>
        <translation>請輸入 email 與密碼登入。</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="422"/>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="444"/>
        <source>Offline Activation</source>
        <translation>離線啟用</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="465"/>
        <source>Paste Activation code here</source>
        <translation>在此處貼上啟用碼</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="481"/>
        <source>Where can I find my activation code?</source>
        <translation>我能在哪裡找到我的啟用碼？</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="490"/>
        <source>Activate</source>
        <translation>啟用</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SignInDialog.qml" line="495"/>
        <source>Please enter valid activation code.</source>
        <translation>請輸入啟用碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/BetterTreeView.qml" line="214"/>
        <source> (Removed)</source>
        <translation> (已移除)</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="76"/>
        <source>Open Keys Filter</source>
        <translation>打開鍵篩選器</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="80"/>
        <source>Reload Keys in Database</source>
        <translation>重新載入資料庫中的鍵</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="84"/>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="30"/>
        <source>Add New Key</source>
        <translation>新增鍵</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="90"/>
        <source>Disable Live Update</source>
        <translation>停用同步更新</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="90"/>
        <source>Enable Live Update</source>
        <translation>啟用同步更新</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="94"/>
        <location filename="../../qml/connections-tree/menu/server.qml" line="24"/>
        <source>Open Console</source>
        <translation>打開控制台</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="97"/>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="32"/>
        <source>Analyze Used Memory</source>
        <translation>分析記憶體用量</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="99"/>
        <source>Bulk Operations</source>
        <translation>批次操作</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="120"/>
        <source>Flush Database</source>
        <translation>清空資料庫</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="123"/>
        <source>Delete keys with filter</source>
        <translation>使用篩選器來刪除鍵</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="94"/>
        <location filename="../../qml/connections-tree/menu/database.qml" line="126"/>
        <source>Set TTL for multiple keys</source>
        <translation>為多個鍵設定 TTL</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="129"/>
        <source>Copy keys from this database to another</source>
        <translation>從此資料庫中複製鍵到另一個資料庫</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="132"/>
        <source>Import keys from RDB file</source>
        <translation>從 RDB 檔案中匯入鍵</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="135"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/key.qml" line="22"/>
        <source>Copy Key Name</source>
        <translation>複製鍵</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="29"/>
        <source>Reload Namespace</source>
        <translation>重新載入命名空間</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="31"/>
        <source>Copy Namespace Pattern</source>
        <translation>複製命名空間運算式</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="33"/>
        <source>Delete Namespace</source>
        <translation>刪除命名空間</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/database.qml" line="70"/>
        <location filename="../../qml/connections-tree/menu/namespace.qml" line="24"/>
        <location filename="../../qml/connections-tree/menu/server.qml" line="14"/>
        <source>Disconnect</source>
        <translation>中斷連線</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="20"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="241"/>
        <source>Server Info</source>
        <translation>伺服器資訊</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="28"/>
        <source>Reload Server</source>
        <translation>重新載入伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="32"/>
        <source>Unload All Data</source>
        <translation>卸載所有資料</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="36"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="11"/>
        <source>Edit Connection Settings</source>
        <translation>編輯連線設定</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="40"/>
        <source>Duplicate Connection</source>
        <translation>複製連線</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server.qml" line="44"/>
        <source>Delete Connection</source>
        <translation>刪除連線</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="21"/>
        <source>Connecting...</source>
        <translation>連線中...</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="194"/>
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="235"/>
        <source>Arguments</source>
        <translation>參數</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="241"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="333"/>
        <source>Description</source>
        <translation>描述</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="247"/>
        <source>Available since</source>
        <translation>可用自</translation>
    </message>
    <message>
        <location filename="../../qml/console/RedisConsole.qml" line="298"/>
        <source>Close</source>
        <translation>關閉</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="109"/>
        <source>Redis Version</source>
        <translation>Redis 版本</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="124"/>
        <source>Used memory</source>
        <translation>已使用記憶體</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="139"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="251"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="357"/>
        <source>Clients</source>
        <translation>連線數</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="154"/>
        <source>Commands Processed</source>
        <translation>已執行指令</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="171"/>
        <source>Uptime</source>
        <translation>上線時間</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="186"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="494"/>
        <source>Total Keys</source>
        <translation>鍵總數</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="201"/>
        <source>Hit Ratio</source>
        <translation>命中率</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="221"/>
        <source> day(s)</source>
        <translation> 天</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="236"/>
        <source>Info</source>
        <translation>資訊</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="305"/>
        <source>Commands Per Second</source>
        <translation>每秒指令數</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="319"/>
        <source>Ops/s</source>
        <translation>操作/秒</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="343"/>
        <source>Connected Clients</source>
        <translation>已連線的客戶端</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="381"/>
        <source>Memory Usage</source>
        <translation>記憶體佔用</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="393"/>
        <source>Mb</source>
        <translation>Mb</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="422"/>
        <source>Network Input</source>
        <translation>網路輸入</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="434"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="470"/>
        <source>Kb/s</source>
        <translation>Kb/s</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="458"/>
        <source>Network Output</source>
        <translation>網路輸出</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="508"/>
        <source>Keys</source>
        <translation>鍵數量</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="591"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="699"/>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="765"/>
        <source>Auto Refresh</source>
        <translation>自動重整</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="625"/>
        <source>Property</source>
        <translation>屬性</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="631"/>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="22"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="853"/>
        <source>Subscribe in Console</source>
        <translation>在控制台中訂閱</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="246"/>
        <source>Slowlog</source>
        <translation>慢紀錄</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="257"/>
        <source>Pub/Sub Channels</source>
        <translation>發布/訂閱 頻道</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="823"/>
        <source>Enable</source>
        <translation>啟用</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="842"/>
        <source>Channel Name</source>
        <translation>頻道名稱</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="714"/>
        <location filename="../../qml/settings/GlobalSettings.qml" line="327"/>
        <source>Command</source>
        <translation>指令</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="731"/>
        <source>Processed at</source>
        <translation>已處理於</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="746"/>
        <source>Execution Time (μs)</source>
        <translation>執行時間 (微秒)</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="780"/>
        <source>Client Address</source>
        <translation>客戶端位址</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="786"/>
        <source>Age (sec)</source>
        <translation>連線時長 (秒)</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="792"/>
        <source>Idle</source>
        <translation>閒置</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="798"/>
        <source>Flags</source>
        <translation>旗標</translation>
    </message>
    <message>
        <location filename="../../qml/server-info/ServerInfoTabs.qml" line="804"/>
        <source>Current Database</source>
        <translation>當前資料庫</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="10"/>
        <source>Add New Key to </source>
        <translation>新增鍵到</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="56"/>
        <location filename="../../qml/value-editor/editors/HashItemEditor.qml" line="18"/>
        <source>Key:</source>
        <translation>鍵:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="66"/>
        <source>Type:</source>
        <translation>類型:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="107"/>
        <source>Or Import Value from the file</source>
        <translation>或從檔案匯入值</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="113"/>
        <source>(Optional) Any file</source>
        <translation>(可選) 任何檔案</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="115"/>
        <source>Select file with value</source>
        <translation>以值選擇檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/BetterDialog.qml" line="39"/>
        <location filename="../../qml/connections-tree/ConnectionGroupDialog.qml" line="47"/>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="127"/>
        <location filename="../../qml/value-editor/ValueTabs.qml" line="254"/>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="609"/>
        <source>Save</source>
        <translation>儲存</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/ConnectionGroupDialog.qml" line="11"/>
        <source>Edit Connections Group</source>
        <translation>編輯連線的群組</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/ConnectionGroupDialog.qml" line="11"/>
        <source>Add New Connections Group</source>
        <translation>新增連線群組</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/ConnectionGroupDialog.qml" line="30"/>
        <source>Group Name:</source>
        <translation>群組名稱:</translation>
    </message>
    <message>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="1024"/>
        <location filename="../../qml/value-editor/AddKeyDialog.qml" line="183"/>
        <location filename="../../qml/value-editor/editors/formatters/ValueFormatters.qml" line="241"/>
        <source>Error</source>
        <translation>錯誤</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/Pagination.qml" line="12"/>
        <source>Page</source>
        <translation>頁</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="60"/>
        <source>Enter valid value</source>
        <translation>請輸入有效的值</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="283"/>
        <source>Formatting error</source>
        <translation>格式化錯誤</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="288"/>
        <source>Unknown formatter error (Empty response)</source>
        <translation>未知格式化錯誤 (沒有回應)</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="356"/>
        <source>[Binary]</source>
        <translation>[二進位制內容]</translation>
    </message>
    <message>
        <source> [Compressed: </source>
        <translation type="vanished">[被壓縮的: </translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="537"/>
        <source>Copy to Clipboard</source>
        <translation>複製到剪貼簿</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="593"/>
        <source>Exit </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="594"/>
        <source>Full Screen Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="610"/>
        <source>Save Changes</source>
        <translation>儲存變更</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="712"/>
        <source>Search string</source>
        <translation>搜尋字串</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="726"/>
        <source>Find Next</source>
        <translation>尋找下一筆</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="726"/>
        <source>Find</source>
        <translation>尋找</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="757"/>
        <source>Regex</source>
        <translation>正規表示式</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="743"/>
        <source>Cannot find more results</source>
        <translation>找不到更多結果</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="393"/>
        <source>Try to decompress:</source>
        <translation>嘗試解壓縮:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="394"/>
        <source>Decompressed:</source>
        <translation>解壓縮:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="484"/>
        <source>Cannot decompress value using </source>
        <translation>無法解壓縮以</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="744"/>
        <source>Cannot find any results</source>
        <translation>找不到任何結果</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="883"/>
        <source>Binary value is too large to display</source>
        <translation>二進位制內容過長而無法顯示</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="359"/>
        <source>View as:</source>
        <translation>以...開啟:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="495"/>
        <source>Large value (&gt;150kB). Formatters are not available.</source>
        <translation>內容過大 (&gt;150kB) 無法格式化。</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/SortedSetItemEditor.qml" line="19"/>
        <location filename="../../qml/value-editor/editors/SortedSetItemEditor.qml" line="31"/>
        <source>Score</source>
        <translation>分數</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="191"/>
        <source>Path to dump.rdb file</source>
        <translation>dump.rdb 的路徑</translation>
    </message>
    <message>
        <location filename="../../qml/bulk-operations/BulkOperationsDialog.qml" line="193"/>
        <source>Select dump.rdb</source>
        <translation>選擇 dump.rdb</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/StreamItemEditor.qml" line="19"/>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/StreamItemEditor.qml" line="62"/>
        <source>Value (represented as JSON object)</source>
        <translation>值 (以 JSON 物件表示)</translation>
    </message>
    <message>
        <location filename="../../app/models/key-models/listkey.cpp" line="127"/>
        <source>The row has been changed on server.Reload and try again.</source>
        <translation>此列資料已在伺服器上被修改，請重新載入後再試一次。</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/bulkoperationsmanager.cpp" line="131"/>
        <source>Failed to perform actions on %1 keys. </source>
        <translation>無法在鍵 %1 上執行動作。 </translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/copyoperation.cpp" line="12"/>
        <source>Cannot copy key </source>
        <translation>無法複製鍵 </translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/copyoperation.cpp" line="123"/>
        <source>Source connection error</source>
        <translation>來源連線錯誤</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/copyoperation.cpp" line="135"/>
        <source>Target connection error</source>
        <translation>目標連線錯誤</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/deleteoperation.cpp" line="11"/>
        <source>Cannot remove key </source>
        <translation>無法刪除鍵 </translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/rdbimport.cpp" line="17"/>
        <source>Cannot execute command </source>
        <translation>無法執行指令 </translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/rdbimport.cpp" line="26"/>
        <source>Invalid regexp for keys filter.</source>
        <translation>鍵篩選器的正規表達式無效</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/rdbimport.cpp" line="39"/>
        <source>Cannot get the list of affected keys</source>
        <translation>無法取得受影響的鍵的清單</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/ttloperation.cpp" line="11"/>
        <source>Cannot set TTL for key </source>
        <translation>無法設定 TTL 給鍵 </translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/abstractnamespaceitem.cpp" line="367"/>
        <source>Your redis-server doesn&apos;t support &lt;a href=&apos;https://redis.io/commands/memory-usage&apos;&gt;&lt;b&gt;MEMORY&lt;/b&gt;&lt;/a&gt; commands.</source>
        <translation>你的 Redis 伺服器不支援 &lt;a href=&apos;https://redis.io/commands/memory-usage&apos;&gt;&lt;b&gt;MEMORY&lt;/b&gt;&lt;/a&gt; 指令。</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/namespaceitem.cpp" line="128"/>
        <source>Key was added. Do you want to reload keys in selected namespace?</source>
        <translation>已新增鍵。你想要重新載入命名空間中的鍵嗎？</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="147"/>
        <source>Network is not accessible. Please ensure that you have internet access and try again.</source>
        <translation>無法存取網路。請確認您可以存取網路後重新再試。</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="190"/>
        <source>Invalid login or password</source>
        <translation>無效的登入資料</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="200"/>
        <source>Too many requests from your IP</source>
        <translation>您的 IP 發起過多的請求</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="206"/>
        <source>Unknown error. Status code %1</source>
        <translation>未知錯誤。狀態碼 %1</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="321"/>
        <location filename="../../modules/api/api_client.cpp" line="734"/>
        <source>Cannot parse server reply</source>
        <translation>無法解析伺服器回應</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="341"/>
        <source>Cannot validate token</source>
        <translation>無法驗證權杖</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="347"/>
        <source>Cannot login - %1. &lt;br/&gt; Please try again or contact  &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt;</source>
        <translation>無法登入 - %1 。&lt;br/&gt; 請再試一次或聯絡 &lt;a href=&apos;mailto:support@resp.app&apos;&gt;support@resp.app&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="718"/>
        <source>Expired activation code</source>
        <translation>過期的啟動碼</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="731"/>
        <source>Invalid activation code</source>
        <translation>無效的啟動碼</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="588"/>
        <location filename="../../modules/api/api_client.cpp" line="614"/>
        <source>Cannot save the update. Disk is full or download folder is not writable.</source>
        <translation>無法保存更新檔，可能是硬碟已滿或是資料夾無法寫入。</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="666"/>
        <source>Download was canceled</source>
        <translation>下載已被取消</translation>
    </message>
    <message>
        <location filename="../../modules/api/api_client.cpp" line="673"/>
        <source>Network error</source>
        <translation>網路錯誤</translation>
    </message>
    <message>
        <location filename="../../qml/common/FilePathInput.qml" line="27"/>
        <source>Select File</source>
        <translation>選擇檔案</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/editors/MultilineEditor.qml" line="897"/>
        <source>Save value to file</source>
        <translation>儲存值到檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="10"/>
        <source>Save Raw Value to File</source>
        <translation>儲存原始值到檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="10"/>
        <source>Save Formatted Value to File</source>
        <translation>儲存格式化的值到檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="27"/>
        <source>Save Raw Value</source>
        <translation>儲存原始值</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="27"/>
        <source>Save Formatted Value</source>
        <translation>儲存格式化的值</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="51"/>
        <source>Save raw value to file</source>
        <translation>儲存原始值到檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="51"/>
        <source>Save formatted value to file</source>
        <translation>儲存格式化的值到檔案</translation>
    </message>
    <message>
        <location filename="../../qml/common/SaveToFileButton.qml" line="72"/>
        <source>Value was saved to file:</source>
        <translation>已儲存值到檔案:</translation>
    </message>
    <message>
        <location filename="../../modules/bulk-operations/operations/abstractoperation.cpp" line="38"/>
        <source>Cannot connect to redis-server</source>
        <translation>無法連線到 Redis 伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server_group.qml" line="13"/>
        <source>Edit Connection Group</source>
        <translation>編輯連線群組</translation>
    </message>
    <message>
        <location filename="../../qml/connections-tree/menu/server_group.qml" line="17"/>
        <source>Delete Connection Group</source>
        <translation>刪除連線群組</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/servergroup.cpp" line="58"/>
        <source>Do you really want to delete group &lt;b&gt;with all connections&lt;/b&gt;?</source>
        <translation>您真的要刪除群組&lt;b&gt;以及其中的連線&lt;/b&gt;嗎？</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/filters/ListFilters.qml" line="8"/>
        <source>Order of elements:</source>
        <translation>元素排序:</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/filters/ListFilters.qml" line="20"/>
        <source>Default</source>
        <translation>預設</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/filters/ListFilters.qml" line="21"/>
        <source>Reverse</source>
        <translation>倒序</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/filters/StreamFilters.qml" line="28"/>
        <source>Start date should be less than End date</source>
        <translation>起始日期必須早於終止日期</translation>
    </message>
    <message>
        <location filename="../../qml/value-editor/filters/StreamFilters.qml" line="136"/>
        <source>Apply filter</source>
        <translation>套用篩選器</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="19"/>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="25"/>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="49"/>
        <source>Trial is active till</source>
        <translation>試用到</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="58"/>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="59"/>
        <source>Licensed to</source>
        <translation>授權給</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="66"/>
        <source>Subscription is active until:</source>
        <translation>訂閱到:</translation>
    </message>
    <message>
        <location filename="../../modules/api/qml/SubscriptionInfo.qml" line="71"/>
        <source>Manage Subscription</source>
        <translation>管理訂閱</translation>
    </message>
    <message>
        <location filename="../../qml/WelcomeTab.qml" line="31"/>
        <source>&lt;span style=&quot;font-size: 11px;&quot;&gt;Powered by awesome &lt;a href=&quot;https://github.com/uglide/RedisDesktopManager/tree/2021/3rdparty&quot;&gt;open-source software&lt;/a&gt; and &lt;a href=&quot;http://icons8.com/&quot;&gt;icons8&lt;/a&gt;.&lt;/span&gt;</source>
        <translation>&lt;span style=&quot;font-size: 11px;&quot;&gt;由卓越的 &lt;a href=&quot;https://github.com/uglide/RedisDesktopManager/tree/2021/3rdparty&quot;&gt;開源軟體&lt;/a&gt; 以及 &lt;a href=&quot;http://icons8.com/&quot;&gt;icons8&lt;/a&gt; 驅動。&lt;/span&gt;</translation>
    </message>
    <message>
        <location filename="../../qml/QuickStartDialog.qml" line="11"/>
        <source>Getting Started</source>
        <translation>入門指南</translation>
    </message>
    <message>
        <source>Thank you for choosing RDM. Let&apos;s make your Redis experience better.</source>
        <translation type="vanished">感謝您選用 RDM 。我們一起讓 Redis 有更好的使用體驗吧！</translation>
    </message>
    <message>
        <location filename="../../qml/QuickStartDialog.qml" line="42"/>
        <source>Thank you for choosing RESP.app. Let&apos;s make your Redis experience better.</source>
        <translation>感謝您選用 RDM 。我們一起讓 Redis 有更好的使用體驗吧！</translation>
    </message>
    <message>
        <location filename="../../qml/QuickStartDialog.qml" line="60"/>
        <source>Connect to Redis-Server</source>
        <translation>連線到 Redis 伺服器</translation>
    </message>
    <message>
        <location filename="../../qml/QuickStartDialog.qml" line="73"/>
        <source>Read the Docs</source>
        <translation>閱讀文件</translation>
    </message>
    <message>
        <location filename="../../modules/connections-tree/items/loadmoreitem.cpp" line="12"/>
        <source>Load more keys</source>
        <translation>載入更多鍵</translation>
    </message>
    <message>
        <location filename="../../qml/common/BetterMessageDialog.qml" line="24"/>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="../../qml/common/BetterMessageDialog.qml" line="32"/>
        <source>No</source>
        <translation>否</translation>
    </message>
    <message>
        <location filename="../../qml/connections/AskSecretDialog.qml" line="19"/>
        <source>SSH Passphrase</source>
        <translation>SSH 密詞</translation>
    </message>
    <message>
        <location filename="../../qml/connections/AskSecretDialog.qml" line="21"/>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../../qml/connections/AskSecretDialog.qml" line="46"/>
        <location filename="../../qml/connections/ConnectionSettignsDialog.qml" line="688"/>
        <source>Passphrase</source>
        <translation>密碼</translation>
    </message>
    <message>
        <location filename="../../qml/connections/AskSecretDialog.qml" line="71"/>
        <source>Continue</source>
        <translation>繼續</translation>
    </message>
</context>
</TS>
