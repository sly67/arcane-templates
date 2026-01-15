# Ente Photos

A fully open-source, end-to-end encrypted alternative to Google Photos. Ente provides secure photo and video storage with automatic backups, organized albums, and seamless synchronization across all your devices.

![Ente Photos](https://ente.io/images/ente-logo.svg)

## Docker Images
- `ghcr.io/ente-io/server:latest` - Museum server (API backend)
- `postgres:15` - PostgreSQL database
- `minio/minio:latest` - S3-compatible object storage
- `alpine/socat:latest` - Network proxy for internal communication

## Categories
- Photos
- Storage
- Backup
- Self-hosted
- Privacy
- Encryption

## Ports
- `8080:8080` - Museum API server
- `2112:2112` - Prometheus metrics (optional)
- `3200:3200` - MinIO S3 API
- `3201:3201` - MinIO web console

## Environment Variables

### Museum Server
- `MUSEUM_PORT` - Museum API port (default: `8080`)
- `PROMETHEUS_PORT` - Prometheus metrics port (default: `2112`)

### PostgreSQL Database
- `POSTGRES_USER` - Database user (default: `pguser`)
- `POSTGRES_PASSWORD` - Database password (required)
- `POSTGRES_DB` - Database name (default: `ente_db`)

### MinIO Storage
- `MINIO_ROOT_USER` - MinIO admin username (default: `ente`)
- `MINIO_ROOT_PASSWORD` - MinIO admin password (required, min 20 chars)
- `MINIO_API_PORT` - MinIO API port (default: `3200`)
- `MINIO_CONSOLE_PORT` - MinIO console port (default: `3201`)

### Paths
- `CONFIG_PATH` - Configuration files directory (default: `/opt/ente/config`)
- `DATA_PATH` - Data storage directory (default: `/opt/ente/data`)
- `LOG_PATH` - Log files directory (default: `/opt/ente/logs`)

### Optional
- `TZ` - Timezone (default: `UTC`)

## Volumes
- `${CONFIG_PATH}/museum.yaml` → `/museum.yaml` - Museum server configuration
- `${CONFIG_PATH}/credentials.yaml` → `/credentials.yaml` - Database and S3 credentials
- `${DATA_PATH}` → `/data` - Application data
- `${LOG_PATH}` → `/logs` - Application logs
- `postgres-data` → `/var/lib/postgresql/data` - PostgreSQL data
- `minio-data` → `/data` - MinIO object storage

## Post-Installation Steps

1. **Create required configuration files:**

   Create `museum.yaml` in your config directory (see [official documentation](https://ente.io/help/self-hosting/) for configuration options).

   Create `credentials.yaml` with database and S3 credentials:
   ```yaml
   db:
     host: postgres
     port: 5432
     name: ente_db
     user: pguser
     password: your_postgres_password
   s3:
     are_local_buckets: true
     b2-eu-cen:
       key: your_minio_user
       secret: your_minio_password
       endpoint: localhost:3200
       region: eu-central-2
       bucket: b2-eu-cen
   ```

2. **Create MinIO buckets:**

   Access MinIO console at `http://localhost:3201` and create required S3 buckets.

3. **Access the web interface:**

   Navigate to `http://localhost:8080` to access the Ente Photos web interface.

4. **Configure mobile apps:**

   In the mobile app, tap the onboarding screen 7 times to access custom server settings and enter your server endpoint.

## Security Notes

- Change all default passwords before deployment
- Use strong passwords (especially for `MINIO_ROOT_PASSWORD` - minimum 20 characters)
- Consider using reverse proxy with SSL/TLS for production deployments
- Keep your encryption keys secure and backed up
- Regular database backups are recommended

## Links

- Official Website: https://ente.io
- Documentation: https://ente.io/help/self-hosting/
- GitHub Repository: https://github.com/ente-io/ente
- Community: https://discord.gg/z2YVKkycX3

## Maintainer
https://github.com/ente-io/ente
