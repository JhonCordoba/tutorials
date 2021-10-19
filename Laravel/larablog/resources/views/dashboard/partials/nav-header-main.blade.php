        <div class="list-group">

            <a href="#menu1" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                <i class="fa fa-user"></i>
                <span class="hidden-sm-down">Post<i class="fa fa-caret-down"></i></span>
            </a>
            <div class="collapse" id="menu1">
                <a href="{{route('post.index')}}" class="list-group-item" data-parent="#menu1">Lista de Posts</a>
            </div>

        </div>

        <div class="list-group">

            <a href="#menu2" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                <i class="fa fa-user"></i>
                <span class="hidden-sm-down">Category<i class="fa fa-caret-down"></i></span>
            </a>
            <div class="collapse" id="menu2">
                <a href="{{route('category.index')}}" class="list-group-item" data-parent="#menu2">Lista de Categorías</a>
            </div>

        </div>


        <div class="list-group">

            <a class="list-group-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>

        </div>


        <style>
            /* highlight active menu */
            #sidebar .list-group-item:not(.collapsed) {
                background-color: #222;
            }

            /* closed state icon */
            #sidebar .list-group .list-group-item[aria-expanded=”false”]::after {
                content: “ \f0d7”;
                font-family: FontAwesome;
                display: inline;
                text-align: right;
                padding-left: 5px;
            }

            /* open state */
            #sidebar .list-group .list-group-item[aria-expanded=”true”] {
                background-color: #222;
            }

            /* open state icon */
            #sidebar .list-group .list-group-item[aria-expanded=”true”]::after {
                content: “ \f0da”;
                font-family: FontAwesome;
                display: inline;
                text-align: right;
                padding-left: 5px;
            }

            /* level 1*/
            #sidebar .list-group .collapse .list-group-item {
                padding-left: 20px;
            }

            /* level 2*/
            #sidebar .list-group .collapse>.collapse .list-group-item {
                padding-left: 30px;
            }

            /* level 3*/
            #sidebar .list-group .collapse>.collapse>.collapse .list-group-item {
                padding-left: 40px;
            }



            #sidebar {
                height: 100vh;
                background-color: #333;
            }

            #sidebar .list-group-item {
                border-radius: 0;
                background-color: #333;
                color: #ccc;
                border-left: 0;
                border-right: 0;
                border-color: #2c2c2c;
                white-space: nowrap;
                text-decoration: none;
            }
        </style>