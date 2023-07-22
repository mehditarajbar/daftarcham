<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VerifyCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {

        $data = $request->validate([
            'mobile' => ['required', 'regex:/^(\\+98|0)?9\\d{9}$/']
        ]);

        $user = User::where('mobile', $data['mobile'])->first();

        if ($user) {
            $data = $this->login($user);
        } else {
            $data = $this->register($data['mobile']);
        }

        return response()->json($data);
    }

    private function login($user)
    {
        return $this->genVerifyCode($user);
    }

    private function register($mobile)
    {

        $user = User::create([
            'mobile' => $mobile,
        ]);

//        $data['token'] = $user->createToken('main')->plainTextToken;
        return $this->genVerifyCode($user);
    }

    protected function genVerifyCode($user)
    {
        $verifyCode = $user->verify()->latest()->first();
        if ($verifyCode && Carbon::now()->isBefore($verifyCode->expire_at)) {
            $code = (integer)$verifyCode->code;
        } else {
            $code = rand(111111, 999999);
            $user->verify()->create([
                'code' => $code,
                'expire_at' => Carbon::now()->addMinutes(2),
            ]);
        }
        return [
            'success' => true,
            'step_verify' => 'sending',
            'message'=>'Send Code Successfully',
            'code' => $code
        ];


    }
}
