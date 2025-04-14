<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use App\Models\User;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    public function index()
    {
        $zak = Projet::all();
        return response()->json( $zak) ;
    }

    
        
    
    }
    

