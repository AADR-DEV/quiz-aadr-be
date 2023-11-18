<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuetionController;

Route::get('/quetions', [QuetionController::class, 'getAll']);
Route::get('/quetion/{id}', [QuetionController::class, 'getOne']);
Route::post('/quetion', [QuetionController::class, 'create']);
Route::patch('/quetion/{id}', [QuetionController::class, 'update']);
Route::delete('/quetion/{id}', [QuetionController::class, 'delete']);
