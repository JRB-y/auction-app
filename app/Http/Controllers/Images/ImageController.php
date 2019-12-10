<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;

class ImageController extends Controller
{

    public $name;

    public $path;

    public function __construct($image)
    {
        $this->image = $image;

        $this->save();
    }

    /**
     * The save method will store the image in the public folder
     * and after we will have access to the path and name of the image.
     */
    private function save()
    {
        $this->getName();

        $this->saveInPublicFolder();

        $this->getPath();
    }

    /**
     * Get the image name: time() + image original extension
     */
    private function getName()
    {
        $this->name = time() . '.' . $this->image->getClientOriginalExtension();
    }

    /**
     * Save the image in the public folder /images
     *
     * @return void
     */
    private function saveInPublicFolder()
    {
        $this->image->move(public_path('images'), $this->name);
    }

    /**
     * Get the image path
     *
     * @return void
     */
    private function getPath()
    {
        $this->path =  '/images' . '/' . $this->name;
    }
}
