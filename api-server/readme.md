## Note

this project runs clickhouse instance on its own ec2 instance.
make sure to use different clickhouse server if migrating or setup your own using

```bash

docker run -d -p 18123:8123 -e CLICKHOUSE_PASSWORD=<CHANGE_ME> --name clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server
```

and install certificates using certbot.