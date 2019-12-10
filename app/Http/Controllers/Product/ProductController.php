<?php

namespace App\Http\Controllers\Product;


use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Images\ImageController as Image;

class ProductController extends Controller
{

    private $image_default = "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png";

    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        if ($request->hasFile('image')) {

            $image = new Image($request->image);

            request()->request->add(['img_path' => $image->path]);
        } else {
            request()->request->add(['img_path' => $this->image_default]);
        }

        return Product::create($request->all());
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(Request $request, $id)
    {
        dd($request->name);
        return Product::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        return Product::find($id)->delete();
    }
}
