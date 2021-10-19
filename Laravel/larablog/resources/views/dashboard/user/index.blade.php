@extends('dashboard.master')

@section('content')

<a class="btn btn-success mt-3 mb-3" href="{{ route('user.create') }}">
    Crear
</a>

<table class="table">

    <thead>
        <tr>
            <td>
                ID
            </td>
            <td>
                Name
            </td>
            <td>
                Rol
            </td>            
            <td>
                Surname
            </td>
            <td>
                Email
            </td>
            <td>
                Email verified?
            </td>
            <td>
                Created at
            </td>
            <td>
                Updated at
            </td>
            <td>
                Actions
            </td>
        </tr>
    </thead>

    <tbody>

        @foreach($users as $user)
            <tr>
                <td>
                    {{ $user->id }}
                </td>
                <td>
                    {{ $user->name }}
                </td>
                <td>
                    {{ $user->rol->name }}
                </td>                
                <td>
                    {{ $user->surname }}
                </td>
                <td>
                    {{ $user->email }}
                </td>
                <td>
                    {{ $user->email_verified_at }}
                </td>
                <td>
                    {{ $user->created_at->format('d-m-Y') }}
                </td>
                <td>
                   {{ $user->updated_at->format('d-m-Y') }}
                </td>
                <td>
                    <a href="{{route('user.show', $user->id)}}" class="btn btn-primary">Ver</a>
                    <a href="{{route('user.edit', $user->id)}}" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger" data-target="#deleteModal" data-toggle="modal" data-id="{{$user->id}}">Eliminar</button>
                </td>
            </tr>
        @endforeach

    </tbody>

</table>

{{ $users->links() }}

@include('dashboard.user.modalDelete')

@endsection
