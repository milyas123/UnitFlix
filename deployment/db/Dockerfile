FROM mcr.microsoft.com/mssql/server:2022-latest

USER root

RUN apt-get update
RUN apt-get install -y curl gnupg2 apt-transport-https
RUN curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/debian/12/prod bookworm main" > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get remove -y libodbc2
RUN apt-get update
RUN ACCEPT_EULA=Y DEBIAN_FRONTEND=noninteractive apt-get install -y --allow-downgrades --allow-remove-essential --allow-change-held-packages mssql-tools unixodbc-dev
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

ENV PATH="$PATH:/opt/mssql-tools/bin"

RUN mkdir -p /usr/src/app

COPY deployment/db/db-init.sql /usr/src/app/db-init.sql
COPY deployment/db/database.sql /usr/src/app/database.sql
COPY deployment/db/db-init.sh /usr/src/app/db-init.sh
RUN chmod +x /usr/src/app/db-init.sh

USER mssql

ENTRYPOINT [ "/usr/src/app/db-init.sh" ]