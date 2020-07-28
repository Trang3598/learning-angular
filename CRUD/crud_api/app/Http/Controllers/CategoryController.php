<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return $categories;
    }

    public function store(Request $request)
    {
        Category::create($request->all());
    }

    public function show($category)
    {
        return Category::findOrFail($category);
    }

    public function update(Category $category, Request $request)
    {
        $category->update($request->all());
    }

    public function destroy($category)
    {
        return Category::destroy($category);
    }

}
