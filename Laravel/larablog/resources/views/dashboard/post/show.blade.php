@extends('dashboard.master')

@section('content')

    @csrf
    <div class="form-group">
        <label for="title">Titulo</label>
        <input id="title" name="title" type="text" class="form-control" readonly value="{{ $post->title }}">


    </div>

    <div class="form-group">
        <label for="url_clean">URL limpia</label>
        <input id="url_clean" name="url_clean" type="text" class="form-control" readonly value="{{ $post->url_clean }}">
    </div>


    <div class="form-group">
        <label for="content">Contenido</label>
        <textarea id="content" name="content" class="form-control" readonly rows="3"> {{ $post->content }} </textarea>


    </div>

</form>
@endsection