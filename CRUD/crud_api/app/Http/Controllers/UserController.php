<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::table('users')->select('id', 'name', 'email')->get()->toArray();
        return $users;
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        $user = new User([
            'name' => $request->get('name'),
            'password' => bcrypt($request->get('password')),
            'email' => $request->get('email'),
        ]);
        $user->save();
        return response()->json([
            'error' => false,
            'user' => $user
        ], 200);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        if (is_null($user)) {
            return response()->json([
                'error' => true,
                'message' => "Record with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'user' => $user,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = $request->get('password');
        $user->save();
        return $user;
    }

    public function destroy($id)
    {
        if ($id != null) {
            $user = User::find($id);
            $user->delete();
        }
    }
}
