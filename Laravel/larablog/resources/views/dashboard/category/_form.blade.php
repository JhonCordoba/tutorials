@csrf
    <div class="form-group">
        <label for="title">Titulo</label>
        <input type="text" id="title" name="title" class="form-control" value="{{old('title', $category->title)}}">

        @error('title')
        <small class="text-danger"> {{$message}} </small>
        @enderror
    </div>

    <div class="form-group">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="3" class="form-control"> {{old('description', $category->description)}} </textarea>

        @error('description')
        <small class="text-danger"> {{$message}} </small>
        @enderror

    </div>


    <input type="submit" value="Enviar">