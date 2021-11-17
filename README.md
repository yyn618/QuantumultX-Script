![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=yyn618&show_icons=true&theme=vue-dark)

### 说明：

* 自用脚本，参考各位大佬。
* 只测试和更新，不负责维护脚本。
* TG群组：https://t.me/Xininga

<br>

### 配置：

* [QX.conf](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/QX.conf)为全配置地址。
* [QX-AD.conf](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/QX-AD.conf)为去广告专用配置地址。

<br>

### 使用方法：

1. 选择需要配置[QX.conf](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/QX.conf)、[QX-AD.conf](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/QX-AD.conf)，复制地址备用。
2. QX主界面，点击右下角按钮，下拉点击**配置文件-下载**，将复制的地址粘贴确定。
3. QX主界面，点击右下角按钮，下拉至**Mitm**，点击**生成证书**。
4. 继续点击**配置证书**，根据提示安装证书。
5. 安装成功后，到系统的**设置-通用-关于本机**信任证书。
6. 回到QX，打开**重写**和**Mitm**
7. 添加节点/订阅，在QX主界面点击右下角按钮，点击**节点-引用(订阅)**，填写标签和资源路径（重要，不添加标签是无法筛选的）
8. 使用愉快

<br>

### 策略组与分流规则：

1. 可根据延迟选择节点，6个延迟策略组，包含自动选择，香港，台湾，日本，新加坡，美国节点。
2. TikTok、Netflix、B站、苹果服务可自定义节点。
3. 解锁网易云节点
4. 全球加速默认走自动选择节点。
5. 国外视频优先走各地区节点，若无地区限制走自动选择节点。
6. 国内网站、网站默认直连。

<br>

### 重写：

- B站换区
- TF区域解锁
- Netflix评分
- Q-Search搜索
- Notability解锁
- Youtube去广告：会员勿开
- TikTok 解锁（V21.1.0）：JP（默认）、TW、US地区解锁，最新支持版本V21.1.0
- 京东/淘宝购物比价：淘宝比价在商品保障力，不生效或失效的需要卸载重装
- 获取Cookie：Task脚本获取Cookie用的，使用时启用，获取后可关闭。获取cookie方法在脚本中查看

<br>

### 任务脚本：

> 仅保留个人自用任务脚本，需要其他脚本可自行前往作者主页

京东类任务脚本（已搬运至本地仓库，🔗链接为原地址）：

🔗脚本仓库地址：[Xining JD_Task](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/JD_Task.json)

- [NobyDa](https://github.com/NobyDa/Script)：[京东多合一](https://github.com/NobyDa/Script/blob/master/JD-DailyBonus/JD_DailyBonus.js)
- [ZCY01](https://github.com/ZCY01/daily_scripts/tree/main/jd)：[京东价保](https://github.com/ZCY01/daily_scripts/blob/main/jd/jd_priceProtect.js)
- [hyzaw](https://www.notion.so/task-1a80bc2c08944d4ba3ba1b7ae1675f65)：[京东直播](https://github.com/hyzaw/scripts/blob/main/jd_live.js)
- [yangtingxiao](https://github.com/yangtingxiao/QuantumultX/tree/master/scripts/jd)：[抽奖机](https://github.com/yangtingxiao/QuantumultX/blob/master/scripts/jd/jd_lotteryMachine.js)
- [ningmeng](https://github.com/panghu999/ningmeng)：[京享值PK](https://github.com/qqsdff/panghu/blob/master/jd_pk.js)
- [chuhe](https://github.com/ChuheGit/1/tree/main/Script/jd_scripts)：[签到领现金](https://github.com/ChuheGit/1/blob/main/Script/jd_scripts/jd_cash.js)、[养猪猪](https://github.com/ChuheGit/1/blob/main/Script/jd_scripts/jd_pigPet.js)、[点点券](https://github.com/ChuheGit/1/blob/main/Script/jd_scripts/jd_necklace.js)、[赚京豆](https://github.com/qqsdff/jd_scripts/blob/master/jd_syj.js)
- [smiek2121](https://github.com/smiek2121/scripts)：[MM领京豆](https://github.com/smiek2121/scripts/blob/master/gua_MMdou.js)、[东东世界](https://github.com/smiek2121/scripts/blob/master/gua_ddworld.js)、[财富大陆](https://github.com/smiek2121/scripts/blob/master/gua_wealth_island.js)、[财富大陆互助](https://github.com/smiek2121/scripts/blob/master/gua_wealth_island_help.js)
- [faker](https://github.com/shufflewzc/faker2)：[京喜财富岛](https://github.com/shufflewzc/faker2/blob/main/jd_cfd.js)、[京喜财富岛热气球](https://github.com/shufflewzc/faker2/blob/main/jd_cfd_loop.js)、[京喜财富岛合成月饼](https://github.com/shufflewzc/faker2/blob/main/jd_cfd_mooncake.js)、[东东超市](https://github.com/shufflewzc/faker2/blob/main/jd_superMarket.js)、[京东快递](https://github.com/shufflewzc/faker2/blob/main/jd_kd.js)、[京豆变动通知](https://github.com/shufflewzc/faker2/blob/main/jd_bean_change.js)、[京喜牧场](https://github.com/shufflewzc/faker2/blob/main/jd_jxmc.js)
- lxk0301：[限时抢京豆](https://github.com/shufflewzc/faker2/blob/main/jd_xsqjd.js)、[京东魔方](https://github.com/shufflewzc/faker2/blob/main/jd_mf.js)、[京喜签到](https://github.com/shufflewzc/faker2/blob/main/jx_sign.js)、[京豆额外奖励](https://github.com/qqsdff/jd_scripts/blob/master/jd_bean_home.js)、[东东超市换奖品](https://github.com/qqsdff/jd_scripts/blob/master/jd_blueCoin.js)、[摇京豆](https://github.com/qqsdff/jd_scripts/blob/master/jd_club_lottery.js)、[删除优惠券](https://github.com/qqsdff/jd_scripts/blob/master/jd_delCoupon.js)、[跳跳乐瓜分京豆](https://github.com/qqsdff/jd_scripts/blob/master/jd_jump.js)、[摇钱树](https://github.com/qqsdff/jd_scripts/blob/master/jd_moneyTree.js)、[京东全民开红包](https://github.com/qqsdff/jd_scripts/blob/master/jd_redPacket.js)、[天天加速](https://github.com/qqsdff/jd_scripts/blob/master/jd_speed.js)
- [JDHelloWorld](https://github.com/JDHelloWorld/jd_scripts)：[京东汽车](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_car.js)、[京东汽车兑换](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_car_exchange.js)、[京喜工厂](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_dreamFactory.js)、[京喜工厂助力](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_dreamFactory_help.js)、[东东农场](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_fruit.js)、[金榜创造营](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_gold_creator.js)、[健康社区](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_health.js)、[健康社区收能量](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_health_collect.js)、[东东工厂](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_jdfactory.js)、[京东赚赚](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_jdzz.js)、[领金贴](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_jin_tie.js)、[京喜农场](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_jxnc.js)、[幸运大转盘](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_market_lottery.js)、[秒秒币](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_ms.js)、[京东手机狂欢城](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_carnivalcity.js)、[省钱大赢家之翻翻乐](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_big_winner.js)、[东东萌宠](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_pet.js)、[种豆得豆](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_plantBean.js)、[进店领豆](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_shop.js)、[极速版红包](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_speed_redpocke.js)、[极速版签到](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_speed_sign.js)、[取关店铺/商品](https://github.com/JDHelloWorld/jd_scripts/blob/main/jd_unsubscribe.js)

##### 使用方法：

添加京东任务仓库：https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/JD_Task.json

![image](https://user-images.githubusercontent.com/31948921/141168012-5256d021-5f8a-4336-b68f-8fc194b3e919.png)



---

其他任务脚本：

🔗脚本仓库地址：[Xining extra_Task](https://raw.githubusercontent.com/yyn618/QuantumultX-Script/main/extra_Task.json)

- Sunert：微博钱包签到、中青看点签到
- Yichahucha - 蚂蚁森林、钉钉打卡
- blackmatrix7 - 中国联通天天抽奖、什么值得买签到/任务、饿了么签到/任务
- Chavyleung - 电信营业厅签到、美团红包签到、美团外卖签到、v2ex签到

<br>

### BoxJs订阅：

> 部分脚本请搭配作者BoxJs使用
> BoxJS访问地址设定为 <http://boxjs.com:9999/>

- NobyDa <https://github.com/NobyDa/Script/blob/master/NobyDa_BoxJs.json>
- ChuheGit <https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd.boxjs.json>
- Sunert <https://gitee.com/Sunert/Scripts/raw/master/Task/sunert.boxjs.json>
- blackmatrix7 <https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/boxjs.json>
- chavyleung <https://github.com/chavyleung/scripts/blob/master/chavy.box.js>
- lxk0301<https://raw.githubusercontent.com/ChuheGit/1/main/Script/jd.boxjs.json>

<br>

### 特别感谢：

>感谢大佬们的无私分享，排名不分先后

[Orz-3](https://github.com/Orz-3/QuantumultX)

[KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX)

[zw9314](https://github.com/nzw9314/QuantumultX/tree/master)

[w37fhy](https://github.com/w37fhy/QuantumultX/edit/master)

[DivineEngine](https://github.com/DivineEngine/Profiles/tree/master)

[blackmatrix7](https://github.com/blackmatrix7/ios_rule_script)

[NobyDa](https://github.com/NobyDa/Script)

[lhie1](https://github.com/lhie1/Rules/tree/master/QuantumultX)

[faker](https://github.com/shufflewzc/faker2)

[JDHelloWorld](https://github.com/JDHelloWorld/jd_scripts)

[smiek2121](https://github.com/smiek2121/scripts)

[chavyleung](https://github.com/chavyleung/scripts)

[Chuhe](https://github.com/ChuheGit/1)

[Sunert](https://gitee.com/Sunert/Scripts/tree/master)

[yichahucha](https://github.com/yichahucha/surge)

[Semporia](https://github.com/Semporia/TikTok-Unlock)

[StimeKe](https://github.com/StimeKe?tab=repositories)

[Neurogram-R](https://github.com/Neurogram-R/Surge)

<br>

### 声明：

* **yyn618**发布的**QuantumultX Script**项目中涉及的任何脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

* 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, **yyn618**对于由此引起的任何隐私泄漏或其他后果概不负责。

* 请勿将**QuantumultX Script**项目的任何内容用于商业或非法目的，否则后果自负。

* 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我将在收到认证文件后删除相关脚本。

* **yyn618**对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。

* 您必须在下载后的24小时内从计算机或手机中完全删除以上内容。

* 任何以任何方式查看此项目的人或直接或间接使用该Script项目的任何脚本的使用者都应仔细阅读此声明。**yyn618**保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或**QuantumultX Script**项目的规则，则视为您已接受此免责声明。
