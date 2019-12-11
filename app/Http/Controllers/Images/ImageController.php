<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{

    public $name;

    public $path;

    public $image_default = "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png";

    private $image;

    /**
     * The save method will store the image in the public folder
     * and after we will have access to the path and name of the image.
     */
    public function save($image)
    {
        $this->image = $image;

        $this->getName();

        $this->saveInPublicFolder();

        $this->getPath();
    }

    public function deleteOld($image_path)
    {
        if (File::exists(public_path($image_path))) {

            File::delete(public_path($image_path));
        }
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
