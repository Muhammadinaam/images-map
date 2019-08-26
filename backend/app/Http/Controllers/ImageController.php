<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use Auth;

class ImageController extends Controller
{
    public function upload()
    {
        try {

            $request = request();

            $file = $request->file('file');
       
            $file_name = $file->getClientOriginalName();
        
            $save_name = uniqid() . "_" . $file_name;
    
            //Move Uploaded File
            $destinationPath = 'uploads';
            $file->move($destinationPath, $save_name);
    
            $image = new Image;

            $image->user_id = Auth::user()->id;
            $image->lat = $request->default_lat;
            $image->long = $request->default_long;
            $image->image_path = $destinationPath . '/' . $save_name;
            $image->save();

            return ['success' => true, 'message' => 'File uploaded successfully'];
            
        } catch (\Exception $ex) {
            return ['success' => true, 'message' => 'Error: ' . $ex->getMessage()];
        }
    }

    public function getImages()
    {
        

        $images = Image::where('user_id', Auth::user()->id)
            ->get();

        return $images;
    }
}
