<?php

namespace App\Http\Controllers;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class QuestionClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $client = new Client();
        $url = "http://localhost:8000/api/questions";
        $response = $client->request('GET', $url);
        $content = $response->getBody()->getContents();
        // dd($content);
        $contentArray = json_decode($content, true);
        $data = $contentArray['data'];
        return view('question.index', ['data'=>$data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $quetion = $request->quetion;
        $trueans = $request->trueans;
        $falseans_1 = $request->falseans_1;
        $falseans_2 = $request->falseans_2;
        $falseans_3 = $request->falseans_3;
        $image = $request->file('image');

        // Check if the image is present and valid
        if ($image && $image->isValid()) {
            try {
                $imageUpload = Cloudinary::upload($image->getRealPath(), [
                    'folder' => 'project-aadr',
                ])->getSecurePath();
            } catch (\Exception $e) {
                return response()->json([
                    'error' => 'Error uploading image to Cloudinary: ' . $e->getMessage(),
                ], 400);
            }
        } else {
            return response()->json([
                'error' => 'Invalid or missing image file',
            ], 400);
        }

        $client = new Client();
        $url = "http://localhost:8000/api/question";
        $response = $client->request('POST', $url, [
            'multipart' => [
                [
                    'name' => 'quetion',
                    'contents' => $quetion,
                ],
                [
                    'name' => 'trueans',
                    'contents' => $trueans,
                ],
                [
                    'name' => 'falseans_1',
                    'contents' => $falseans_1,
                ],
                [
                    'name' => 'falseans_2',
                    'contents' => $falseans_2,
                ],
                [
                    'name' => 'falseans_3',
                    'contents' => $falseans_3,
                ],
                [
                    'name' => 'image',
                    'contents' => $imageUpload, // Use the Cloudinary URL instead of fopen
                ]
            ]
        ]);

        $content = $response->getBody()->getContents();
        $contentArray = json_decode($content, true);
        $data = $contentArray['data'];
        print_r($data);
        return redirect()->to('question')->with('success', 'Question post successfully');
    }

    private function prepareMultipartData($data)
    {
        $multipartData = [];

        foreach ($data as $key => $value) {
            $multipartData[] = [
                'name' => $key,
                'contents' => $value,
            ];
        }

        return $multipartData;
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = new Client();
        $url = "http://localhost:8000/api/question/$id";
        $response = $client->request('DELETE', $url);
        $content = $response->getBody()->getContents();
        $contentArray = json_decode($content, true);
        print_r($contentArray);
        return redirect()->to('question')->with('success', 'Question deleted successfully');
    }
}
