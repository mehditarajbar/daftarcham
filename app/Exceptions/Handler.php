<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\UnauthorizedException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request,Throwable $exception)
    {

        if ($exception instanceof AuthenticationException){
            return response()->json([
                'error'=>'Authentication Error'
            ]);
        }

        if($exception instanceof MethodNotAllowedHttpException){
            return response()->json([
                'error'=>'Method Not Supported'
            ]);
        }

        if($exception instanceof ValidationException){
            $errorKeys=$exception->validator->errors()->keys();
            $error=[];
            foreach ($errorKeys as $key){
                $error[$key]=$exception->validator->errors()->get($key)[0];
            }
            return response(
                $error
            ,Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
