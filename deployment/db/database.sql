USE Unitflix;
GO

CREATE TABLE Locations (
	id INT PRIMARY KEY Identity(1, 1),
	name NVARCHAR(256) NOT NULL,
)
GO

CREATE TABLE PropertyTypes (
    id INT PRIMARY KEY IDENTITY(1, 1),
    name NVARCHAR(256) NOT NULL
);
GO

CREATE TABLE Developers (
    id INT PRIMARY KEY IDENTITY(1, 1),
    name NVARCHAR(256) NOT NULL
);
GO

CREATE TABLE Properties (
    id INT PRIMARY KEY IDENTITY(1, 1),
    purpose INT,
    title NVARCHAR(128),
    location INT,
    category INT,
    beds INT,
    baths INT,
    area DECIMAL,
    price DECIMAL,
    propertyType INT,
    approvalStatus INT,
    developer INT,
    downPayment DECIMAL,
    paymentPlan NVARCHAR(32),
    handOver NVARCHAR(128),
    featured BIT,
    submission INT,
    dateAdded DATE,
	isVerified BIT,
	tags NVARCHAR(256),
	status NVARCHAR(256),
	isDeleted BIT,
    FOREIGN KEY (location) REFERENCES Locations(id),
    FOREIGN KEY (propertyType) REFERENCES PropertyTypes(id),
    FOREIGN KEY (developer) REFERENCES Developers(id)
);
GO

CREATE TABLE Features (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    name NVARCHAR(128),
    icon NVARCHAR(128),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE PaymentPlanItems (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    amount DECIMAL,
    title NVARCHAR(128),
    description NVARCHAR(256),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE KeyHighlights (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    title NVARCHAR(128),
    description NVARCHAR(MAX),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE Overviews (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    text NVARCHAR(max),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE Files (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    filename NVARCHAR(128),
    url NVARCHAR(128),
    type NVARCHAR(64),
    purpose INT,
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE PropertyDetails (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    propertyType NVARCHAR(256),
    unitType NVARCHAR(256),
    size NVARCHAR(256),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

CREATE TABLE UserDetails (
    id INT PRIMARY KEY IDENTITY(1, 1),
    propertyId INT,
    name NVARCHAR(256),
    email NVARCHAR(256),
    phoneNumber NVARCHAR(256),
    FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE
);
GO

-- Create the AspNetUsers table
CREATE TABLE AspNetUsers (
    Id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    UserName NVARCHAR(256) NULL,
    NormalizedUserName NVARCHAR(256) NULL,
    Email NVARCHAR(256) NULL,
    NormalizedEmail NVARCHAR(256) NULL,
    EmailConfirmed BIT NOT NULL,
    PasswordHash NVARCHAR(MAX) NULL,
    SecurityStamp NVARCHAR(MAX) NULL,
    ConcurrencyStamp NVARCHAR(MAX) NULL,
    PhoneNumber NVARCHAR(MAX) NULL,
    PhoneNumberConfirmed BIT NOT NULL,
    TwoFactorEnabled BIT NOT NULL,
    LockoutEnd DATETIMEOFFSET NULL,
    LockoutEnabled BIT NOT NULL,
    AccessFailedCount INT NOT NULL
);
GO

-- Create the AspNetRoles table
CREATE TABLE AspNetRoles (
    Id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
    Name NVARCHAR(256) NULL,
    NormalizedName NVARCHAR(256) NULL,
    ConcurrencyStamp NVARCHAR(MAX) NULL
);
GO

-- Create the AspNetUserRoles table
CREATE TABLE AspNetUserRoles (
    UserId INT NOT NULL,
    RoleId INT NOT NULL,
    PRIMARY KEY (UserId, RoleId),
    FOREIGN KEY (UserId) REFERENCES AspNetUsers (Id) ON DELETE CASCADE,
    FOREIGN KEY (RoleId) REFERENCES AspNetRoles (Id) ON DELETE CASCADE
);
GO

-- Create the AspNetUserClaims table
CREATE TABLE AspNetUserClaims (
    Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    ClaimType NVARCHAR(MAX) NULL,
    ClaimValue NVARCHAR(MAX) NULL,
    FOREIGN KEY (UserId) REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);
GO

-- Create the AspNetUserLogins table
CREATE TABLE AspNetUserLogins (
    LoginProvider NVARCHAR(450) NOT NULL,
    ProviderKey NVARCHAR(450) NOT NULL,
    ProviderDisplayName NVARCHAR(MAX) NULL,
    UserId INT NOT NULL,
    PRIMARY KEY (LoginProvider, ProviderKey),
    FOREIGN KEY (UserId) REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);
GO

-- Create the AspNetRoleClaims table
CREATE TABLE AspNetRoleClaims (
    Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    RoleId INT NOT NULL,
    ClaimType NVARCHAR(MAX) NULL,
    ClaimValue NVARCHAR(MAX) NULL,
    FOREIGN KEY (RoleId) REFERENCES AspNetRoles (Id) ON DELETE CASCADE
);
GO

-- Create the AspNetUserTokens table
CREATE TABLE AspNetUserTokens (
    UserId INT NOT NULL,
    LoginProvider NVARCHAR(450) NOT NULL,
    Name NVARCHAR(450) NOT NULL,
    Value NVARCHAR(MAX) NULL,
    PRIMARY KEY (UserId, LoginProvider, Name),
    FOREIGN KEY (UserId) REFERENCES AspNetUsers (Id) ON DELETE CASCADE
);
GO

CREATE TABLE Otps (
	id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
	propertyId INT NOT NULL,
	email NVARCHAR(400) NOT NULL,
	code NVARCHAR(100) NOT NULL UNIQUE,
	expiresAt DATETIME NOT NULL,
	FOREIGN KEY (propertyId) REFERENCES Properties(id) ON DELETE CASCADE,
);
GO

CREATE TABLE EmailConfigurations (
	id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
	email NVARCHAR(400) NOT NULL,
	password NVARCHAR(400) NOT NULL,
	host NVARCHAR(100) NOT NULL,
	port INT NOT NULL,
);
GO

CREATE TABLE PropertyStatuses (
	id INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
	name NVARCHAR(512) NOT NULL UNIQUE,
	category NVARCHAR(256) NOT NULL,
	color NVARCHAR(MAX) NOT NULL,
);
GO
