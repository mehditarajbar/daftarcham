<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VerifyCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Nette\Schema\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class VerifyCodeController extends Controller
{
    public function verify(Request $request)
    {
        $validated = $request->validate([
            'code' => ['required', 'exists:verify_codes,code'],
            'mobile' => ['required', 'exists:users,mobile']
        ]);
        $user = User::query()->where('mobile', '=', $validated['mobile'])->first();
        $verifyCode = VerifyCode::query()
            ->where('code', $validated['code'])
            ->where('user_id', '=', $user->id)
            ->first();
        if ($verifyCode && Carbon::now()->isAfter($verifyCode->expire_at)) {
            return response([
                'errors'=>['code'=>['Code is Expired Date!']]
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
//             throw new ValidationException('');
        }
        $user->update([
            'mobile_verified_at' => Carbon::now()
        ]);
        $verifyCode->update([
            'expire_at'=>Carbon::now()
        ]);
        return response([
            'success' => true,
            'token'=>$user->createToken('main')->plainTextToken,
            'message' => 'verified account'
        ], Response::HTTP_ACCEPTED);

    }


}
