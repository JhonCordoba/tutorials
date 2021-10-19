@extends('dashboard.master')

@section('content')


<a class="btn btn-success mt-3 mb-3" href="{{ route('post.create') }}">
    Crear
</a>

<table class="table">

    <thead>
        <tr>
            <td>
                ID
            </td>
            <td>
                Title
            </td>
            <td>
                Category
            </td>            
            <td>
                Posted
            </td>
            <td>
                Created date
            </td>
            <td>
                Updated date
            </td>
            <td>
                Actions
            </td>
        </tr>
    </thead>

    <tbody>

        @foreach($posts as $post)
            <tr>
                <td>
                    {{ $post->id }}
                </td>
                <td>
                    {{ $post->title }}
                </td>
                <td>
                    {{ $post->category->title }}
                </td>                
                <td>
                    {{ $post->posted }}
                </td>
                <td>
                    {{ $post->created_at->format('d-m-Y') }}
                </td>
                <td>
                   {{ $post->updated_at->format('d-m-Y') }}
                </td>
                <td>
                    <a href="{{route('post.show', $post->id)}}" class="btn btn-primary">Ver</a>
                    <a href="{{route('post.edit', $post->id)}}" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger" data-target="#deleteModal" data-toggle="modal" data-id="{{$post->id}}">Eliminar</button>
                </td>
            </tr>
        @endforeach

    </tbody>

</table>

{{ $posts->links() }}

@include('dashboard.post.modalDelete')

@endsection
