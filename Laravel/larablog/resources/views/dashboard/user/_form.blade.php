    @csrf
    <div class="form-group">
        <label for="title">Titulo</label>
        <input type="text" id="title" name="title" class="form-control" value="{{old('title', $post->title)}}">

        @error('title')
        <small class="text-danger"> {{$message}} </small>
        @enderror
    </div>

    <div class="form-group">
        <label for="url_clean">URL limpia</label>
        <input type="text" id="url_clean" name="url_clean" class="form-control" value="{{ old('url_clean', $post->url_clean) }}">
        @error('url_clean')
        <small class="text-danger"> {{$message}} </small>
        @enderror
    </div>

    <div class="form-group">
        <label for="category_id">Categoría</label>
        <select class="form-control" id="category_id" name="category_id">
            @foreach($categories as $title => $id)
                    <option {{ $post->category_id == $id? 'selected' : ''  }}  value="{{ $id }}">{{ $title }}</option>
            @endforeach
        </select>

        @error('category_id')
        <small class="text-danger"> {{$message}} </small>
        @enderror
    </div>

    <div class="form-group">
        <label for="posted">Posted</label>
        <select class="form-control" id="posted" name="posted">
            @include('dashboard.partials.option-yes-not', ['is_posted' => $post->posted  ])
        </select>

        @error('posted')
        <small class="text-danger"> {{$message}} </small>
        @enderror
    </div>


    <div class="form-group">
        <label for="content">Contenido</label>
        <textarea name="content" id="content" rows="3" class="form-control"> {{old('content', $post->content)}} </textarea>

        @error('content')
        <small class="text-danger"> {{$message}} </small>
        @enderror

    </div>


    <input type="submit" value="Enviar">