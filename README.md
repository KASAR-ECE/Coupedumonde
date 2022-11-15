# Coupedumonde

## Server

1. Create .env in server/ folder with the help of .env.example

2. ```JWT_SECRET``` must be a long random string

3. Generate ```server/secret``` by executing :

```bash
sh newsalt.sh
```

## Docker

Run :

```bash
docker build -t worldcupimage .
docker run  \
-p 80:80 \
-e MYSQL_HOST= \
-e MYSQL_USER= \
-e MYSQL_PASSWORD= \
-e MYSQL_DATABASE= \
-e JWT_SECRET= \
-v $HOME/appdata/coupedumonde:/config \
--name worldcup \
worldcupimage
```
