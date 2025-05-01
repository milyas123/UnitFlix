IF DB_ID('Unitflix') IS NULL
    BEGIN
        CREATE DATABASE Unitflix;
    END;
GO

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE name = 'unitflix_backend')
    BEGIN
        CREATE LOGIN unitflix_backend WITH PASSWORD = 'UnitflixBackend123';
    END;
GO

USE Unitflix;
GO

IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = 'unitflix_backend')
    BEGIN
        CREATE USER unitflix_backend FOR LOGIN unitflix_backend;
        EXEC sp_addrolemember 'db_owner', 'unitflix_backend';
    END;
GO