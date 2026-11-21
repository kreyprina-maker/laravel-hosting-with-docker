# English Grammar Hub

This repository contains a static HTML, CSS, and JavaScript website. Docker
serves it with Nginx; it does not require PHP or a database.

## Run with Docker

Install Docker Desktop, then from this folder run:

```sh
docker compose up --build -d
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

To stop the site:

```sh
docker compose down
```

After changing the website files, run `docker compose up --build -d` again to
rebuild and restart the container.
