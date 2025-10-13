# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available NPM Scripts
In the project directory, you can run:

### `npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Use Container Engline
### With Container Engine
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

> [!NOTE]
> If you use Docker instead of Podman, just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this command:
```bash
podman-compose build
```

#### Create node_modules locally
```bash
docker compose run --rm app npm i
```

#### Run the Container
To run a container, navigate to the root of the project and run this command:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation. Your files will be auto-compiled to plain JavaScript as you change them.

#### Enter the Container
To enter inside of the container, run this command:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

> [!WARNING]
> You don't need to run `npm run start` because it's already running after you created a container.

#### Delete the Container
After you are done working on a project, you can cleanup by stopping and removing all the running containers for this project.
```bash
podman-compose down
```
