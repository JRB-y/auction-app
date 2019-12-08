<?php

namespace App\Http\Controllers\Product;


use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(Request $request, $id)
    {
        return Product::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        return Product::find($id)->delete();
    }
}
