        //简繁英互译 
        
        var languageType,indexTrips,languageTagName, indexTrips_cn, indexTrips_tr, indexTrips_en;
        	languageType=localStorage.getItem('languageType');
        	
        
            indexTrips_cn = {
                
				tr_companyName:'以勒人才管理顧問有限公司'
				,tr_menuNav:'导航'
				,tr_index:'首页'
				,tr_service:'服务范围'
				,tr_case:'推荐案例'
				,tr_about:'关于以勒'
				,tr_news:'以勒动态'
				,tr_tech:'技术团队'
				,tr_job:'招兵买马'
				,tr_contact:'联系我们'
				,tr_personnel_l:'以勒人才管理'
				,tr_attr_l:'专注、专业、专属'
				,tr_abs_l:'专注于开发服务，专业的技术团队，打造专属于您的高端定制。'
				,tr_companyCompanySite:'企业网站建设'
				,tr_system:'系统开发'
				,tr_eShop:'商城建设'
				,tr_SmallProgram:'小程序&amp;公众号'
				,tr_Advanced:'宣传片'
				,tr_Interface:'接口定制'
				,tr_ServerSecurity:'服务器安全'
				,tr_LightExtravagance:'轻奢'
				,tr_LivingClub:'美健邦会所'
				,tr_HonorablExperience:'尊贵体验'
				,tr_ebmESshop:'eBm万隆商城'
				,tr_lavaux:'主题旅游'
				,tr_lgoDesign:'丽歌设计'
				,tr_DingTaiXin:'鼎泰鑫'
				,tr_greenSoft:'绿色先锋软件下载'
				,tr_aiBaoEShop:'艾宝商城'
				,tr_yiJiaBuyEShop:'亿佳购分销商城'
				,tr_farmMarket:'田园市集'
				,tr_YangSen:'养森商城'
				,tr_CarEShop:'汽车'
				,tr_brandIdea:'品牌理念'
				,tr_ToCustomers:'致客户：'
				,tr_marketings:'30年营销经验'
				,tr_techProduct:'10年技术产品经验'
				,tr_CTO:'技术总监'
				,tr_COO:'企划总监'
				,tr_manageYears:'10年以上营销管理经验'
				,tr_saleManage:'销售总监'
				,tr_designDirector:'设计总监'
				,tr_designDirectorDet:'10年的设计艺术经验'
				,tr_headWebpageTeam:'前端团队'
				,tr_headWebpageTeamDet:'8年技术经验'
				,tr_laterStage:'资深视频后期'
				,tr_laterStageDet:'7年视频创作与后期处理工作经验'
				,tr_quickLink:'快速链接'
				,tr_aboutDet:'香港以勒人才管理顾问有限公司多年来服务于香港知名集团，集成全国一线技术开发人员，打造最专业的网络科技信息服务团队。公司高度重视人才的引进和培养，为人才提供良好的发展机遇和广阔的提升空间，由此香港公司总部还聚集了一大批经济学家和教授、金融业名人、海外投行以及业内实战型人才。另在各地区分公司还组建了专业营销、研发、客户服务团队，结合公司文化、人力资源体系和先进组织模式，为客户提供安全无忧的全方位服务后盾。而公司以及集团研发团队融合了国际、国内业界及学术界的精英，在数个重大项目上与相关部门密切合作。'
				,tr_serviceDet:'香港以勒人才管理顾问有限公司主要经营项目设计+网站开发+程序开发为一体的IT商业模式，为各种企业、商家、等大小项目进行互联网端的开发与设计。'
				,tr_brandIdeaDet:'坚持“诚信经营、客户第一、专业创新”的经营方针，秉承“用心服务客户，认真赢得信赖”的服务理念，通过信基网络科技公司先进的IT技术和服务，为全国客户提供更加安全、快捷、优质的服务。'
				,tr_techDet:'为客户提供专业、耐心、高端的技术服务，从项目的设计到开发，一条龙服务，在互联网新科技的崛起时代中，争取为客户提供最优质与专业的技术服务，为客户打造更加完美专业与优质的技术服务。'
				,tr_ToCustomersDet:'感激在的发展道路上得到您的支持，感谢您的信任与托付，感动在发展的关键时刻得到您的倾力相助，感恩与您一起共同努力，开拓市场。——电器、服饰、互联网、金融、美妆、汽车、食品保健等一路相伴的客户。'
				,tr_partnerDet:'与合作伙伴共建网络服务生态圈'
				,tr_partnerSay:'“多次合作，让我们逐渐了解以勒。我们对这个团队以后的发展非常有信心，因为他们已经拥有扎实的技术资本、合理的发展策略，以及非常好的服务素养（这点尤其难得）。与以勒达成长期合作关系，这是我们双方都希望看到的。——香港万隆金银业公司'
				,tr_partnerSay2:'“与以勒科技的合作过程非常愉快。他们显得很有经验。项目从初期接洽、方案制定、设计开发到后期应用测试调整，我们的沟通非常顺利，技术对接也毫无阻碍。这样的合作，让我们双方都很满意。希望继续合作。”——主题旅游（香港）有限公司'
				,tr_whatCanDo:'香港以勒人才管理顾问能做什么？'
				,tr_whatCanDoDet:'分销盈利，收益稳定——渠道代理商享受专属折扣，可用于二次销售，赚取高额差价，持续收益，且无需担心任何技术问题，我们将提供全方位技术支持。'
				,tr_getmoney:'香港以勒人才管理顾问教你怎样开始赚钱'
				,tr_getmoneyDet:'激活账户——花5分钟时间，在信基科技注册一个会员，并激活账户；发布连接——使用图片、文字、连接等形式，发布给朋友、贴吧、论坛、QQ群、广告位、第三方网站等；赢取佣金——每当有一笔您引入的订单成交，您都将获得高达10%佣金分红。'
				,tr_aboutMoney:'关于佣金，您应该知道的事'
				,tr_aboutMoneyDet:'佣金比例：客户购买产品总费用的10%；支持产品：所有虚拟主机、服务器产品；提现额度：累计金额达到200元可申请提现至支付宝或银行卡，不足200元可提现至信基账户用于消费；无效推荐：一个用户注册多个会员，自己推荐自己，系统自动识别，推荐无效；无效推荐：推荐人和购买人为同一个IP地址，系统自动识别，推荐无效；提现方法：提交财务部，24小时内处理，周末、节假日延期到正常工作日处理。'
				,tr_ChannelAgent:'以勒人才管理顾问渠道代理优势'
				,tr_ChannelAgentDet:'轻松搭建全面的销售产品线；资源极具竞争力，持续畅销；客户续费率高，持续高额收益；全权负责技术支持，无后顾之忧。'
				,tr_techTeam:'以勒人才管理顾问的技术团队'
				,tr_techTeamDet:'八年的励精图治，我们凝聚起一批坚韧不拔、精通技术开发与系统维护的技术精英，包括港内领先水准的源码维护团队，以及港内最可靠的DBA管理人才，拥有系统构架师、界面设计师、运维工程师等明确的分工体系，能够完美地实现客户对IT项目开发、网站环境维护等技术层的要求。强力的技术团队全程护航，保障您的业务平台稳定、高效率运行，让您只需专注于站点与应用开发，祛除技术问题的后顾之忧。'
				,tr_serviceTeam:'我们的客服团队'
				,tr_serviceTeamDet:'在客服团队方面，以勒人才管理在不断吸收优秀客服的同时，也始终致力于提高客服人员的服务素质与专业技能，力求随时为每位用户提供系统维护级的问题解决方案，而不仅仅是销售产品以及简单的“传声筒”式服务。以勒始终相信，提高产品的附加值、降低客户的总体拥有成本、规避客户可能遇到的风险、由产品转向服务才是以勒与客户实现合作共赢的基础。'
				,tr_values:'我们的价值观'
				,tr_valuesDet:'香港以勒人才管理顾问有限公司的企业文化——企业价值观：创新分享感恩共赢；在国际化的道路上，不断披荆斩棘的探索并创新，是持续发展不断进步的唯一法宝；学会分享，摒除吝啬，将使你收获更多的馈赠，更好更快的成长；因为有了他人无私的帮助，才能取得了今天的一点成绩，时刻保有一颗感恩的心，才能获得真正的宁静和幸福；成就自己的同时，也成就公司和他人；获得能力提升的同时，也获得与之相符的收益。'
				,tr_joinUs:'加入以勒，你将获得'
				,tr_joinUsDet:'以勒人才拓展训练和来自世界各地的外国人一起工作的乐趣。和志同道合的年轻人一起玩科技，做网站的乐趣。专业的指导和培训，带你进入神奇的世界互联网世界，为你提供悉心的业务指导并量身定制属于你的职业发展及人生规划。'
				,tr_technicalService:'以勒技术服务'
				,tr_technicalServiceDet:'产品线——我们拥有优质完善的产品线，且具备多线路、高稳定、可控性强等特点，满足多层级业务需求；服务型——通过在线咨询/热线电话/服务单系统/实时运维等多种方式，实现标准化、运营级售后服务全程护航；技术流——信基致力于网络、安全等基础性IT领域的持续开发，并拥有完美的系统运维能力。'
				
				
				
				

            }
            indexTrips_tr = {
                
				tr_companyName:'以勒人才管理顧問有限公司'
				,tr_menuNav:'導航'
				,tr_index:'首頁'
				,tr_service:'服務範圍'
				,tr_case:'推薦案例'
				,tr_about:'關于以勒'
				,tr_news:'以勒動态'
				,tr_tech:'技術團隊'
				,tr_job:'招兵買馬'
				,tr_contact:'聯系我們'
				,tr_personnel_l:'以勒人才管理'
				,tr_attr_l:'專注、專業、專屬'
				,tr_abs_l:'專注于開發服務，專業的技術團隊，打造專屬於您的高端定製。'
				,tr_companyCompanySite:'企業網站建設'
				,tr_system:'系統開發'
				,tr_eShop:'商城建設'
				,tr_SmallProgram:'小程序&amp;公眾號'
				,tr_Advanced:'宣傳片'
				,tr_Interface:'接口定製'
				,tr_ServerSecurity:'服務器安全'
				,tr_LightExtravagance:'輕奢'
				,tr_LivingClub:'美健邦會所'
				,tr_HonorablExperience:'尊貴體驗'
				,tr_ebmESshop:'eBm萬隆商城'
				,tr_lavaux:'主題旅遊'
				,tr_lgoDesign:'麗歌設計'
				,tr_DingTaiXin:'鼎泰鑫'
				,tr_greenSoft:'綠色先鋒軟件下載'
				,tr_aiBaoEShop:'艾寶商城'
				,tr_yiJiaBuyEShop:'億佳購分銷商城'
				,tr_farmMarket:'田園市集商城'
				,tr_YangSen:'養森商城'
				,tr_CarEShop:'汽車'
				,tr_brandIdea:'品牌理念'
				,tr_ToCustomers:'緻客戶：'
				,tr_marketings:'30年營銷經驗'
				,tr_techProduct:'10年技術産品經驗'
				,tr_CTO:'技術總監'
				,tr_COO:'企劃總監'
				,tr_manageYears:'10年以上營銷管理經驗'
				,tr_saleManage:'銷售總監'
				,tr_marketings10:'10年營銷經驗'
				,tr_designDirector:'設計總監'
				,tr_designDirectorDet:'10年的設計藝術經驗'
				,tr_headWebpageTeam:'前端團隊'
				,tr_headWebpageTeamDet:'8年技術經驗'
				,tr_laterStage:'資深視頻後期'
				,tr_laterStageDet:'7年視頻創作與後期處理工作經驗'
				,tr_quickLink:'快速鏈接'
				,tr_aboutDet:'香港以勒人才管理顧問有限公司多年來服務于香港知名集團，集成全國一線技術開發人員，打造最專業的網絡科技信息服務團隊。公司高度重視人才的引進和培養,爲人才提供良好的發展機 遇和廣闊的提升空間，由此香港公司總部還聚集了一大批經濟學家和教授、金融業名人、海外投行以及業内實戰型人才。另在各地區分公司還組建了專業營銷、研發、客戶服務團隊，結合公司文化、人力資源體系和先進組織模式，爲客戶提供安全無憂的全方位服務後盾。而公司以及集團研發團隊融合了國際、國内業界及學術界的精英，在數個重大項目上與相關部門密切合作。'
				,tr_serviceDet:'香港以勒人才管理顧問有限公司主要經營項目設計+網站開發+程序開發爲一體的IT商業模式，爲各種企業、商家、等大小項目進行互聯網端的開發與設計。'
				,tr_brandIdeaDet:'堅持“誠信經營、客戶第一、專業創新”的經營方針，秉承“用心服務客戶,認真赢得信賴”的服務理念，通過信基網絡科技公司先進的IT技術和服務，爲全國客戶提供更加安全、快捷、優質的服務。'
				,tr_techDet:'爲客戶提供專業、耐心、高端的技術服務，從項目的設計到開發，一條龍服務，在互聯網新科技的崛起時代中，争取爲客戶提供最優質與專業的技術服務，爲客戶打造更加完美專業與優質的技術服務。'
				,tr_ToCustomersDet:'感激在的發展道路上得到您的支持，感謝您的信任與托付，感動在發展的關鍵時刻得到您的傾力相助，感恩與您一起共同努力，開拓市場。——電器、服飾、互聯網、金融、美妝、汽車、食品保健等一路相伴的客戶。'
				,tr_partnerDet:'與合作夥伴共建網絡服務生态圈'
				,tr_partnerSay:'“多次合作，讓我們逐漸了解以勒。我們對這個團隊以後的發展非常有信心，因爲他們已經擁有紮實的技術資本、合理的發展策略，以及非常好的服務素養（這點尤其難得）。與以勒達成長期合作關系，這是我們雙方都希望看到的。——香港萬隆金銀業公司'
				,tr_partnerSay2:'“與以勒科技的合作過程非常愉快。他們顯得很有經驗。項目從初期接洽、方案制定、設計開發到後期應用測試調整，我們的溝通非常順利，技術對接也毫無阻礙。這樣的合作，讓我們雙方都很滿意。希望繼續合作。”——主題旅遊（香港）有限公司'
				,tr_whatCanDo:'香港以勒人才管理顧問能做什麽？'
				,tr_whatCanDoDet:'分銷盈利，收益穩定——渠道代理商享受專屬折扣，可用于二次銷售，賺取高額差價，持續收益，且無需擔心任何技術問題，我們将提供全方位技術支持。'
				,tr_getmoney:'香港以勒人才管理顧問教你怎樣開始賺錢'
				,tr_getmoneyDet:'激活賬戶——花5分鍾時間，在以勒注冊一個會員，并激活賬戶；發布鏈接——使用圖片、文字、鏈接等形式，發布給朋友、廣告位、第三方網站等；赢取傭金——每當有一筆您引入的訂單成交，您都将獲得高達10%傭金分紅。'
				,tr_aboutMoney:'關于傭金，您應該知道的事'
				,tr_aboutMoneyDet:'傭金比例：客戶購買産品總費用的10%；支持産品：所有虛拟主機、服務器産品；提現額度：累計金額達到200元可申請提現至支付寶或銀行卡，不足200元可提現至信基賬戶用于消費；無效推薦：一個用戶注冊多個會員，自己推薦自己，系統自動識别，推薦無效；無效推薦：推薦人和購買人爲同一個IP地址，系統自動識别，推薦無效；提現方法：提交财務部，24小時内處理，周末、節假日延期到正常工作日處理。'
				,tr_ChannelAgent:'以勒人才管理顧問渠道代理優勢'
				,tr_ChannelAgentDet:'輕松搭建全面的銷售産品線；資源極具競争力，持續暢銷；客戶續費率高，持續高額收益；全權負責技術支持，無後顧之憂。'
				,tr_techTeam:'以勒人才管理顧問的技術團隊'
				,tr_techTeamDet:'八年的勵精圖治，我們凝聚起一批堅韌不拔、精通技術開發與系統維護的技術精英，包括港内領先水準的源碼維護團隊，以及港内最可靠的DBA管理人才，擁有系統構架師、界面設計師、運維工程師等明确的分工體系，能夠完美地實現客戶對IT項目開發、網站環境維護等技術層的要求。強力的技術團隊全程護航，保障您的業務平台穩定、高效率運行，讓您隻需專注于站點與應用開發，祛除技術問題的後顧之憂。'
				,tr_serviceTeam:'我們的客服團隊'
				,tr_serviceTeamDet:'在客服團隊方面，以勒人才管理在不斷吸收優秀客服的同時，也始終緻力于提高客服人員的服務質素與專業技能，力求随時爲每位用戶提供系統維護級的問題解決方案，而不僅僅是銷售産品以及簡單的“傳聲筒”式服務。以勒始終相信，提高産品的附加值、降低客戶的總體擁有成本、規避客戶可能遇到的風險、由産品轉向服務才是以勒與客戶實現合作共赢的基礎。'
				,tr_values:'我們的價值觀'
				,tr_valuesDet:'香港以勒人才管理顧問有限公司的企業文化——企業價值觀：創新 分享 感恩 共赢；在國際化的道路上，不斷披荊斬棘的探索并創新，是持續發展不斷進步的唯一法寶；學會分享，摒除吝啬，将使你收獲更多的饋贈，更好更快的成長；因爲有了他人無私的幫助，才能取得了今天的一點成績，時刻保有一顆感恩的心，才能獲得真正的甯靜和幸福；成就自己的同時，也成就公司和他人；獲得能力提升的同時，也獲得與之相符的收益。'
				,tr_joinUs:'加入以勒，你将獲得'
				,tr_joinUsDet:'以勒人才拓展訓練和來自世界各地的外國人一起工作的樂趣。和志同道合的年輕人一起玩科技，做網站的樂趣。專業的指導和培訓，帶你進入神奇的世界互聯網世界，爲你提供悉心的業務指導并量身定制屬于你的職業發展及人生規劃。'
				,tr_technicalService:'以勒技術服務'
				,tr_technicalServiceDet:'産品線——我們擁有優質完善的産品線，且具備多線路、高穩定、可控性強等特點，滿足多層級業務需求；服務型——通過在線咨詢/熱線電話/服務單系統/實時運維等多種方式，實現标準化、運營級售後服務全程護航；技術流——信基緻力于網絡、安全等基礎性 IT 領域的持續開發，并擁有完美的系統運維能力。'
				
				
				
				

            }
            indexTrips_en = {
            	
                tr_companyName:'Jireh Talent Agency Consultant Limited'
				,tr_menuNav:'Menu'
				,tr_index:'Index'
				,tr_service:'Service'
				,tr_case:'Case'
				,tr_about:'About'
				,tr_news:'Company News'
				,tr_tech:'Team'
				,tr_job:'Job'
				,tr_contact:'Contact'
				,tr_personnel_l:'Jireh Talent Agency'
				,tr_attr_l:'Absorbed、Major、Exclusive'
				,tr_abs_l:'Focus on development services, professional technical team, create high-end customization for you.'
				,tr_companyCompanySite:'Design Startegy'
				,tr_system:'System Safety'
				,tr_eShop:'E-Shop Build'
				,tr_SmallProgram:'Small Program'
				,tr_Trailer:'Trailer'
				,tr_Interface:'Interface Customized'
				,tr_ServerSecurity:'Server Security'
				,tr_LightExtravagance:'Light Extravagance'
				,tr_LivingClub:'Living Club'
				,tr_HonorablExperience:'Honorable Experience'
				,tr_ebmESshop:'eBm E-Sshop'
				,tr_lavaux:'Lavaux Tourism'
				,tr_lgoDesign:'lGo Design'
				,tr_DingTaiXin:'Ding Tai Xin'
				,tr_greenSoft:'Green Soft'
				,tr_aiBaoEShop:'aiBao E-Shop'
				,tr_yiJiaBuyEShop:'iJiaBuy E-Shop'
				,tr_farmMarket:'Farm Market'
				,tr_YangSen:'yangSen E-Shop'
				,tr_CarEShop:'Car E-Shop'
				,tr_brandIdea:'Brand Idea'
				,tr_ToCustomers:'To Customers:'
				,tr_marketings:'30 years marketing experience'
				,tr_techProduct:'10 years of technical product experience'
				,tr_CTO:'CTO&amp;DGM'
				,tr_COO:'COO&amp;DGM'
				,tr_manageYears:'Over 10 years marketing management experience'
				,tr_saleManage:'Director of sales'
				,tr_marketings10:'10 years marketing experience'
				,tr_designDirector:'Design Director'
				,tr_designDirectorDet:'10 Years of Design Art Experience'
				,tr_headWebpageTeam:'Head Webpage team'
				,tr_headWebpageTeamDet:'8 Years of technical experience'
				,tr_laterStage:'Senior Video Later Stage'
				,tr_laterStageDet:'7 Years experience in video creation and post-processing'
				,tr_quickLink:'Quick Link'
				,tr_aboutDet:'Hong Kong Eller Talent Management Consulting Co., Ltd. has served well-known groups in Hong Kong for many years. It integrates front-line technical developers in the whole country to build the most professional network technology information service team. The company attaches great importance to the introduction and cultivation of talents and provides them with good opportunities for development and broad space for promotion. As a result, the headquarters of the Hong Kong company has also gathered a large number of economists and professors, celebrities in the financial industry, overseas investment banks and practical talents in the industry. '
				,tr_serviceDet:'Hongkong Yile Talent Management Consulting Co., Ltd. is mainly engaged in project design + website development + program development as one of the IT business models. '
				,tr_brandIdeaDet:'Adhering to the business policy of "honesty management, customer first, professional innovation", adhering to the service concept of "serving customers with heart and earnestly winning trust".'
				,tr_techDet:'Provide customers with professional, patient, high-end technical services, from project design to development, to provide customers with the best quality and professional technical services.'
				,tr_ToCustomersDet:'Thank you for your support on the road of development. Thank you for your trust and trust. Thank you for your help at the critical moment of development.'
				,tr_partnerDet:'Co-construction of Network Service Ecosphere with Partners'
				,tr_partnerSay:'"Many cooperation, let us gradually understand Eller. We are very confident in the future development of this team, because they already have solid technical capital, reasonable development strategy. —— Hong Kong Bandung Gold and Silver Company'
				,tr_partnerSay2:'"The process of cooperation with Erer Technologies is very pleasant. They seem very experienced. From initial contacts, project formulation, design and development to late application testing and adjustment. We hope to continue our cooperation. —— Theme Tourism (Hong Kong) Co., Ltd.'
				,tr_whatCanDo:'What can we do?'
				,tr_whatCanDoDet:'Distribution profit, revenue stability - channel agents enjoy exclusive discounts, can be used for secondary sales, earn high price differentials, sustained revenue, and do not need to worry about any technical problems, we will provide comprehensive technical support.'
				,tr_getmoney:'Teaches you how to start making money'
				,tr_getmoneyDet:'Activate an account - take 5 minutes to register a member in Eller and activate the account; publish links - use pictures, text, links and other forms to publish to friends, advertising sites. Win commissions - you will get up to 10% Commission dividend whenever an order you introduce is completed.'
				,tr_aboutMoney:'What you should know about commission'
				,tr_aboutMoneyDet:'Commissions: 10% of the total cost of products purchased by customers; support products: all virtual hosts and server products; withdrawal methods: submitted to the Finance Department, within 24 hours, weekends, holidays postponed to normal working days.'
				,tr_ChannelAgent:'Advantage of Eller Personnel Management Consultant Channel Agency'
				,tr_ChannelAgentDet:'Easy to build a comprehensive sales product line; highly competitive resources, continuous best-selling; high customer renewal rate, continuous high revenue; full responsibility for technical support, without worries.'
				,tr_techTeam:'Our technical team'
				,tr_techTeamDet:'We have gathered a group of tough and skilled technological elites, including the leading source code maintenance team in Hong Kong, reliable DBA management personnel, system architect, interface designer, operation and maintenance engineer and other clear division of labor system.'
				,tr_serviceTeam:'Our customer service team'
				,tr_serviceTeamDet:'While we constantly absorb excellent customer service, we are always committed to improving the service quality and professional skills of customer service personnel, providing solutions to problems for every user at any time, rather than just selling products and simple "microphone" service.'
				,tr_values:'Our Values'
				,tr_valuesDet:'Enterprise Values: Innovation, Sharing, Gratitude and Win-win; On the road of internationalization, continuous exploration and innovation are the only magic weapon for sustainable development and progress.'
				,tr_joinUs:'Join Elle and you will get it'
				,tr_joinUsDet:'Play technology with like-minded young people and make websites fun. Professional guidance and training will bring you into the magical world of the Internet, provide you with careful business guidance and tailor-made career development and life planning.'
				,tr_technicalService:'Our technical service'
				,tr_technicalServiceDet:'Service-oriented-through online consultation/hotline telephone and other means to achieve standardization, operation-level after-sales service escort throughout the process; technology flow-information base is committed to the continuous development of basic IT fields such as network, security, and has perfect system operation and maintenance capabilities.'
				
				
				
            }
            
        if(!languageType){
        	languageType=2;
        }

        if (languageType == 0) {
            indexTrips = indexTrips_cn;
            $('.zh_click').eq(0).addClass('activet');
        } else if (languageType == 1) {
            indexTrips = indexTrips_tr;
            $('.zh_click').eq(1).addClass('activet');
        } else if (languageType == 2) {
            indexTrips = indexTrips_en;
            $('.zh_click').eq(2).addClass('activet');
        }
        
        
        
        var trClassArr=[];
		for(var i in indexTrips){
			trClassArr.push(i);
		}
		for(var m=0; m<trClassArr.length; m++){
			$('.' + trClassArr[m]).html(indexTrips[trClassArr[m]]);
			if(languageType == 2){
				$('.' + trClassArr[m]).css('font-family','bankgothic_md_bt_mediumRg');
			}
		}
		if(languageType==2){
			$('.tr_display_cn').css('display','none');
			$('.box-tit-cn').css({"height":"40px","padding-left":"10px","padding-right":"10px"})
		}
		
		function langTab(typeId){
			localStorage.setItem('languageType',typeId);
			window.location.reload();
		}
