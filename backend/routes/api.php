<?php
// routes/api.php
use App\Http\Controllers\ProjetController;

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/projets', [ProjetController::class, 'index']);
Route::get('/users', [UserController::class, 'users']); 


