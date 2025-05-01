IF DB_ID('Unitflix') IS NULL
    BEGIN
        CREATE DATABASE Unitflix;
    END;
GO

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE name = '$(DB_USER)')
    BEGIN
        CREATE LOGIN $(DB_USER) WITH PASSWORD = '$(DB_USER_PASSWORD)';
    END;
GO

USE Unitflix;
GO

IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = '$(DB_USER)')
    BEGIN
        CREATE USER $(DB_USER) FOR LOGIN $(DB_USER);
        EXEC sp_addrolemember 'db_owner', '$(DB_USER)';
    END;
GO