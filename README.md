# File Upload Fetch Express Server Template

<img src='./logo_rds.png' width='250px'>

Server template for file uploading. This is supposed to be a microservice that handle file uploads.

Under the hood it uses ```express``` as the API stack and ```express-fileupload``` to handle uploading files. In the official example express-fileupload uses vanilla form with post request handler. This repo uses fetch API as an example.

all uploaded file are stored in the ```./upload``` dir.

## Installation and Development

git clone this repo

```bash
git clone $this_repo .
```

development preview:

```bash
npm run install # install the packages
npm run dev # running nodemon dev server
```

on a separate terminal, create an HTTP server in root; you can use live server or Python;

```
python -m http.server
```