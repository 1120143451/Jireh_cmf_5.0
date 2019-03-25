<?php
// +----------------------------------------------------------------------
// | Created by PhpStorm.
// +----------------------------------------------------------------------
// | Author: Richard
// +----------------------------------------------------------------------
// | Date: 2019/3/22 
// +----------------------------------------------------------------------
// | Time: 15:48
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;

class JobController extends HomeBaseController
{
    public function index()
    {
        return $this->fetch(':job');
    }
}