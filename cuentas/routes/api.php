<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TransactionsController;
//EHDPOINT
Route::resource('accounts', AccountsController::class);
//EHDPOINT
Route::resource('categories', AccountsController::class);
//EHDPOINT
Route::resource('transactions', TransactionsController::class);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
