<?php
// +----------------------------------------------------------------------
// | Created by PhpStorm.
// +----------------------------------------------------------------------
// | Author: Richard
// +----------------------------------------------------------------------
// | Date: 2019/3/23 
// +----------------------------------------------------------------------
// | Time: 10:53
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;

class ContactController extends HomeBaseController
{
    public function index()
    {
        return $this->fetch(':contact');
    }
}