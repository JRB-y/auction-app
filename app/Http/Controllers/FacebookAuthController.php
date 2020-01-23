<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class FacebookAuthController extends Controller
{
    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        // $user = Socialite::driver('faecebook')->stateless()->user();
        // Socialite will pick response data automatic 
        $user = Socialite::driver('facebook')->stateless()->user();
        return response()->json($user);

        // $user->token;
    }
}
