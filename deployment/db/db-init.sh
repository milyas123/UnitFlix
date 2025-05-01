#!/bin/bash

/opt/mssql/bin/sqlservr &

echo "⏳ Waiting for SQL Server to be ready..."
sleep 15

until sqlcmd -S localhost -U SA -P "$SA_PASSWORD" -Q "SELECT 1" &>/dev/null; do
    echo "⏳ Waiting for SQL Server to be ready..."
    sleep 2
done

echo "⚙️ Running init.sql..."
sqlcmd -S localhost -U SA -P "$SA_PASSWORD" -i /usr/src/app/db-init.sql

echo "Creating database and tables"
sqlcmd -S localhost -U SA -P "$SA_PASSWORD" -i /usr/src/app/database.sql

echo "📜 Initialization complete. Keeping container running..."
tail -f /dev/null