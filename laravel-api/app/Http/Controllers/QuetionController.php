<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quetion;
use App\Http\Resources\QuetionResource;

class QuetionController extends Controller
{
    public function getAll() {
        try {
            $quetions = Quetion::all();
            // dd($quetions);
            return QuetionResource::collection($quetions);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getOne($id) {
        $quetion = Quetion::findOrFail($id);
        return new QuetionResource($quetion);
    }

    public function create(Request $request) {

        $validated = $request->validate([
            'quetion' => 'required|max:255',
            'trueans' => 'required|max:255',
            'falseans_1' => 'required|max:255',
            'falseans_2' => 'required|max:255',
            'falseans_3' => 'required|max:255',
        ]);

        if ($request->file) {
            $filename = $this->generateRandomString();
            $extension = $request->file->extension();

            $request->file->move(public_path('images'), $filename . '.' . $extension);
        }
        

        $request['image'] = $filename . '.' . $extension;
        $post = Quetion::create($request->all());
        return new QuetionResource($post);
    }

    public function update($id, Request $request) {
        $validated = $request->validate([
            'quetion' => 'max:255',
            'trueans' => 'max:255',
            'falseans_1' => 'max:255',
            'falseans_2' => 'max:255',
            'falseans_3' => 'max:255',
        ]);


        $post = Quetion::findOrFail($id);
        $post->update($request->all());
        return new QuetionResource($post);
    }

    public function delete($id) {
        $post = Quetion::findOrFail($id);
        $post->delete();
        return response()->json([
            'success' => true,
            'message' => 'Data deleted successfully',
            'data' => $post
        ]);
    }

    function generateRandomString($length = 30) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
