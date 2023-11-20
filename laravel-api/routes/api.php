<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuetionController;

Route::get('/questions', [QuetionController::class, 'getAll']);
Route::get('/question/{id}', [QuetionController::class, 'getOne']);
Route::post('/question', [QuetionController::class, 'create']);
// Route::patch('/quetion/{id}', [QuetionController::class, 'update']);
Route::delete('/question/{id}', [QuetionController::class, 'delete']);
