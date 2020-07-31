<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('danh-sach-nguoi-dung', 'UserController@index');
Route::get('danh-sach-nguoi-dung/{id}', 'UserController@show');
Route::delete('danh-sach-nguoi-dung/{id}', 'UserController@destroy');
Route::put('danh-sach-nguoi-dung/{id}', 'UserController@update');
Route::post('danh-sach-nguoi-dung', 'UserController@store');
Route::post('/login', 'UserController@login')->name("user.login");

Route::get('danh-sach-bai-dang', 'PostController@index');
Route::get('danh-sach-bai-dang/{id}', 'PostController@show');
Route::delete('danh-sach-bai-dang/{id}', 'PostController@destroy');
Route::put('danh-sach-bai-dang/{id}', 'PostController@update');
Route::post('danh-sach-bai-dang', 'PostController@store');

Route::get('danh-sach-danh-muc', 'CategoryController@index');
Route::get('danh-sach-danh-muc/{id}', 'CategoryController@show');
Route::delete('danh-sach-danh-muc/{id}', 'CategoryController@destroy');
Route::put('danh-sach-danh-muc/{id}', 'CategoryController@update');
Route::post('danh-sach-the-loai', 'CategoryController@store');

Route::post('dang-ki', 'AuthController@register');
Route::post('dang-nhap', 'AuthController@login');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('auth', 'AuthController@user');
    Route::post('dang-xuat', 'AuthController@logout');
});
Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthController@refresh');
