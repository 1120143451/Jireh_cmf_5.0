<?php
/**
 * Copyright (c) 2013-2017 http://www.syousoft.com All rights reserved.
 * Author: WelkinVan(welkinvan@qq.com)
 * Date: 6/8/2017
 * Time: 11:18 PM
 */
namespace plugins\sy_switch_lang_theme;//Demo插件英文名，改成你的插件英文就行了
use cmf\lib\Plugin;
use think\lang;
use think\request;
use think\Cookie;

class SySwitchLangThemePlugin extends Plugin
{

    public $info = [
        'name' => 'SySwitchLangTheme',//Demo插件英文名，改成你的插件英文就行了
        'title' => '多语言模板切换',
        'description' => '根据不同语言切换不同模板',
        'status' => 1,
        'author' => 'UpStream',
        'version' => '1.0',
        'demo_url' => 'http://www.syousoft.com',
        'author_url' => 'http://www.syousoft.com'
    ];


    public $hasAdmin = 0;//插件是否有后台管理界面

    // 插件安装
    public function install()
    {
        return true;//安装成功返回true，失败false
    }

    // 插件卸载
    public function uninstall()
    {
        return true;//卸载成功返回true，失败false
    }

    //实现的switch_theme钩子方法
    public function switchTheme($param)
    {
        $param = request::instance()->param();
        if (isset($param['lang'])) {
            $setlang = $param['lang'];
        }
        $config = $this->getConfig();
        $syslang = lang::detect();
        if ($config['open'] == 1) {
            if (!empty($setlang)) {
                $lang = $setlang;
                Cookie::delete('lang');
                Cookie::set('lang', $setlang, 86400);
            } elseif (Cookie::has('lang')) {
                $lang = Cookie::get('lang');
            } else {
                $lang = $syslang;
                Cookie::delete('lang');
                Cookie::set('lang', $syslang, 86400);
            }
        }
        if (isset($lang)) {
            if ($lang == "en" || $lang == "en-us" || $lang == "en-gb") {
                return $config['lang_en'];
            }
            if ($lang == "zh" || $lang == "zh-cn") {
                return $config['lang_cn'];
            }
            if ($lang == "zh-hk") {
                return $config['lang_hk'];
            }
        }
    }
}