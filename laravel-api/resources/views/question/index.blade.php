<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Questions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body class="bg-light">
    <main class="container">
        <!-- START FORM -->
        <div class="my-3 p-3 bg-body rounded shadow-sm">
            <form action='question' method='post' enctype="multipart/form-data">
              @csrf
                <div class="mb-3 row">
                    <label for="judul" class="col-sm-2 col-form-label">Questions</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='quetion' id="quetion">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="nama" class="col-sm-2 col-form-label">True answer</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='trueans' id="trueans">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="nama" class="col-sm-2 col-form-label">False answer 1</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='falseans_1' id="falseans_1">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="nama" class="col-sm-2 col-form-label">False answer 2</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='falseans_2' id="falseans_2">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="nama" class="col-sm-2 col-form-label">False answer 3</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='falseans_3' id="falseans_3">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="tanggal_publikasi" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <input type="file" class="form-control w-50" name='image' id="image" accept="image/*">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10"><button type="submit" class="btn btn-primary" name="submit">SIMPAN</button>
                    </div>
                </div>
            </form>
        </div>
        <!-- AKHIR FORM -->

        <!-- START DATA -->
        <div class="my-3 p-2 bg-body rounded shadow-sm">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="col-xs">No</th>
                        <th class="col-md ">Image</th>
                        <th class="col-md">Question</th>
                        <th class="col-md">True answer</th>
                        <th class="col-md">False answer 1</th>
                        <th class="col-md">False answer 2</th>
                        <th class="col-md">False answer 3</th>
                        <th class="col-md">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                  @foreach ($data as $item)
                  <tr>
                    <td>{{ $loop->iteration }}</td>
                    <td><img src="{{ $item['image'] }}" width="100" height="100" alt=""></td>
                    <td>{{ $item['quetion'] }}</td>
                    <td>{{ $item['trueans'] }}</td>
                    <td>{{ $item['falseans_1'] }}</td>
                    <td>{{ $item['falseans_2'] }}</td>
                    <td>{{ $item['falseans_3'] }}</td>
                    <td>
                      <form action="{{ url('question/'.$item['id']) }}" method="POST" onsubmit="return confirm('Are you sure?')" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" name="submit" class="btn btn-danger btn-sm">Del</button>
                      </form>
                    </td>
                </tr>
                  @endforeach
                </tbody>
            </table>

        </div>
        <!-- AKHIR DATA -->
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
    </script>

</body>

</html>