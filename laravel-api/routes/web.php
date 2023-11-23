<?php

use App\Http\Controllers\QuestionClientController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('question', [QuestionClientController::class, 'index']);
Route::post('question', [QuestionClientController::class, 'store']);
Route::delete('question/{id}', [QuestionClientController::class, 'destroy']);
