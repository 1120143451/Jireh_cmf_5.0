<?php
// +----------------------------------------------------------------------
// | Created by PhpStorm.
// +----------------------------------------------------------------------
// | Author: Richard
// +----------------------------------------------------------------------
// | Date: 2019/3/21
// +----------------------------------------------------------------------
// | Time: 14:10
// +----------------------------------------------------------------------
/*
 * 以 | 切割名称
 */
function cutting_name($name)
{
    return explode("|", $name);
}