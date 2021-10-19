@extends('dashboard.master')

@section('content')

    @csrf
    <div class="form-group">
        <label for="title">Titulo</label>
        <input id="title" name="title" type="text" class="form-control" readonly value="{{ $category->title }}">


    </div>

    <div class="form-group">
        <label for="description">Description</label>
        <input id="description" name="description" type="text" class="form-control" readonly value="{{ $category->description }}">
    </div>

</form>
@endsection