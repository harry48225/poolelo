docker pull postgres
docker start --name poolelo-db -e POSTGRES_PASSWORD=bear -d -p 5432:5432 postgres