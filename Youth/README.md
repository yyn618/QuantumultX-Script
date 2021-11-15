需要抓包安装中青看点-2.0.2，低版本APP安装自行研究

下载注册后填写邀请码，可获得500-10000青豆

西宁邀请码：60244910

感谢作者 Sunert 邀请码：46308484
<br>
### 使用方法：
1.添加重写
<br>
编辑配置文件，在[rewrite_remote]粘贴以下代码

#中青Cookie获取
<br>
https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/Youth/Youth_cookie.conf, tag=中青Cookie获取, update-interval=172800, opt-parser=true, enabled=true

#中青Body获取
<br>
https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/Youth/Youth_Read.conf, tag=中青Body获取,  update-interval=172800, opt-parser=true, enabled=False

<br>

2.添加定时任务
<br>
编辑配置文件，在[task_local]下粘贴以下代码

#中青签到&转盘宝箱
<br>
*/10 5-23 * * * https://gitee.com/Sunert/Scripts/raw/master/Task/youth.js, tag= 中青签到&转盘宝箱, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Youth.png, enabled=true

#中青自动阅读
<br>
10 */2 * * * https://gitee.com/Sunert/Scripts/raw/master/Task/Youth_Read.js, tag=中青自动阅读, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Youth.png, enabled=true

#中青浏览赚
<br>
20 5 10 * * * https://gitee.com/Sunert/Scripts/raw/master/Task/youth_gain.js, tag=中青浏览赚, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Youth.png, enabled=true

<br>

3.获取Cookie
<br>
进入[重写]-[引用] ———— 启用[中青Cookie获取]，禁用[中青阅读Body获取]（默认）

a.进入app-我的-任务中心 ———— 提示：获取cookie成功

b.进入app-我的-任务中心-看看赚-去完成 ———— 提示：获取看看转请求成功

c.进入app-我的-任务中心-看看赚-浏览赚-去白拿 ———— 提示：浏览赚获取开始请求成功

d.阅读文章或者视频，等待红包转圈结束 ———— 提示：获取阅读请求成功

e.继续阅读另一篇文章或视频 ———— 提示：获取阅读时长成功

<br>

4.获取Body
<br>
进入[重写]-[引用] ———— 禁用[中青cookie获取]，启用[中青阅读Body获取]

阅读文章或视频，快速获取body ———— 提示：获取第1个阅读请求成功

<br>

5.手动执行脚本，看脚本是否运行正常
