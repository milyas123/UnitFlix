using Microsoft.EntityFrameworkCore;

using Unitflix.Server.AutoMapper;
using Unitflix.Server.Database;
using Unitflix.Server.Seeder;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
string? connectionString = builder.Configuration.GetSection("ConnectionStrings")["Default"];

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    if(connectionString != null)
    {
        options.UseSqlServer(connectionString);
    }
});

//Adding auto mapper
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Calling the Seeders
List<Seeder> seeders = new List<Seeder>()
{
    new LocationSeeder(),
    new DeveloperSeeder(),
    new PropertyTypeSeeder()
};

seeders.ForEach(seeder =>
{
    seeder.Seed(app.Services);
});

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();
