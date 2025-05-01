# Use the official ASP.NET Core runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY "Unitflix.Server/Unitflix.Server/Unitflix.Server.csproj" "./"
RUN dotnet restore
COPY Unitflix.Server/Unitflix.Server/ .
RUN dotnet build -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

# Final stage/image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:80
COPY Unitflix.Server/Unitflix.Server/appsettings.Production.json ./appsettings.json
RUN mkdir /app/public
ENTRYPOINT ["dotnet", "Unitflix.Server.dll"]