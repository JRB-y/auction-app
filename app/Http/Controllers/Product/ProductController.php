<?php

namespace App\Http\Controllers\Product;


use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Images\ImageController as Image;

class ProductController extends Controller
{


    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $image = new Image();
        if ($request->hasFile('image')) {

            $image->save($request->image);

            request()->request->add(['img_path' => $image->path]);
        } else {
            request()->request->add(['img_path' => $image->image_default]);
        }

        return Product::create($request->all());
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(Request $request, $id)
    {

        $product = Product::find($id);

        if ($product) {

            $image = new Image();
            if ($request->hasFile('image')) {


                $image->deleteOld($product->img_path);


                $image->save($request->image);

                request()->request->add(['img_path' => $image->path]);
            } else {
                request()->request->add(['img_path' => $image->image_default]);
            }

            if ($product->update($request->all())) {
                return response()->json(['msg' => 'success', 'new_img_path' => $product->img_path], 200);
            }
        }
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $img_path = $product->img_path;
        if ($product->delete()) {
            $image = new Image();
            $image->deleteOld($img_path);
            return response()->json(['msg' => 'success'], 200);
        }
    }
}
