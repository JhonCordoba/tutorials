@extends('dashboard.master')

@section('content')


<a class="btn btn-success mt-3 mb-3" href="{{ route('category.create') }}">
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
                Description
            </td>
         </tr>
    </thead>

    <tbody>

        @foreach($categories as $category)
            <tr>
                <td>
                    {{ $category->id }}
                </td>
                <td>
                    {{ $category->title }}
                </td>
                <td>
                    {{ $category->posted }}
                </td>
                <td>
                    {{ $category->created_at->format('d-m-Y') }}
                </td>
                <td>
                   {{ $category->updated_at->format('d-m-Y') }}
                </td>
                <td>
                    <a href="{{route('category.show', $category->id)}}" class="btn btn-primary">Ver</a>
                    <a href="{{route('category.edit', $category->id)}}" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger" data-target="#deleteModal" data-toggle="modal" data-id="{{$category->id}}">Eliminar</button>
                </td>
            </tr>
        @endforeach

    </tbody>

</table>

{{ $categories->links() }}

@include('dashboard.category.modalDelete')

@endsection
