<?php
// routes/api.php
use App\Http\Controllers\ProjetController;
use Illuminate\Support\Facades\Route;


Route::get('/projets', [ProjetController::class, 'index']);
Route::get('/users', [UserControll::class, 'index']);


