<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quetion;
use App\Http\Resources\QuetionResource;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

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
        
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imageUpload = Cloudinary::upload($request->file('image')->getRealPath(), [
                'folder' => 'project-aadr',
            ])->getSecurePath();
        } else {
            return response()->json([
                'error' => 'Invalid or missing image file',
            ], 400);
        }
        $post = Quetion::create([
            'image' => $imageUpload,
            'quetion' => $request->quetion,
            'trueans' => $request->trueans,
            'falseans_1' => $request->falseans_1,
            'falseans_2' => $request->falseans_2,
            'falseans_3' => $request->falseans_3,
        ]);
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
        // Temukan pertanyaan berdasarkan ID
        $quetion = Quetion::find($id);
        

        // Periksa apakah pertanyaan ditemukan
        if (!$quetion) {
            return response()->json([
                'error' => 'Pertanyaan tidak ditemukan',
            ], 404);
        }

        // Hapus file dari Cloudinary
        $publicId = pathinfo($quetion->image, PATHINFO_FILENAME);
        $deleteResult = Cloudinary::destroy($publicId, [
            'folder' => 'project-aadr',
        ]);

        // Periksa apakah penghapusan di Cloudinary berhasil
        // if ($deleteResult['result'] !== 'ok' || $deleteResult['result'] !== 'success') {
        //     return response()->json([
        //         'error' => 'Gagal menghapus file dari Cloudinary',
        //     ], 500);
        // }

        // Hapus pertanyaan dari database
        $quetion->delete();

        return response()->json([
            'message' => 'Pertanyaan dan file terkait berhasil dihapus',
            'data' => $quetion
        ], 200);
    }

    // function generateRandomString($length = 30) {
    //     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     $charactersLength = strlen($characters);
    //     $randomString = '';
    //     for ($i = 0; $i < $length; $i++) {
    //         $randomString .= $characters[rand(0, $charactersLength - 1)];
    //     }
    //     return $randomString;
    // }
}
